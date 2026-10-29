"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "cookie-consent";
const EVENT_NAME = "clonalabs:consent-changed";

export type ConsentValue = "accepted" | "declined";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
}

/**
 * Mounts Vercel Analytics + SpeedInsights only after the visitor has
 * explicitly accepted cookies. Required for ePrivacy / GDPR compliance:
 * non-essential trackers must not fire before consent.
 */
export default function ConsentGate() {
  const [accepted, setAccepted] = useState<boolean>(false);

  useEffect(() => {
    // Sync local state to the localStorage value on mount and on cross-tab
    // / in-tab consent changes. This is the canonical "subscribe to an
    // external store" use case for setState-in-effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAccepted(getConsent() === "accepted");
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentValue>).detail;
      setAccepted(detail === "accepted");
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
