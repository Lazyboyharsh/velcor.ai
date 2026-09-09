import { Link } from "react-router-dom";
import { Target, Workflow, Zap, BarChart3, ArrowRight } from "lucide-react";

const WEEKS = [
  {
    num: "01",
    icon: Target,
    week: "Week 1",
    title: "Onboarding & Strategy",
    text: "We map your ICP, offer, sales process, and CRM setup, then pinpoint the bottlenecks holding back pipeline.",
    panelTitle: "ICP + GTM Plan",
    deliverable: "ICP + GTM plan",
  },
  {
    num: "02",
    icon: Workflow,
    week: "Week 2",
    title: "Execution",
    text: "We build your outbound lists, enrichment systems, CRM workflows, and AI research agents.",
    panelTitle: "AI Workflow Build",
    deliverable: "Live outbound engine",
  },
  {
    num: "03",
    icon: Zap,
    week: "Week 3",
    title: "Distribution",
    text: "We launch multichannel campaigns, content workflows, retargeting, and follow-up automation.",
    panelTitle: "Campaign Calendar",
    deliverable: "Campaigns in market",
  },
  {
    num: "04",
    icon: BarChart3,
    week: "Week 4+",
    title: "Measure & Optimize",
    text: "We review pipeline performance, sharpen messaging, clean CRM data, and lift conversion rates.",
    panelTitle: "Revenue Dashboard",
    deliverable: "Reporting + optimization",
  },
];

export default function WorkflowSystem() {
  return (
    <section
      id="workflows"
      aria-label="How we build your growth system, week by week"
      className="bg-[#f6f1e8] px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/60">
            End-to-end implementation
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Growth systems
            <span className="block font-serif font-normal italic">built for you</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black/55">
            From strategy and implementation to distribution and optimization, we
            build the complete revenue engine for your business, with a clear
            deliverable at every step.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-2xl shadow-black/[0.04] md:grid-cols-2 lg:grid-cols-4">
          {WEEKS.map((week) => (
            <div
              key={week.num}
              className="group flex flex-col border-b border-r border-black/10"
            >
              {/* Visual */}
              <div className="relative h-64 overflow-hidden border-b border-black/10 bg-black p-6">
                <div
                  aria-hidden="true"
                  className="absolute -left-6 top-0 h-full w-28 bg-blue-500 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                />

                <div className="relative z-10 flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 rounded-lg bg-white/10 px-2.5 py-1">
                      <week.icon size={13} className="text-blue-400" />
                      <span className="text-[11px] text-white/70">Velcor.ai</span>
                    </span>

                    <span className="text-sm font-semibold tracking-tight text-white/25">
                      {week.num}
                    </span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-sm font-semibold text-white">{week.panelTitle}</p>

                    <div className="mt-4 space-y-2.5">
                      <div className="h-2 w-4/5 rounded-full bg-white/15" />
                      <div className="h-2 w-3/5 rounded-full bg-white/15" />
                      <div className="h-2 w-2/3 rounded-full bg-white/15" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                  {week.week}
                </span>

                <h3 className="mt-2 text-[1.4rem] font-semibold leading-tight tracking-[-0.03em] text-black">
                  {week.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-black/60">{week.text}</p>

                <div className="mt-auto flex items-center gap-2 border-t border-black/5 pt-5 text-[13px] font-medium text-black/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Deliverable: {week.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-[15px] text-black/55">
            Pipeline in weeks, not quarters, with visibility at every step.
          </p>
          <Link
            to="/schedule-meeting"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Book a strategy call
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
