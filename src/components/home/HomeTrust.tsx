import Link from "next/link";
import { whyChooseUs } from "@/lib/constants";

export default function HomeTrust() {
  return (
    <section className="bg-surface" aria-labelledby="trust-heading">
      <div className="container-site section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="label text-text-muted mb-3">Trust</p>
            <h2 id="trust-heading" className="text-h2 text-ink max-w-[22ch]">
              How we work with you.
            </h2>
          </div>
          <Link href="/trust" className="link-text">
            Trust Center
          </Link>
        </div>

        <ul className="border-t border-border grid grid-cols-1 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <li
              key={item.label}
              className="ruled border-r-0 md:odd:border-r border-border p-6 md:p-8"
            >
              <h3 className="text-h3 text-ink mb-2">{item.label}</h3>
              <p className="text-body text-text-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
