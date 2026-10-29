import { Manrope } from "next/font/google";

/**
 * Single site-wide typeface — Manrope.
 *
 * Modern, enterprise-grade geometric sans used consistently for both
 * headings and body text. Full weight range (200 – 800) gives us thin
 * editorial titles, readable body text, and bold display headlines all
 * from one family — for a unified, premium look.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});
