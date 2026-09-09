import { Link } from "react-router-dom";
import { Cloud, Scale, Bot, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Cloud,
    title: "B2B SaaS",
    desc: "Predictable pipeline for product-led and sales-led SaaS. Signal-based outbound, RevOps automation and content engines tuned to your ICP, activation and expansion motions.",
    tags: ["Outbound systems", "PLG & SLG motions", "CRM automation"],
  },
  {
    icon: Scale,
    title: "M&A & Private Equity",
    desc: "Proprietary deal-flow infrastructure for PE firms, independent sponsors and search funds. Founder-direct sourcing and long-cycle relationship systems that surface opportunities before competitive processes emerge.",
    tags: ["Proprietary deal flow", "Founder relationships", "Thesis-based sourcing"],
  },
  {
    icon: Bot,
    title: "AI & Tech",
    desc: "Go-to-market systems for AI-native and software companies: sharp category positioning, developer-aware outbound and content that earns trust with technical buyers.",
    tags: ["Technical GTM", "Category positioning", "Developer-aware outbound"],
  },
  {
    icon: Cpu,
    title: "Deep Tech",
    desc: "Long-cycle GTM for hardware, robotics and frontier-tech teams: targeted outreach to specialized buyers and relationship infrastructure built for multi-stakeholder, high-consideration deals.",
    tags: ["Complex-sales pipeline", "Niche targeting", "Multi-stakeholder nurture"],
  },
  {
    icon: ShieldCheck,
    title: "Financial Services",
    desc: "Revenue systems for fintech, capital allocators and financial-services firms: precise targeting, careful messaging and CRM workflows aligned to regulated, relationship-led sales.",
    tags: ["Compliance-aware outreach", "Relationship-led sales", "Clean data & governance"],
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Who we serve
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Built for the way
            <span className="block font-serif italic font-normal">
              your market actually buys
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
            The same revenue infrastructure, adapted to the buyers, sales cycles
            and compliance realities of each sector we work in.
          </p>
        </div>

        {/* Grid */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item) => (
            <div
              key={item.title}
              className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/[0.04] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400">
                <item.icon size={24} />
              </div>

              <h3 className="text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.03em] text-black">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-black/60">
                {item.desc}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/10 bg-black p-8 text-white shadow-xl shadow-black/10">
            <div>
              <h3 className="text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.03em]">
                Not sure where you fit?
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-white/60">
                If you sell a considered B2B offer, we can map a revenue system to
                your market. Let's pressure-test it on a quick call.
              </p>
            </div>

            <Link
              to="/schedule-meeting"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Book a strategy call
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
