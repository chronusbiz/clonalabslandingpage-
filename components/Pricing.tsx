"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { replies, usd } from "@/lib/format";
import { track } from "@/lib/analytics-client";
import { CtaButton } from "./CtaButton";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { Icons, Lucide } from "./icons";

export function Pricing({
  showPricing,
  bookingUrl,
}: {
  showPricing: boolean;
  bookingUrl: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track("pricing_view");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="pricing" compact className="scroll-mt-24" tone="meta">
      <div ref={ref}>
        <SectionEyebrow>Transparent pricing</SectionEyebrow>
        <SectionTitle>{site.pricing.h2}</SectionTitle>

        {!showPricing ? (
          <div className="mt-8 max-w-xl rounded-2xl border border-line bg-elevated p-6 shadow-soft">
            <p className="text-muted">{site.pricing.requestPricingCopy}</p>
            <CtaButton href={bookingUrl} location="pricing-hidden" className="mt-5" />
          </div>
        ) : (
          <>
            <SectionLead>{site.pricing.intro}</SectionLead>
            <p className="mt-3 text-sm font-medium text-ink">
              No revenue share. WhatsApp delivery is pass-through at cost.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-elevated p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {site.pricing.activation.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {usd(site.pricing.activation.amount)}{" "}
                <span className="text-base font-normal text-muted">
                  {site.pricing.activation.per}
                </span>
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                {site.pricing.activation.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Lucide icon={Icons.check} className="h-2.5 w-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {site.pricing.packages.map((pkg, i) => (
                <article
                  key={pkg.id}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-soft transition hover:border-accent/35 ${
                    i === 1
                      ? "border-accent/40 bg-accent-soft"
                      : "border-line bg-elevated"
                  }`}
                >
                  {i === 1 ? (
                    <span className="absolute right-4 top-4 rounded-full bg-meta px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Most chosen
                    </span>
                  ) : null}
                  <h3 className="font-display text-xl font-semibold text-ink">{pkg.name}</h3>
                  <p className="mt-2 font-display text-3xl font-semibold text-ink">
                    {usd(pkg.monthly)}
                    <span className="text-base font-normal text-muted">/mo</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {[
                      `Up to ${pkg.clients} business clients`,
                      `${replies(pkg.replies)} pooled AI replies`,
                      `First payment ${usd(pkg.firstPayment)}`,
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <Lucide icon={Icons.check} className="mt-0.5 h-3.5 w-3.5 text-accent" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">{site.pricing.includedOnAll}</p>

            <div className="mt-8 rounded-2xl border border-line bg-elevated p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-ink">
                {site.pricing.whatsapp.title}
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {site.pricing.whatsapp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {site.pricing.suggestedRetail.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{site.pricing.suggestedRetail.disclaimer}</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {site.pricing.suggestedRetail.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-2xl border border-line bg-elevated p-5 shadow-soft"
                  >
                    <p className="font-display text-base font-semibold text-ink">{item.name}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-gradient">
                      {usd(item.price)}/mo
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="mt-8 rounded-2xl border border-dashed border-line bg-panel p-5">
              <h3 className="font-display text-base font-semibold text-ink">
                {site.pricing.math.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{site.pricing.math.body}</p>
            </aside>

            <div className="mt-8">
              <CtaButton href={bookingUrl} location="pricing" />
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
