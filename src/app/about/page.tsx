import type { Metadata } from "next";
import { Handshake, ShieldCheck, Layers, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import SectionRail from "@/components/ui/SectionRail";
import CTABanner from "@/components/ui/CTABanner";
import { siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Clonalabs runs Clonvo, the AI inbox for WhatsApp, Instagram and Messenger, as a white-label platform for agencies. Offices in Mississauga, Canada and Lahore, Pakistan.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Clonalabs",
    description: DESCRIPTION,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Clonalabs",
    description: DESCRIPTION,
  },
};

const values = [
  {
    icon: Handshake,
    title: "Agencies first",
    description:
      "We built Clonalabs for agencies that want to add AI inquiry handling to what they sell. You own the client relationship, the brand and the pricing. We run the platform, with no revenue share.",
  },
  {
    icon: Layers,
    title: "One inbox, grounded answers",
    description:
      "Clonvo brings WhatsApp, Instagram and Messenger into one inbox. AI replies come from your clients' own documents and show their sources, and a human can take over at any point.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Data is encrypted with AES-256 and each client runs in an isolated tenant. Clonvo uses Meta's official APIs, and a DPA and SLA are available on the Scale plan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="About"
          title="The team behind"
          highlight="Clonvo."
          description="Clonalabs runs Clonvo so agencies can sell AI inquiry handling under their own brand."
          primaryCta={{ label: siteConfig.bookingLabel, href: siteConfig.bookingUrl }}
          secondaryCta={{ label: "Visit clonvo.chat", href: siteConfig.productUrl }}
        />

        {/* What we do */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionRail label="What we do" theme="light" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-text-dark leading-[1.05] tracking-tight mb-5 max-w-3xl">
                A white-label AI inbox, <span className="gradient-text">run for you.</span>
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-text-dark-muted leading-relaxed mb-12">
                Customers message businesses on WhatsApp, Instagram and Messenger at all hours. Clonvo unifies those conversations, answers from documents with citations, and hands off to people when it matters. Clonalabs operates the platform so agencies can resell it without building or hosting anything.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <ScrollReveal key={v.title} delay={i * 0.08}>
                    <div className="group h-full p-7 border border-card-light-border bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                      <div className="w-11 h-11 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-dark mb-2">{v.title}</h3>
                      <p className="text-sm text-text-dark-muted leading-relaxed">{v.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-14 lg:py-20 bg-white border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionRail label="Where we are" theme="light" />
              <h2 className="font-heading text-3xl md:text-4xl font-black text-text-dark leading-[1.05] tracking-tight mb-10">
                Canada and Pakistan.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {siteConfig.offices.map((o, i) => (
                <ScrollReveal key={o.country} delay={i * 0.08}>
                  <address className="not-italic h-full p-7 border border-card-light-border bg-light-primary flex items-start gap-4">
                    <span className="w-11 h-11 rounded-md bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-text-dark mb-2">{o.label}</p>
                      <p className="text-sm text-text-dark-muted leading-relaxed">
                        {o.lines.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                      </p>
                    </div>
                  </address>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-8 text-sm text-text-dark-muted">
              Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent font-semibold hover:underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-accent font-semibold hover:underline">
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </section>

        <CTABanner
          title="Ready to put your name on"
          highlight="Clonvo?"
          description="Book a 15-minute walkthrough and see the product and white-label portal live."
          buttonText={siteConfig.bookingLabel}
          buttonHref={siteConfig.bookingUrl}
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
