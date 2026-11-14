import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { pageSeo, useCases } from "@/lib/constants";

const seo = pageSeo.industries;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/industries",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Industries", path: "/industries" },
        ]}
      />
      <PageIntro
        label="Industries"
        title="Technology for how Canadian teams actually work."
        description="We build AI and software for professional services, healthcare, retail, real estate, field services, agencies and technology companies."
        secondaryCta={{ label: "See engagements", href: "/engagements" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <ul className="border-t border-border">
            {useCases.map((u, i) => (
              <li
                key={u.slug}
                id={u.slug}
                className="ruled scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8"
              >
                <span className="md:col-span-1 font-mono text-small text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-4">
                  <h2 className="text-h3 text-ink">{u.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-body text-text-muted mb-3">{u.description}</p>
                  <p className="text-small text-text-muted">
                    {u.tags.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
