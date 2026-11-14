import type { Metadata } from "next";
import { Mail, Phone, MapPin, CalendarCheck } from "lucide-react";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { linkTargetProps, pageSeo, siteConfig } from "@/lib/constants";

const seo = pageSeo.contact;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <PageIntro
        label="Contact"
        title="Tell us what you are building."
        description="Book a 15-minute intro call. Tell us about your goals, your systems and the problem you want solved, and we will tell you honestly whether we can help."
        primaryCta={{ label: siteConfig.bookingLabel, href: siteConfig.bookingUrl }}
        secondaryCta={{ label: "Send a message", href: "#contact-form" }}
      />

      <section className="bg-surface border-b border-border">
        <div className="container-site py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="flex gap-3 group">
              <Mail size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
              <span>
                <span className="block text-small font-semibold text-ink group-hover:text-accent transition-colors break-all">
                  {email}
                </span>
                <span className="block text-small text-text-muted">
                  Official ClonaLabs email
                </span>
              </span>
            </a>
          ))}
          <a href={`tel:${siteConfig.phone}`} className="flex gap-3 group">
            <Phone size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
            <span>
              <span className="block text-small font-semibold text-ink group-hover:text-accent transition-colors">
                {siteConfig.phoneDisplay}
              </span>
              <span className="block text-small text-text-muted">Call or WhatsApp</span>
            </span>
          </a>
          <a
            href={siteConfig.demoUrl}
            {...linkTargetProps(siteConfig.demoUrl)}
            className="flex gap-3 group"
          >
            <CalendarCheck size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
            <span>
              <span className="block text-small font-semibold text-ink group-hover:text-accent transition-colors">
                15-minute intro call
              </span>
              <span className="block text-small text-text-muted">Book on cal.com</span>
            </span>
          </a>
        </div>
      </section>

      <section id="contact-form" className="bg-muted scroll-mt-28">
        <div className="container-site section grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2 text-ink mb-2">Send a message</h2>
            <p className="text-body text-text-muted mb-8">
              No commitment. We will suggest the right next step—or a clear no.
            </p>
            <div className="bg-surface-raised border border-border p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
          <aside className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="label text-text-muted mb-4">Offices</h2>
              {siteConfig.offices.map((o) => (
                <address key={o.country} className="not-italic mb-6 flex gap-3">
                  <MapPin size={16} className="text-accent shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="text-h3 text-ink mb-1">{o.label}</p>
                    {o.lines.map((line) => (
                      <p key={line} className="text-small text-text-muted">
                        {line}
                      </p>
                    ))}
                  </div>
                </address>
              ))}
            </div>
            <div className="border-t border-border pt-6 space-y-2">
              <p className="text-small text-text-muted">
                Phone:{" "}
                <a href={`tel:${siteConfig.phone}`} className="link-text">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              {siteConfig.emails.map((email) => (
                <p key={email} className="text-small text-text-muted">
                  <a href={`mailto:${email}`} className="link-text">
                    {email}
                  </a>
                </p>
              ))}
            </div>
            <p className="text-small text-text-muted border-t border-border pt-6">
              By contacting us you agree we may use your details to respond to
              this enquiry. See our{" "}
              <a href="/privacy" className="link-text">
                privacy policy
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
