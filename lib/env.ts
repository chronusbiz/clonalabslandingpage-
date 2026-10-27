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
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "",
  };
}

export function getServerEnv() {
  return {
    leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",
  };
}
