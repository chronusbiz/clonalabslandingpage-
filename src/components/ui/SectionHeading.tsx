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
  className?: string;
  aside?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
  className = "",
  aside,
}: SectionHeadingProps) {
  const isLight = theme === "light";
  const isCenter = align === "center";

  const titleBlock = (
    <>
      <h2
        className={`font-heading mb-5 max-w-4xl ${
          isCenter ? "mx-auto" : ""
        } ${
          isLight
            ? "text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight"
            : "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-[0.08em] leading-[1.1]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } ${isLight ? "text-text-dark-muted" : "text-text-light-muted"}`}
        >
          {description}
        </p>
      )}
    </>
  );

  return (
    <ScrollReveal className={`mb-12 md:mb-16 w-full ${isCenter ? "text-center" : ""} ${className}`}>
      <SectionRail label={eyebrow} theme={isLight ? "light" : "dark"} />

      {aside ? (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">{titleBlock}</div>
          <div className="shrink-0 self-start md:self-auto">{aside}</div>
        </div>
      ) : (
        titleBlock
      )}
    </ScrollReveal>
  );
}
