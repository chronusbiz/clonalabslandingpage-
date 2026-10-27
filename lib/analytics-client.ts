"use client";

export type AnalyticsEvent =
  | "cta_click"
  | "booking_click"
  | "form_submit"
  | "pricing_view"
  | "faq_open";

export function track(
  event: AnalyticsEvent,
  props?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;

  const payload = { event, ...props, path: window.location.pathname };

  window.dispatchEvent(new CustomEvent("clonalabs:event", { detail: payload }));

  const w = window as Window & {
    plausible?: (name: string, opts?: { props?: Record<string, unknown> }) => void;
  };
  if (typeof w.plausible === "function") {
    w.plausible(event, { props });
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", payload);
  }
}
