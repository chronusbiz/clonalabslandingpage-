import type { LucideIcon, LucideProps } from "lucide-react";
import {
  ArrowRightLeft,
  BadgeDollarSign,
  BarChart3,
  BookMarked,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Handshake,
  Inbox,
  LayoutDashboard,
  Lock,
  Moon,
  Palette,
  Plug,
  Plus,
  Quote,
  Repeat2,
  Rocket,
  Send,
  ShieldCheck,
  Sun,
  Tags,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

export const Icons = {
  check: Check,
  chevronDown: ChevronDown,
  plus: Plus,
  send: Send,
  sun: Sun,
  moon: Moon,
  calendar: CalendarDays,
  clock: Clock3,
  shield: ShieldCheck,
  lock: Lock,
  fileCheck: FileCheck2,
  quote: Quote,
  book: BookMarked,
  handshake: Handshake,
  dollar: BadgeDollarSign,
  inbox: Inbox,
  handoff: ArrowRightLeft,
  tags: Tags,
  message: Inbox,
  repeat: Repeat2,
  rocket: Rocket,
  palette: Palette,
  plug: Plug,
  dashboard: LayoutDashboard,
  building: Building2,
  users: Users,
  chart: BarChart3,
} as const;

type Channel = "WhatsApp" | "Instagram" | "Messenger" | "Facebook" | "Widget" | "X";

export function ChannelIcon({
  channel,
  className,
  title,
}: {
  channel: Channel | string;
  className?: string;
  title?: string;
}) {
  const common = cn("shrink-0", className);
  switch (channel) {
    case "WhatsApp":
    case "WhatsApp Business":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden={!title} role={title ? "img" : undefined}>
          {title ? <title>{title}</title> : null}
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 10.6c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.76.76 2.13.66 2.51.62.38-.04 1.25-.51 1.43-1 .17-.49.17-.91.12-.99-.05-.09-.22-.15-.47-.27z"
          />
        </svg>
      );
    case "Instagram":
    case "Instagram Direct":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden={!title} role={title ? "img" : undefined}>
          {title ? <title>{title}</title> : null}
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
          />
        </svg>
      );
    case "Messenger":
    case "Facebook Messenger":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden={!title} role={title ? "img" : undefined}>
          {title ? <title>{title}</title> : null}
          <path
            fill="currentColor"
            d="M12 2C6.36 2 2 6.13 2 11.7c0 2.9 1.19 5.4 3.14 7.17V22l2.88-1.58c1.2.33 2.47.51 3.98.51 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm1.01 12.46-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72-5.48 5.82z"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden={!title} role={title ? "img" : undefined}>
          {title ? <title>{title}</title> : null}
          <path
            fill="currentColor"
            d="M13.5 22v-8.1h2.72l.41-3.16H13.5V8.72c0-.91.25-1.54 1.56-1.54h1.67V4.35C16.44 4.24 15.4 4.1 14.2 4.1c-2.5 0-4.21 1.53-4.21 4.33v2.42H7.4v3.16h2.59V22h3.51z"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden={!title} role={title ? "img" : undefined}>
          {title ? <title>{title}</title> : null}
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.916L2.25 2.25h6.964l4.259 5.696L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path
            fill="currentColor"
            d="M12 3a7 7 0 0 0-7 7v1.2A3.8 3.8 0 0 0 4 14.8V17a2 2 0 0 0 2 2h2.2A3.8 3.8 0 0 0 12 21a3.8 3.8 0 0 0 3.8-2H18a2 2 0 0 0 2-2v-2.2a3.8 3.8 0 0 0-1-2.6V10a7 7 0 0 0-7-7z"
          />
        </svg>
      );
  }
}

export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
  tone = "accent",
}: {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  tone?: "accent" | "success" | "meta" | "neutral";
}) {
  const tones = {
    accent: "bg-accent-soft text-accent",
    success: "bg-[color-mix(in_srgb,var(--success)_14%,transparent)] text-[color:var(--success)]",
    meta: "bg-meta text-white",
    neutral: "bg-panel text-muted",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
        tones[tone],
        className,
      )}
      aria-hidden
    >
      <Icon className={cn("h-5 w-5", iconClassName)} strokeWidth={1.85} />
    </span>
  );
}

export function Lucide({
  icon: Icon,
  className,
  ...props
}: { icon: LucideIcon } & LucideProps) {
  return <Icon className={cn("h-4 w-4", className)} strokeWidth={1.85} aria-hidden {...props} />;
}
