import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What exactly does Velcor.ai build?",
      a: "We build AI-powered go-to-market systems: signal-based lead research, personalized outbound workflows, CRM automation, AI sales assistants, reporting dashboards, and follow-up systems. The goal is a repeatable engine that produces qualified pipeline, not one-off campaigns.",
    },
    {
      q: "Is this a marketing agency or an automation service?",
      a: "Velcor.ai sits between both. We do not just run campaigns, we engineer the infrastructure behind pipeline generation, sales operations, and automated follow-up, then hand you a system that keeps working.",
    },
    {
      q: "Who is this best for?",
      a: "B2B companies with a considered, higher-value sale: B2B SaaS, M&A and private equity firms, AI and deep-tech teams, financial services, agencies, consultants, and other high-ticket service businesses that need qualified pipeline and cleaner sales workflows.",
    },
    {
      q: "Which industries do you specialize in?",
      a: "We focus on B2B SaaS, M&A and private equity, AI and deep tech, and financial services. Each sector gets the same core infrastructure, adapted to its buyers, sales cycles, and compliance realities, from founder-direct deal sourcing to signal-based SaaS outbound.",
    },
    {
      q: "What does the engagement look like?",
      a: "Most engagements follow a clear path: Week 1 onboarding and strategy, Week 2 building your outbound and CRM workflows, Week 3 launching campaigns, and Week 4 onward measuring and optimizing. You get a concrete deliverable at every step, so progress is visible from the start.",
    },
    {
      q: "How soon will we see results?",
      a: "Your first campaigns are typically live within the first few weeks, with early replies and meetings following soon after. Pipeline compounds over the engagement as we tighten targeting and messaging. We optimize for qualified conversations, not vanity activity.",
    },
    {
      q: "Do you use tools like Clay, Smartlead or HubSpot?",
      a: "Yes. Systems can be built around tools like Clay, Smartlead, Instantly, HubSpot, Pipedrive, Airtable, Notion, Zapier, Make, and custom AI workflows. We work inside your existing stack where possible, or recommend the right setup if you are starting fresh.",
    },
    {
      q: "Do we own the systems and data you build?",
      a: "Yes. Wherever possible we build inside your own accounts and tools, so the workflows, data, and CRM stay yours. You are not locked into a black box you cannot access or run without us.",
    },
    {
      q: "How is this different from a typical lead-gen agency or SDR outsourcing?",
      a: "Most agencies rent you activity: a batch of leads or booked calls that stop the moment you stop paying. We build infrastructure you keep, powered by buying signals and AI, so pipeline generation becomes a system inside your business rather than an outsourced dependency.",
    },
    {
      q: "How do you handle compliance and data privacy?",
      a: "Outreach and data workflows are built to respect relevant regulations and your internal compliance requirements, with careful attention to deliverability and sender reputation. This matters especially in financial services and M&A, where precise, relationship-led messaging is essential.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on scope, your stack, and the systems you need. Most clients start with a focused pilot, so you can see the approach work before scaling. Book a strategy call and we will map a scope and a clear proposal for your situation.",
    },
    {
      q: "How do we get started?",
      a: "Start with a strategy call. We map your offer, ICP, and current sales workflow, then propose a pilot campaign and system structure tailored to your goals.",
    },
  ];

  return (
    <section id="resources" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Questions
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Before we build
            <span className="block font-serif italic font-normal">
              your GTM system
            </span>
          </h2>

          <p className="mt-7 max-w-md text-lg leading-8 text-black/60">
            Straight answers on how Velcor.ai works, who it is for, the industries
            we serve, and what we can automate.
          </p>

          <Link
            to="/schedule-meeting"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Still have a question? Book a call
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-lg shadow-black/5 backdrop-blur"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
              >
                <span className="text-lg font-semibold tracking-tight text-black">
                  {item.q}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Plus
                    size={18}
                    className={`transition ${open === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>

              {open === index && (
                <p className="px-6 pb-6 text-base leading-7 text-black/60">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
