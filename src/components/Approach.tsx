"use client";

import {
  Search,
  ClipboardList,
  PencilRuler,
  Rocket,
  RefreshCw,
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
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="fp-inner relative z-10">
        <SectionHeading
          compact
          theme="dark"
          eyebrow="How we work"
          title={
            <>
              From challenge to{" "}
              <span className="gradient-text">working solution.</span>
            </>
          }
          description="Discover → Define → Design & Build → Launch → Improve — one clear delivery spine."
          aside={
            <Link
              href={siteConfig.bookingUrl}
              {...linkTargetProps(siteConfig.bookingUrl)}
              className="fp-btn group inline-flex items-center gap-2 rounded-md bg-white text-dark-primary font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Start a discovery
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          }
        />

        <div className="relative fp-fill">
          <div
            aria-hidden
            className="hidden xl:block absolute z-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10"
            style={{ top: "calc(var(--fp-card-pad) + 1.375rem + 1px)" }}
          />

          <div className="relative z-10 grid grid-cols-5 grid-rows-[minmax(0,1fr)] gap-3 h-full max-xl:grid-cols-2 max-xl:grid-rows-none max-md:grid-cols-1">
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
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="group relative flex flex-col min-h-0 overflow-hidden border border-card-dark-border bg-gradient-to-b from-card-dark/95 to-card-dark/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_56px_-28px_color-mix(in_srgb,var(--accent)_50%,transparent)]"
                  style={{ padding: "var(--fp-card-pad)" }}
                >
                  <span className="absolute top-0 inset-x-0 h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative flex items-center justify-between mb-3">
                    <div className="relative w-11 h-11 shrink-0 flex items-center justify-center border border-accent/40 bg-dark-primary text-accent-light transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_60%,transparent)]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    {!isLast && (
                      <ArrowRight
                        size={14}
                        aria-hidden
                        className="hidden xl:block text-white/15 transition-all duration-300 group-hover:text-accent-light group-hover:translate-x-1"
                      />
                    )}
                    <span className="font-heading font-bold text-[2.5rem] leading-none tabular-nums text-white/[0.07] transition-colors duration-300 group-hover:text-accent/30">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="fp-card-title font-heading font-bold text-white leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-accent-light leading-snug min-h-[2.5em] mb-2">
                    {meta.tagline}
                  </p>

                  <p className="fp-body text-text-light-muted leading-relaxed min-h-0 overflow-hidden [@media(max-height:700px)]:line-clamp-4">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-3 shrink-0">
                    <div className="border border-white/[0.08] bg-white/[0.025] p-3 transition-colors duration-300 group-hover:border-accent/25 group-hover:bg-accent/[0.06]">
                      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/[0.06]">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40">
                          Deliverables
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10.5px] text-white/55 whitespace-nowrap">
                          <Users size={10} className="text-accent-light" />
                          {meta.owner}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {meta.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-[12px] text-white/85 leading-snug">
                            <Check size={11} className="mt-[3px] shrink-0 text-accent-light" strokeWidth={3} />
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
