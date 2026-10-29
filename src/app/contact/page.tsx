import type { Metadata } from "next";
import { Mail, Phone, MapPin, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionRail from "@/components/ui/SectionRail";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

const DESCRIPTION =
  "Contact Clonalabs to resell Clonvo under your agency's brand. Book a 15-minute walkthrough, email support@clonvo.chat, or call us.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Clonalabs",
    description: DESCRIPTION,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Clonalabs",
    description: DESCRIPTION,
  },
};

const contactMethods = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, desc: "We reply within one business day" },
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}`, desc: "Call or WhatsApp" },
  { icon: CalendarCheck, label: "Walkthrough", value: "15-minute demo", href: siteConfig.bookingUrl, desc: "Book a time on cal.com" },
  { icon: MapPin, label: "Offices", value: "Canada + Pakistan", href: "#offices", desc: "Mississauga and Lahore" },
];

const mapsLinks: Record<string, string> = {
  Canada:
    "https://www.google.com/maps/search/?api=1&query=1290+Central+Parkway+West+Mississauga+ON+L5C+4R3",
  Pakistan:
    "https://www.google.com/maps/search/?api=1&query=UET+Lahore+Huawei+Building+Lahore+Pakistan",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <PageHero
          badge="Get in Touch"
          title="Let's put your brand on"
          highlight="AI inquiry handling."
          description="Tell us about your agency and clients, or book a 15-minute walkthrough of Clonvo."
          bgImage="/images/contact-hero.jpg"
          bgImageOpacity={0.18}
          primaryCta={{ label: "Send a message", href: "#contact-form" }}
          secondaryCta={{ label: siteConfig.bookingLabel, href: siteConfig.bookingUrl }}
        />

        {/* Contact methods strip */}
        <section className="py-14 lg:py-20 bg-white border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                const external = m.href.startsWith("http");
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-dark break-words">{m.value}</p>
                      <p className="text-xs text-text-dark-muted">{m.desc}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section id="contact-form" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <ScrollReveal className="lg:col-span-7">
                <div className="bg-white border border-card-light-border p-8 md:p-10 rounded-md">
                  <SectionRail label="Agency enquiry" theme="light" className="mb-2" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-2">
                    Tell us about <span className="gradient-text">your agency.</span>
                  </h2>
                  <p className="text-text-dark-muted mb-8 text-sm">
                    A person reads every message. You will get a direct reply, not a form letter.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-5">
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="relative overflow-hidden rounded-md p-8 text-white bg-dark-primary border border-card-dark-border">
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40"
                      style={{ background: "radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--accent) 50%, transparent) 0%, transparent 60%)" }}
                    />
                    <div className="relative">
                      <SectionRail label="Prefer to talk?" theme="dark" className="mb-3" />
                      <h3 className="font-heading text-2xl font-bold mb-3 leading-tight">Book a 15-minute walkthrough.</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5">
                        Skip the form. See Clonvo live, the white-label portal and the plans, and ask anything about reselling it. No commitment.
                      </p>
                      <div className="space-y-2.5">
                        <a
                          href={siteConfig.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-dark-primary bg-white hover:bg-accent hover:text-white px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>Schedule on Cal.com</span>
                          <span className="text-[11px] opacity-70">15 min</span>
                        </a>
                        <a
                          href={`mailto:${siteConfig.email}?subject=Clonvo%20white-label%20enquiry`}
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-white border border-white/20 hover:border-accent hover:bg-accent/10 px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>{siteConfig.email}</span>
                          <span className="text-[11px] opacity-70">Email</span>
                        </a>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-white border border-white/20 hover:border-accent hover:bg-accent/10 px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>{siteConfig.phoneDisplay}</span>
                          <span className="text-[11px] opacity-70">Call</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-card-light-border p-7 rounded-md">
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-5">What happens next</h3>
                    <div className="space-y-4">
                      {[
                        { t: "We reply", d: "Usually within one business day, from Canada or Pakistan." },
                        { t: "We walk you through it", d: "A 15-minute call covering the product, branding and plans." },
                        { t: "You decide", d: "No commitment. If it fits your clients, we get you set up." },
                      ].map((step, i) => (
                        <div key={step.t} className="flex items-start gap-3 pb-4 border-b border-card-light-border last:border-0 last:pb-0">
                          <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-xs font-bold flex items-center justify-center rounded">{i + 1}</span>
                          <div>
                            <p className="text-sm font-semibold text-text-dark">{step.t}</p>
                            <p className="text-xs text-text-dark-muted mt-0.5 leading-relaxed">{step.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="offices" className="bg-white border border-card-light-border p-7 rounded-md scroll-mt-28">
                    <h3 className="font-heading text-sm font-bold text-text-dark mb-4 uppercase tracking-wider">Offices</h3>
                    <div className="space-y-6">
                      {siteConfig.offices.map((o) => (
                        <div key={o.country}>
                          <p className="text-sm font-semibold text-text-dark mb-1">{o.label}</p>
                          <address className="not-italic text-sm text-text-dark-muted leading-relaxed">
                            {o.lines.map((line) => (
                              <span key={line} className="block">{line}</span>
                            ))}
                          </address>
                          <a
                            href={mapsLinks[o.country]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                          >
                            Get directions →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
