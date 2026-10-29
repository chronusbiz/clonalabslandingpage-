"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { siteConfig, productPillars } from "@/lib/constants";

const pillarDetails: { subtitle: string; points: string[] }[] = [
  {
    subtitle: "One place for every conversation",
    points: [
      "WhatsApp, Instagram and Messenger",
      "Shared inbox for the whole team",
      "Ops dashboard: open, answered, escalated",
    ],
  },
  {
    subtitle: "Answers that show their sources",
    points: [
      "Replies grounded in uploaded docs",
      "Citation on every answer",
      "Works around the clock",
    ],
  },
  {
    subtitle: "Humans stay in the loop",
    points: [
      "Handoff with full conversation context",
      "You decide what the AI handles",
      "No repeating the question to a customer",
    ],
  },
  {
    subtitle: "Your brand, our platform",
    points: [
      "Present Clonvo as your own product",
      "No revenue share, no per-seat fees",
      "AES-256 and isolated tenants per client",
    ],
  },
];

const serviceCategories = productPillars.map((p, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: p.title,
  description: p.description,
  subtitle: pillarDetails[i].subtitle,
  items: pillarDetails[i].points,
}));

function AbstractShape({ index, hovered }: { index: number; hovered: boolean }) {
  const shapeVariants = {
    idle: { scale: 1, filter: "blur(0px)", rotate: 0 },
    hover: { scale: 0.88, filter: "blur(4px)", rotate: 3 },
  };
  const springConfig = { type: "spring" as const, stiffness: 120, damping: 20 };

  if (index === 0) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
        <div className="w-32 h-32 bg-accent" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }} />
      </motion.div>
    );
  }
  if (index === 1) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
        <div className="w-32 h-32 rounded-full border-[16px] border-accent" />
      </motion.div>
    );
  }
  if (index === 2) {
    return (
      <motion.div
        className="grid grid-cols-2 gap-3"
        animate={hovered ? { scale: 0.88, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
        transition={springConfig}
      >
        {[0, 1, 2, 3].map((j) => (
          <div key={j} className="w-14 h-14 rounded-full bg-accent" />
        ))}
      </motion.div>
    );
  }
  return (
    <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
      <div className="w-32 h-32 bg-accent" style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 55%, 0% 80%, 0% 20%)" }} />
    </motion.div>
  );
}

function ServiceCard({ cat, index }: { cat: typeof serviceCategories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <SpotlightCard
      variant="light"
      className="group border border-card-light-border bg-white overflow-hidden flex flex-col self-start w-full"
    >
      <motion.div
        className="relative flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="relative h-44 bg-light-primary flex items-center justify-center overflow-hidden border-b border-card-light-border">
          <AbstractShape index={index} hovered={hovered} />
          <span className="absolute top-4 left-5 text-[11px] font-mono tracking-widest text-text-dark-muted/60">
            /{cat.number}
          </span>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
            {cat.subtitle}
          </p>
          <h3 className="font-heading text-xl font-bold text-text-dark mb-3 leading-tight">
            {cat.title}
          </h3>
          <p className="text-sm text-text-dark-muted leading-relaxed mb-4">
            {cat.description}
          </p>

          <AnimatePresence initial={false}>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <ul className="pt-4 border-t border-card-light-border space-y-1.5">
                  {cat.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      className="flex items-start gap-1.5 py-0.5 text-[13px] text-text-dark-muted"
                    >
                      <Check size={13} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={siteConfig.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest hover:text-accent-hover transition-colors"
          >
            <span>See it on clonvo.chat</span>
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="product" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="The product"
          title={
            <>
              Four pillars. <br />One white-label inbox.
            </>
          }
          description="Everything an agency needs to put AI inquiry handling in front of clients: a unified Meta inbox, cited AI replies, human handoff, and a portal that carries your brand."
          aside={
            <a
              href={siteConfig.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Visit clonvo.chat
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        {/* Desktop: card grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} className="self-start">
              <ServiceCard cat={cat} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="border border-card-light-border bg-white overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
                  aria-expanded={expandedIndex === i}
                  aria-controls={`pillar-panel-${i}`}
                >
                  <h3 className="font-heading text-lg font-bold text-text-dark">{cat.title}</h3>
                  {expandedIndex === i ? <Minus size={18} className="text-accent" /> : <Plus size={18} className="text-text-dark-muted" />}
                </button>
                <AnimatePresence initial={false}>
                  {expandedIndex === i && (
                    <motion.div
                      id={`pillar-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-text-dark-muted leading-relaxed mb-4">{cat.description}</p>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-text-dark-muted">
                              <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
