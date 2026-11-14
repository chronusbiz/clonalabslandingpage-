import { glanceFacts } from "@/lib/constants";

export default function AtAGlance() {
  return (
    <section
      className="bg-surface border-b border-border"
      aria-labelledby="glance-heading"
    >
      <div className="container-site py-12 md:py-16">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <h2 id="glance-heading" className="label text-text-muted shrink-0">
            At a glance
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {glanceFacts.map((fact) => (
            <li
              key={fact.label}
              className="bg-surface px-0 py-7 sm:px-6 sm:py-8 lg:px-8 first:sm:pl-0 last:lg:pr-0"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-[clamp(2.75rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-ink">
                  {fact.value}
                </span>
                <span
                  className="inline-block h-px w-8 bg-accent -translate-y-2"
                  aria-hidden
                />
              </div>
              <p className="text-[1rem] font-semibold text-ink tracking-[-0.01em] mb-1.5">
                {fact.label}
              </p>
              <p className="text-small text-text-muted leading-relaxed max-w-[24ch]">
                {fact.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
