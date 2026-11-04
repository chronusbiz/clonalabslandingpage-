import { whyChooseUs } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-dark-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Why ClonaLabs"
          title="Why teams work with ClonaLabs."
        />
        <ul className="grid gap-10 md:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <li key={item.label} className="border-t border-white/10 pt-5">
              <p className="font-mono text-xs text-accent-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading mt-3 text-2xl text-white">
                {item.label}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
