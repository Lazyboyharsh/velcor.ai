import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const items = [
    {
      slug: "saas-analytics",
      company: "SaaS Analytics Co.",
      headline: "0 → 18 strategy calls in 30 days",
      desc: "Signal-based outbound + AI personalization across email & LinkedIn.",
      stats: ["2.1k signals", "320 enriched", "18 calls"],
      img: "https://images.unsplash.com/photo-1551281044-8b7c7f3a0d1c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "dev-agency",
      company: "Dev Agency",
      headline: "Clean CRM + 3x faster follow-ups",
      desc: "RevOps automation, routing, and meeting prep workflows.",
      stats: ["-65% manual work", "3x speed", "0 missed leads"],
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "b2b-services",
      company: "B2B Services",
      headline: "Consistent inbound + warm replies",
      desc: "LinkedIn content engine + outbound sync.",
      stats: ["48 replies", "11% booked", "weekly pipeline"],
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="case-studies" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Case studies
          </p>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Real systems,
            <span className="block font-serif italic font-normal">
              real pipeline
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((c) => (
            <div
              key={c.slug}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-xl shadow-black/5 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.company}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs opacity-80">{c.company}</p>
                  <p className="text-lg font-semibold">{c.headline}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-black/65">{c.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stats.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* ✅ FIXED LINK */}
                <Link
                  to={`/case-studies/${c.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                >
                  View details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* optional view all */}
        <div className="mt-14 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 hover:text-white transition"
          >
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}