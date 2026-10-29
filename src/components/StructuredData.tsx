import { siteConfig, faq, pricingPlans } from "@/lib/constants";

// ──────────────────────────────────────────────────────────────────────
// Structured-data strategy:
// - Site-wide (in <head> via the root layout): Organization + WebSite +
//   SoftwareApplication (Clonvo, with the plan offers)
// - Page-scoped (rendered on the matching page only): FAQPage on /faq.
//   This avoids duplicate FAQPage markup across every page.
// ──────────────────────────────────────────────────────────────────────

function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Suite 1100, 1290 Central Parkway West",
            addressLocality: "Mississauga",
            addressRegion: "ON",
            postalCode: "L5C 4R3",
            addressCountry: "CA",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, Huawei Building, UET Lahore",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          telephone: siteConfig.phone,
          contactType: "customer service",
        },
        knowsAbout: [
          "White-label AI chatbots",
          "WhatsApp Business messaging",
          "Instagram messaging",
          "Facebook Messenger",
          "AI customer inquiry handling",
        ],
      }}
    />
  );
}

function SoftwareSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.productName,
        url: siteConfig.productUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "AI inbox that unifies WhatsApp, Instagram and Messenger, with cited AI replies and human handoff.",
        publisher: { "@type": "Organization", name: siteConfig.name },
        offers: pricingPlans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: String(plan.price),
          priceCurrency: "USD",
          description: `${plan.messages}; ${plan.channels}`,
        })),
      }}
    />
  );
}

/** Render only on /faq. */
export function GlobalFAQSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

function WebSiteSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      }}
    />
  );
}

export default function StructuredData() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareSchema />
    </>
  );
}
