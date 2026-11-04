import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { servicePillars, howWeWork, siteConfig } from "@/lib/constants";
import { getPillarIcon } from "@/lib/pillar-icons";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePillars.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function getPillar(slug: string) {
  return servicePillars.find((p) => p.slug === slug);
}

function getAttribution(pillar: (typeof servicePillars)[number]): string | null {
  return "attribution" in pillar ? pillar.attribution : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  const path = `/solutions/${pillar.slug}`;
  return {
    title: pillar.title,
    description: pillar.value,
    alternates: { canonical: path },
    openGraph: {
      title: `${pillar.title} | ClonaLabs`,
      description: pillar.value,
      url: path,
      type: "website",
    },
  };
}

function anchorId(href: string) {
  return href.split("#")[1] ?? "";
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const Icon = getPillarIcon(pillar.icon);
  const attribution = getAttribution(pillar);
  const others = servicePillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Solutions", path: "/solutions" },
          { label: pillar.title, path: `/solutions/${pillar.slug}` },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Solutions"
          title={pillar.title}
          description={pillar.value}
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={{ label: "All solutions", href: "/solutions" }}
        />

        {attribution && (
          <section className="bg-white pt-10 lg:pt-14">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
              <ScrollReveal>
                <aside
                  className="flex items-start gap-4 rounded-md border border-accent/40 bg-accent/5 p-6 md:p-7"
                  aria-label="Attribution note"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent text-white">
                    <Info size={18} />
                  </span>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Attribution
                    </p>
                    <p className="text-base leading-relaxed text-text-dark">{attribution}</p>
                  </div>
                </aside>
              </ScrollReveal>
            </div>
          </section>
        )}

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Capabilities"
              title={
                <>
                  What this covers
                </>
              }
              description={pillar.value}
            />

            {/* Anchor navigation */}
            <nav aria-label={`${pillar.title} capabilities`} className="mb-10 flex flex-wrap gap-2">
              {pillar.children.map((c) => (
                <a
                  key={c.href}
                  href={`#${anchorId(c.href)}`}
                  className="rounded-md border border-card-light-border bg-light-primary px-3.5 py-2 text-sm font-medium text-text-dark transition-colors hover:border-accent hover:text-accent"
                >
                  {c.label}
                </a>
              ))}
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pillar.children.map((c, i) => (
                <ScrollReveal key={c.href} delay={(i % 2) * 0.08} className="h-full">
                  <SpotlightCard className="h-full rounded-md border border-card-light-border bg-white scroll-mt-28">
                    <div id={anchorId(c.href)} className="scroll-mt-28 p-7 h-full">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                          <Icon size={17} />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dark-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-dark mb-2">{c.label}</h3>
                      <p className="text-sm text-text-dark-muted leading-relaxed">
                        Part of our {pillar.title} offering. Talk to our team about scope, fit and how it
                        could work with the systems you already use.
                      </p>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-14 lg:py-20 bg-light-primary border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  A clear path from <span className="text-accent">idea to launch.</span>
                </>
              }
            />
            <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {howWeWork.map((s) => (
                <li key={s.step} className="rounded-md border border-card-light-border bg-white p-5">
                  <span className="text-xs font-bold text-accent">{s.step}</span>
                  <h3 className="font-heading text-base font-bold text-text-dark mt-1 mb-2">{s.title}</h3>
                  <p className="text-xs text-text-dark-muted leading-relaxed">{s.output}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Other solutions */}
        <section className="py-14 lg:py-20 bg-white border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading eyebrow="Related" title="Other solution areas" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/solutions/${p.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-md border border-card-light-border bg-white p-4 text-sm font-semibold text-text-dark transition-colors hover:border-accent hover:text-accent"
                  >
                    {p.title}
                    <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          title="Discuss your"
          highlight="project."
          description="Share your goals, current systems and challenges. We will help you scope the right next step."
          buttonText={siteConfig.discussCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
