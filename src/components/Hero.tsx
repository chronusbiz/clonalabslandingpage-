"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import HeroEyebrow from "./ui/HeroEyebrow";
import { siteConfig, heroProofPoints } from "@/lib/constants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative snap-start snap-always flex items-center overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {!prefersReducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/videos/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
        )}
        <div className="absolute inset-0 bg-dark-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/40" />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent-light) 12%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="fp-inner relative z-10 !justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl w-full text-left flex flex-col items-start gap-[var(--fp-gap)]"
        >
          <HeroEyebrow label="CLONALABS" icon={Sparkles} />

          <h1 className="fp-title font-heading text-white max-w-3xl !text-[clamp(2.25rem,4.4vh+0.85rem,3.85rem)]">
            Technology that works harder{" "}
            <span className="gradient-text">for your business.</span>
          </h1>

          <p className="fp-lead text-white/65 max-w-xl">
            ClonaLabs helps Canadian businesses improve operations, build custom
            digital solutions and put practical AI to work—with technology shaped
            around real business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <MagneticButton strength={4}>
              <Link
                href={siteConfig.bookingUrl}
                className="fp-btn hero-cta-glow group relative inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary uppercase tracking-widest shadow-lg shadow-black/20 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
              >
                {siteConfig.bookingLabel}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <Link
              href="/#solutions"
              className="fp-btn group inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Explore Solutions
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-6 max-w-lg pt-6 border-t border-white/10 w-full">
            {heroProofPoints.map((p) => (
              <div key={p.label} className="text-left">
                <dt className="sr-only">{p.label}</dt>
                <dd>
                  <p className="font-heading text-xl sm:text-2xl font-black text-white leading-none tracking-tight mb-1.5">
                    {p.value}
                  </p>
                  <p className="fp-label text-white/50 leading-snug normal-case tracking-normal font-medium">
                    {p.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-6 right-8 flex-col items-center gap-1.5 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
