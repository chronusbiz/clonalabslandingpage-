import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { workExamples, siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Selected work patterns from ClonaLabs. Examples on this page are illustrative and are not client projects.";

export const metadata: Metadata = {
  title: "Our Work",
  description: DESCRIPTION,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | ClonaLabs",
    description: DESCRIPTION,
    url: "/work",
    type: "website",
  },
};

const fields = [
  { key: "challenge", label: "Challenge" },
  { key: "scope", label: "Scope" },
  { key: "role", label: "Our role" },
  { key: "outcome", label: "Intended outcome" },
] as const;

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Our Work", path: "/work" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Our Work"
          title="Selected work"
          highlight="patterns."
          description="The examples below show the kinds of problems we help with and how we would approach them. They are illustrative and are not client projects."
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={{ label: "View products", href: "/products" }}
        />

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Examples"
              title={
                <>
                  How we would <span className="text-accent">approach it.</span>
                </>
              }
              description="Case studies with named clients will appear here only when they are approved for publication."
            />

            <div className="space-y-6">
              {workExamples.map((w, i) => (
                <ScrollReveal key={w.title} delay={i * 0.06}>
                  <article className="rounded-md border border-card-light-border bg-white p-7 md:p-9">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-md border border-accent bg-accent/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                        Illustrative — not a client project
                      </span>
                      <span className="text-sm text-text-dark-muted">{w.context}</span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-text-dark mb-6">{w.title}</h2>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                      {fields.map((f) => (
                        <div key={f.key} className="border-t border-card-light-border pt-4">
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-1.5">
                            {f.label}
                          </dt>
                          <dd className="text-sm text-text-dark-muted leading-relaxed">{w[f.key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Have a similar"
          highlight="challenge?"
          description="Tell us what you are working on and we will talk through how we would approach it."
          buttonText={siteConfig.discussCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
