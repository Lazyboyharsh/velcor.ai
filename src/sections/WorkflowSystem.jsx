export default function WorkflowSystem() {
  const weeks = [
    {
      title: "Week 1: Onboarding & Strategy",
      text: "We map your ICP, offer, sales process, CRM setup, and identify growth bottlenecks before execution begins.",
      imageTitle: "ICP + GTM Plan",
      accent: "bg-blue-400",
    },
    {
      title: "Week 2: Execution",
      text: "We build outbound lists, enrichment systems, CRM workflows, and AI-powered research agents.",
      imageTitle: "AI Workflow Build",
      accent: "bg-violet-300",
    },
    {
      title: "Week 3: Distribution",
      text: "We launch outbound campaigns, content workflows, retargeting systems, and follow-up automation.",
      imageTitle: "Campaign Calendar",
      accent: "bg-blue-300",
    },
    {
      title: "Week 4+: Measure & Optimize",
      text: "We review pipeline performance, improve messaging, clean CRM data, and optimize conversions.",
      imageTitle: "Revenue Dashboard",
      accent: "bg-blue-400",
    },
  ];

  return (
    <section
      id="workflows"
      className="bg-[#f6f1e8] px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          {/* <p className="mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/60">
            End-to-end implementation
          </p> */}

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Growth systems
            <span className="block font-serif font-normal italic">
              built for you
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black/55">
            From strategy and implementation to distribution and optimization.
            We build the complete revenue engine for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-2xl shadow-black/[0.04] md:grid-cols-4">
          {weeks.map((week, index) => (
            <div
              key={week.title}
              className={`flex flex-col ${
                index !== weeks.length - 1
                  ? "border-b border-black/10 md:border-b-0 md:border-r"
                  : ""
              } border-black/10`}
            >
              {/* Visual */}
              <div className="relative h-72 overflow-hidden border-b border-black/10 bg-black p-6">
                <div
                  className={`absolute left-0 top-0 h-full w-24 ${week.accent} opacity-70 blur-3xl`}
                />

                <div className="relative z-10 h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/70">
                      Velcor.ai
                    </span>

                    <span
                      className={`h-3 w-3 rounded-full ${week.accent}`}
                    />
                  </div>

                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-base font-semibold text-white">
                      {week.imageTitle}
                    </p>

                    <div className="mt-5 space-y-3">
                      <div className="h-2 w-4/5 rounded-full bg-white/20" />
                      <div className="h-2 w-3/5 rounded-full bg-white/20" />
                      <div className="h-2 w-2/3 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-11 rounded-xl bg-white/10"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex min-h-[210px] flex-col p-8">
                <h3 className="min-h-[72px] text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-black">
                  {week.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-black/60">
                  {week.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}