"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics-client";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { Icons } from "./icons";

type Props = {
  href: string;
  location: string;
  className?: string;
  children?: ReactNode;
  variant?: "gradient" | "ghost";
};

export function CtaButton({
  href,
  location,
  className,
  children,
  variant = "gradient",
}: Props) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[0.95rem] font-semibold tracking-tight",
        variant === "gradient" && "btn-gradient shadow-[0_10px_40px_rgba(24,119,242,0.25)]",
        variant === "ghost" &&
          "border border-line bg-panel text-ink transition hover:bg-panel-strong",
        className,
      )}
      onClick={() => {
        track("cta_click", { location });
        track("booking_click", { location });
      }}
    >
      {children ?? (
        <>
          <Icons.calendar className="h-4 w-4" strokeWidth={2} aria-hidden />
          {site.cta.label}
        </>
      )}
    </a>
  );
}
