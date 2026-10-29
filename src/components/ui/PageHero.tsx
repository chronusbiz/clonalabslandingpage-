"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import HeroEyebrow from "./HeroEyebrow";

import type { LucideIcon } from "lucide-react";

export interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  bgImage?: string;
  /** 0.1 – 1 */
  bgImageOpacity?: number;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size?: "marketing" | "compact";
}

export default function PageHero({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  align = "left",
  bgImage,
  bgImageOpacity = 0.2,
  primaryCta,
  secondaryCta,
  size = "marketing",
}: PageHeroProps) {
  const isCenter = align === "center";
  const isCompact = size === "compact";

  return (
    <section
      className="relative flex items-center overflow-hidden bg-dark-primary min-h-dvh py-24 lg:py-28"
    >
      {bgImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: bgImageOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/92 to-dark-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/70 via-transparent to-dark-primary" />
        </div>
      )}

      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 -left-20 w-[520px] h-[520px] rounded-full blur-[140px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 40%, transparent) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent-light) 16%, transparent) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className={isCenter ? "text-center" : ""}>
          <div className={isCenter ? "max-w-4xl mx-auto" : "max-w-4xl"}>
            {badge && <HeroEyebrow label={badge} icon={badgeIcon} />}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.25rem] font-black tracking-tight text-white mb-5 max-w-3xl"
            >
              {title}{" "}
              {highlight && <span className="gradient-text">{highlight}</span>}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className={`max-w-xl text-sm sm:text-base text-white/65 mb-7 leading-relaxed ${
                  isCenter ? "mx-auto" : ""
                }`}
              >
                {description}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3 }}
                className={`flex flex-col sm:flex-row gap-3 ${isCenter ? "justify-center" : ""}`}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary px-7 py-3.5 text-xs uppercase tracking-widest shadow-lg shadow-black/25 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  >
                    {primaryCta.label}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryCta && (
                  /^https?:\/\//.test(secondaryCta.href) ? (
                    <a
                      href={secondaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white px-7 py-3.5 text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                    >
                      {secondaryCta.label}
                    </a>
                  ) : (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white px-7 py-3.5 text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                    >
                      {secondaryCta.label}
                    </Link>
                  )
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {!isCompact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 z-10"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
