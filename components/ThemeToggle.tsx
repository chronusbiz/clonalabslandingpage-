"use client";

import { useTheme } from "@/lib/theme";
import { Icons } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-ink transition hover:bg-panel-strong"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Icons.sun className="h-4 w-4" strokeWidth={1.9} aria-hidden />
      ) : (
        <Icons.moon className="h-4 w-4" strokeWidth={1.9} aria-hidden />
      )}
    </button>
  );
}
