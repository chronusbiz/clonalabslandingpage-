import Link from "next/link";
import { useCases } from "@/lib/constants";

export default function HomeIndustries() {
  return (
    <section className="bg-surface" aria-labelledby="industries-heading">
      <div className="container-site section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="label text-text-muted mb-3">Industries</p>
            <h2 id="industries-heading" className="text-h2 text-ink max-w-[22ch]">
              Built for how Canadian teams actually work.
            </h2>
          </div>
          <Link href="/industries" className="link-text">
            All industries
          </Link>
        </div>

        <ul className="border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <li
              key={u.slug}
              className="border-b border-border sm:border-r sm:odd:[&:nth-child(2n)]:border-r-0 lg:odd:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 p-5"
            >
              <h3 className="text-h3 text-ink mb-2">{u.title}</h3>
              <p className="text-small text-text-muted">{u.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
