"use client";

/**
 * SpotlightCard
 * -------------
 * Wraps a card with a subtle radial "spotlight" that follows the cursor.
 * Matches the Linear / Vercel / Resend pattern — soft cyan glow, no flash,
 * pure CSS variables (no re-renders on mousemove).
 *
 * Usage:
 *   <SpotlightCard className="border border-card-light-border bg-white">
 *     ...your card content...
 *   </SpotlightCard>
 *
 * Defaults are tuned for the LIGHT card surfaces used on the homepage
 * (Services / Industries / Insights). For dark surfaces, pass
 * `variant="dark"` or override `glow` / `size`.
 */

import { ReactNode, useRef, useCallback } from "react";

type Variant = "light" | "dark";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Visual context — picks a sensible glow color/opacity per surface. */
  variant?: Variant;
  /** Optional override: any valid CSS color (e.g. `rgba(200,16,46,0.18)`). */
  glow?: string;
  /** Spotlight diameter in px. Larger = softer/wider. Default 380. */
  size?: number;
  /** Disables the effect (e.g. for reduced-motion or testing). */
  disabled?: boolean;
}

const DEFAULT_GLOW: Record<Variant, string> = {
  light: "color-mix(in srgb, var(--accent) 10%, transparent)",
  dark: "color-mix(in srgb, var(--accent-light) 18%, transparent)",
};

export default function SpotlightCard({
  children,
  className = "",
  variant = "light",
  glow,
  size = 380,
  disabled = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    },
    [disabled]
  );

  const handleEnter = useCallback(() => {
    if (disabled || !ref.current) return;
    ref.current.style.setProperty("--spotlight-opacity", "1");
  }, [disabled]);

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty("--spotlight-opacity", "0");
  }, []);

  const color = glow ?? DEFAULT_GLOW[variant];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative isolate ${className}`}
      style={
        {
          "--spotlight-opacity": "0",
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay — sits above content but pointer-events-none so
          clicks/links inside the card still work. Uses a radial gradient
          centered on the cursor position via CSS variables. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--spotlight-opacity)",
          background: `radial-gradient(${size}px circle at var(--mx) var(--my), ${color}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
