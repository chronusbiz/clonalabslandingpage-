"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { productPillars, servicePillarDetails } from "@/lib/constants";

const serviceCategories = productPillars.map((p, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: p.title,
  description: p.description,
  subtitle: servicePillarDetails[i]?.subtitle ?? "Capability",
  items: servicePillarDetails[i]?.points ?? [],
}));

function AbstractShape({ index, hovered }: { index: number; hovered: boolean }) {
  const shapeVariants = {
    idle: { scale: 1, filter: "blur(0px)", rotate: 0 },
    hover: { scale: 0.9, filter: "blur(3px)", rotate: 2 },
  };
  const spring = { type: "spring" as const, stiffness: 120, damping: 20 };
  const kind = index % 6;

  if (kind === 0) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={spring}>
        <div className="w-28 h-28 bg-accent" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }} />
      </motion.div>
    );
  }
  if (kind === 1) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={spring}>
        <div className="w-28 h-28 rounded-full border-[14px] border-accent" />
      </motion.div>
    );
  }
  if (kind === 2) {
    return (
      <motion.div className="grid grid-cols-2 gap-2" animate={hovered ? { scale: 0.9 } : { scale: 1 }} transition={spring}>
        {[0, 1, 2, 3].map((j) => (
          <div key={j} className="w-11 h-11 rounded-full bg-accent" />
        ))}
      </motion.div>
    );
  }
  if (kind === 3) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={spring}>
        <div className="w-28 h-28 bg-accent" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
      </motion.div>
    );
  }
  if (kind === 4) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={spring} className="relative">
        <div className="w-24 h-24 rounded-xl border-[14px] border-accent rotate-12" />
        <div className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-accent" />
      </motion.div>
    );
  }
  return (
    <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={spring}>
      <div className="w-24 h-24 bg-accent" style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 55%, 0% 80%, 0% 20%)" }} />
    </motion.div>
  );
}

const FLOATING_SYMBOLS = [
  { char: "◇", className: "top-[12%] left-[4%] text-2xl opacity-[0.12] rotate-12" },
  { char: "+", className: "top-[20%] right-[6%] text-3xl opacity-[0.1]" },
  { char: "○", className: "top-[48%] left-[3%] text-xl opacity-[0.14]" },
  { char: "△", className: "bottom-[28%] right-[4%] text-2xl opacity-[0.12] rotate-12" },
  { char: "✦", className: "bottom-[16%] left-[12%] text-lg opacity-[0.12]" },
  { char: "/", className: "top-[55%] right-[18%] text-4xl opacity-[0.08] -rotate-12" },
];

function ServiceCard({
  cat,
  index,
}: {
  cat: (typeof serviceCategories)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <SpotlightCard
      variant="light"
      className="group border border-card-light-border bg-white overflow-hidden flex flex-col w-[min(82vw,380px)] shrink-0"
    >
      <motion.div
        className="relative flex flex-col h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-[min(19vh,9.5rem)] bg-[#f3f4f6] flex items-center justify-center overflow-hidden border-b border-card-light-border">
          <span className="pointer-events-none absolute top-3 right-4 font-mono text-accent/25 text-lg" aria-hidden>
            {["◇", "+", "○", "△", "□", "✦"][index % 6]}
          </span>
          <AbstractShape index={index} hovered={hovered} />
          <span className="absolute top-3 left-4 fp-label text-text-dark-muted/55">/{cat.number}</span>
        </div>

        <div className="flex flex-col flex-1" style={{ padding: "var(--fp-card-pad)" }}>
          <p className="fp-label text-accent mb-2">{cat.subtitle}</p>
          <h3 className="fp-card-title font-heading font-bold text-text-dark mb-2.5 line-clamp-2 min-h-[2.5em]">
            {cat.title}
          </h3>
          <p className="fp-body text-text-dark-muted line-clamp-4 mb-4">{cat.description}</p>

          <AnimatePresence initial={false}>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <ul className="pt-2 border-t border-card-light-border space-y-1 mb-2">
                  {cat.items.slice(0, 3).map((item) => (
                    <li key={item} className="fp-body flex items-start gap-1.5 text-text-dark-muted">
                      <Check size={11} className="mt-0.5 shrink-0 text-accent" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="/contact"
            className="fp-label mt-auto pt-2 inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors tracking-[0.14em]"
          >
            Explore capability
            <ArrowUpRight size={11} />
          </a>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const loop = [...serviceCategories, ...serviceCategories];

  return (
    <section id="capabilities" className="relative snap-start snap-always bg-light-primary scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        {FLOATING_SYMBOLS.map((s) => (
          <span key={`${s.char}-${s.className}`} className={`absolute font-mono text-accent leading-none ${s.className}`}>
            {s.char}
          </span>
        ))}
      </div>

      <div className="fp-inner relative z-10">
        <SectionHeading
          compact
          eyebrow="Capabilities"
          title={
            <>
              Six capability areas,{" "}
              <span className="gradient-text">one delivery process.</span>
            </>
          }
          description="Pick a single capability or combine them. Every project follows the same scoped, handover-ready approach."
          aside={
            <a
              href="/contact"
              className="fp-btn group inline-flex items-center gap-2 border border-text-dark/10 text-text-dark font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Book a technical call
              <ArrowUpRight size={13} />
            </a>
          }
        />

        <div
          className="marquee-group relative fp-fill justify-center -mx-[var(--fp-pad-x)]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
          }}
        >
          {prefersReducedMotion ? (
            <div className="overflow-x-auto px-[var(--fp-pad-x)] pb-1">
              <div className="flex w-max gap-4">
                {serviceCategories.map((cat, i) => (
                  <ServiceCard key={cat.title} cat={cat} index={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="marquee-track flex w-max gap-4 py-3 animate-marquee" style={{ animationDuration: "38s" }}>
              {loop.map((cat, i) => (
                <ServiceCard key={`${cat.title}-${i}`} cat={cat} index={i % serviceCategories.length} />
              ))}
            </div>
          )}
          <p className="fp-label mt-3 text-center text-text-dark-muted/50 tracking-[0.16em]">
            Hover to pause · scrolls right to left
          </p>
        </div>
      </div>
    </section>
  );
}
