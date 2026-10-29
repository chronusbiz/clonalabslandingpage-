"use client";

import { ArrowUpRight, Check } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { pricingPlans, siteConfig } from "@/lib/constants";

const marginSteps = [
  { label: "You pay", value: "The plan price", note: "Plans start at $35/month" },
  { label: "You charge", value: "Whatever you set", note: "Your brand, your retainer, your terms" },
  { label: "You keep", value: "The difference", note: "No revenue share to Clonalabs" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Four plans.{" "}
              <span className="gradient-text">Your margin.</span>
            </>
          }
          description="Pick the plan that fits each client, then resell it under your brand at a price you choose. No per-seat fees and no revenue share, so everything above the plan price stays with your agency."
          aside={
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Talk through plans
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.08} className="h-full">
              <SpotlightCard
                variant="light"
                className={`group relative h-full border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${
                  plan.popular
                    ? "border-accent shadow-[0_24px_50px_-24px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
                    : "border-card-light-border hover:border-accent/40"
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-20" />
                    <span className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest">
                      Most popular
                    </span>
                  </>
                )}

                <div className="flex flex-col h-full p-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-heading text-5xl font-black text-text-dark tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-text-dark-muted">/ month</span>
                  </div>
                  <p className="text-sm text-text-dark-muted leading-relaxed mb-5 min-h-[3.75rem]">
                    {plan.blurb}
                  </p>

                  <div className="py-4 border-y border-card-light-border mb-5 space-y-1">
                    <p className="text-sm font-semibold text-text-dark">{plan.messages}</p>
                    <p className="text-xs text-text-dark-muted">{plan.channels}</p>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-text-dark-muted leading-snug">
                        <Check size={14} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30"
                        : "border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    Resell {plan.name}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* White-label margin story */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
            {marginSteps.map((s) => (
              <div key={s.label} className="bg-white p-6 lg:p-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                  {s.label}
                </p>
                <p className="font-heading text-xl font-bold text-text-dark mb-1">{s.value}</p>
                <p className="text-sm text-text-dark-muted">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-dark-muted">
            All prices in USD, billed monthly. Message volumes are per month. SLA and DPA are included on Scale.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
