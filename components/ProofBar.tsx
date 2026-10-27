import { site } from "@/content/site";
import { IconBadge, Icons } from "./icons";

const proofIcons = [Icons.plug, Icons.fileCheck, Icons.handshake, Icons.dollar] as const;

export function ProofBar() {
  return (
    <section aria-label="Trust signals" className="relative z-[3] border-y border-line bg-elevated">
      <ul className="mx-auto grid max-w-page grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:grid-cols-4">
        {site.proof.map((item, i) => {
          const Icon = proofIcons[i] ?? Icons.shield;
          return (
            <li
              key={item.label}
              className="flex min-w-0 items-start gap-3 rounded-2xl border border-line bg-canvas px-4 py-4 sm:px-5 sm:py-5"
            >
              <IconBadge
                icon={Icon}
                tone="accent"
                className="h-9 w-9 shrink-0 rounded-lg"
                iconClassName="h-4 w-4"
              />
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold leading-snug text-ink">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-snug text-muted">{item.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
