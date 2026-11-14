import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import StatusChip from "@/components/ui/StatusChip";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { featuredProducts, linkTargetProps, pageSeo } from "@/lib/constants";

const seo = pageSeo.products;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
        ]}
      />
      <PageIntro
        label="Products"
        title="Ready-to-deploy products, built in-house."
        description="Alongside client delivery, ClonaLabs builds its own software. Each product is labelled with its current status so you know exactly where it stands. Live means available today. Beta means in active testing."
        secondaryCta={{ label: "See capabilities", href: "/services" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <div className="border-t border-border">
            {featuredProducts.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="ruled scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
              >
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-h2 text-ink">{p.name}</h2>
                    <StatusChip status={p.status} />
                  </div>
                  <p className="text-small text-text-muted">{p.category}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-body text-text-muted mb-4">{p.blurb}</p>
                  <ul className="space-y-2">
                    {p.points.map((point) => (
                      <li key={point} className="text-small text-ink flex gap-2">
                        <span className="text-accent" aria-hidden>
                          ·
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                  <Link href={p.href} {...linkTargetProps(p.href)} className="btn btn-secondary">
                    {p.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
