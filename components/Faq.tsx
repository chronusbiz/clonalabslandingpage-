"use client";

import { site } from "@/content/site";
import { track } from "@/lib/analytics-client";
import { Section, SectionEyebrow, SectionTitle } from "./Section";
import { Icons } from "./icons";

export function Faq() {
  return (
    <Section id="faq" compact aria-labelledby="faq-heading">
      <SectionEyebrow>FAQ</SectionEyebrow>
      <SectionTitle id="faq-heading">Questions agencies ask</SectionTitle>
      <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-elevated shadow-soft">
        {site.faq.map((item) => (
          <details
            key={item.id}
            className="group px-5 sm:px-6"
            onToggle={(e) => {
              if ((e.target as HTMLDetailsElement).open) {
                track("faq_open", { id: item.id });
              }
            }}
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-medium text-ink sm:text-lg">
              {item.q}
              <span
                aria-hidden
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-muted transition group-open:rotate-180 group-open:border-accent/40 group-open:text-accent"
              >
                <Icons.chevronDown className="h-4 w-4" strokeWidth={2} />
              </span>
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
