export function getPublicEnv() {
  const showPricing =
    (process.env.NEXT_PUBLIC_SHOW_PRICING ?? "true").toLowerCase() !== "false";
  const noindex =
    (process.env.NEXT_PUBLIC_NOINDEX ?? "false").toLowerCase() === "true";

  return {
    siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
      /\/$/,
      "",
    ),
    bookingUrl:
      process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/clonvo/15min",
    showPricing,
    noindex,
    // GA4 Measurement ID (G-…). Prefer NEXT_PUBLIC_GA_MEASUREMENT_ID, fall back to ANALYTICS_ID.
    analyticsId:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
      process.env.NEXT_PUBLIC_ANALYTICS_ID ||
      "",
  };
}

export function getServerEnv() {
  return {
    leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",
    cmsUrl: (
      process.env.CMS_URL ||
      process.env.NEXT_PUBLIC_CMS_URL ||
      "https://cms.fousventures.com"
    ).replace(/\/$/, ""),
    cmsSite: process.env.CMS_SITE || process.env.NEXT_PUBLIC_CMS_SITE || "clonalabs",
  };
}
