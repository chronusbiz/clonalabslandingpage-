"use client";

import { useEffect, useRef, useState } from "react";

export function GradientMouse() {
  const orb = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || reduce.matches) return;

    setReady(true);
    target.current = { x: window.innerWidth / 2, y: window.innerHeight * 0.35 };
    pos.current = { ...target.current };

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (orb.current) {
        orb.current.style.left = `${pos.current.x}px`;
        orb.current.style.top = `${pos.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!ready) return null;

  return <div ref={orb} className="gradient-orb" aria-hidden />;
}
