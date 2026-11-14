import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { approach, approachStepMeta, pageSeo } from "@/lib/constants";

const seo = pageSeo.process;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/process" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/process",
    type: "website",
  },
};

export default function ProcessPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "How we work", path: "/process" },
        ]}
      />
      <PageIntro
        label="How we work"
        title="Six clear stages from discovery to improvement."
        description="See how ClonaLabs scopes, builds, validates and hands over software and AI projects for Canadian teams."
        secondaryCta={{ label: "See engagements", href: "/engagements" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <ol className="border-t border-border">
            {approach.map((stage, i) => {
              const meta = approachStepMeta[i];
              return (
                <li
                  key={stage.step}
                  className="ruled grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-small text-accent">{stage.step}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="text-h2 text-ink mb-2">{stage.title}</h2>
                    <p className="text-small text-text-muted">{meta.tagline}</p>
                    <p className="mt-3 font-mono text-small text-text-muted uppercase tracking-wider">
                      {meta.owner}
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-body text-text-muted">{stage.description}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="label text-text-muted mb-3">You leave with</p>
                    <ul className="space-y-2">
                      {meta.deliverables.map((d) => (
                        <li key={d} className="text-small text-ink flex gap-2">
                          <span className="text-accent" aria-hidden>
                            ·
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
