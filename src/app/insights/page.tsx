import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { insights, siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Practical perspectives from ClonaLabs on AI, software and digital operations for Canadian businesses.";

export const metadata: Metadata = {
  title: "Insights",
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | ClonaLabs",
    description: DESCRIPTION,
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  const hasInsights = insights.length > 0;

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Insights", path: "/insights" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Insights"
          title="Practical perspectives on"
          highlight="technology and operations."
          description="Articles and guides from our team on AI, software and digital delivery."
        />

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            {hasInsights ? (
              <>
                <SectionHeading eyebrow="Latest" title="From the team" />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {insights.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
                      <article className="h-full rounded-md border border-card-light-border bg-white p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                          {post.category}
                        </p>
                        <h2 className="font-heading text-xl font-bold text-text-dark mb-2">{post.title}</h2>
                        <p className="text-sm text-text-dark-muted leading-relaxed mb-4">{post.summary}</p>
                        <p className="text-xs text-text-dark-muted">{post.date}</p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </>
            ) : (
              <ScrollReveal>
                <div className="mx-auto max-w-2xl rounded-md border border-card-light-border bg-light-primary px-8 py-14 text-center">
                  <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <BookOpen size={22} />
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-text-dark mb-3">
                    Insights are coming soon.
                  </h2>
                  <p className="text-sm md:text-base text-text-dark-muted leading-relaxed mb-6">
                    We are preparing practical, useful content. In the meantime, explore our solutions
                    and products, or talk to our team directly.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center justify-center rounded-md border border-card-light-border bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-text-dark transition-colors hover:border-accent hover:text-accent"
                    >
                      Explore solutions
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
                    >
                      {siteConfig.contactCta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        <CTABanner
          title="Have a question"
          highlight="right now?"
          description="Our team is happy to talk through your goals and challenges."
          buttonText={siteConfig.contactCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
