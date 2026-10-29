import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Clonalabs' privacy policy: how we collect, use, and protect personal information submitted through clonalabs.ca.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Who We Are",
    content: `Clonalabs ("Clonalabs", "we", "us", or "our") operates clonalabs.ca and the Clonvo platform (clonvo.chat). We have offices in Mississauga, Ontario, Canada and Lahore, Pakistan. This policy covers personal data collected through this website and our direct business communications. For any privacy request, write to ${siteConfig.email}.`,
  },
  {
    title: "What We Collect",
    content:
      "When you use our contact form or book a walkthrough, we receive what you provide: typically your name, work email, agency or company, role, and your message. When you browse the site, our hosting and analytics tools (analytics only if you accept cookies) record standard request data such as IP address, browser, referring page and pages viewed. We do not knowingly collect data from anyone under 16.",
  },
  {
    title: "How We Use It",
    content:
      "We use your information to reply to your enquiry, arrange a walkthrough, and discuss working together. Anonymous analytics help us understand site traffic and improve content. We do not sell your personal data or share it for advertising.",
  },
  {
    title: "Clonvo Customer Data",
    content:
      "Conversations processed through the Clonvo platform belong to the agency or business that operates the account. In that case Clonalabs acts as a service provider on their behalf, and the agency's own privacy notice applies to their customers. A DPA is available on the Scale plan.",
  },
  {
    title: "Retention",
    content:
      "We keep enquiries for up to 24 months after our last interaction so we can follow up and keep a record of communication. Server logs are kept for up to 90 days.",
  },
  {
    title: "Service Providers",
    content:
      "We use a small number of vetted providers to run this site and handle enquiries, such as cloud hosting, email delivery, scheduling (cal.com) and, only with your consent, analytics. A current list is available on request.",
  },
  {
    title: "International Transfers",
    content:
      "Our team works from Canada and Pakistan, so personal data may be processed in both countries and wherever our providers operate. We limit what is shared to what is needed to deliver the service and use contractual safeguards with our providers.",
  },
  {
    title: "Security",
    content:
      "We protect data with encryption in transit, AES-256 encryption for stored platform data, tenant isolation, and access controls. No system is perfectly secure; if an incident materially affects your data, we will notify you as required by law.",
  },
  {
    title: "Your Rights",
    content: `Depending on where you live, you may have the right to access, correct, delete, or restrict our use of your personal data, and to withdraw consent. To exercise these rights, write to ${siteConfig.email}. We will respond within 30 days. You may also complain to your local data protection authority.`,
  },
  {
    title: "Cookies",
    content:
      "Strictly necessary storage is always on. Analytics loads only after you accept it in our cookie banner. See our Cookie Policy for details.",
  },
  {
    title: "Updates",
    content:
      "We may update this policy from time to time. Material changes will be flagged at the top of this page with the new effective date.",
  },
  {
    title: "Contact",
    content: `Questions or requests: ${siteConfig.email}, or by post at ${siteConfig.offices[0].lines.join(", ")}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Legal"
          title="Privacy"
          highlight="Policy"
          description="How we collect, use, and protect your information."
        />

        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <div className="p-6 md:p-8 border border-card-light-border bg-white">
                    <h2 className="font-heading text-lg font-bold text-text-dark mb-3">
                      {s.title}
                    </h2>
                    <p className="text-text-dark-muted leading-relaxed">
                      {s.content}
                    </p>
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
          highlight="Privacy?"
          description={`Email ${siteConfig.email} and we will get back to you.`}
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
