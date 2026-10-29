"use client";

import { useState } from "react";
import { Send, Handshake, HelpCircle, CalendarCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "./ui/Button";
import { siteConfig, pricingPlans } from "@/lib/constants";

// Intent ids map onto the subject prefixes used by /api/contact
// ("partnership" → [Partner], "support" → [Support], anything else → [Inquiry]).
const intentOptions = [
  { id: "book-call", label: "Book a walkthrough", desc: "I want to see Clonvo and the white-label portal", icon: CalendarCheck },
  { id: "partnership", label: "Resell as an agency", desc: "I want to offer Clonvo under my brand", icon: Handshake },
  { id: "support", label: "Ask a question", desc: "I have a question about the product or plans", icon: HelpCircle },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [intent, setIntent] = useState("book-call");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const fd = new FormData(e.currentTarget);

    if ((fd.get("website") || "").toString().trim()) {
      setStatus("success");
      return;
    }

    const consent = fd.get("consent");
    if (!consent) {
      setStatus("error");
      setErrorMsg("Please confirm you agree to the privacy policy.");
      return;
    }

    const payload = {
      intent,
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      company: (fd.get("company") || "").toString().trim(),
      role: (fd.get("role") || "").toString().trim(),
      companySize: (fd.get("companySize") || "").toString(),
      industry: (fd.get("industry") || "").toString(),
      service: (fd.get("service") || "").toString(),
      timeline: (fd.get("timeline") || "").toString(),
      message: (fd.get("message") || "").toString().trim(),
      consent: true,
      website: (fd.get("website") || "").toString(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("Please complete your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || !data.ok) {
        throw new Error(data.error || "Could not send your message.");
      }
      setStatus("success");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-5 animate-in zoom-in duration-500">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-dark mb-3">Message received.</h3>
        <p className="text-text-dark-muted max-w-md mx-auto mb-6">
          We will reply within one business day. If you would rather not wait,{" "}
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
            book a 15-minute walkthrough
          </a>{" "}
          now.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-accent font-semibold hover:underline cursor-pointer"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-7" onSubmit={handleSubmit} noValidate>
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website-hp">Website</label>
        <input
          type="text" id="website-hp" name="website" tabIndex={-1} autoComplete="off"
        />
      </div>

      {/* Intent routing */}
      <div>
        <label className="block text-[11px] uppercase tracking-widest font-semibold text-text-dark-muted mb-3">
          What brings you here?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {intentOptions.map((opt) => {
            const Icon = opt.icon;
            const active = intent === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setIntent(opt.id)}
                className={`text-left p-3.5 rounded-md border transition-all duration-200 cursor-pointer ${ active ? "border-accent bg-accent/5" : "border-card-light-border bg-white hover:border-accent/40" }`}
              >
                <Icon size={16} className={`mb-2 ${active ? "text-accent" : "text-text-dark-muted"}`} />
                <p className={`text-sm font-semibold ${active ? "text-accent" : "text-text-dark"}`}>
                  {opt.label}
                </p>
                <p className="text-[11px] text-text-dark-muted mt-0.5 leading-snug">{opt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="name" name="name" required autoComplete="name"
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            type="email" id="email" name="email" required autoComplete="email"
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-dark mb-2">
            Agency / Company <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="company" name="company" required autoComplete="organization"
            placeholder="Your agency name"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-dark mb-2">
            Your Role
          </label>
          <input
            type="text" id="role" name="role" autoComplete="organization-title"
            placeholder="Founder, Account Director…"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-text-dark mb-2">
            Active clients
          </label>
          <select
            id="companySize" name="companySize" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>How many clients?</option>
            <option>Just getting started</option>
            <option>1 – 5 clients</option>
            <option>6 – 20 clients</option>
            <option>21 – 50 clients</option>
            <option>50+ clients</option>
          </select>
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-text-dark mb-2">
            Main client verticals
          </label>
          <select
            id="industry" name="industry" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>Select a vertical</option>
            <option>HVAC / Home services</option>
            <option>Clinics / Healthcare</option>
            <option>Ecommerce / D2C</option>
            <option>Real estate</option>
            <option>Immigration / Professional services</option>
            <option>Mixed / Many verticals</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">
            Plan of interest
          </label>
          <select
            id="service" name="service" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>Select a plan</option>
            {pricingPlans.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} — ${p.price}/mo
              </option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-text-dark mb-2">
            Timeline
          </label>
          <select
            id="timeline" name="timeline" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>When to start?</option>
            <option>Immediately</option>
            <option>Within 1 month</option>
            <option>Within a quarter</option>
            <option>Exploring / No rush</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
          Your message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5} maxLength={5000}
          placeholder="Tell us about your agency, the clients you would offer Clonvo to, and any questions you have."
          className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm text-text-dark-muted">
        <input
          type="checkbox" name="consent" required
          className="mt-1 h-4 w-4 rounded border-card-light-border text-accent focus:ring-accent cursor-pointer"
        />
        <span>
          I agree to Clonalabs&apos;{" "}
          <a href="/privacy" className="text-accent hover:underline">privacy policy</a>{" "}
          and consent to my data being processed for this enquiry.
        </span>
      </label>

      {status === "error" && errorMsg && (
        <div className="flex items-start gap-3 p-4 rounded-md bg-red-50 border border-red-200 text-red-700" role="alert">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-text-dark-muted">
          We reply within one business day.
        </p>
        <Button type="submit" size="lg" className="gap-2 shrink-0" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              {intent === "book-call" ? "Request a walkthrough" : intent === "partnership" ? "Send agency enquiry" : "Send message"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
