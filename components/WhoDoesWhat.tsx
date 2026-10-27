import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { Icons, Lucide } from "./icons";

export function WhoDoesWhat() {
  const { whoDoesWhat } = site;
  return (
    <Section compact>
      <SectionEyebrow>Clear ownership</SectionEyebrow>
      <SectionTitle>{whoDoesWhat.h2}</SectionTitle>
      <SectionLead>{whoDoesWhat.intro}</SectionLead>

      <div className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-elevated shadow-soft md:grid-cols-2">
        <div className="border-b border-line p-6 sm:p-8 md:border-b-0 md:border-r">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-soft"
              style={{ background: "linear-gradient(135deg,#0084FF,#1877F2)" }}
              aria-hidden
            >
              <Lucide icon={Icons.building} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                {whoDoesWhat.clonvo.heading}
              </p>
              <p className="text-xs text-muted">Platform operator</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {whoDoesWhat.clonvo.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Lucide icon={Icons.check} className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-soft"
              style={{ background: "linear-gradient(135deg,#833AB4,#E1306C)" }}
              aria-hidden
            >
              <Lucide icon={Icons.users} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                {whoDoesWhat.agency.heading}
              </p>
              <p className="text-xs text-muted">Client relationship owner</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {whoDoesWhat.agency.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,#E1306C_14%,transparent)] text-ig-pink">
                  <Lucide icon={Icons.check} className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
