"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import DarkSectionFx from "./ui/DarkSectionFx";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border border-card-dark-border rounded-md overflow-hidden transition-colors duration-300 hover:border-accent/30">
      <button
        id={triggerId}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-heading text-base md:text-lg font-bold text-text-light pr-4 group-hover:text-accent-light transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-accent-light"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Always in DOM for SEO — visually collapsed when closed */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 md:px-6 md:pb-6">
          <p className="text-text-light-muted leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 lg:py-20 bg-dark-secondary overflow-hidden">
      <DarkSectionFx variant="soft" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about reselling Clonvo with Clonalabs."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
