export default function WorkflowSystem() {
  const weeks = [
    {
      title: "Week 1: Onboarding & Strategy",
      text: "We map your ICP, offer, sales process, CRM setup and growth bottlenecks.",
      imageTitle: "ICP + GTM Plan",
      accent: "bg-blue-400",
    },
    {
      title: "Week 2: Execution",
      text: "We build outbound lists, enrichment systems, CRM workflows and AI research agents.",
      imageTitle: "AI Workflow Build",
      accent: "bg-violet-300",
    },
    {
      title: "Week 3: Distribution",
      text: "We launch outbound, content workflows, retargeting systems and follow-up automation.",
      imageTitle: "Campaign Calendar",
      accent: "bg-blue-300",
    },
    {
      title: "Week 4+: Measure & Optimize",
      text: "We review pipeline, improve messaging, clean CRM data and optimize conversion.",
      imageTitle: "Revenue Dashboard",
      accent: "bg-blue-400",
    },
  ];

  return (
    <section id="workflows" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            End-to-end implementation
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Growth systems
            <span className="block font-serif italic font-normal">
              built for you
            </span>
          </h2>

          <p className="mt-7 text-lg text-black/55">
            From strategy, to execution, to distribution.
          </p>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/50 shadow-xl shadow-black/5 md:grid-cols-4">
          {weeks.map((week) => (
            <div key={week.title} className="border-black/10 md:border-r last:border-r-0">
              <div className="relative h-64 overflow-hidden border-b border-black/10 bg-black p-5">
                <div className={`absolute left-0 top-0 h-full w-20 ${week.accent} opacity-80 blur-2xl`} />

                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-white/10 px-3 py-1 text-xs text-white/70">
                      Velcor.ai
                    </span>
                    <span className={`h-3 w-3 rounded-full ${week.accent}`} />
                  </div>

                  <div className="mt-8 rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-semibold text-white">
                      {week.imageTitle}
                    </p>

                    <div className="mt-5 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/20" />
                      <div className="h-2 w-1/2 rounded-full bg-white/20" />
                      <div className="h-2 w-2/3 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-10 rounded-lg bg-white/10" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight text-black">
                  {week.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-black/60">
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