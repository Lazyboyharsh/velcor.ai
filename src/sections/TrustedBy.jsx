import {
  BadgeCheck,
  DatabaseZap,
  MailCheck,
  Workflow,
  Bot,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function TrustedBy() {
  const items = [
    { icon: DatabaseZap, text: "Signal-based lead research" },
    { icon: MailCheck, text: "Personalized outbound systems" },
    { icon: Workflow, text: "CRM workflow automation" },
    { icon: Bot, text: "AI agents for GTM ops" },
    { icon: BarChart3, text: "Pipeline reporting dashboards" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-[#f6f1e8] py-16">
      <style>{`
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            {/* <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              <Sparkles size={14} className="text-blue-700" />
              Built for modern B2B teams
            </p> */}

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">
              The growth stack your team wished it had.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10">
            <BadgeCheck size={16} className="text-blue-400" />
            Strategy + systems + execution
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f6f1e8] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f6f1e8] to-transparent" />

          <div className="flex w-max animate-[scrollX_28s_linear_infinite] gap-4">
            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="group flex min-w-[280px] items-center gap-3 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-blue-400">
                  <item.icon size={20} />
                </div>

                <span className="text-sm font-semibold text-black/70 group-hover:text-black">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}