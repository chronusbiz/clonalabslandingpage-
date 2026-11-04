import { credibility } from "@/lib/constants";

export default function CredibilityStrip() {
  return (
    <section className="border-b border-white/10 bg-dark-primary">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between lg:px-8">
        {credibility.map((item) => (
          <div key={item.label} className="min-w-[10rem] max-w-xs">
            <p className="text-sm font-semibold text-white">{item.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/55">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
