import type { Metadata } from "next";
import { Handshake, ShieldCheck, Layers, MapPin, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import SectionRail from "@/components/ui/SectionRail";
import CTABanner from "@/components/ui/CTABanner";
import { siteConfig } from "@/lib/constants";

const DESCRIPTION = siteConfig.description;

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ClonaLabs",
    description: DESCRIPTION,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClonaLabs",
    description: DESCRIPTION,
  },
};

const values = [
  {
    icon: Handshake,
    title: "Business-first discovery",
    description:
      "We start with the workflow and the outcome—not a tool pitch. Engagements are grounded in how your business actually operates.",
  },
  {
    icon: Layers,
    title: "Products and services",
    description:
      "Ready platforms like Clonvo, ProTender, Breaking Portal and Genesis Studio where they fit; custom software, AI systems and delivery teams where they do not.",
  },
  {
    icon: MessageSquare,
    title: "Clear scope and communication",
    description:
      "Agreed boundaries, regular updates and deliverables you can review. Discover → Define → Design & Build → Launch → Improve.",
  },
  {
    icon: ShieldCheck,
    title: "Practical delivery",
    description:
      "We describe verified capabilities only, launch with operational care, and keep improving after the first release.",
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
          title="Technology shaped around"
          highlight="real business needs."
          description="ClonaLabs is a technology partner for Canadian businesses—products and six service pillars, practical AI, and delivery hubs in Canada and Pakistan."
          primaryCta={{ label: siteConfig.bookingLabel, href: siteConfig.bookingUrl }}
          secondaryCta={{ label: "Explore solutions", href: "/#solutions" }}
        />

        {/* What we do */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionRail label="What we do" theme="light" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-text-dark leading-[1.05] tracking-tight mb-5 max-w-3xl">
                Products and services,{" "}
                <span className="gradient-text">clearly separated.</span>
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-text-dark-muted leading-relaxed mb-12">
                We help Canadian businesses improve operations, build custom digital solutions and put practical AI to work. When a ready product fits, we route you there; when your process needs something built for you, we scope delivery against clear milestones.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
          title="Ready to explore the"
          highlight="right next step?"
          description="Tell us about your goals, current systems and challenges—we will help you route to products or scoped delivery."
          buttonText={siteConfig.bookingLabel}
          buttonHref={siteConfig.bookingUrl}
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
