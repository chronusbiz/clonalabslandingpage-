export const TRACKING_KEYS = [
  "s",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingKey, string>>;

export function pickTracking(
  searchParams: Record<string, string | string[] | undefined>,
): TrackingParams {
  const out: TrackingParams = {};
  for (const key of TRACKING_KEYS) {
    const raw = searchParams[key];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (value) out[key] = value.slice(0, 200);
  }
  return out;
}

export function variantFromS(s?: string) {
  return s === "2" ? "afterHours" : "default";
}
