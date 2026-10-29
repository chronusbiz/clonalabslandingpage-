"use client";

import { stats } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";
import SectionHeading from "./ui/SectionHeading";

export default function StatsSection() {
  return (
    <section className="py-14 lg:py-20 bg-light-primary border-y border-card-light-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "radial-gradient(ellipse 800px 300px at 50% 100%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="By the numbers"
          title="Measurable impact, not vanity metrics."
          align="center"
        />

        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-card-light-border border border-card-light-border overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white py-10 px-6 group hover:bg-light-primary transition-colors duration-300">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                  />
                </div>
                <div className="text-text-dark-muted text-xs uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </div>
                <div className="mt-4 mx-auto h-[2px] w-8 bg-card-light-border group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
