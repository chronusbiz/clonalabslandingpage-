import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { pageSeo, trustCenter } from "@/lib/constants";

const seo = pageSeo.trust;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/trust" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/trust",
    type: "website",
  },
};

export default function TrustPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Trust Center", path: "/trust" },
        ]}
      />
      <PageIntro
        label="Trust Center"
        title="How we earn trust, in plain language."
        description="We publish how we work and what is real. Anything we cannot back up stays off this site."
        primaryCta={{ label: "Ask a question about our practices", href: "/contact" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <ol className="border-t border-border max-w-3xl">
            {trustCenter.map((item, i) => (
              <li key={item.title} className="ruled py-8">
                <span className="font-mono text-small text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-h3 text-ink mt-2 mb-2">{item.title}</h2>
                <p className="text-body text-text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10">
            <Link href="/faq" className="link-text">
              Read the FAQ
            </Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
