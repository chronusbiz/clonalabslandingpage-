import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { ThemeToggle } from "./ThemeToggle";

export function Header({
  bookingUrl,
  showPricing,
}: {
  bookingUrl: string;
  showPricing: boolean;
}) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-line bg-header backdrop-blur-xl"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="meta-rail absolute inset-x-0 top-0 opacity-70" />
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="min-h-11 min-w-11 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
        >
          <span className="text-gradient">{site.wordmark}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            if (item.href === "#pricing" && !showPricing) return null;
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-ink"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <CtaButton
            href={bookingUrl}
            location="header"
            className="!min-h-10 !px-4 !py-2 !text-sm"
          />
        </div>
      </div>
    </header>
  );
}
