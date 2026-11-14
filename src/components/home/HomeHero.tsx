"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { linkTargetProps, siteConfig } from "@/lib/constants";

export default function HomeHero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="relative isolate z-0 min-h-[calc(100svh-var(--nav-h))] flex items-center overflow-hidden bg-ink">
      {/* Abstract video plane — clipped inside the section only */}
      {!reduceMotion ? (
        <video
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
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
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,#1a2438_0%,#0b1220_55%,#070b14_100%)]"
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/78 to-ink/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-[50%] w-[60%] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at left bottom, color-mix(in srgb, var(--accent) 18%, transparent), transparent 68%)",
        }}
        aria-hidden
      />

      <div className="relative container-site w-full py-16 md:py-20">
        <div className="max-w-[38rem] lg:max-w-[42rem]">
          <p className="label text-text-on-ink-muted mb-5">
            Mississauga · Lahore
          </p>

          <p className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-text-on-ink mb-6">
            Clona<span className="text-accent">Labs</span>
          </p>

          <h1 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-text-on-ink max-w-[18ch]">
            Technology that works harder for your business.
          </h1>

          <p className="mt-6 text-[1.125rem] leading-[1.65] text-text-on-ink-muted max-w-[34rem]">
            ClonaLabs helps Canadian businesses turn AI and software ideas into
            production systems with clear scope, senior ownership and
            handover-ready delivery.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={siteConfig.bookingUrl}
              {...linkTargetProps(siteConfig.bookingUrl)}
              className="btn btn-primary"
            >
              {siteConfig.bookingLabel}
            </Link>
            <Link
              href="/engagements"
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-text-on-ink/80 hover:text-text-on-ink transition-colors"
            >
              See engagements
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <dl className="mt-14 pt-8 border-t border-white/12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              { v: "3", l: "Engagements" },
              { v: "6", l: "Capabilities" },
              { v: "4", l: "Products" },
              { v: "2", l: "Hubs" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-text-on-ink-muted mb-1">
                  {s.l}
                </dt>
                <dd className="font-display text-2xl text-text-on-ink">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
