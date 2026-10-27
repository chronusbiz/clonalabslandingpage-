import { site } from "@/content/site";
import { Section, SectionEyebrow, SectionLead, SectionTitle } from "./Section";
import { ChannelIcon, IconBadge, Icons } from "./icons";

const pointIcons = [Icons.book, Icons.handoff, Icons.shield] as const;

const channelTone: Record<string, string> = {
  "WhatsApp Business": "text-[#25D366]",
  "Instagram Direct": "text-[#E1306C]",
  "Facebook Messenger": "text-[#0084FF]",
};

export function TrustStrip() {
  const { trust } = site;
  return (
    <Section id="product" compact aria-label="Product facts">
      <SectionEyebrow>Trust & channels</SectionEyebrow>
      <SectionTitle>{trust.h2}</SectionTitle>
      <SectionLead>{trust.intro}</SectionLead>

      <ul className="mt-8 flex flex-wrap gap-2.5">
        {trust.channels.map((ch) => (
          <li
            key={ch.name}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-elevated px-4 py-2 text-sm text-ink shadow-soft"
          >
            <ChannelIcon
              channel={ch.name}
              className={`h-4 w-4 ${channelTone[ch.name] ?? "text-accent"}`}
            />
            <span className="font-medium">{ch.name}</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--success)]">
              <Icons.check className="h-3 w-3" strokeWidth={2.4} aria-hidden />
              {ch.status}
            </span>
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid gap-6 rounded-2xl border border-line bg-elevated p-6 shadow-soft sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line sm:p-0">
        {trust.points.map((p, i) => {
          const Icon = pointIcons[i] ?? Icons.shield;
          return (
            <li key={p.title} className="sm:p-6">
              <IconBadge icon={Icon} className="mb-3 h-9 w-9" iconClassName="h-4 w-4" />
              <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
