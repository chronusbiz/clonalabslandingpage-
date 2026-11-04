export type ProductStatus = "Live" | "Beta" | "Planned";

interface StatusBadgeProps {
  status: ProductStatus;
  /** Surface the badge sits on. Dark is the default (nav, hero, dark sections). */
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Small outlined cyan pill — Prosys enterprise treatment.
 * Live is filled slightly stronger than Beta / Planned so state reads at a glance.
 */
export default function StatusBadge({
  status,
  theme = "dark",
  className = "",
}: StatusBadgeProps) {
  const isLight = theme === "light";
  const isLive = status === "Live";

  const tone = isLight
    ? isLive
      ? "border-accent-deep/50 bg-accent/10 text-accent-deep"
      : "border-accent-deep/30 bg-transparent text-accent-deep"
    : isLive
      ? "border-accent/50 bg-accent/15 text-accent-light"
      : "border-accent/30 bg-transparent text-accent-light/80";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-[0.18em] ${tone} ${className}`}
    >
      {isLive && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${isLight ? "bg-accent-deep" : "bg-accent-light"}`}
          aria-hidden="true"
        />
      )}
      {status}
    </span>
  );
}
