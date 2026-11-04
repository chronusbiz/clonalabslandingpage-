import Link from "next/link";
import { industries } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeIndustries() {
  return (
    <section className="bg-dark-primary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Industries"
          title="Technology shaped around the way your industry works."
          aside={
            <Link
              href="/industries"
              className="text-sm font-medium text-accent-light underline decoration-accent-light/30 underline-offset-4 hover:decoration-accent-light"
            >
              Explore industries
            </Link>
          }
        />
        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug} className="border-t border-white/10 pt-5">
              <Link href={`/industries#${industry.slug}`} className="group block">
                <h3 className="font-heading text-2xl text-white transition group-hover:text-accent-light">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {industry.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
