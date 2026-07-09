import { Check, CalendarDays } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/velcor-ai-team/30min";

export default function PilotCTA() {
  const benefits = [
    "Signal-based lead list built for your ICP",
    "AI-personalized outbound sequence",
    "CRM workflow and pipeline tracking",
    "Weekly optimization and reporting",
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f6f1e8] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
        <div>
          <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur-md">Pilot Campaign</p>
          <h2 className="max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] text-black leading-[1.05]">
            Apply for a pilot campaign
            <span className="block font-serif italic font-normal">built around your offer</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            We'll map your ICP, identify buying signals, engineer outbound systems, connect CRM automations, and launch scalable revenue infrastructure.
          </p>
          <div className="mt-8 grid gap-3 sm:gap-4">
            {benefits.map((item) => (
              <div key={item} className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3.5 backdrop-blur-xl transition-all duration-300 hover:translate-x-2 hover:border-blue-400/20 hover:bg-white sm:gap-4 sm:py-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-black shadow-lg shadow-blue-400/20 sm:h-10 sm:w-10"><Check size={16} /></span>
                <span className="text-sm font-semibold text-black/75">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"><img src="/favicon.svg" alt="Velcor.ai logo" className="h-9 w-9" /></div>
            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Book your <span className="block text-blue-400">1-1 Strategy Call</span></h3>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">Choose a time that works for you. Calendly automatically shows availability in your local timezone.</p>
            <a href="/schedule-meeting" className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto">Schedule a Meeting <CalendarDays size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
