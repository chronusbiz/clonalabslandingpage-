import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { IconBadge, Icons } from "./icons";

const stepIcons = [Icons.calendar, Icons.palette, Icons.rocket] as const;

export function Timeline() {
  return (
    <Section id="how" compact tone="elevated">
      <SectionEyebrow>Onboarding</SectionEyebrow>
      <SectionTitle>{site.launch.h2}</SectionTitle>
      <SectionLead>{site.launch.intro}</SectionLead>

      <ol className="mt-10">
        {site.launch.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? Icons.rocket;
          return (
            <li
              key={step.title}
              className="grid gap-3 border-t border-line py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6"
            >
              <IconBadge icon={Icon} className="h-10 w-10" />
              <div>
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted sm:pt-2.5 sm:text-right">
                {step.meta}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
