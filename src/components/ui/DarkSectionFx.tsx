/**
 * DarkSectionFx
 * -----------------------------------------------------------------------------
 * Standardized ambient layer for every dark section on the site. Drop this in
 * as the first child of a `relative overflow-hidden bg-dark-primary` (or
 * `bg-dark-secondary`) section to give it the same cyan-glow + faint grid
 * treatment used by the Hero, Capabilities, and Footer.
 *
 * Variants
 *   - "default":  centered cyan glow above + soft fade below + grid overlay
 *   - "soft":     subtler glows for sections that already have a lot of
 *                 visual content (case-study lists, dense grids)
 *   - "split":    glow biased to top-right / bottom-left for asymmetric
 *                 hero-adjacent panels
 *
 * The component renders nothing visible inside the page flow — it lives in
 * the section's `absolute inset-0` ambient layer and is purely decorative.
 * It uses `aria-hidden` and `pointer-events-none` so it never interferes
 * with focus, hit testing, or screen readers.
 */

type Variant = "default" | "soft" | "split";

type Props = {
  variant?: Variant;
  /** Optional className for the outermost wrapper (rare). */
  className?: string;
  /** When true, hides the grid overlay (use on top of a video/image). */
  hideGrid?: boolean;
};

export default function DarkSectionFx({
  variant = "default",
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {variant === "default" && (
        <>
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[560px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[520px] h-[420px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      {variant === "soft" && (
        <>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 65%)",
            }}
          />
        </>
      )}

      {variant === "split" && (
        <>
          <div
            className="absolute -top-20 right-0 w-[640px] h-[520px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 left-0 w-[520px] h-[420px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)",
            }}
          />
        </>
      )}
    </div>
  );
}
