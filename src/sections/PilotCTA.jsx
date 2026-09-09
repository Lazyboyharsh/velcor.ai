import { Link } from "react-router-dom";
import { Check, CalendarDays, ArrowRight } from "lucide-react";

export default function PilotCTA() {
  const benefits = [
    "Signal-based lead list built for your ICP",
    "AI-personalized outbound sequence",
    "CRM workflow and pipeline tracking",
    "Weekly optimization and reporting",
  ];

  const details = ["30 minutes", "Google Meet", "Your timezone"];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f1e8] px-5 py-24 md:py-32 lg:px-8"
    >
      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: value proposition */}
        <div>
          <p className="mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
            Pilot Campaign
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
            Apply for a pilot campaign
            <span className="block font-serif font-normal italic">
              built around your offer
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-black/60">
            We map your ICP, identify buying signals, engineer outbound systems,
            connect CRM automations, and launch revenue infrastructure you can
            scale.
          </p>

          {/* What's included */}
          <div className="mt-9 rounded-3xl border border-black/10 bg-white/60 p-2 backdrop-blur">
            <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
              Your pilot includes
            </p>

            <ul className="divide-y divide-black/5">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3 px-4 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Check size={13} />
                  </span>
                  <span className="text-[15px] font-medium text-black/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: booking card */}
        <div className="rounded-[2rem] border border-white/10 bg-black p-8 text-white shadow-xl shadow-black/20 sm:p-10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-blue-400">
              <CalendarDays size={17} />
            </span>
            <span className="text-sm font-medium text-white/70">
              30-minute strategy call
            </span>
          </div>

          <h3 className="mt-7 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.6rem] sm:leading-[1.05]">
            Book your
            <span className="block font-serif font-normal italic text-blue-400">
              1-on-1 strategy call
            </span>
          </h3>

          <p className="mt-5 max-w-md text-[15px] leading-7 text-white/65">
            Pick a time that works for you. Calendly shows availability in your
            local timezone, and we will map your ICP, outbound, and revenue
            infrastructure live on the call.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {details.map((d) => (
              <span
                key={d}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70"
              >
                {d}
              </span>
            ))}
          </div>

          <Link
            to="/schedule-meeting"
            className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 sm:w-auto"
          >
            Schedule a meeting
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-5 text-xs text-white/40">
            No commitment. Just a focused conversation about your pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
