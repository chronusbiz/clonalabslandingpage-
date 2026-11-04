"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import Wordmark from "./ui/Wordmark";
import { siteConfig, footerLinks, linkTargetProps } from "@/lib/constants";
import { isLinkVisible } from "@/lib/site-visibility";

const linkGroups: {
  number: string;
  heading: string;
  key: keyof typeof footerLinks;
}[] = [
  { number: "01", heading: "Company", key: "company" },
  { number: "02", heading: "Services", key: "services" },
  { number: "03", heading: "Products", key: "products" },
  { number: "04", heading: "Resources", key: "resources" },
];

const legalLinks = footerLinks.resources.filter((link) =>
  ["/privacy", "/terms", "/cookie-policy"].includes(link.href),
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative snap-start snap-always bg-dark-primary border-t border-card-dark-border overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] opacity-45"
          style={{
            background:
              "radial-gradient(ellipse at center top, color-mix(in srgb, var(--accent) 48%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="fp-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 min-w-0">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-white/50">/ Get started</span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/40 via-white/15 to-transparent" />
            </div>

            <h2 className="fp-title font-heading text-white mb-3">
              Let&apos;s make technology work{" "}
              <span className="gradient-text">better for your business.</span>
            </h2>

            <p className="fp-lead text-text-light-muted mb-5 max-w-xl">
              Tell us about your goals and systems—we&apos;ll help you explore the right next step.
            </p>

            <div className="flex flex-wrap gap-3">
              <MagneticButton strength={4}>
                <Link
                  href={siteConfig.bookingUrl}
                  {...linkTargetProps(siteConfig.bookingUrl)}
                  className="fp-btn group inline-flex items-center gap-2 font-semibold rounded-md bg-white text-dark-primary uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Discuss Your Project
                  <ArrowUpRight size={13} />
                </Link>
              </MagneticButton>
              <Link
                href="/#solutions"
                className="fp-btn group inline-flex items-center gap-2 font-medium rounded-md border border-white/25 text-white uppercase tracking-widest transition-all duration-300 hover:border-accent/50 hover:bg-white/5"
              >
                Explore Solutions
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full flex flex-col border border-card-dark-border bg-card-dark/60 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent/15 border border-accent/30 flex items-center justify-center text-accent-light">
                  <CalendarCheck size={16} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-white/40">15 min · No commitment</span>
              </div>
              <p className="fp-label text-accent-light mb-1.5">Talk to us</p>
              <h3 className="fp-card-title font-heading font-bold text-white mb-4">
                A real person, a real walkthrough.
              </h3>
              <ul className="space-y-2.5 mt-auto pt-4 border-t border-white/10">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-[14px] text-text-light-muted hover:text-white transition-colors">
                    <Mail size={14} className="text-accent-light shrink-0" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-[14px] text-text-light-muted hover:text-white transition-colors">
                    <Phone size={14} className="text-accent-light shrink-0" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 pt-6 border-t border-card-dark-border">
          {linkGroups.map((g) => (
            <div key={g.key} className="min-w-0 lg:col-span-2">
              <p className="text-[11px] text-accent-light/60 mb-2 tabular-nums">/{g.number}</p>
              <h4 className="text-[14px] font-heading font-bold text-white mb-3">{g.heading}</h4>
              <ul className="space-y-2">
                {footerLinks[g.key]
                  .filter((link) => isLinkVisible(link.href))
                  .slice(0, 5)
                  .map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...linkTargetProps(link.href)}
                        className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors line-clamp-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4 lg:pl-6 lg:border-l lg:border-white/10">
            <p className="text-[11px] text-accent-light/60 tabular-nums">/05</p>
            <h4 className="text-[14px] font-heading font-bold text-white -mt-2">Offices</h4>
            {siteConfig.offices.map((o) => (
              <address key={o.country} className="not-italic flex items-start gap-3">
                <span className="w-8 h-8 border border-card-dark-border flex items-center justify-center text-accent-light shrink-0">
                  <MapPin size={13} />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-heading font-bold text-white mb-0.5">{o.label}</p>
                  <p className="text-[12px] text-text-light-muted leading-snug">{o.lines.join(", ")}</p>
                </div>
              </address>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="fp-fill flex items-end overflow-hidden select-none pointer-events-none min-h-0"
        >
          <span
            className="font-heading font-bold leading-[0.8] tracking-tight text-transparent w-full text-center"
            style={{
              fontSize: "clamp(4rem, 15vw, 15rem)",
              WebkitTextStroke: "1px rgba(255,255,255,0.09)",
            }}
          >
            CLONALABS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-card-dark-border">
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <Link href="/" aria-label="Clonalabs home">
              <Wordmark className="text-lg" />
            </Link>
            <span className="text-[12px] text-text-light-muted/60">
              © {new Date().getFullYear()} {siteConfig.name}
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] text-text-light-muted/60 hover:text-accent-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-text-light-muted hover:text-accent-light transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Top
            <span className="w-8 h-8 border border-card-dark-border flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
