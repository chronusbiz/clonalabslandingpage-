"use client";

import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionRail from "./SectionRail";

export interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Light or dark surface — controls title/description colours. Eyebrow always uses slash rail. */
  theme?: "light" | "dark";
  align?: "left" | "center";
  /** Tighter type + margins for full-viewport homepage sections */
  compact?: boolean;
  className?: string;
  aside?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
  compact = false,
  className = "",
  aside,
}: SectionHeadingProps) {
  const isLight = theme === "light";
  const isCenter = align === "center";

  const titleBlock = (
    <>
      <h2
        className={`font-heading max-w-4xl ${
          isCenter ? "mx-auto" : ""
        } ${
          compact
            ? isLight
              ? "font-black text-text-dark"
              : "font-bold text-white normal-case"
            : isLight
              ? "mb-5 text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight"
              : "mb-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-[0.08em] leading-[1.1]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`max-w-2xl leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } ${
            compact ? "" : "text-base md:text-lg"
          } ${isLight ? "text-text-dark-muted" : "text-text-light-muted"}`}
        >
          {description}
        </p>
      )}
    </>
  );

  return (
    <ScrollReveal
      className={`w-full text-left ${
        compact ? "fp-heading mb-0" : "mb-12 md:mb-16"
      } ${isCenter ? "text-center" : ""} ${className}`}
    >
      <SectionRail label={eyebrow} theme={isLight ? "light" : "dark"} />

      {aside ? (
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between ${
            compact ? "gap-4 md:gap-8" : "gap-8"
          }`}
        >
          <div className="max-w-3xl min-w-0 flex-1 text-left">{titleBlock}</div>
          <div className="shrink-0 self-start md:self-auto md:pb-0.5">{aside}</div>
        </div>
      ) : (
        <div className="text-left">{titleBlock}</div>
      )}
    </ScrollReveal>
  );
}
