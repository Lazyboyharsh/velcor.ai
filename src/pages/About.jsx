import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Check, Users, Target, Zap, BarChart3, Brain, Shield } from "lucide-react";

export default function About() {
  const values = [
    { icon: Target, title: "Systems over random campaigns", desc: "We build repeatable infrastructure, not one-off tactics." },
    { icon: Brain, title: "AI workflows with human strategy", desc: "Technology amplifies great thinking; it never replaces it." },
    { icon: BarChart3, title: "Pipeline quality over vanity metrics", desc: "We measure success in qualified meetings, not opens." },
    { icon: Shield, title: "CRM clarity and clean execution", desc: "Clean data, clean pipeline, clean handoffs to sales." },
  ];

  const team = [
    { name: "Alex Rivera", role: "Founder & GTM Strategist", specialty: "Outbound Systems" },
    { name: "Maya Chen", role: "Head of RevOps", specialty: "CRM Architecture" },
    { name: "Jordan Lee", role: "AI Workflow Engineer", specialty: "Automation & AI" },
    { name: "Sam Patel", role: "Content & ABM Lead", specialty: "Content Systems" },
  ];

  const milestones = [
    { year: "2022", event: "Founded with a mission to build AI-native GTM for B2B" },
    { year: "2023", event: "Helped 12 SaaS companies build their first outbound system" },
    { year: "2024", event: "Launched AI personalization and CRM automation suite" },
    { year: "2025", event: "Expanded to RevOps and multi-channel GTM orchestration" },
    { year: "2026", event: "Serving 40+ B2B tech companies across 8 countries" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-delay-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .fade-delay-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .float-soft { animation: float 5s ease-in-out infinite; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.10); }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-44 pb-20 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-1/2 top-32 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-200/25 blur-[100px] opacity-60" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="fade-up mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            About Velcor.ai
          </p>
          <h1 className="fade-delay-1 mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            We build GTM systems
            <span className="block font-serif italic font-normal">
              for modern B2B teams
            </span>
          </h1>
          <p className="fade-delay-2 mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Velcor.ai combines AI automation, outbound strategy, RevOps and CRM
            workflows to help companies create cleaner, more predictable pipeline.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="card-hover rounded-[2rem] border border-black/10 bg-black p-8 text-white shadow-2xl shadow-black/20 md:p-12">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Not just campaigns.
              <span className="block font-serif italic font-normal text-blue-400">
                Revenue infrastructure.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Most teams run disconnected outbound, content, forms and CRM
              workflows. We connect these into one operating system that finds
              signals, enriches leads, personalizes outreach and routes pipeline.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Build with us <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-hover flex items-start gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-lg shadow-black/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <value.icon size={17} />
                </span>
                <div>
                  <p className="font-semibold text-black">{value.title}</p>
                  <p className="mt-1 text-sm text-black/55">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-black/10 bg-white/45 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Our journey
            <span className="block font-serif italic font-normal">building GTM systems</span>
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[28px] top-0 h-full w-px bg-blue-200 md:left-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* dot */}
                  <div className="absolute left-[20px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30 md:left-1/2 md:-translate-x-1/2 mt-4">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10 md:ml-[55%]"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500">{m.year}</span>
                    <p className="mt-1 text-base font-medium text-black/75 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              The team behind
              <span className="block font-serif italic font-normal">your GTM system</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-black/55">
              Operators, engineers, and strategists who've built revenue systems at fast-growing B2B companies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="card-hover group rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl shadow-black/5"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/20 transition group-hover:scale-110">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-black/55">{member.role}</p>
                <span className="mt-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {member.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Ready to build your
            <span className="block font-serif italic font-normal text-blue-400">
              revenue system?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
            Apply for a pilot campaign and get a custom growth system mapped around your offer, market, and tools.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Apply Now <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
