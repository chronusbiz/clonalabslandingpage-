import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { GlobalFAQSchema } from "@/components/StructuredData";
import { siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Answers about Clonalabs and Clonvo: white-label reselling, pricing, channels, cited AI replies, human handoff, security, and how to get started.";

export const metadata: Metadata = {
  title: "FAQ",
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Clonalabs",
    description: DESCRIPTION,
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Clonalabs",
    description: DESCRIPTION,
  },
};

export default function FAQPage() {
  return (
    <>
      <GlobalFAQSchema />
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="FAQ"
          title="Frequently"
          highlight="asked questions."
          description="White-label reselling, pricing, channels, security, and getting started — answered directly."
        />

        <div className="bg-dark-secondary">
          <FAQ />
        </div>

        <CTABanner
          title="Question not"
          highlight="answered here?"
          description="Book a 15-minute walkthrough and ask us directly."
          buttonText={siteConfig.bookingLabel}
          buttonHref={siteConfig.bookingUrl}
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
