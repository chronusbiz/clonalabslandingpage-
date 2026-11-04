import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { linkTargetProps } from "@/lib/constants";

interface Cta {
  label: string;
  href: string;
}

interface LightPageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Optional extra content below the description (badges, notes). */
  children?: ReactNode;
}

/**
 * Light, professional page hero for the Canadian-market pages.
 * A thin dark band sits behind the fixed navbar so it reads cleanly
 * against the white hero surface below it.
 */
export default function LightPageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  children,
}: LightPageHeroProps) {
  return (
    <>
      <div className="h-20 bg-dark-primary" aria-hidden="true" />
      <section className="bg-light-primary border-b border-card-light-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.25em] font-semibold text-accent">
            / {eyebrow}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight max-w-4xl mb-5">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-accent">{highlight}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="max-w-2xl text-base md:text-lg text-text-dark-muted leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  {...linkTargetProps(primaryCta.href)}
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
                >
                  {primaryCta.label}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  {...linkTargetProps(secondaryCta.href)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-card-light-border bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-text-dark transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
