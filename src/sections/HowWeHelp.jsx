import {
  ArrowRight,
  Bot,
  Megaphone,
  PenLine,
  CalendarCheck,
  Target,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export default function HowWeHelp() {
  const columns = [
    {
      icon: Bot,
      title: "Outbound",
      desc: "We build signal-based outbound systems that find, research and contact your best-fit buyers.",
      steps: ["Buying Signals", "Lead Research", "AI Personalization", "Multi-step Outreach", "Reply Handling"],
    },
    {
      icon: Megaphone,
      title: "AI RevOps",
      desc: "We connect your CRM, forms, enrichment, routing and reporting so every lead moves cleanly.",
      steps: ["CRM Audit", "Lead Scoring", "Auto Routing", "Follow-up Triggers", "Pipeline Reports"],
    },
    {
      icon: PenLine,
      title: "Content Engine",
      desc: "We turn expertise into LinkedIn content systems that warm up buyers before outreach.",
      steps: ["Topic Mining", "AI Drafting", "Founder Voice", "Publishing System", "Inbound Demand"],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-white px-5 py-24 md:py-32">
      <style>{`
        @keyframes floatSoft {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-soft { animation: floatSoft 5s ease-in-out infinite; }
        .spin-slow { animation: spinSlow 28s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      <div className="absolute left-1/2 top-24 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Growth System
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
          3 ways Velcor.ai helps you grow
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          We connect outbound, AI RevOps, and content systems into one clear growth workflow.
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-blue-100/70 backdrop-blur md:grid-cols-3">
          {columns.map((col, index) => (
            <div
              key={col.title}
              className="float-soft rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left shadow-sm"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <col.icon size={23} />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-950">{col.title}</h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                {col.desc}
              </p>

              <div className="mt-7 flex flex-col items-center">
                {col.steps.map((step, i) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="flex min-w-[170px] items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                      <CheckCircle2 size={14} />
                      {step}
                    </div>

                    {i !== col.steps.length - 1 && (
                      <div className="relative h-6">
                        <div className="h-full border-l border-dashed border-blue-200" />
                        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto h-24 w-px border-l border-dashed border-blue-300" />

        <div className="mx-auto flex w-fit flex-col items-center gap-3">
          {[
            { icon: CalendarCheck, label: "Meeting Booked" },
            { icon: Target, label: "Sales Process Started" },
            { icon: Trophy, label: "Closed Won Revenue" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`float-soft flex min-w-[250px] items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-sm font-semibold shadow-lg ${
                i === 2
                  ? "border-blue-600 bg-blue-600 text-white shadow-blue-200"
                  : "border-slate-200 bg-white text-slate-800 shadow-slate-200"
              }`}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <item.icon size={18} />
              {item.label}
            </div>
          ))}
        </div>

        <div className="mx-auto h-24 w-px border-l border-dashed border-blue-300" />

        <div className="relative mx-auto mt-4 flex min-h-[420px] w-full max-w-4xl items-center justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-dashed border-blue-300 bg-white shadow-xl shadow-blue-100">
            <div className="spin-slow absolute inset-6 rounded-full bg-[conic-gradient(from_40deg,#2563eb_0_32%,#38bdf8_32%_58%,#10b981_58%_80%,#8b5cf6_80%_100%)] p-8" />

            <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-white text-center shadow-inner">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">GTM</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">Flywheel</p>
                <p className="mt-2 text-[11px] leading-4 text-slate-500">
                  Each channel feeds <br /> the next conversion
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-20 hidden max-w-[220px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm leading-6 text-slate-700 shadow-xl md:block">
            <strong className="text-slate-950">Outbound</strong> creates immediate qualified pipeline.
          </div>

          <div className="absolute right-0 top-24 hidden max-w-[230px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm leading-6 text-slate-700 shadow-xl md:block">
            <strong className="text-slate-950">RevOps</strong> connects CRM, enrichment and reporting.
          </div>

          <div className="absolute bottom-2 hidden max-w-[230px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-sm leading-6 text-slate-700 shadow-xl md:block">
            <strong className="text-slate-950">Content</strong> builds authority and long-term inbound trust.
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-md flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-blue-100 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your work email"
            className="min-h-12 flex-1 rounded-xl px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700">
            Book a call
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}