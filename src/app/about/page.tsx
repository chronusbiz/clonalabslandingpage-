import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { pageSeo, siteConfig, whyChooseUs } from "@/lib/constants";

const seo = pageSeo.about;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <PageIntro
        label="About"
        title="Technology shaped around real business needs."
        description="ClonaLabs is a technology partner for Canadian businesses. We combine ready-to-deploy products with scoped engineering engagements, so you get the right fit instead of a one-size pitch."
        secondaryCta={{ label: "See engagements", href: "/engagements" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <p className="label text-text-muted mb-3">What we do</p>
          <h2 className="text-h2 text-ink max-w-[24ch] mb-5">
            Products and engagements, clearly separated.
          </h2>
          <p className="prose-measure text-body text-text-muted">
            We help Canadian businesses improve operations, build custom digital
            solutions and put practical AI to work. When a ready product fits, we
            point you to it. When your process needs something built for you, we
            scope the work against clear milestones.
          </p>
        </div>
      </section>

      <section className="bg-muted border-y border-border">
        <div className="container-site section">
          <p className="label text-text-muted mb-3">How we work</p>
          <h2 className="text-h2 text-ink mb-10">Principles we hold to.</h2>
          <ul className="border-t border-border grid grid-cols-1 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li
                key={item.label}
                className="ruled md:odd:border-r border-border p-6 md:p-8"
              >
                <h3 className="text-h3 text-ink mb-2">{item.label}</h3>
                <p className="text-body text-text-muted">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site section">
          <p className="label text-text-muted mb-3">Offices</p>
          <h2 className="text-h2 text-ink mb-10">Two delivery hubs.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border">
            {siteConfig.offices.map((o) => (
              <address
                key={o.country}
                className="not-italic ruled pt-6 flex gap-3"
              >
                <MapPin size={18} className="text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="text-h3 text-ink mb-2">{o.label}</h3>
                  {o.lines.map((line) => (
                    <p key={line} className="text-body text-text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </address>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/trust" className="link-text">
              Read the Trust Center
            </Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
