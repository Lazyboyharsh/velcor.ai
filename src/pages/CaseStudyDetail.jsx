import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Check,
  Target,
  Workflow,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cases } from "./CaseStudiesPage";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const item = cases.find((c) => c.slug === slug);

  if (!item) {
    return (
      <main className="min-h-screen bg-[#f6f1e8] text-black">
        <Navbar />
        <section className="px-5 pt-40 pb-24 text-center">
          <h1 className="text-5xl font-semibold">Case study not found</h1>
          <Link to="/case-studies" className="mt-6 inline-block underline">
            Back to case studies
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const timeline = [
    "Mapped ICP and buying signals",
    "Built enrichment workflow",
    "Launched AI-personalized outreach",
    "Synced replies and meetings into CRM",
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <section className="relative overflow-hidden px-5 pt-44 pb-20">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            {item.industry} Case Study
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            {item.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            {item.desc}
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-black text-white shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[420px] p-8 md:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
              <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm text-white/50">{item.company}</p>

                <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                  Revenue system built around
                  <span className="block font-serif italic font-normal text-blue-400">
                    real buying intent.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  Instead of running disconnected campaigns, we designed one
                  GTM workflow for targeting, enrichment, personalization,
                  outreach and CRM handoff.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.04] p-6 lg:border-l lg:border-t-0 md:p-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-blue-400">
                Key metrics
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {item.stats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5"
                  >
                    <p className="text-3xl font-semibold tracking-tight">
                      {stat}
                    </p>
                    <p className="mt-2 text-xs text-white/45">
                      Campaign metric
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-white/60">Pipeline impact</span>
                  <span className="rounded-full bg-blue-400 px-2 py-1 text-xs font-bold text-black">
                    LIVE
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[82%] rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge / Solution / Outcome */}
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Challenge", item.challenge, Target],
            ["Solution", item.solution, Workflow],
            ["Outcome", item.outcome, TrendingUp],
          ].map(([title, text, Icon]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/10 bg-white/65 p-7 shadow-xl shadow-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-400">
                <Icon size={19} />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/65">{text}</p>
            </div>
          ))}
        </div>

        {/* Execution Timeline */}
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-black/10 bg-white/65 p-7 shadow-xl shadow-black/5">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-black/45">
                Execution flow
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.05em]">
                How the system was built
              </h2>
            </div>

            <BarChart3 className="text-black/30" size={34} />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {timeline.map((step, index) => (
              <div key={step} className="relative rounded-2xl border border-black/10 bg-[#f6f1e8] p-5">
                <p className="text-xs font-semibold text-black/45">
                  STEP 0{index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/75">
                  {step}
                </p>

                {index !== timeline.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-black/30 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-black/10 bg-white/70 p-8 text-center shadow-xl shadow-black/5">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
            <Check size={20} />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.05em]">
            Want similar results?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-black/60">
            Let’s map a pilot campaign for your offer, ICP and current sales
            workflow.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white"
          >
            Apply for pilot
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}