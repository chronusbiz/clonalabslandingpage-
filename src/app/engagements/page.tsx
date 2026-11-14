import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { engagements, pageSeo, siteConfig } from "@/lib/constants";

const seo = pageSeo.engagements;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/engagements" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/engagements",
    type: "website",
  },
};

export default function EngagementsPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Engagements", path: "/engagements" },
        ]}
      />
      <PageIntro
        label="Engagements"
        title="Focused engagements with a clear start and finish."
        description="Each engagement is scoped around a result and an owner. We agree the success criteria with you in writing before work starts, and we hand over everything your team needs to continue without us."
        secondaryCta={{ label: "How we work", href: "/process" }}
      />

      <section className="bg-surface">
        <div className="container-site section space-y-0">
          {engagements.map((e, i) => (
            <article
              key={e.slug}
              id={e.slug}
              className="ruled scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16"
            >
              <div className="lg:col-span-5">
                <span className="font-mono text-small text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-h2 text-ink mt-3 mb-3">{e.title}</h2>
                <p className="font-mono text-small text-text-muted uppercase tracking-wider mb-4">
                  {e.timeline}
                </p>
                <p className="text-body text-text-muted mb-4">{e.blurb}</p>
                <p className="text-small text-text-muted mb-6">
                  <span className="font-semibold text-ink">Best for: </span>
                  {e.bestFor}
                </p>
                <Link href={siteConfig.bookingUrl} className="btn btn-primary">
                  {e.cta}
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="border-t border-border pt-5">
                  <h3 className="label text-accent mb-2">The problem</h3>
                  <p className="text-body text-text-muted">{e.problem}</p>
                </div>
                <div className="border-t border-border pt-5">
                  <h3 className="label text-accent mb-3">What you get</h3>
                  <ul className="space-y-2">
                    {e.youGet.map((item) => (
                      <li key={item} className="text-body text-ink flex gap-2">
                        <span className="text-accent shrink-0" aria-hidden>
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-5">
                  <h3 className="label text-accent mb-3">How it works</h3>
                  <ol className="space-y-2">
                    {e.howItWorks.map((step, si) => (
                      <li key={step} className="text-body text-text-muted flex gap-3">
                        <span className="font-mono text-small text-accent shrink-0">
                          {si + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="border-t border-border pt-5">
                  <h3 className="label text-accent mb-2">You own</h3>
                  <p className="text-body text-text-muted">{e.youOwn}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
