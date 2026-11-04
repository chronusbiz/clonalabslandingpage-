import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { servicePillars, siteConfig } from "@/lib/constants";
import { getPillarIcon } from "@/lib/pillar-icons";

const DESCRIPTION =
  "Six solution areas from ClonaLabs: AI and intelligent systems, custom software, web and mobile, AI evaluation and data operations, product delivery, and digital presence.";

export const metadata: Metadata = {
  title: "Solutions",
  description: DESCRIPTION,
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | ClonaLabs",
    description: DESCRIPTION,
    url: "/solutions",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Solutions", path: "/solutions" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Solutions"
          title="Practical technology,"
          highlight="shaped around your business."
          description="Six solution areas covering AI, custom software, digital experiences, evaluation and data operations, product delivery and digital presence."
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={{ label: "View products", href: "/products" }}
        />

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Six pillars, <span className="text-accent">one delivery approach.</span>
                </>
              }
              description="Each area has its own detail page. Start with the one closest to your challenge, or talk to us and we will help you scope it."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {servicePillars.map((pillar, i) => {
                const Icon = getPillarIcon(pillar.icon);
                return (
                  <ScrollReveal key={pillar.slug} delay={(i % 3) * 0.08} className="h-full">
                    <SpotlightCard className="h-full border border-card-light-border bg-white rounded-md hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                      <div className="flex h-full flex-col p-7">
                        <div className="w-11 h-11 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-5">
                          <Icon size={20} />
                        </div>
                        <h2 className="font-heading text-xl font-bold text-text-dark mb-2">
                          <Link
                            href={`/solutions/${pillar.slug}`}
                            className="hover:text-accent transition-colors after:absolute after:inset-0 after:z-20"
                          >
                            {pillar.title}
                          </Link>
                        </h2>
                        <p className="text-sm text-text-dark-muted leading-relaxed mb-5">{pillar.value}</p>
                        <ul className="mt-auto space-y-1.5 border-t border-card-light-border pt-4">
                          {pillar.children.map((c) => (
                            <li key={c.href} className="flex items-start gap-2 text-sm text-text-dark">
                              <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" aria-hidden />
                              {c.label}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                          Explore
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner
          title="Not sure which area"
          highlight="fits?"
          description="Tell us about your goals and current systems. We will help you explore the right next step."
          buttonText={siteConfig.contactCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
