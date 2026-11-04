import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import StatusBadge from "@/components/ui/StatusBadge";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { products, siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "ClonaLabs products: Clonvo (live), ProTender (beta), Breaking Portal (beta) and Genesis Studio (planned).";

export const metadata: Metadata = {
  title: "Products",
  description: DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | ClonaLabs",
    description: DESCRIPTION,
    url: "/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Products"
          title="Ready-to-deploy products,"
          highlight="built in-house."
          description="Alongside client delivery, ClonaLabs builds its own software. Each product is labelled with its current status so you know exactly where it stands."
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={{ label: "View solutions", href: "/solutions" }}
        />

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our products"
              title={
                <>
                  Four products, <span className="text-accent">clear status.</span>
                </>
              }
              description="Live means available today. Beta means in active testing. Planned means on the roadmap and not yet available."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {products.map((p, i) => (
                <ScrollReveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
                  <SpotlightCard className="h-full rounded-md border border-card-light-border bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <div className="flex h-full flex-col p-7 md:p-8">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dark-muted">
                          {p.category}
                        </p>
                        <StatusBadge status={p.status} />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-text-dark mb-3">
                        <Link
                          href={p.href}
                          className="hover:text-accent transition-colors after:absolute after:inset-0 after:z-20"
                        >
                          {p.name}
                        </Link>
                      </h2>
                      <p className="text-sm text-text-dark-muted leading-relaxed mb-4">{p.summary}</p>
                      <p className="mb-6 text-sm text-text-dark">
                        <span className="font-semibold">Built for: </span>
                        {p.audience}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                        {p.cta}
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-text-dark-muted">
              <ArrowUpRight size={14} className="text-accent" aria-hidden />
              Looking at Clonvo specifically? Visit{" "}
              <a
                href={siteConfig.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:underline"
              >
                clonvo.chat
              </a>
              .
            </p>
          </div>
        </section>

        <CTABanner
          title="Want to see"
          highlight="a product in action?"
          description="Talk to our team about fit, availability and what a rollout would look like."
          buttonText={siteConfig.contactCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
