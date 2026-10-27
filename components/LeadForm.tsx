"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import type { TrackingParams } from "@/lib/utm";
import { track } from "@/lib/analytics-client";
import { CtaButton } from "./CtaButton";
import { Section, SectionTitle } from "./Section";
import { Icons, Lucide } from "./icons";

export function LeadForm({
  tracking,
  bookingUrl,
}: {
  tracking: TrackingParams;
  bookingUrl: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          website: data.get("website"),
          clientType: data.get("clientType"),
          company_url: data.get("company_url"),
          tracking,
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "failed");
      track("form_submit", { ok: true });
      setStatus("success");
      form.reset();
    } catch {
      track("form_submit", { ok: false });
      setStatus("error");
      setMessage(site.form.error);
    }
  }

  return (
    <Section id="book" compact tone="cta">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
            Next step
          </p>
          <SectionTitle className="!text-cta-ink">{site.form.h2}</SectionTitle>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-cta-muted sm:text-[1.05rem]">
            {site.form.intro}
          </p>
          <CtaButton href={bookingUrl} location="final-band" className="mt-7" />
          <ul className="mt-8 space-y-3 text-sm text-cta-muted">
            {[
              { line: "15-minute call â€" no pitch deck marathon", icon: Icons.clock },
              { line: "Official Meta API setup guidance", icon: Icons.plug },
              { line: "No revenue share, ever", icon: Icons.dollar },
            ].map((item) => (
              <li key={item.line} className="flex items-center gap-2.5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[#7dd3fc]">
                  <Lucide icon={item.icon} className="h-3.5 w-3.5" />
                </span>
                {item.line}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-soft backdrop-blur"
          noValidate
        >
          <div className="hidden" aria-hidden>
            <label htmlFor="company_url">Company URL</label>
            <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
          </div>
          <Field id="name" label="Name" required autoComplete="name" />
          <Field id="email" label="Work email" type="email" required autoComplete="email" />
          <Field
            id="website"
            label="Agency website"
            type="url"
            required
            autoComplete="url"
            placeholder="https://"
          />
          <Field
            id="clientType"
            label={site.form.clientTypeLabel}
            placeholder={site.form.clientTypePlaceholder}
          />

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="btn-gradient inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-[0.95rem] font-semibold disabled:opacity-60"
          >
            {status === "submitting" ? "Sendingâ€¦" : site.form.submit}
          </button>

          <p className="text-sm text-cta-muted">
            {site.cta.formNote}{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>

          {status === "success" ? (
            <p role="status" className="text-sm text-[#7dd3fc]">
              {site.form.success}
            </p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="text-sm text-red-300">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-cta-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="input-meta !border-white/20 !bg-white/10 !text-white placeholder:!text-white/40"
      />
    </div>
  );
}
