import Link from "next/link";
import { approach } from "@/lib/constants";

export default function HomeHowWeWork() {
  return (
    <section className="bg-muted border-y border-border" aria-labelledby="process-heading">
      <div className="container-site section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="label text-text-muted mb-3">How we deliver</p>
            <h2 id="process-heading" className="text-h2 text-ink max-w-[22ch]">
              Six stages from discovery to improvement.
            </h2>
          </div>
          <Link href="/process" className="link-text">
            How we work
          </Link>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 border-t border-border">
          {approach.map((stage, i) => (
            <li
              key={stage.step}
              className={`py-6 pr-4 ${
                i < approach.length - 1 ? "lg:border-r border-border" : ""
              } border-b border-border lg:border-b-0`}
            >
              <span className="font-mono text-small text-accent block mb-3">
                {stage.step}
              </span>
              <h3 className="text-h3 text-ink mb-2">{stage.title}</h3>
              <p className="text-small text-text-muted leading-relaxed">
                {stage.description.split(".")[0]}.
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
