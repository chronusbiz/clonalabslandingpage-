"use client";

import {
  Wrench,
  HeartPulse,
  ShoppingBag,
  Building2,
  Scale,
  Megaphone,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
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
    <section
      id="industries"
      className="snap-start snap-always bg-light-secondary relative scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 65%)",
        }}
      />

      <div className="fp-inner relative">
        <SectionHeading
          compact
          eyebrow="Industries"
          title={
            <>
              Technology shaped around{" "}
              <span className="gradient-text">your industry.</span>
            </>
          }
          description="We work where operational friction is real and where AI and software must hold up in daily use."
          aside={
            <a
              href={siteConfig.bookingUrl}
              className="fp-btn group inline-flex items-center gap-2 border border-text-dark/10 text-text-dark font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5"
            >
              Discuss your industry
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          }
        />

        <div className="fp-grid fp-grid-3 fp-fill">
          {useCases.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Megaphone;
            return (
              <SpotlightCard
                key={item.title}
                variant="light"
                className="fp-card group border border-card-light-border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-26px_rgba(15,23,42,0.4)]"
              >
                <div className="flex h-full min-h-0">
                  <div className="relative w-[38%] shrink-0 overflow-hidden bg-dark-primary">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/40 to-dark-primary/10" />
                    <div className="absolute top-3 left-3 w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white transition-colors group-hover:bg-accent group-hover:border-accent">
                      <Icon size={15} />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-heading font-bold text-white text-lg leading-none">{item.metric.value}</p>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 min-w-0 min-h-0" style={{ padding: "var(--fp-card-pad)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading text-[12px] text-text-dark-muted/50 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-text-dark-muted/40 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <h3 className="fp-card-title font-heading font-bold text-text-dark mb-1.5 leading-tight transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="fp-body text-text-dark-muted line-clamp-3 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 text-text-dark-muted bg-light-primary border border-card-light-border font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
