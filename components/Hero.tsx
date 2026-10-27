import Image from "next/image";
import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { Icons, Lucide } from "./icons";

const heroProof = [
  { label: "Official Meta APIs", icon: Icons.plug },
  { label: "Cited replies", icon: Icons.fileCheck },
  { label: "AES-256 · tenant isolation", icon: Icons.lock },
] as const;

export function Hero({
  variant,
  bookingUrl,
  showPricing,
}: {
  variant: "default" | "afterHours";
  bookingUrl: string;
  showPricing: boolean;
}) {
  const copy = site.hero[variant];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-0 pt-12 sm:pt-16">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-[2] mx-auto w-full max-w-page px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="font-display text-[2.5rem] font-semibold leading-none tracking-tight sm:text-6xl lg:text-[4.25rem]">
            <span className="text-gradient">{site.wordmark}</span>
          </p>

          <h1 className="mx-auto mt-5 max-w-xl font-display text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-ink sm:mt-6 sm:text-[2.15rem] lg:text-[2.5rem]">
            {copy.h1}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {copy.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={bookingUrl} location="hero" />
            {showPricing ? (
              <a
                href="#pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-elevated px-6 py-3 text-[0.95rem] font-semibold text-ink shadow-soft transition hover:border-accent/30 hover:bg-panel-strong"
              >
                {site.cta.secondaryLabel}
              </a>
            ) : null}
          </div>

          <p className="mt-4 text-sm text-muted">{site.cta.reassurance}</p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
            {heroProof.map((item) => (
              <li key={item.label} className="inline-flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--success)_14%,transparent)] text-[color:var(--success)]">
                  <Lucide icon={item.icon} className="h-3 w-3" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-stage relative z-[2] mt-10 w-full sm:mt-12">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="hero-product relative isolate overflow-hidden rounded-2xl border border-line bg-elevated shadow-soft">
            <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-3 py-2.5 sm:px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
              <span className="ml-3 truncate font-mono text-[10px] text-muted sm:text-[11px]">
                {site.mocks.agency.domain}/inbox
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--success)_14%,transparent)] px-2.5 py-0.5 text-[10px] font-semibold text-[color:var(--success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)]" aria-hidden />
                AI Live
              </span>
            </div>
            <Image
              src="/unibox-inbox.png"
              alt="Branded Unibox inbox — WhatsApp, Instagram and Messenger in one place"
              width={1600}
              height={1000}
              priority
              className="block h-auto w-full object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
