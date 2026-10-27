import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { UniboxScreenshot } from "./UniboxMock";
import { Icons, Lucide } from "./icons";

export function BrandedPortal() {
  return (
    <Section compact>
      <div className="mx-auto max-w-2xl text-center [&_h2]:mx-auto [&_p]:mx-auto">
        <SectionEyebrow>White-label</SectionEyebrow>
        <SectionTitle>{site.portal.h2}</SectionTitle>
        <SectionLead className="mx-auto">{site.portal.intro}</SectionLead>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {site.portal.bullets.map((b) => (
            <li key={b} className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--success)_14%,transparent)] text-[color:var(--success)]">
                <Lucide icon={Icons.check} className="h-3 w-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <UniboxScreenshot />
      </div>
    </Section>
  );
}
