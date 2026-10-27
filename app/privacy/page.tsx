import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = { title: `Privacy | ${site.wordmark}` };

export default function PrivacyPage() {
  return (
    <main className="prose-legal mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-sm">
        <Link href="/" className="underline underline-offset-4">
          Back
        </Link>
      </p>
      <h1 className="mt-6 font-display text-4xl">Privacy policy</h1>
      <p className="mt-4 text-muted">
        TODO: Replace this placeholder with counsel-reviewed privacy terms before public launch.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        This site collects the name, work email, agency website and optional client-type notes you
        submit on the walkthrough form, plus standard server logs. We use that information only to
        reply about a walkthrough. Do not submit personal data of your clients here.
      </p>
      <p className="mt-4 text-sm text-muted">
        Contact: {site.legal.supportEmail}. Operator: {site.legal.entityName}, {site.legal.postalAddress}.
      </p>
    </main>
  );
}
