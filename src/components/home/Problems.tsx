import { hiredProblems } from "@/lib/constants";

export default function Problems() {
  return (
    <section className="bg-muted border-y border-border" aria-labelledby="problems-heading">
      <div className="container-site section">
        <p className="label text-text-muted mb-3">Problems we solve</p>
        <h2 id="problems-heading" className="text-h2 text-ink max-w-[22ch] mb-10">
          The problems we are hired to solve.
        </h2>
        <ol className="border-t border-border">
          {hiredProblems.map((item, i) => (
            <li
              key={item.pressure}
              className="ruled grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6"
            >
              <span className="md:col-span-1 font-mono text-small text-accent pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-5">
                <p className="text-h3 text-ink">{item.pressure}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-body text-text-muted">{item.next}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
