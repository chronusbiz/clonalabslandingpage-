"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getConsent, setConsent } from "./ConsentGate";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    setConsent("declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-dark-secondary border border-card-dark-border p-5 sm:p-6 shadow-2xl shadow-black/40 glass-effect">
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <h3 className="font-heading text-base font-bold text-text-light mb-1">
                  We use cookies
                </h3>
                <p className="text-text-light-muted text-sm leading-relaxed">
                  Analytics cookies help us understand how the site is used. They
                  load only after you accept. Choose &ldquo;Necessary only&rdquo;
                  to opt out — you can change this in our{" "}
                  <Link href="/cookie-policy" className="text-accent-light hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={accept}
                    className="gradient-bg text-white px-5 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={decline}
                    className="border border-card-dark-border text-text-light-muted px-5 py-2 rounded-md text-sm font-medium hover:border-accent/40 hover:text-accent-light transition-all duration-300 cursor-pointer"
                  >
                    Necessary Only
                  </button>
                </div>
              </div>
              <button
                onClick={decline}
                className="text-text-light-muted hover:text-text-light transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close cookie consent"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
