"use client";

import Link from "next/link";
import {
  Wrench, HeartPulse, ShoppingBag, Building2, Scale, Megaphone, ArrowRight, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import SectionRail from "./ui/SectionRail";
import { siteConfig, useCases } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  HeartPulse,
  ShoppingBag,
  Building2,
  Scale,
  Megaphone,
};

export default function Industries() {
  return (
    <section id="use-cases" className="py-14 lg:py-20 bg-light-secondary relative overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title={
            <>
              Built for the clients <br className="hidden md:inline" />
              <span className="gradient-text">agencies actually serve.</span>
            </>
          }
          description="Home services, clinics, ecommerce, real estate, professional services, and agencies themselves. Wherever customers message a business on WhatsApp, Instagram or Messenger, there is an inbox to unify and inquiries to answer."
          aside={
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Talk through your clients
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          }
        />

        {/* Use-case grid — separated cards with image headers + hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {useCases.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Megaphone;
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <SpotlightCard
                  variant="light"
                  className="group h-full border border-card-light-border bg-white overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_28px_55px_-22px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
                >
                  <div className="flex flex-col h-full">
                    {/* Image header */}
                    <div className="relative h-44 overflow-hidden bg-dark-primary [transform:translateZ(0)]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-dark-primary/25" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Floating icon */}
                      <div className="absolute top-5 left-5 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                        <Icon size={20} />
                      </div>

                      {/* Metric overlay at bottom */}
                      <div className="absolute bottom-4 left-5 right-5">
                        <p className="font-heading text-2xl font-black text-white leading-none mb-0.5 tracking-tight">
                          {item.metric.value}
                        </p>
                        <p className="text-[10px] text-white/60 uppercase tracking-widest leading-snug">
                          {item.metric.label}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-medium text-text-dark-muted bg-light-primary border border-card-light-border group-hover:border-accent/20 group-hover:text-accent transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated top border */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-700 z-20" />
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Full-width CTA banner */}
        <ScrollReveal delay={0.15}>
          <div className="group relative mt-6 overflow-hidden border border-card-dark-border bg-gradient-to-br from-dark-primary to-dark-secondary">
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 700px 320px at 85% 0%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 p-8 lg:p-10">
              <div className="max-w-2xl">
                <SectionRail label="Beyond the list" theme="dark" />
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  Your clients not listed?
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5">
                  If their customers message them, Clonvo can help. Tell us about your client mix and we will show you how it would look under your brand.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Restaurants", "Fitness studios", "Education", "Travel & tourism"].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-[11px] font-medium text-white/70 bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 self-start lg:self-auto">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 bg-accent text-white text-sm font-semibold whitespace-nowrap shadow-lg shadow-accent/20 hover:bg-accent-hover hover:scale-[1.03] transition-all duration-300"
                >
                  {siteConfig.bookingLabel}
                  <ArrowUpRight size={16} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 border border-white/25 text-white text-sm font-semibold whitespace-nowrap hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  Send a message
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
