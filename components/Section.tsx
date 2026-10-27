import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  innerClassName,
  tone = "default",
  compact = false,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "default" | "elevated" | "dark" | "meta" | "cta";
  compact?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "relative w-full",
        compact ? "py-16 sm:py-20" : "section-shell",
        tone === "elevated" && "bg-elevated",
        tone === "dark" && "section-cta",
        tone === "cta" && "section-cta",
        tone === "meta" && "section-meta",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-[2] mx-auto max-w-page px-4 sm:px-6",
          !compact && "section-inner",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "max-w-3xl font-display text-[1.85rem] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.05rem]",
        className,
      )}
    >
      {children}
    </p>
  );
}
