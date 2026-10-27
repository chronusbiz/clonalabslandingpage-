import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { IconBadge, Icons } from "./icons";

const stepIcons = [Icons.message, Icons.clock, Icons.repeat] as const;

export function Opportunity() {
  return (
    <Section compact tone="elevated">
      <SectionEyebrow>The agency opportunity</SectionEyebrow>
      <SectionTitle>{site.opportunity.h2}</SectionTitle>
      <SectionLead>
        Meet customers where they already are â€" WhatsApp, Instagram and Messenger.
      </SectionLead>
      <ol className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
        {site.opportunity.points.map((p, i) => {
          const Icon = stepIcons[i] ?? Icons.message;
          return (
            <li key={p.title}>
              <IconBadge icon={Icon} />
              <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Step 0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
