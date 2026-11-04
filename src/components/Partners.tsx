"use client";

import {
  Bot,
  Code2,
  Smartphone,
  FlaskConical,
  Users,
  Megaphone,
  Layers,
  FileText,
  Newspaper,
  Palette,
  ListChecks,
  MapPin,
  Boxes,
  Package,
  Globe2,
  BadgeCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import DarkSectionFx from "./ui/DarkSectionFx";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { trustPoints } from "@/lib/constants";

type Chip = { name: string; icon?: LucideIcon };

const CAPABILITY_STATS: {
  kicker: string;
  value: string;
  max: number;
  label: string;
  note: string;
  icon: LucideIcon;
}[] = [
  { kicker: "Services", value: "6", max: 6, label: "Service pillars", note: "AI, software, web & mobile, evaluation, delivery, growth", icon: Boxes },
  { kicker: "Products", value: "4", max: 6, label: "Live products", note: "Clonvo, ProTender, Breaking Portal, Genesis Studio", icon: Package },
  { kicker: "Delivery", value: "2", max: 6, label: "Delivery hubs", note: "Mississauga, Canada · Lahore, Pakistan", icon: Globe2 },
];

const TRUST_META: { icon: LucideIcon; desc: string }[] = [
  { icon: Layers, desc: "Ready platforms where they fit, custom delivery where they don't." },
  { icon: Bot, desc: "Applied to real workflows and bottlenecks, not demos." },
  { icon: BadgeCheck, desc: "We present only live, confirmed product scope." },
  { icon: MapPin, desc: "Mississauga and Lahore teams, one delivery process." },
];

const ROW_ONE: Chip[] = [
  { name: "AI systems", icon: Bot },
  { name: "Custom software", icon: Code2 },
  { name: "Web & mobile", icon: Smartphone },
  { name: "Evaluation", icon: FlaskConical },
  { name: "Product delivery", icon: Users },
  { name: "Digital growth", icon: Megaphone },
  { name: "Clonvo", icon: Layers },
];

const ROW_TWO: Chip[] = [
  { name: "ProTender", icon: FileText },
  { name: "Breaking Portal", icon: Newspaper },
  { name: "Genesis Studio", icon: Palette },
  { name: "Clear scope", icon: ListChecks },
  { name: "Canada + Pakistan", icon: MapPin },
];

function TrustChip({ chip }: { chip: Chip }) {
  const Icon = chip.icon;
  return (
    <div className="group/chip relative flex items-center gap-3 px-5 py-3.5 mx-2.5 border border-card-dark-border bg-gradient-to-b from-card-dark/80 to-card-dark/30 backdrop-blur-sm whitespace-nowrap cursor-default transition-all duration-300 ease-out hover:z-10 hover:scale-[1.05] hover:-translate-y-0.5 hover:border-accent/60 hover:from-card-dark hover:to-card-dark hover:shadow-[0_12px_30px_-8px_color-mix(in_srgb,var(--accent)_40%,transparent)]">
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120px 60px at 50% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {Icon ? (
        <Icon
          size={18}
          strokeWidth={1.8}
          className="relative text-text-light-muted/70 group-hover/chip:text-accent-light transition-colors duration-300"
        />
      ) : null}
      <span className="relative text-[13px] font-medium tracking-wide text-text-light-muted/75 group-hover/chip:text-white transition-colors duration-300">
        {chip.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  chips,
  direction = "left",
}: {
  chips: Chip[];
  direction?: "left" | "right";
}) {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`marquee-track flex w-max ${animationClass}`}>
        {[...chips, ...chips, ...chips, ...chips].map((chip, i) => (
          <TrustChip key={`${chip.name}-${i}`} chip={chip} />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative snap-start snap-always bg-dark-secondary border-t border-card-dark-border overflow-hidden"
    >
      <DarkSectionFx variant="soft" />

      <div className="fp-inner relative z-10">
        <SectionHeading
          compact
          theme="dark"
          eyebrow="Capability"
          title={
            <>
              Verified delivery capabilities.{" "}
              <span className="gradient-text">Practical AI.</span>
            </>
          }
          description="Products and services, clearly separated. Verified capabilities only — delivery hubs in Canada and Pakistan."
        />

        <ScrollReveal className="fp-fill">
          <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-[minmax(0,1fr)] gap-4 h-full">
            <div className="lg:col-span-7 grid grid-cols-3 gap-4 min-h-0">
              {CAPABILITY_STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="group relative flex flex-col min-h-0 overflow-hidden border border-card-dark-border bg-gradient-to-b from-card-dark/90 to-card-dark/40 p-5 transition-all duration-300 hover:border-accent/50 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
                  >
                    <span className="absolute top-0 inset-x-0 h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "color-mix(in srgb, var(--accent) 22%, transparent)" }}
                    />

                    <Icon
                      aria-hidden
                      strokeWidth={0.75}
                      className="pointer-events-none absolute right-3 top-[38%] -translate-y-1/2 w-[55%] h-auto max-h-[45%] text-white/[0.05] transition-all duration-500 group-hover:text-accent/15 group-hover:scale-105"
                    />

                    <div className="relative flex items-center justify-between">
                      <div className="w-10 h-10 border border-accent/30 bg-accent/10 flex items-center justify-center text-accent-light transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                        <Icon size={17} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/40">
                        {s.kicker}
                      </span>
                    </div>

                    <div className="relative mt-auto pt-4">
                      <p className="font-heading font-bold leading-none tabular-nums text-[clamp(3rem,7vh,5rem)] gradient-text mb-3">
                        {s.value}
                      </p>
                      <div className="flex gap-1 mb-3" aria-hidden>
                        {Array.from({ length: s.max }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-1 flex-1 transition-colors duration-500 ${
                              i < Number(s.value) ? "bg-accent group-hover:bg-accent-light" : "bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="font-heading font-bold text-white text-[16px] leading-tight mb-1">{s.label}</p>
                      <p className="text-[12.5px] text-text-light-muted leading-snug line-clamp-2">{s.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <ul className="lg:col-span-5 grid grid-rows-4 gap-2 min-h-0">
              {trustPoints.map((t, i) => {
                const meta = TRUST_META[i];
                const Icon = meta?.icon ?? BadgeCheck;
                return (
                  <li
                    key={t.label}
                    className="group relative flex items-center gap-4 px-4 min-h-0 overflow-hidden border border-card-dark-border bg-card-dark/50 transition-all duration-300 hover:border-accent/45 hover:bg-card-dark"
                  >
                    <span className="absolute left-0 inset-y-0 w-[2px] bg-accent origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100" />
                    <span className="font-heading text-[12px] text-white/25 tabular-nums w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-9 h-9 shrink-0 border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent-light transition-colors group-hover:border-accent/50 group-hover:bg-accent/15">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] text-white font-semibold leading-tight truncate">{t.label}</p>
                      {meta && (
                        <p className="text-[12px] text-text-light-muted/80 leading-snug truncate mt-0.5">{meta.desc}</p>
                      )}
                    </div>
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="shrink-0 text-accent-light/40 transition-colors group-hover:text-accent-light"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollReveal>

        <div
          className="marquee-group -mx-[var(--fp-pad-x)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div className="space-y-1">
            <MarqueeRow chips={ROW_ONE} direction="left" />
            <MarqueeRow chips={ROW_TWO} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
