"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { linkTargetProps, navLinks, navMega, siteConfig } from "@/lib/constants";
import Wordmark from "./Wordmark";

type MegaKey = keyof typeof navMega;

const MEGA_FOR: Partial<Record<string, MegaKey>> = {
  Engagements: "engagements",
  Capabilities: "capabilities",
  Products: "products",
  Company: "company",
};

const GRID_COLS: Record<MegaKey, string> = {
  engagements: "sm:grid-cols-3",
  capabilities: "sm:grid-cols-2 xl:grid-cols-3",
  products: "sm:grid-cols-2",
  company: "sm:grid-cols-2 xl:grid-cols-3",
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<MegaKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  }, [clearClose]);

  const openPanel = useCallback(
    (key: MegaKey) => {
      clearClose();
      setOpenMega(key);
    },
    [clearClose]
  );

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
    setMobileExpand(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("touchstart", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("touchstart", onPointer);
    };
  }, []);

  const elevated = scrolled || !!openMega || mobileOpen;

  return (
    <>
      {openMega && (
        <button
          type="button"
          className="hidden lg:block fixed inset-0 z-[90] bg-ink/40 cursor-default border-0"
          aria-label="Close menu"
          onClick={() => setOpenMega(null)}
        />
      )}

      <header
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-[100] isolate border-b border-border transition-shadow duration-200 ${
          elevated
            ? "shadow-[0_8px_24px_-12px_rgba(11,18,32,0.18)]"
            : ""
        }`}
        style={{ backgroundColor: "var(--surface)" }}
        onMouseLeave={scheduleClose}
        onMouseEnter={clearClose}
      >
        <div
          className="container-site grid grid-cols-[auto_1fr_auto] items-center gap-4"
          style={{ height: "var(--nav-h)" }}
        >
          <Link href="/" className="shrink-0" aria-label="ClonaLabs home">
            <Wordmark className="text-[1.375rem] text-ink" />
          </Link>

          <nav
            className="hidden lg:flex items-center justify-center gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const megaKey = MEGA_FOR[link.label];
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (!megaKey) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[0.875rem] font-medium tracking-[-0.01em] rounded-[var(--radius)] transition-colors ${
                      active
                        ? "text-ink"
                        : "text-text-muted hover:text-ink hover:bg-surface-muted"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-accent rounded-full"
                        aria-hidden
                      />
                    )}
                  </Link>
                );
              }

              const open = openMega === megaKey;
              return (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.875rem] font-medium tracking-[-0.01em] rounded-[var(--radius)] transition-colors ${
                      open || active
                        ? "text-ink bg-surface-muted"
                        : "text-text-muted hover:text-ink hover:bg-surface-muted"
                    }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-controls={`${menuId}-panel`}
                    onClick={() => setOpenMega(open ? null : megaKey)}
                    onMouseEnter={() => openPanel(megaKey)}
                    onFocus={() => openPanel(megaKey)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      aria-hidden
                      className={`opacity-60 transition-transform duration-200 ${
                        open ? "rotate-180 opacity-100" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href={siteConfig.bookingUrl}
              {...linkTargetProps(siteConfig.bookingUrl)}
              className="btn btn-primary hidden sm:inline-flex !h-10 !px-4 text-[0.8125rem]"
            >
              {siteConfig.bookingLabel}
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border text-ink hover:bg-surface-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mega panel */}
        {openMega && (
          <div
            id={`${menuId}-panel`}
            role="region"
            aria-label={`${navMega[openMega].title} menu`}
            className="hidden lg:block absolute inset-x-0 top-full border-b border-border bg-surface"
            onMouseEnter={clearClose}
          >
            <div className="container-site py-0">
              <div className="grid grid-cols-12 min-h-[280px]">
                <aside className="col-span-12 lg:col-span-3 bg-surface-muted/70 border-r border-border px-6 py-8 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent mb-3">
                      {navMega[openMega].title}
                    </p>
                    <p className="font-display text-[1.35rem] leading-snug text-ink tracking-[-0.02em]">
                      {navMega[openMega].blurb}
                    </p>
                  </div>
                  <Link
                    href={navMega[openMega].cta.href}
                    className="mt-8 inline-flex items-center gap-2 self-start rounded-[var(--radius)] bg-ink px-4 py-2.5 text-[0.8125rem] font-semibold text-text-on-ink hover:bg-ink-elevated transition-colors group"
                    onClick={() => setOpenMega(null)}
                  >
                    {navMega[openMega].cta.label}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </aside>

                <div className="col-span-12 lg:col-span-9 px-4 py-6 lg:px-8 lg:py-8">
                  <ul
                    className={`grid grid-cols-1 ${GRID_COLS[openMega]} gap-1`}
                  >
                    {navMega[openMega].items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group relative flex flex-col gap-1.5 rounded-md border border-transparent px-4 py-4 hover:border-border hover:bg-surface-muted/80 transition-colors h-full"
                          onClick={() => setOpenMega(null)}
                        >
                          <span
                            className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-center"
                            aria-hidden
                          />
                          <span className="flex items-start justify-between gap-3 pl-1">
                            <span className="text-[0.9375rem] font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                              {item.label}
                            </span>
                            {"meta" in item && item.meta ? (
                              <span
                                className={`shrink-0 mt-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-sm ${
                                  item.meta === "Live"
                                    ? "text-status-live bg-[var(--status-live-bg)]"
                                    : item.meta === "Beta"
                                      ? "text-status-beta bg-[var(--status-beta-bg)]"
                                      : "text-text-muted bg-surface-muted"
                                }`}
                              >
                                {item.meta}
                              </span>
                            ) : null}
                          </span>
                          <span className="pl-1 text-[0.8125rem] text-text-muted leading-relaxed">
                            {item.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden absolute inset-x-0 top-full max-h-[min(80dvh,calc(100dvh-var(--nav-h)))] overflow-y-auto bg-surface border-t border-border shadow-[0_16px_40px_-12px_rgba(11,18,32,0.2)]">
            <nav className="container-site py-3 pb-8" aria-label="Mobile">
              {navLinks.map((link) => {
                const megaKey = MEGA_FOR[link.label];
                if (!megaKey) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center border-b border-border py-3.5 text-[0.9375rem] font-medium text-ink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                }
                const panel = navMega[megaKey];
                const expanded = mobileExpand === megaKey;
                return (
                  <div key={link.label} className="border-b border-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-[0.9375rem] font-medium text-ink"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpand(expanded ? null : megaKey)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`text-text-muted transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded && (
                      <div className="pb-3 space-y-0.5">
                        {panel.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-[var(--radius)] px-3 py-3 hover:bg-surface-muted"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="block text-[0.875rem] font-semibold text-ink">
                              {item.label}
                            </span>
                            <span className="block text-[0.8125rem] text-text-muted mt-0.5 leading-snug">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href={panel.cta.href}
                          className="inline-flex items-center gap-2 mx-3 mt-1 mb-1 text-[0.8125rem] font-semibold text-accent"
                          onClick={() => setMobileOpen(false)}
                        >
                          {panel.cta.label}
                          <ArrowRight size={14} aria-hidden />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                href={siteConfig.bookingUrl}
                {...linkTargetProps(siteConfig.bookingUrl)}
                className="btn btn-primary mt-5 w-full"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.bookingLabel}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Reserves space so page content never slides under the fixed bar */}
      <div style={{ height: "var(--nav-h)" }} aria-hidden />
    </>
  );
}
