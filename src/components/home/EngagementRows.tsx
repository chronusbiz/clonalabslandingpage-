import Link from "next/link";
import { engagements, siteConfig } from "@/lib/constants";

export default function EngagementRows() {
  return (
    <section className="bg-surface" aria-labelledby="engagements-heading">
      <div className="container-site section">
        <p className="label text-text-muted mb-3">Engagements</p>
        <h2 id="engagements-heading" className="text-h2 text-ink max-w-[24ch] mb-12">
          Three focused engagements with a clear start and finish.
        </h2>

        <div className="space-y-0 border-t border-border">
          {engagements.map((e, i) => (
            <article
              key={e.slug}
              className="ruled grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-small text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h2 text-ink mt-3 mb-2">{e.title}</h3>
                <p className="font-mono text-small text-text-muted uppercase tracking-wider">
                  {e.timeline}
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-body text-text-muted mb-5">{e.blurb}</p>
                <ul className="space-y-2">
                  {e.youGet.slice(0, 3).map((d) => (
                    <li key={d} className="text-small text-ink flex gap-2">
                      <span className="text-accent shrink-0" aria-hidden>
                        ·
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                <Link href={`/engagements#${e.slug}`} className="link-text">
                  View engagement
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href={siteConfig.bookingUrl} className="btn btn-primary">
            {siteConfig.bookingLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
