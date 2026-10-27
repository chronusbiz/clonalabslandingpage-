import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = { title: `Cookie policy | ${site.wordmark}` };

export default function CookiesPage() {
  return (
    <main className="prose-legal mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-sm">
        <Link href="/" className="underline underline-offset-4">
          Back
        </Link>
      </p>
      <h1 className="mt-6 font-display text-4xl">Cookie policy</h1>
      <p className="mt-4 text-muted">
        TODO: Confirm cookie and analytics vendors with counsel. This site does not set marketing
        cookies by default.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        If an analytics ID is configured, a privacy-friendly script may load. No consent box is
        pre-checked on the lead form. Booking links may set cookies on the calendar provider's
        domain.
      </p>
      <p className="mt-4 text-sm text-muted">Contact: {site.legal.supportEmail}.</p>
    </main>
  );
}
