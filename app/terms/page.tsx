import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = { title: `Terms | ${site.wordmark}` };

export default function TermsPage() {
  return (
    <main className="prose-legal mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-sm">
        <Link href="/" className="underline underline-offset-4">
          Back
        </Link>
      </p>
      <h1 className="mt-6 font-display text-4xl">Terms</h1>
      <p className="mt-4 text-muted">
        TODO: Replace this placeholder with counsel-reviewed terms before you take payment.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        The page describes a proposed white-label offering. Prices, allowances and cancellation
        terms marked TODO in the site content are not a contract. Agencies may sell the branded
        service to their own business clients only. No source code is transferred.
      </p>
      <p className="mt-4 text-sm text-muted">
        Contact: {site.legal.supportEmail}. Operator: {site.legal.entityName}.
      </p>
    </main>
  );
}
