interface SectionRailProps {
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

/** Slash-prefixed section label with a long fading rail to the right. */
export default function SectionRail({
  label,
  theme = "dark",
  className = "",
}: SectionRailProps) {
  const isLight = theme === "light";

  return (
    <div className={`flex w-full items-center gap-4 mb-4 md:mb-5 ${className}`}>
      <span
        className={`shrink-0 text-[11px] uppercase tracking-[0.28em] font-semibold whitespace-nowrap ${
          isLight ? "text-accent" : "text-white/50"
        }`}
      >
        / {label}
      </span>
      <span
        className={`h-px flex-1 min-w-0 ${
          isLight
            ? "bg-gradient-to-r from-text-dark/35 via-text-dark/12 to-transparent"
            : "bg-gradient-to-r from-white/45 via-white/15 to-transparent"
        }`}
        aria-hidden
      />
    </div>
  );
}
