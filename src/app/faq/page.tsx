import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { GlobalFAQSchema } from "@/components/StructuredData";
import { faq, pageSeo } from "@/lib/constants";

const seo = pageSeo.faq;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <PageShell>
      <GlobalFAQSchema />
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <PageIntro
        label="FAQ"
        title="Frequently asked questions."
        description="Engagements, pricing, data handling, ownership, products and working with a Canadian technology partner."
      />

      <section className="bg-surface" aria-labelledby="faq-list-heading">
        <div className="container-site section">
          <h2 id="faq-list-heading" className="sr-only">
            Questions and answers
          </h2>
          <div className="border-t border-border max-w-3xl">
            {faq.map((item) => (
              <details
                key={item.question}
                className="ruled group py-5"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-h3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  <span>{item.question}</span>
                  <span
                    className="font-mono text-accent text-small shrink-0 mt-1 group-open:rotate-45 transition-transform"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-text-muted prose-measure">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
