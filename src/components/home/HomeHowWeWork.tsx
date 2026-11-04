import { howWeWork } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeHowWeWork() {
  return (
    <section id="how-we-work" className="bg-light-primary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="How we work"
          title="From challenge to working solution."
        />
        <ol className="divide-y divide-card-light-border border-y border-card-light-border">
          {howWeWork.map((step) => (
            <li
              key={step.step}
              className="grid gap-3 py-7 sm:grid-cols-[4.5rem_12rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-xs text-accent">{step.step}</span>
              <h3 className="font-heading text-2xl text-text-dark">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-dark-muted sm:text-base">
                {step.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
