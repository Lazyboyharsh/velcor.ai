import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What does Velcor.ai actually do?",
      a: "We design and build AI-powered GTM systems including outbound workflows, lead enrichment, CRM automation, AI agents and reporting dashboards.",
    },
    {
      q: "Is this only for SaaS companies?",
      a: "No. It works best for B2B companies that sell high-value services, software, consulting, or solutions where qualified pipeline matters.",
    },
    {
      q: "Do you provide leads or only automation?",
      a: "We can help with both. We build systems to find signals, enrich leads, personalize outreach and push qualified opportunities into your CRM.",
    },
    {
      q: "Can this connect with my existing CRM?",
      a: "Yes. The system can be planned around tools like HubSpot, Pipedrive, Airtable, Google Sheets, Notion, email tools and automation platforms.",
    },
    {
      q: "How fast can we launch?",
      a: "A simple workflow can be planned quickly. More complex systems depend on your data, tools and campaign requirements.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
            Questions before we build?
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-slate-950">
                  {item.q}
                </span>
                <Plus
                  size={18}
                  className={`shrink-0 text-blue-600 transition ${
                    open === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              {open === index && (
                <p className="px-6 pb-5 text-sm leading-7 text-slate-600">
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