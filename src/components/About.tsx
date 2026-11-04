"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Layers,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { siteConfig, whyChooseUs, linkTargetProps } from "@/lib/constants";

const pillarIcons: Record<string, LucideIcon> = {
  Handshake,
  Layers,
  MessageSquare,
  ShieldCheck,
};

const orbitTags = [
  { label: "Solutions", pos: "top-[8%] left-[4%]", delay: 0 },
  { label: "Products", pos: "top-[10%] right-[4%]", delay: 0.6 },
  { label: "Clonvo", pos: "bottom-[12%] right-[2%]", delay: 1.2 },
  { label: "Canada", pos: "bottom-[8%] left-[6%]", delay: 1.8 },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative snap-start snap-always bg-dark-secondary scroll-mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full blur-3xl opacity-[0.1]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent-light) 55%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="fp-inner relative z-10">
        <SectionHeading
          compact
          theme="dark"
          eyebrow="Why ClonaLabs"
          title={
            <>
              Technology shaped around{" "}
              <span className="gradient-text">real business needs.</span>
            </>
          }
          description="Products like Clonvo where they fit, scoped delivery when you need something built for your workflow."
          aside={
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="fp-btn group inline-flex items-center gap-2 font-semibold rounded-md bg-white text-dark-primary uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
              >
                About ClonaLabs
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href={siteConfig.bookingUrl}
                {...linkTargetProps(siteConfig.bookingUrl)}
                className="fp-btn inline-flex items-center gap-2 font-medium rounded-md border border-white/20 text-white uppercase tracking-widest transition-all duration-300 hover:border-white/55 hover:bg-white/5"
              >
                {siteConfig.bookingLabel}
              </Link>
            </div>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-[minmax(0,1fr)] gap-6 lg:gap-10 fp-fill">
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-[minmax(0,1fr)_minmax(0,1fr)] gap-4 min-h-0">
            {whyChooseUs.map((p, i) => {
              const Icon = pillarIcons[p.icon] ?? Handshake;
              return (
                <SpotlightCard
                  key={p.label}
                  variant="dark"
                  className="fp-card group relative border border-card-dark-border bg-card-dark/55 overflow-hidden transition-all duration-300 hover:border-accent/45 hover:bg-card-dark"
                >
                  <span className="absolute top-0 inset-x-0 h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex flex-col h-full" style={{ padding: "var(--fp-card-pad)" }}>
                    <div className="flex items-center justify-between mb-auto">
                      <div className="w-11 h-11 border border-accent/25 bg-accent/10 flex items-center justify-center text-accent-light transition-colors group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                        <Icon size={17} />
                      </div>
                      <span className="font-heading text-3xl text-white/10 leading-none tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3 className="fp-card-title font-heading font-bold text-white mb-1 leading-tight">{p.label}</h3>
                      <p className="fp-body text-text-light-muted/85 leading-snug line-clamp-2">{p.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="lg:col-span-5 hidden lg:block relative min-h-0">
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-square h-[min(44vh,420px)] max-w-full">
              <div className="absolute inset-0 rounded-full border border-accent/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[12%] rounded-full border border-accent/15 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-[24%] rounded-full border border-accent/20" />
              <div className="absolute inset-[36%] rounded-full bg-accent/5 blur-2xl" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[28%] aspect-square gradient-bg rotate-45 flex items-center justify-center"
                  style={{ boxShadow: "0 0 60px color-mix(in srgb, var(--accent) 45%, transparent)" }}
                >
                  <div className="-rotate-45 text-center">
                    <div className="font-heading font-bold text-base text-white leading-none">CLONA</div>
                    <div className="text-[10px] uppercase text-white/80 mt-1 tracking-[0.3em]">Labs</div>
                  </div>
                </div>
              </div>

              {orbitTags.map((t) => (
                <motion.div
                  key={t.label}
                  className={`absolute ${t.pos} px-3 py-1.5 border border-card-dark-border bg-card-dark/90 backdrop-blur-sm`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: t.delay * 0.1, duration: 0.4 }}
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent-light">
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
