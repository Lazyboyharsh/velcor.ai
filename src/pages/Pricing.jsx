import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Check, Zap, Shield, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Zap,
    name: "Pilot Campaign",
    badge: "Starter",
    price: "From $2,500",
    period: "one-time",
    desc: "Best for testing one focused outbound or automation system before scaling.",
    color: "bg-blue-400",
    features: [
      "ICP & offer deep-dive",
      "1 complete workflow build",
      "Lead list sourcing & enrichment",
      "AI-personalized messaging",
      "Basic CRM integration",
      "Campaign reporting dashboard",
    ],
    cta: "Start Pilot",
    highlight: false,
  },
  {
    icon: Shield,
    name: "Growth System",
    badge: "Most Popular",
    price: "From $5,500",
    period: "/month",
    desc: "Full outbound + CRM automation for teams ready to build predictable pipeline.",
    color: "bg-blue-500",
    features: [
      "Signal-based prospecting engine",
      "CRM workflow setup & cleanup",
      "AI personalization at scale",
      "Weekly optimization calls",
      "Multi-channel outreach (Email + LinkedIn)",
      "Revenue reporting dashboard",
      "Priority support",
    ],
    cta: "Apply Now",
    highlight: true,
  },
  {
    icon: Crown,
    name: "Revenue Engine",
    badge: "Advanced",
    price: "Custom",
    period: "pricing",
    desc: "End-to-end GTM infrastructure for companies scaling across acquisition and RevOps.",
    color: "bg-blue-700",
    features: [
      "Multiple simultaneous GTM workflows",
      "AI sales research agents",
      "Advanced analytics & dashboards",
      "Monthly strategic growth roadmap",
      "Full RevOps & CRM architecture",
      "Dedicated account strategist",
      "SLA-backed delivery",
    ],
    cta: "Book Strategy Call",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How quickly do we see results?",
    a: "Most clients see first warm replies within 2–3 weeks of launch. Qualified meetings typically start appearing in week 3–4 depending on the ICP and offer.",
  },
  {
    q: "Do we need any tools or software?",
    a: "We audit your existing stack and work with what you have. We'll recommend tools only where they genuinely improve your system's performance.",
  },
  {
    q: "Is there a setup fee?",
    a: "No hidden setup fees. The pricing above covers strategy, build, and launch. Ongoing optimization is billed monthly for retainer plans.",
  },
  {
    q: "Can we cancel anytime?",
    a: "Growth System and Revenue Engine plans require a 30-day notice. Pilot campaigns are one-time with no ongoing commitment.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity: 0; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 32px 60px rgba(0,0,0,0.12); }
        .badge-shimmer {
          background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 40%, #3b82f6 100%);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-44 pb-24 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-1/2 top-32 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-200/30 blur-[100px] opacity-60" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="fade-up mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Transparent Pricing
          </p>
          <h1 className="fade-up-1 text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Investment in your
            <span className="block font-serif italic font-normal">
              revenue system
            </span>
          </h1>
          <p className="fade-up-2 mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            No retainer traps. No vanity metrics. Just a system built to create
            qualified pipeline with clear milestones.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-[2rem] border p-6 shadow-xl backdrop-blur md:p-8 ${
                plan.highlight
                  ? "border-blue-400/40 bg-black text-white"
                  : "border-black/10 bg-white/65 text-black"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${plan.color} text-white`}
                >
                  <plan.icon size={22} />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    plan.highlight
                      ? "bg-blue-500/20 text-blue-400"
                      : "border border-black/10 bg-[#f6f1e8] text-black/55"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className={`pb-1 text-sm ${plan.highlight ? "text-white/50" : "text-black/45"}`}>
                  {plan.period}
                </span>
              </div>

              <p className={`mt-4 text-sm leading-7 ${plan.highlight ? "text-white/60" : "text-black/60"}`}>
                {plan.desc}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlight ? "bg-blue-500 text-white" : "bg-blue-400 text-white"
                      }`}
                    >
                      <Check size={12} />
                    </span>
                    <span className={plan.highlight ? "text-white/80" : "text-black/70"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/schedule-meeting"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-black text-white hover:bg-blue-500"
                }`}
              >
                {plan.cta} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-y border-black/10 bg-white/45 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            What's included
            <span className="block font-serif italic font-normal">in each plan</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 text-left text-sm font-semibold text-black/55">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className="py-4 text-center text-sm font-semibold text-black">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ICP & Offer Strategy", true, true, true],
                  ["Workflow Build", "1 workflow", "3 workflows", "Unlimited"],
                  ["AI Personalization", true, true, true],
                  ["CRM Integration", "Basic", "Full", "Enterprise"],
                  ["Reporting Dashboard", "Basic", "Advanced", "Custom"],
                  ["Dedicated Strategist", false, false, true],
                  ["SLA Guarantee", false, false, true],
                  ["AI Agents", false, true, true],
                ].map(([feature, ...vals], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white/40" : ""}>
                    <td className="rounded-l-xl py-4 pl-4 text-sm font-medium text-black/70">
                      {feature}
                    </td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="py-4 text-center text-sm">
                        {v === true ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 text-white mx-auto">
                            <Check size={13} />
                          </span>
                        ) : v === false ? (
                          <span className="text-black/25">—</span>
                        ) : (
                          <span className="text-xs font-semibold text-black/65">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-4xl font-semibold tracking-[-0.05em]">
            Pricing questions
            <span className="block font-serif italic font-normal">answered</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white/60"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-black transition hover:bg-white/80"
                >
                  {faq.q}
                  <span
                    className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-400 text-white text-lg font-bold transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-black/10 px-6 py-5 text-sm leading-7 text-black/65">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-16">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Not sure which plan
            <span className="block font-serif italic font-normal text-blue-400">
              is right for you?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
            Book a free 30-minute strategy call. We'll map the right system for your
            stage, offer, and goals — no pressure.
          </p>
          <Link
            to="/schedule-meeting"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Book Free Strategy Call <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
