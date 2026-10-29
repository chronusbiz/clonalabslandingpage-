"use client";

export type AnalyticsEvent =
  | "cta_click"
  | "booking_click"
  | "form_submit"
  | "pricing_view"
  | "faq_open";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(
  event: AnalyticsEvent,
  props?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;

  const payload = { event, ...props, path: window.location.pathname };

  window.dispatchEvent(new CustomEvent("clonalabs:event", { detail: payload }));

  if (typeof window.gtag === "function") {
    window.gtag("event", event, props ?? {});
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", payload);
  }
}
