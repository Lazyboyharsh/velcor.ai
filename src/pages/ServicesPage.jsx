import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Check,
  Mail,
  Database,
  Workflow,
  Bot,
  BarChart3,
  SearchCheck,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Mail,
      title: "Omnichannel Outreach Engine",
      desc: "Connect every channel—email, LinkedIn, calls, and ads—into one unified outbound motion that finds buyers before your competitors do.",
      points: ["Multi-channel sequencing", "Intent signal capture", "Automated reply detection", "Smart cadence optimization"],
    },
    {
      icon: SearchCheck,
      title: "Conversation Intelligence Hub",
      desc: "Turn every sales interaction into actionable data. Record, transcribe, and analyze calls to uncover what drives deals forward.",
      points: ["Call transcription & analysis", "Competitor mention tracking", "Win/loss pattern detection", "Sales coaching insights"],
    },
    {
      icon: Database,
      title: "Unified Data Foundation",
      desc: "Clean, enrich, and connect your customer data across every tool. Build a single source of truth for your entire GTM team.",
      points: ["Data deduplication", "Firmographic enrichment", "Activity tracking", "Custom object modeling"],
    },
    {
      icon: Bot,
      title: "Autonomous SDR Agents",
      desc: "AI-powered SDRs that research accounts, personalize outreach at scale, and book meetings while your team focuses on closing.",
      points: ["24/7 prospect engagement", "Contextual personalization", "Meeting scheduling", "Handoff to human reps"],
    },
    {
      icon: Workflow,
      title: "Revenue Workflow Studio",
      desc: "Design, test, and deploy complex GTM automations without writing code. Connect your entire tech stack in minutes.",
      points: ["Visual workflow builder", "Conditional branching", "Multi-step sequences", "Error handling & retries"],
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Suite",
      desc: "Forecast revenue with confidence. See which deals are likely to close, which need attention, and where to focus next quarter.",
      points: ["AI-powered forecasting", "Pipeline health scoring", "Lead probability models", "Scenario planning"],
    },
  ];

  const packages = [
    {
      name: "System Audit",
      price: "Fast Track",
      desc: "Perfect for teams wanting a complete health check before scaling.",
      features: ["Full tech stack audit", "Data quality assessment", "30+ workflow recommendations", "ROI projection model"],
    },
    {
      name: "Growth Foundation",
      price: "Most Popular",
      desc: "For scaling teams that need core GTM infrastructure + automation.",
      features: ["Omnichannel setup", "CRM optimization", "Automated reporting", "Weekly strategy sessions"],
    },
    {
      name: "Enterprise Engine",
      price: "Full Suite",
      desc: "End-to-end revenue architecture for companies targeting aggressive growth.",
      features: ["AI SDR deployment", "Predictive forecasting", "Custom workflow studio", "Quarterly roadmap planning"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <section className="relative overflow-hidden px-5 pt-44 pb-24 text-center">
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            The Revenue Operating System
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Automate your entire
            <span className="block font-serif italic font-normal">
              go-to-market engine
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Connect every channel, automate every workflow, and predict every outcome. 
            The only GTM platform you'll ever need to scale revenue predictably.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white"
          >
            Deploy your engine <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl shadow-black/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-blue-400">
                <service.icon size={23} />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/65">
                {service.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium text-black/70">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-black">
                      <Check size={13} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/45 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              From setup to scale
              <span className="block font-serif italic font-normal">
                in four phases
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Connect", "Integrate your CRM, email, calendar, and data sources into one unified workspace."],
              ["02", "Configure", "Build custom workflows, set triggers, define scoring models, and map your buyer journey."],
              ["03", "Launch", "Deploy omnichannel campaigns, activate AI agents, and start capturing real-time signals."],
              ["04", "Optimize", "Monitor performance, test variables, refine targeting, and scale what works."],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-6">
                <p className="text-sm font-semibold text-black/40">{num}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Deployment Plans
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Choose your
              <span className="block font-serif italic font-normal">
                GTM acceleration path
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Start with a diagnostic audit or deploy the complete revenue intelligence platform.
              Every plan includes implementation support.
            </p>
          </div>

          <div className="grid gap-4">
            {packages.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-xl shadow-black/5 transition hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      {item.desc}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400">
                    {item.price}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-black/10 bg-[#f6f1e8] px-3 py-2 text-xs font-medium text-black/65"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 text-center">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Ready to transform
            <span className="block font-serif italic font-normal text-blue-400">
              your revenue operations?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Join 500+ B2B teams using our platform to automate outreach, 
            predict pipeline, and scale revenue predictably.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
          >
            Start your audit <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}