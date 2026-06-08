import { ArrowRight } from "lucide-react";

export default function Results() {
  const stats = [
    { value: "1,240+", label: "Buying signals mapped" },
    { value: "312", label: "Qualified prospects enriched" },
    { value: "47", label: "Warm replies generated" },
    { value: "18", label: "Strategy calls booked" },
  ];

  return (
    <section id="customers" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-black text-white shadow-2xl shadow-black/20">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          <div className="p-8 md:p-12">
            <p className="mb-5 w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Sample Campaign Result
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              From cold signals to
              <span className="block font-serif italic font-normal text-blue-400">
                booked pipeline
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              A pilot-style GTM workflow showing how Velcor.ai turns raw market
              signals into enriched prospects, personalized outreach and booked
              strategy calls.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
            >
              Build my pilot campaign
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative border-t border-white/10 bg-white/[0.04] p-6 lg:border-l lg:border-t-0 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />

            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
                >
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-5 rounded-3xl border border-white/10 bg-white/10 p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-semibold">Pipeline movement</p>
                <span className="rounded-full bg-blue-400 px-3 py-1 text-xs font-bold text-black">
                  Live
                </span>
              </div>

              <div className="space-y-4">
                {[
                  ["Signals", "100%"],
                  ["Enriched", "72%"],
                  ["Contacted", "58%"],
                  ["Replies", "24%"],
                  ["Booked", "11%"],
                ].map(([label, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-white/60">
                      <span>{label}</span>
                      <span>{width}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-400"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative z-10 mt-5 text-xs text-white/35">
              Demo metrics for design preview. Replace with real client campaign
              data before publishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}