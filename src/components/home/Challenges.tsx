import Link from "next/link";
import { challenges } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Challenges() {
  return (
    <section className="bg-light-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Outcomes"
          title="Make everyday business challenges easier to solve."
        />
        <ul className="divide-y divide-card-light-border border-y border-card-light-border">
          {challenges.map((card, i) => (
            <li key={card.title}>
              <Link
                href={card.href}
                className="group grid gap-3 py-7 transition sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-text-dark sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-dark-muted sm:text-base">
                    {card.body}
                  </p>
                </div>
                <span className="text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100 sm:pt-1">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
