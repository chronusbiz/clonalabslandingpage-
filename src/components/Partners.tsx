"use client";

import Image from "next/image";
import {
  Lock,
  ShieldCheck,
  Layers,
  Quote,
  UserRoundCheck,
  FileText,
  Gauge,
  MapPin,
  BadgeCheck,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import DarkSectionFx from "./ui/DarkSectionFx";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { trustPoints } from "@/lib/constants";

/**
 * Partners — trust strip.
 *
 * Two marquee rows scroll in opposite directions. Each row's markup is
 * duplicated end-to-end so the CSS keyframes (translateX 0 → -50%) create
 * a seamless loop. The whole thing pauses on hover.
 */

type Chip = { name: string; icon?: LucideIcon; logo?: string };

const ROW_ONE: Chip[] = [
  { name: "WhatsApp Business Platform", logo: "/logos/meta.svg" },
  { name: "Instagram Messaging API", logo: "/logos/meta.svg" },
  { name: "Messenger Platform", logo: "/logos/meta.svg" },
  { name: "Unified inbox", icon: Inbox },
  { name: "Ops dashboard", icon: Gauge },
  { name: "White-label portal", icon: BadgeCheck },
  { name: "Web chat", icon: Layers },
];

const ROW_TWO: Chip[] = [
  { name: "AES-256 encryption", icon: Lock },
  { name: "Tenant isolation", icon: ShieldCheck },
  { name: "Cited AI replies", icon: Quote },
  { name: "Human handoff", icon: UserRoundCheck },
  { name: "DPA on Scale", icon: FileText },
  { name: "Canada + Pakistan", icon: MapPin },
];

function TrustChip({ chip }: { chip: Chip }) {
  const Icon = chip.icon;
  return (
    <div
      className="group/chip relative flex items-center gap-3 px-5 py-3.5 mx-2.5 rounded-xl border border-card-dark-border bg-gradient-to-b from-card-dark/80 to-card-dark/30 backdrop-blur-sm whitespace-nowrap cursor-default transition-all duration-300 ease-out hover:z-10 hover:scale-[1.08] hover:-translate-y-1 hover:border-accent/60 hover:from-card-dark hover:to-card-dark hover:shadow-[0_12px_30px_-8px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120px 60px at 50% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {chip.logo ? (
        <Image
          src={chip.logo}
          alt=""
          width={24}
          height={24}
          className="relative w-6 h-6 object-contain opacity-65 grayscale group-hover/chip:opacity-100 group-hover/chip:grayscale-0 transition-all duration-300"
        />
      ) : Icon ? (
        <Icon
          size={20}
          strokeWidth={1.8}
          className="relative text-text-light-muted/70 group-hover/chip:text-accent-light transition-colors duration-300"
        />
      ) : null}
      <span className="relative text-[13px] font-medium text-text-light-muted/70 group-hover/chip:text-white transition-colors duration-300 tracking-wide">
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
  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="relative overflow-hidden py-2.5">
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
      className="relative py-14 lg:py-20 bg-dark-secondary border-t border-card-dark-border overflow-hidden"
    >
      <DarkSectionFx variant="soft" />

      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
          <SectionHeading
            theme="dark"
            eyebrow="Trust"
            title={
              <>
                Built on Meta&apos;s APIs.{" "}
                <span className="gradient-text">Secured by default.</span>
              </>
            }
            description="Clonvo talks to customers through WhatsApp, Instagram and Messenger using Meta's official APIs, encrypts data with AES-256 and isolates every client in its own tenant. Our teams sit in Canada and Pakistan."
            className="mb-10"
          />

          <ScrollReveal>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {trustPoints.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2.5 px-4 py-3 border border-card-dark-border bg-card-dark/50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light shrink-0" />
                  <span className="text-[13px] text-white font-medium">{t.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div
          className="marquee-group relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="space-y-2">
            <MarqueeRow chips={ROW_ONE} direction="left" />
            <MarqueeRow chips={ROW_TWO} direction="right" />
          </div>

          <p className="mt-6 text-center text-xs text-text-light-muted/50">
            Hover to pause
          </p>
        </div>
      </div>
    </section>
  );
}
