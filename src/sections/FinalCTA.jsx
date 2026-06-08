import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-2xl shadow-blue-100/70 backdrop-blur md:p-14">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Sparkles size={26} />
        </div>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
          Want a custom GTM system for Velcor.ai?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Share your offer, market and sales process. We’ll map the best AI
          workflow to generate, qualify and convert more pipeline.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-blue-100 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your work email"
            className="min-h-12 flex-1 rounded-xl px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700">
            Claim free GTM plan
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}