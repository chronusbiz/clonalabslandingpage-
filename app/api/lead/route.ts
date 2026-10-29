import { NextResponse } from "next/server";
import { getServerEnv } from "@/lib/env";
import { rateLimit } from "@/lib/rate-limit";
import { TRACKING_KEYS } from "@/lib/utm";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max = 300) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (str(body.company_url)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 160).toLowerCase();
  const website = str(body.website, 200);
  const clientType = str(body.clientType, 160);

  if (!name || !email || !website) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  let websiteUrl = website;
  if (!/^https?:\/\//i.test(websiteUrl)) websiteUrl = `https://${websiteUrl}`;
  try {
    new URL(websiteUrl);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_website" }, { status: 400 });
  }

  const tracking: Record<string, string> = {};
  const rawTracking = (body.tracking ?? {}) as Record<string, unknown>;
  for (const key of TRACKING_KEYS) {
    const v = str(rawTracking[key], 200);
    if (v) tracking[key] = v;
  }

  const payload = {
    name,
    email,
    website: websiteUrl,
    clientType: clientType || null,
    tracking,
    submittedAt: new Date().toISOString(),
    source: "clonalabs.ca",
  };

  const { leadWebhookUrl, cmsUrl, cmsSite } = getServerEnv();

  // Primary: Studio CMS inbox (+ email notifications configured per site).
  try {
    const cmsRes = await fetch(`${cmsUrl}/api/v1/sites/${cmsSite}/submit-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_name: "lead",
        payload,
      }),
    });
    if (!cmsRes.ok) {
      const text = await cmsRes.text().catch(() => "");
      console.error("[lead] cms submit failed", cmsRes.status, text);
      return NextResponse.json({ ok: false, error: "cms_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] cms submit error", err);
    return NextResponse.json({ ok: false, error: "cms_unreachable" }, { status: 502 });
  }

  // Optional extra webhook (Zapier / Make / Slack, etc.).
  if (leadWebhookUrl) {
    try {
      await fetch(leadWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[lead] secondary webhook failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
