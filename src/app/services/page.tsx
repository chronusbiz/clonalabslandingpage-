import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { pageSeo, productPillars, servicePillarDetails } from "@/lib/constants";

const seo = pageSeo.services;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Capabilities", path: "/services" },
        ]}
      />
      <PageIntro
        label="Capabilities"
        title="Six capability areas for Canadian teams."
        description="From practical AI and custom software to evaluation, dedicated delivery and digital growth—scoped around a result, not a vague retainer."
        secondaryCta={{ label: "See engagements", href: "/engagements" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <div className="border-t border-border">
            {productPillars.map((pillar, i) => {
              const detail = servicePillarDetails[i];
              return (
                <article
                  key={pillar.slug}
                  className="ruled grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-small text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="text-h3 text-ink mb-2">{pillar.title}</h2>
                    <p className="text-body text-text-muted">{pillar.description}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <ul className="space-y-2">
                      {detail.points.map((point) => (
                        <li key={point} className="text-small text-ink flex gap-2">
                          <span className="text-accent" aria-hidden>
                            ·
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2 flex lg:justify-end lg:items-start">
                    <Link href={`/services/${pillar.slug}`} className="link-text">
                      Learn more
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
