interface SectionRailProps {
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

/** Slash-prefixed section label with a long fading rail. */
export default function SectionRail({
  label,
  theme = "dark",
  className = "",
}: SectionRailProps) {
  const isLight = theme === "light";

  return (
    <div className={`flex w-full items-center gap-4 mb-5 ${className}`}>
      <span
        className={`shrink-0 text-[11px] uppercase tracking-[0.25em] font-semibold whitespace-nowrap ${
          isLight ? "text-accent" : "text-white/50"
        }`}
      >
        / {label}
      </span>
      <span
        className={`h-px min-w-[10rem] flex-1 ${
          isLight
            ? "bg-gradient-to-r from-text-dark/30 via-text-dark/12 to-transparent"
            : "bg-gradient-to-r from-white/40 via-white/15 to-transparent"
        }`}
        aria-hidden
      />
    </div>
  );
}
