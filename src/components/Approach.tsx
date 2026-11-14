"use client";

import {
  Search,
  ClipboardList,
  PencilRuler,
  Rocket,
  RefreshCw,
  FlaskConical,
  ArrowUpRight,
  ArrowRight,
  Check,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { approach, approachStepMeta, siteConfig, linkTargetProps } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";

const stepIconMap: Record<string, LucideIcon> = {
  Search,
  ClipboardList,
  PencilRuler,
  FlaskConical,
  Rocket,
  RefreshCw,
};

export default function Approach() {
  return (
    <section
      id="how-we-work"
      className="relative snap-start snap-always bg-dark-primary scroll-mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center top, color-mix(in srgb, var(--accent) 40%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="fp-inner relative z-10">
        <SectionHeading
          compact
          theme="dark"
          eyebrow="How we deliver"
          title={
            <>
              Six stages,{" "}
              <span className="gradient-text">clear ownership.</span>
            </>
          }
          description="Discover → Architect → Build and integrate → Validate → Deploy → Improve. Every stage ends with something you can review."
          aside={
            <Link
              href={siteConfig.bookingUrl}
              {...linkTargetProps(siteConfig.bookingUrl)}
              className="fp-btn group inline-flex items-center gap-2 rounded-md bg-white text-dark-primary font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Book a technical call
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        <div className="relative fp-fill">
          <div
            aria-hidden
            className="hidden xl:block absolute z-0 left-[6%] right-[6%] h-px bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10"
            style={{ top: "calc(var(--fp-card-pad) + 1.25rem)" }}
          />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 grid-rows-[minmax(0,1fr)] gap-2.5 h-full">
            {approach.map((item, i) => {
              const meta = approachStepMeta[i];
              if (!meta) return null;
              const Icon = stepIconMap[meta.icon] ?? Search;
              const isLast = i === approach.length - 1;
              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative flex flex-col min-h-0 overflow-hidden border border-card-dark-border bg-gradient-to-b from-card-dark/95 to-card-dark/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                  style={{ padding: "clamp(0.75rem, 1.4vh, 1.1rem)" }}
                >
                  <span className="absolute top-0 inset-x-0 h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative flex items-center justify-between mb-2.5">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-accent/40 bg-dark-primary text-accent-light transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                    {!isLast && (
                      <ArrowRight size={12} aria-hidden className="hidden xl:block text-white/15" />
                    )}
                    <span className="font-heading font-bold text-2xl leading-none tabular-nums text-white/[0.08]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-heading font-bold text-white leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-accent-light leading-snug min-h-[2.4em] mb-2">
                    {meta.tagline}
                  </p>

                  <p className="text-[12px] text-text-light-muted leading-relaxed min-h-0 overflow-hidden line-clamp-4 mb-2">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2 shrink-0">
                    <div className="border border-white/[0.08] bg-white/[0.025] p-2">
                      <div className="flex items-center justify-between gap-1 mb-1.5 pb-1.5 border-b border-white/[0.06]">
                        <p className="text-[9px] uppercase tracking-[0.16em] font-semibold text-white/40">
                          You leave with
                        </p>
                        <span className="inline-flex items-center gap-1 text-[9px] text-white/50 whitespace-nowrap">
                          <Users size={9} className="text-accent-light" />
                          {meta.owner}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {meta.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-1.5 text-[11px] text-white/85 leading-snug">
                            <Check size={10} className="mt-[2px] shrink-0 text-accent-light" strokeWidth={3} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
