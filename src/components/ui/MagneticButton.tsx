"use client";

/**
 * MagneticButton
 * --------------
 * Wraps a button or link so it gently translates toward the cursor while
 * the cursor is inside (or just outside) its bounds. Apple-style polish —
 * subtle enough to feel like an accident, strong enough to feel premium.
 *
 * - Translation is capped at ±`strength` px (default 6) so it never looks janky.
 * - Uses Framer's `useSpring` for buttery deceleration without re-renders.
 * - Honors `prefers-reduced-motion` automatically (returns a no-op wrapper).
 * - The wrapper is `inline-block` so it doesn't fight grid/flex parents.
 *
 * Usage:
 *   <MagneticButton>
 *     <Link href="/contact" className="...">Talk to us</Link>
 *   </MagneticButton>
 */

import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  /** Max translation in pixels. Keep small (4–8) for professionalism. */
  strength?: number;
  /** Optional className passed to the wrapping motion.div. */
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 6,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring tuned for "natural settle" — no overshoot, no bounce.
  const springConfig = { stiffness: 250, damping: 22, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  if (prefersReducedMotion) {
    return <span className={`inline-block ${className}`}>{children}</span>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Distance from center, normalized to [-1, 1] across half the button width.
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, dx)) * strength);
    y.set(Math.max(-1, Math.min(1, dy)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
