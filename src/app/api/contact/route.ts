import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  intent?: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  course?: string;
  company?: string;
  role?: string;
  companySize?: string;
  industry?: string;
  service?: string;
  timeline?: string;
  budget?: string;
  message?: string;
  // Career-application specific
  experience?: string;
  portfolio?: string;
  linkedin?: string;
  cvUrl?: string;
  cvFileName?: string;
  // Compliance + spam
  consent?: boolean | string;
  website?: string;
};

const isProd = process.env.NODE_ENV === "production";

// Default destination for all contact submissions. Can be overridden with
// CONTACT_TO_EMAIL env var without touching code.
const DEFAULT_TO_EMAIL = "support@clonvo.chat";

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function asText(data: ContactPayload) {
  return Object.entries(data)
    .filter(([k, v]) => k !== "website" && v !== undefined && v !== "" && v !== false)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

function asHtml(data: ContactPayload) {
  const rows = Object.entries(data)
    .filter(([k, v]) => k !== "website" && v !== undefined && v !== "" && v !== false)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;color:#111;text-transform:capitalize;vertical-align:top;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#333;white-space:pre-wrap;">${String(
          v
        )
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</td></tr>`
    )
    .join("");
  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f6f7f9;padding:24px;">
    <table style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:16px 20px;background:#0a0a0a;color:#fff;font-size:14px;letter-spacing:.08em;text-transform:uppercase;">Clonalabs · New ${data.intent || "inquiry"}</td></tr>
      <tr><td style="padding:16px 20px;font-size:13px;color:#6b7280;">Reply directly to this email to respond to the sender.</td></tr>
      <tr><td><table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table></td></tr>
    </table>
  </body></html>`;
}

async function sendViaResend(opts: {
  apiKey: string;
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Clonalabs Website <${opts.from}>`,
      to: [opts.to],
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    }),
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`resend ${resp.status}: ${body}`);
  }
}

async function sendViaGmailSmtp(opts: {
  user: string;
  pass: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: opts.user, pass: opts.pass },
  });
  await transporter.sendMail({
    from: `Clonalabs Website <${opts.user}>`,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    // Honeypot — bots fill hidden fields. Respond 200 so they don't learn
    // the field name, but skip all processing.
    if (typeof data.website === "string" && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!data.name || !data.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Training applications can omit free-form message; other intents still require it.
    const isTrainingApplication = data.intent === "training-application";
    if (!isTrainingApplication && !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!validEmail(data.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if ((data.message || "").length > 5000) {
      return NextResponse.json({ ok: false, error: "Message too long" }, { status: 400 });
    }

    // Explicit consent must be present and truthy.
    const consentTruthy =
      data.consent === true || data.consent === "true" || data.consent === "on";
    if (!consentTruthy) {
      return NextResponse.json(
        { ok: false, error: "Consent is required" },
        { status: 400 }
      );
    }

    const cmsUrl = (
      process.env.CMS_URL ||
      process.env.NEXT_PUBLIC_CMS_URL ||
      "https://cms.fousventures.com"
    ).replace(/\/$/, "");
    const cmsSite =
      process.env.CMS_SITE || process.env.NEXT_PUBLIC_CMS_SITE || "clonalabs";

    // Primary: Studio CMS submissions inbox (+ notify emails configured there).
    try {
      const cmsRes = await fetch(`${cmsUrl}/api/v1/sites/${cmsSite}/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: data.intent || "contact",
          payload: {
            ...data,
            source: "clonalabs.ca",
            submittedAt: new Date().toISOString(),
          },
        }),
      });
      if (!cmsRes.ok) {
        const body = await cmsRes.text().catch(() => "");
        if (!isProd) console.error("[contact] cms failed", cmsRes.status, body);
        return NextResponse.json(
          { ok: false, error: "Could not save your message" },
          { status: 502 }
        );
      }
    } catch (cmsErr) {
      if (!isProd) console.error("[contact] cms error", cmsErr);
      return NextResponse.json(
        { ok: false, error: "Could not reach form service" },
        { status: 502 }
      );
    }

    // Optional direct email (Resend / Gmail) in addition to CMS notifications.
    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const subject = (() => {
      const who = data.name || data.email || "Anonymous";
      switch (data.intent) {
        case "career-application":
          return `[Career] ${data.role || "General application"} — ${who}`;
        case "training-application":
          return `[Trainings] ${data.course || "Application"} — ${who}`;
        case "quote":
          return `[Quote] ${data.service || "Project"} — ${data.company || who}`;
        case "new-project":
          return `[Lead] ${data.service || "New project"} — ${data.company || who}`;
        case "partnership":
          return `[Partner] ${data.company || who}`;
        case "support":
          return `[Support] ${who}`;
        default:
          return `[Inquiry] ${data.company || who}`;
      }
    })();
    const text = asText(data);
    const html = asHtml(data);
    const replyTo = data.email!;

    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@clonvo.chat";
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    try {
      if (resendKey) {
        await sendViaResend({
          apiKey: resendKey,
          to: toEmail,
          from: fromEmail,
          subject,
          text,
          html,
          replyTo,
        });
      } else if (gmailUser && gmailPass) {
        await sendViaGmailSmtp({
          user: gmailUser,
          pass: gmailPass,
          to: toEmail,
          subject,
          text,
          html,
          replyTo,
        });
      } else if (!isProd) {
        console.log(`[contact] no email transport; CMS saved. Would also email ${toEmail}\n${text}`);
      }
    } catch (sendErr) {
      if (!isProd) console.error("[contact] send error:", sendErr);
      // CMS already stored the lead — do not fail the user request.
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (!isProd) console.error("[contact] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
