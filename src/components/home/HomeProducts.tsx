import Link from "next/link";
import { featuredProducts, linkTargetProps } from "@/lib/constants";
import StatusChip from "@/components/ui/StatusChip";

export default function HomeProducts() {
  return (
    <section className="bg-ink" aria-labelledby="products-heading">
      <div className="container-site section">
        <p className="label text-text-on-ink-muted mb-3">Products</p>
        <h2 id="products-heading" className="text-h2 text-text-on-ink max-w-[24ch] mb-12">
          Ready-to-deploy products with honest status.
        </h2>

        <div className="border-t border-white/10">
          {featuredProducts.map((p) => (
            <article
              key={p.id}
              className="ruled-ink grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8"
            >
              <div className="md:col-span-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-h3 text-text-on-ink">{p.name}</h3>
                  <StatusChip status={p.status} />
                </div>
                <p className="text-small text-text-on-ink-muted">{p.category}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-body text-text-on-ink-muted">{p.blurb}</p>
              </div>
              <div className="md:col-span-3 flex md:justify-end md:items-start">
                <Link
                  href={p.href}
                  {...linkTargetProps(p.href)}
                  className="link-text"
                >
                  {p.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/products" className="btn btn-ghost-on-ink">
            All products
          </Link>
        </div>
      </div>
    </section>
  );
}
