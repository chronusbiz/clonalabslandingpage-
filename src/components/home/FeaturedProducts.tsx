import Link from "next/link";
import { products } from "@/lib/constants";
import StatusBadge from "@/components/ui/StatusBadge";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-dark-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Products"
          title="Digital products designed to solve specific workflow needs."
          aside={
            <Link
              href="/products"
              className="text-sm font-medium text-accent-light underline decoration-accent-light/30 underline-offset-4 hover:decoration-accent-light"
            >
              View all products
            </Link>
          }
        />
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={product.href}
                className="group grid gap-4 py-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_auto] lg:items-start lg:gap-10"
              >
                <div className="flex flex-wrap items-center gap-3 lg:block">
                  <p className="font-heading text-2xl text-white">{product.name}</p>
                  <div className="mt-0 lg:mt-3">
                    <StatusBadge status={product.status} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                    {product.category}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                    {product.summary}
                  </p>
                  <p className="mt-3 text-sm text-white/45">
                    For {product.audience}
                  </p>
                </div>
                <span className="text-sm font-medium text-accent-light transition group-hover:translate-x-0.5 lg:pt-1">
                  {product.cta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
