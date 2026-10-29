"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { navLinks, siteConfig, linkTargetProps } from "@/lib/constants";
import Wordmark from "./ui/Wordmark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the drawer when the route changes. Syncing UI to an external store
  // (the router) is the canonical use case for setState-in-effect, so the lint
  // warning is intentionally suppressed. A ref guard avoids re-running on
  // incidental re-renders.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ scrolled ? "bg-dark-primary/95 glass-effect shadow-lg shadow-black/20" : "bg-dark-primary/70 glass-effect" }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group" aria-label="Clonalabs - Home">
              <Wordmark className="text-2xl transition-opacity duration-300 group-hover:opacity-80" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...linkTargetProps(link.href)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 hover:bg-white/5 ${ pathname === link.href ? "text-accent-light" : "text-text-light-muted hover:text-accent-light" }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("clonalabs:open-cmdk"))}
                className="ml-2 hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-card-dark-border bg-card-dark/50 hover:border-white/20 hover:bg-white/5 text-text-light-muted hover:text-white transition-all duration-300 cursor-pointer text-xs"
                aria-label="Open quick search (Ctrl+K or Command+K)"
                title="Quick search (Ctrl+K / ⌘K)"
              >
                <Search size={12} />
                <span>Quick search</span>
                <kbd className="px-1.5 py-0.5 text-[9px] font-mono border border-card-dark-border rounded bg-dark-primary/50 ml-2">⌘K / Ctrl+K</kbd>
              </button>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 group inline-flex items-center gap-2 font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary hover:bg-accent hover:text-white px-6 py-2.5 text-sm shadow-sm shadow-black/10 hover:shadow-md hover:shadow-accent/30 active:scale-[0.97]"
              >
                {siteConfig.bookingLabel}
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text-light -mr-2 p-3 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer.
          Each link explicitly closes the drawer on tap — the pathname effect
          already does this, but on slow networks (or for same-page anchors,
          where the pathname does not change) it would otherwise leave the
          drawer covering the page. Each link is full-width with py-3 so tap
          targets stay comfortably above the 44px iOS minimum. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 top-20 z-40 bg-dark-primary/98 glass-effect lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col px-6 pt-10 pb-16 gap-1 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    {...linkTargetProps(link.href)}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block font-heading text-2xl py-3 border-b border-white/8 transition-colors ${ pathname === link.href ? "text-accent-light" : "text-text-light active:text-accent-light" }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary active:bg-accent active:text-white active:scale-[0.98] shadow-lg shadow-black/20 px-9 py-4 text-base tracking-wide"
              >
                {siteConfig.bookingLabel}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
