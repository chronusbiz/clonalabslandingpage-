import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Clonalabs' terms governing the use of clonalabs.ca.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Scope",
    content:
      "These Terms govern your use of clonalabs.ca and the general information, demos and communications you receive through it. Use of the Clonvo platform and any white-label reseller arrangement is governed by a separate written agreement or the order terms for your account, which take precedence over these Terms in the event of a conflict.",
  },
  {
    title: "About Clonalabs",
    content:
      "Clonalabs operates the Clonvo platform (clonvo.chat) and offers it to agencies on a white-label basis. We have offices in Mississauga, Ontario, Canada and Lahore, Pakistan. References to \"we\", \"us\" or \"our\" mean Clonalabs.",
  },
  {
    title: "Acceptable Use",
    content:
      "You agree not to use this website to submit false or misleading information, attempt unauthorized access to any system or data, interfere with site availability through automated traffic or scraping at scale, or use any content in breach of applicable law.",
  },
  {
    title: "Pricing Information",
    content:
      "Plan names, prices and limits shown on this website are in US dollars and are provided for information. They may change, and the terms of your order apply to any purchase.",
  },
  {
    title: "Intellectual Property",
    content:
      "The content of this website, including copy, designs and illustrations, is owned by or licensed to Clonalabs and protected by intellectual property laws. You may quote short excerpts with attribution. Wholesale reproduction or commercial reuse requires written consent.",
  },
  {
    title: "Third-Party Services",
    content:
      "Clonvo connects to services such as WhatsApp, Instagram and Messenger through Meta's APIs, and this website may link to third-party sites. Those services have their own terms, and we are not responsible for their content or availability.",
  },
  {
    title: "Disclaimers",
    content:
      "This website and its content are provided \"as is\" without warranties of any kind. We do not warrant that the site will be uninterrupted or error-free. Nothing on this website is legal, financial or professional advice.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Clonalabs is not liable for indirect, incidental, special or consequential damages, or lost profits, arising from your use of this website. For paid services, liability is limited as set out in your agreement with us.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there, unless mandatory local law requires otherwise.",
  },
  {
    title: "Changes",
    content:
      "We may update these Terms from time to time. The current version is always available at this URL, and material changes will be flagged at the top of this page.",
  },
  {
    title: "Contact",
    content: `Questions about these Terms: ${siteConfig.email}, or by post at ${siteConfig.offices[0].lines.join(", ")}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Legal"
          title="Terms &"
          highlight="Conditions"
          description="Terms governing your use of our website."
        />

        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.04}>
                  <div className="p-6 md:p-8 border border-card-light-border bg-white">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-heading text-lg font-bold text-text-dark mb-3">
                          {s.title}
                        </h2>
                        <p className="text-text-dark-muted leading-relaxed">
                          {s.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="text-text-dark-muted text-sm mt-10 text-center">
              Last updated: October 2026
            </p>
          </div>
        </section>

        <CTABanner
          title="Have Questions About"
          highlight="Our Terms?"
          description="We are happy to clarify anything. Get in touch."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
