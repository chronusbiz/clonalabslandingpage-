import type { Metadata } from "next";
import { Cookie, BarChart3, Target, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Clonalabs' cookie policy: how we use cookies and similar technologies on clonalabs.ca.",
  alternates: { canonical: "/cookie-policy" },
};

const cookieTypes = [
  {
    icon: Settings,
    title: "Strictly Necessary",
    description:
      "Required for the website to function — for example, remembering whether you have responded to our cookie banner. These do not require your consent and cannot be disabled.",
    examples: "cookie-consent (your cookie choice, stored in localStorage)",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Loaded only after you click \"Accept\" in our cookie banner. They give us anonymous, aggregated traffic data so we can improve the site. They do not identify you personally.",
    examples: "Vercel Analytics, Vercel Speed Insights",
  },
  {
    icon: Target,
    title: "Marketing / Advertising",
    description:
      "We do not use any third-party advertising, retargeting, or social-media tracking cookies on this website. If that ever changes, we will update this page and re-prompt for consent before loading them.",
    examples: "None in use",
  },
  {
    icon: Cookie,
    title: "Functional",
    description:
      "Light-touch preferences stored in your browser to remember non-essential choices, such as your dismissal of one-time prompts. No personal data is collected.",
    examples: "UI dismiss flags (localStorage)",
  },
];

const generalSections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files (or comparable storage like localStorage) saved on your device when you visit a website. They let the site remember your choices, understand traffic patterns, and protect against abuse.",
  },
  {
    title: "Your Choice",
    content:
      "On your first visit you will see a cookie banner with \"Accept\" and \"Decline\" options. Analytics is only loaded if you accept. Declining means we will not load Vercel Analytics or Speed Insights at all on your visit.",
  },
  {
    title: "Changing Your Choice",
    content:
      "You can change your decision at any time by clearing cookie-consent from your browser's site data, which will re-trigger the banner on your next visit.",
  },
  {
    title: "Browser Controls",
    content:
      "All major browsers let you block, delete, or be notified about cookies via their settings. Note that blocking strictly-necessary cookies will break basic functionality of this and other websites.",
  },
  {
    title: "Updates",
    content:
      "We may update this Cookie Policy when our use of cookies changes or applicable law requires. Material changes will be flagged at the top of this page with a new effective date.",
  },
  {
    title: "Contact",
    content: "If you have questions about our use of cookies, contact us at support@clonvo.chat.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Legal"
          title="Cookie"
          highlight="Policy"
          description="How we use cookies and similar technologies on our website."
        />

        {/* Cookie types as cards */}
        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-10 text-center">
                Types of <span className="gradient-text">cookies we use.</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {cookieTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <ScrollReveal key={type.title} delay={i * 0.08}>
                    <div className="group p-6 border border-card-light-border bg-white hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full">
                      <div className="w-11 h-11 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark mb-2">
                        {type.title}
                      </h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-3">
                        {type.description}
                      </p>
                      <p className="text-xs text-text-dark-muted/60">
                        <span className="font-medium">Examples:</span> {type.examples}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* General info */}
            <div className="max-w-[1000px] mx-auto space-y-6">
              {generalSections.map((s, i) => (
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
              <p className="text-text-dark-muted text-sm mt-10 text-center">
                Last updated: October 2026
              </p>
            </div>
          </div>
        </section>

        <CTABanner
          title="Questions About"
          highlight="Cookies?"
          description="We're transparent about our data practices. Reach out anytime."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
