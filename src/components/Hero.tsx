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
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-dark-primary">
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <HeroEyebrow label="White-label for agencies" icon={Sparkles} />

          <h1 className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.25rem] font-black mb-5 text-white tracking-tight max-w-3xl">
            Sell AI inquiry handling{" "}
            <span className="gradient-text">under your own brand.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/65 mb-7 leading-relaxed">
            Clonvo unifies WhatsApp, Instagram and Messenger, answers from your
            clients&apos; documents with citations, and hands off to humans. You
            resell it as yours. Clonalabs runs the platform. No per-seat fees,
            no revenue share.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
            <MagneticButton strength={4}>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-glow group relative inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary px-7 py-3.5 text-xs uppercase tracking-widest shadow-lg shadow-black/20 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98]"
              >
                {siteConfig.bookingLabel}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </MagneticButton>
            <Link
              href="/#pricing"
              className="group inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white px-7 py-3.5 text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              See pricing
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-6 max-w-lg pt-6 border-t border-white/10">
            {heroProofPoints.map((p) => (
              <div key={p.label}>
                <dt className="sr-only">{p.label}</dt>
                <dd>
                  <p className="font-heading text-xl sm:text-2xl font-black text-white leading-none tracking-tight mb-1.5">
                    {p.value}
                  </p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold leading-snug">
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
