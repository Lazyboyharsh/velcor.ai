import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What exactly does Velcor.ai build?",
      a: "We build AI-powered GTM systems: signal-based lead research, outbound workflows, CRM automation, AI sales assistants, reporting dashboards and follow-up systems.",
    },
    {
      q: "Is this a marketing agency or automation service?",
      a: "Velcor.ai sits between both. We do not just run campaigns — we engineer the systems behind pipeline generation, sales operations and automated follow-up.",
    },
    {
      q: "Who is this best for?",
      a: "B2B SaaS, agencies, consultants, service businesses and high-ticket companies that need qualified pipeline and cleaner sales workflows.",
    },
    {
      q: "Do you use AI tools like Clay, Smartlead or HubSpot?",
      a: "Yes. The system can be built around tools like Clay, Smartlead, Instantly, HubSpot, Pipedrive, Airtable, Notion, Zapier, Make and custom AI workflows.",
    },
    {
      q: "How do we start?",
      a: "Start with a strategy call. We map your offer, ICP, current sales workflow and then suggest a pilot campaign structure.",
    },
  ];

  return (
    <section id="resources" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
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
            A few quick answers about how Velcor.ai works, who it is for and
            what we can automate.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-lg shadow-black/5 backdrop-blur"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
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