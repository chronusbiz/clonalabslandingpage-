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
      <p className="mt-4 text-sm leading-relaxed text-muted">
        This site uses Google Analytics 4 to understand traffic and improve the product. GA may set
        first-party analytics cookies on clonalabs.ca. Booking links may also set cookies on the
        calendar provider domain.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        The lead form does not use pre-checked marketing consent checkboxes. You can block analytics
        cookies in your browser settings. For privacy questions: {site.legal.supportEmail}.
      </p>
    </main>
  );
}
