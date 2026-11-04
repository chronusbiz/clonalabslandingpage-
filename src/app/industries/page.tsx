import type { Metadata } from "next";
import {
  Briefcase,
  HeartPulse,
  ShoppingBag,
  Truck,
  Cloud,
  Handshake,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { industries, siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Industries ClonaLabs supports: professional services, healthcare operations, retail and ecommerce, logistics, SaaS and product companies, and agencies and partners.";

export const metadata: Metadata = {
  title: "Industries",
  description: DESCRIPTION,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | ClonaLabs",
    description: DESCRIPTION,
    url: "/industries",
    type: "website",
  },
};

const industryIcons: Record<string, LucideIcon> = {
  "professional-services": Briefcase,
  "healthcare-operations": HeartPulse,
  "retail-ecommerce": ShoppingBag,
  "logistics-operations": Truck,
  "saas-product-companies": Cloud,
  "agencies-partners": Handshake,
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Industries", path: "/industries" },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow="Industries"
          title="Technology that fits"
          highlight="how your sector works."
          description="We start from the workflow, not the tool. These are the sectors where our products and delivery capabilities are most relevant."
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={{ label: "View solutions", href: "/solutions" }}
        />

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Where we work"
              title={
                <>
                  Six areas of <span className="text-accent">focus.</span>
                </>
              }
              description="Don't see your sector? Talk to our team. Many operational challenges look similar across industries."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {industries.map((ind, i) => {
                const Icon = industryIcons[ind.slug] ?? Building2;
                return (
                  <ScrollReveal key={ind.slug} delay={(i % 3) * 0.08} className="h-full">
                    <SpotlightCard className="h-full rounded-md border border-card-light-border bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                      <div className="p-7 h-full">
                        <div className="w-11 h-11 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-5">
                          <Icon size={20} />
                        </div>
                        <h2 className="font-heading text-xl font-bold text-text-dark mb-2">{ind.title}</h2>
                        <p className="text-sm text-text-dark-muted leading-relaxed">{ind.summary}</p>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner
          title="Tell us about"
          highlight="your sector."
          description="Share your goals, systems and challenges. We will help you explore the right next step."
          buttonText={siteConfig.discussCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
