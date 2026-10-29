"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // Initial state honors reduced-motion synchronously to avoid the
  // setState-in-effect anti-pattern. SSR renders 0 (matches motion path);
  // first client render either jumps to value (reduced) or animates from 0.
  const [count, setCount] = useState(() => (getPrefersReducedMotion() ? value : 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (getPrefersReducedMotion()) {
      hasAnimated.current = true;
      return;
    }

    let raf = 0;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.round(eased * value));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    };

    const el = ref.current;
    if (!el) {
      animate();
      return;
    }

    // If the element is already in view at mount, animate immediately.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight && rect.bottom > 0) {
      animate();
      return;
    }

    // Otherwise use IntersectionObserver, with a hard safety timeout fallback
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.01 }
    );
    observer.observe(el);

    // Safety net: force animation after 3 seconds so counters NEVER display 0 permanently.
    const safety = window.setTimeout(() => {
      if (!hasAnimated.current) {
        animate();
        observer.disconnect();
      }
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
