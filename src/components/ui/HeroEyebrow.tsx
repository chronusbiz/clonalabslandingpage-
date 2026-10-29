"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { getHeroIcon } from "@/lib/hero-icons";

interface HeroEyebrowProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
  animated?: boolean;
}

export default function HeroEyebrow({
  label,
  icon,
  className = "",
  animated = true,
}: HeroEyebrowProps) {
  const Icon = icon ?? getHeroIcon(label);

  const block = (
    <div
      className={`inline-flex items-center gap-2 rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 backdrop-blur-sm ${className}`}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/45 bg-accent/20 text-accent-light">
        <Icon size={11} strokeWidth={2.25} aria-hidden />
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent-light">
        {label}
      </span>
    </div>
  );

  if (!animated) return block;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4"
    >
      {block}
    </motion.div>
  );
}
