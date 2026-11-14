import Link from "next/link";
import { insightsPosts } from "@/lib/constants";

const homeInsights = insightsPosts.slice(0, 3);

export default function HomeInsights() {
  return (
    <section className="bg-muted border-y border-border" aria-labelledby="insights-heading">
      <div className="container-site section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="label text-text-muted mb-3">Insights</p>
            <h2 id="insights-heading" className="text-h2 text-ink max-w-[22ch]">
              Practical writing for Canadian teams.
            </h2>
          </div>
          <Link href="/insights" className="link-text">
            All insights
          </Link>
        </div>

        <ul className="border-t border-border">
          {homeInsights.map((post) => (
            <li key={post.title} className="ruled py-5">
              <p className="text-h3 text-ink">{post.title}</p>
              <p className="mt-1 text-small text-text-muted">Coming soon</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
