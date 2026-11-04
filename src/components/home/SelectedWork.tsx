import Link from "next/link";
import { workExamples } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SelectedWork() {
  const [lead, ...rest] = workExamples;

  return (
    <section className="bg-light-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Our work"
          title="Real solutions, built around business priorities."
          description="Until approved public case studies are available, these are labelled illustrative examples — not client projects."
          aside={
            <Link
              href="/work"
              className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              View our work
            </Link>
          }
        />

        {lead ? (
          <article className="border-t border-card-light-border pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Illustrative — not a client project
            </p>
            <h3 className="font-heading mt-3 text-3xl text-text-dark lg:text-4xl">
              {lead.title}
            </h3>
            <p className="mt-2 text-sm text-text-dark-muted">{lead.context}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {(
                [
                  ["Challenge", lead.challenge],
                  ["Scope", lead.scope],
                  ["Role", lead.role],
                  ["Outcome", lead.outcome],
                ] as const
              ).map(([label, text]) => (
                <p key={label} className="text-sm leading-relaxed text-text-dark-muted">
                  <span className="font-semibold text-text-dark">{label}. </span>
                  {text}
                </p>
              ))}
            </div>
          </article>
        ) : null}

        <ul className="mt-10 grid gap-8 border-t border-card-light-border pt-10 md:grid-cols-2">
          {rest.map((item) => (
            <li key={item.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                Illustrative — not a client project
              </p>
              <h3 className="font-heading mt-2 text-2xl text-text-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dark-muted">
                {item.challenge}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
