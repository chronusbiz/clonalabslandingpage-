import Link from "next/link";
import { servicePillars } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicePillars() {
  return (
    <section id="solutions" className="bg-light-primary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Solutions"
          title="Practical technology solutions for Canadian businesses."
          aside={
            <Link
              href="/solutions"
              className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              View all solutions
            </Link>
          }
        />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {servicePillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/solutions/${pillar.slug}`}
              className="group block border-t border-card-light-border pt-5"
            >
              <h3 className="font-heading text-2xl text-text-dark transition group-hover:text-accent">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dark-muted sm:text-[0.95rem]">
                {pillar.value}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent">
                Explore capability →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
