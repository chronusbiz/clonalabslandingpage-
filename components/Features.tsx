import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { MessengerMock } from "./WhatsAppMock";
import { IconBadge, Icons } from "./icons";

const featureIcons = [
  Icons.inbox,
  Icons.fileCheck,
  Icons.handoff,
  Icons.tags,
  Icons.calendar,
] as const;

export function Features() {
  return (
    <Section
      compact
      tone="elevated"
      innerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div>
        <SectionEyebrow>Live product</SectionEyebrow>
        <SectionTitle>{site.features.h2}</SectionTitle>
        <SectionLead>{site.features.intro}</SectionLead>
        <ul className="mt-8 divide-y divide-line border-t border-line">
          {site.features.items.map((item, i) => {
            const Icon = featureIcons[i] ?? Icons.inbox;
            return (
              <li key={item.title} className="flex gap-4 py-4">
                <IconBadge icon={Icon} className="mt-0.5 h-9 w-9" iconClassName="h-4 w-4" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <MessengerMock />
    </Section>
  );
}
