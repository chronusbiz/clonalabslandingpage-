"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Lock,
  Globe,
  Inbox,
  CalendarCheck,
} from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import Wordmark from "./ui/Wordmark";
import { siteConfig, footerLinks, linkTargetProps } from "@/lib/constants";
import { isLinkVisible } from "@/lib/site-visibility";

const linkGroups: {
  number: string;
  heading: string;
  tagline: string;
  key: keyof typeof footerLinks;
}[] = [
  { number: "01", heading: "Product", tagline: "What Clonvo does", key: "product" },
  { number: "02", heading: "For agencies", tagline: "Resell under your brand", key: "agencies" },
  { number: "03", heading: "Company", tagline: "Clonalabs", key: "company" },
  { number: "04", heading: "Legal", tagline: "Policies", key: "legal" },
];

const trustItems = [
  { icon: Inbox, label: "WhatsApp, Instagram, Messenger" },
  { icon: Lock, label: "AES-256 encryption" },
  { icon: ShieldCheck, label: "Tenant isolation" },
  { icon: Globe, label: "Canada + Pakistan" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex flex-col bg-dark-primary border-t border-card-dark-border overflow-hidden">
      {/* Decorative layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-50 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse at center top, color-mix(in srgb, var(--accent) 50%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[560px] h-[560px] rounded-full blur-[160px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[640px] h-[640px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent-light) 14%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ═══════════════ CTA section ═══════════════ */}
      <section className="relative z-10 border-b border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 pt-24 lg:pt-32 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: headline + CTAs */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase">
                  / Get started
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-black text-white leading-[0.95] tracking-tight mb-8">
                Put your name
                <br />
                on{" "}
                <span className="headline-highlight gradient-text">
                  Clonvo.
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-text-light-muted leading-relaxed max-w-2xl mb-10">
                See how agencies resell AI inquiry handling under their own brand. In 15 minutes we will show you the product, the white-label portal and the plans that fit your clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <MagneticButton strength={6}>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-200 shadow-lg shadow-accent/10 hover:shadow-accent/30"
                  >
                    {siteConfig.bookingLabel}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white hover:border-accent/60 hover:bg-accent/10 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  Send a message
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 pt-8 border-t border-white/10 max-w-3xl">
                {trustItems.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.label} className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-md border border-accent/25 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={12} className="text-accent-light" />
                      </span>
                      <span className="text-[12px] text-text-light-muted leading-tight">
                        {t.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: contact card */}
            <div className="lg:col-span-5 lg:pl-6 xl:pl-10 lg:border-l lg:border-white/10">
              <div className="relative bg-gradient-to-br from-card-dark/80 via-card-dark/50 to-card-dark/20 backdrop-blur-sm border border-card-dark-border p-8 lg:p-10 overflow-hidden">
                <div
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--accent) 65%, transparent) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent/15 border border-accent/30 flex items-center justify-center text-accent-light">
                      <CalendarCheck size={18} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                      15 min · No commitment
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent-light font-semibold mb-3">
                    Talk to us
                  </p>
                  <h3 className="font-heading text-2xl lg:text-3xl font-black text-white mb-3 leading-[1.1] tracking-tight">
                    A real person, a real walkthrough.
                  </h3>
                  <p className="text-text-light-muted text-sm leading-relaxed mb-7">
                    Book a slot, or write or call. We reply from Canada and Pakistan, so someone is usually around.
                  </p>

                  <ul className="space-y-3.5 text-sm">
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="group flex items-center gap-3 text-text-light-muted hover:text-white transition-colors"
                      >
                        <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                          <Mail size={14} />
                        </span>
                        {siteConfig.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="group flex items-center gap-3 text-text-light-muted hover:text-white transition-colors"
                      >
                        <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                          <Phone size={14} />
                        </span>
                        {siteConfig.phoneDisplay}
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-text-light-muted hover:text-white transition-colors"
                      >
                        <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                          <Globe size={14} />
                        </span>
                        clonvo.chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Link grid + offices ═══════════════ */}
      <section className="relative z-10 border-b border-card-dark-border flex-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4 lg:pr-8">
              <Link href="/" className="inline-flex items-center mb-6 group" aria-label="Clonalabs - Home">
                <Wordmark className="text-3xl transition-opacity duration-300 group-hover:opacity-80" />
              </Link>
              <p className="text-[15px] text-text-light-muted leading-relaxed max-w-sm">
                White-label AI inquiry handling for agencies. Clonalabs runs {siteConfig.productName}, the AI inbox for WhatsApp, Instagram and Messenger, so you can sell it as your own.
              </p>
            </div>

            {/* Link groups */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase">
                  / Explore
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                {linkGroups.map((g) => (
                  <div key={g.key}>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-mono text-[10px] text-accent-light/60 tracking-widest">
                        /{g.number}
                      </span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-white tracking-tight mb-1 leading-tight">
                      {g.heading}
                    </h4>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider mb-5">
                      {g.tagline}
                    </p>
                    <ul className="space-y-2.5">
                      {footerLinks[g.key].filter((link) => isLinkVisible(link.href)).map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            {...linkTargetProps(link.href)}
                            className="group inline-flex items-center gap-1.5 text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent-light transition-colors" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Offices */}
          <div className="mt-16 pt-10 border-t border-card-dark-border">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] text-accent-light/60 tracking-widest">
                /05
              </span>
              <h4 className="font-heading text-sm font-bold text-white tracking-tight">
                Offices
              </h4>
              <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {siteConfig.offices.map((o) => (
                <address key={o.country} className="not-italic flex items-start gap-3">
                  <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light flex-shrink-0">
                    <MapPin size={14} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-white mb-1.5">
                      {o.label}
                    </p>
                    <p className="text-[13px] text-text-light-muted leading-relaxed">
                      {o.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </address>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Bottom bar ═══════════════ */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-text-light-muted/70">
            <span>
              &copy; {siteConfig.founded}&ndash;{new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden md:inline text-white/15">·</span>
            {footerLinks.legal.map((link, i) => (
              <span key={link.label} className="flex items-center gap-x-6">
                <Link
                  href={link.href}
                  className="hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
                {i < footerLinks.legal.length - 1 && (
                  <span className="hidden md:inline text-white/15">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-accent-light animate-pulse" />
              Onboarding new agencies
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-text-light-muted hover:text-accent-light transition-colors cursor-pointer uppercase tracking-widest"
              aria-label="Scroll back to top"
            >
              <span className="hidden sm:inline">Back to top</span>
              <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
