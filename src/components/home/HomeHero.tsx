"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export default function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-dark-primary">
      {/* Full-bleed visual plane */}
      {!reduce ? (
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.48]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1a1a1f,black_55%)]"
          aria-hidden
        />
      )}

      {/* Readability veil — stronger at bottom where copy sits */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        aria-hidden
      />

      {/* Soft accent wash — restrained, not a glow blob */}
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[45%] w-[55%] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at left bottom, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-14 pt-28 sm:pb-16 lg:px-8 lg:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[40rem]"
        >
          <p className="hero-brand text-[clamp(3.25rem,8vw,6.5rem)] text-white">
            Clona<span className="text-accent-light">Labs</span>
          </p>

          <div className="mt-6 h-px w-14 bg-accent" aria-hidden />

          <h1 className="hero-title mt-7 max-w-[22ch] text-[clamp(1.65rem,3.4vw,2.65rem)] text-white">
            Technology that works harder for your business.
          </h1>

          <p className="font-body mt-5 max-w-[34rem] text-[1.05rem] leading-[1.65] text-white/68">
            Improve operations, build custom digital solutions, and put practical
            AI to work — shaped around real business needs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-[0.92rem] font-semibold tracking-[-0.01em] text-black transition duration-300 hover:bg-accent hover:text-white"
            >
              {siteConfig.contactCta}
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-white/75 transition hover:text-white"
            >
              Explore Solutions
              <span
                aria-hidden
                className="translate-x-0 transition duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {!reduce ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="pointer-events-none absolute bottom-6 right-6 hidden flex-col items-center gap-2 text-white/35 md:flex lg:right-8"
            aria-hidden
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
              Scroll
            </span>
            <motion.span
              className="block h-8 w-px bg-white/35"
              animate={{ scaleY: [1, 0.55, 1], opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
