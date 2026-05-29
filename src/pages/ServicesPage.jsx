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
      icon: SearchCheck,
      title: "Proprietary Deal Flow Systems",
      desc: "Founder-direct sourcing infrastructure designed for lower middle-market PE firms, independent sponsors, search funds, and acquisition operators seeking opportunities before competitive processes emerge.",
      points: [
        "Acquisition thesis mapping",
        "Founder identification systems",
        "Signal-based targeting",
        "CRM pipeline visibility",
      ],
    },

    {
      icon: Workflow,
      title: "Pipeline Architecture",
      desc: "Integrated seller and buyer acquisition systems for marketplaces, brokers, and transaction platforms seeking sustainable pipeline growth.",
      points: [
        "Seller acquisition systems",
        "Buyer engagement workflows",
        "Conversion optimization",
        "Pipeline reporting",
      ],
    },

    {
      icon: Mail,
      title: "Founder Relationship Infrastructure",
      desc: "Long-cycle founder relationship systems designed to cultivate trust and engagement years before transaction intent becomes visible.",
      points: [
        "Relationship-led outreach",
        "Founder tracking",
        "CRM nurture systems",
        "Long-term engagement",
      ],
    },

    {
      icon: Database,
      title: "Revenue Intelligence Systems",
      desc: "Connected CRM, reporting, and workflow infrastructure that transforms fragmented information into operational visibility.",
      points: [
        "CRM optimization",
        "Pipeline reporting",
        "Operational dashboards",
        "Revenue visibility",
      ],
    },

    {
      icon: Bot,
      title: "Acquisition Workflow Automation",
      desc: "Automated workflows that eliminate operational bottlenecks across sourcing, qualification, engagement, and pipeline management.",
      points: [
        "Workflow automation",
        "Data enrichment",
        "Task orchestration",
        "Pipeline routing",
      ],
    },

    {
      icon: BarChart3,
      title: "Signal-Based Market Intelligence",
      desc: "Continuous monitoring of ownership, hiring, expansion, and operational signals that identify opportunities before competitors.",
      points: [
        "Ownership signals",
        "Hiring intelligence",
        "Expansion tracking",
        "Opportunity monitoring",
      ],
    },
  ];

  const packages = [
    {
      name: "Proof-of-Value Pilot",
      price: "30–45 Days",
      desc: "A focused engagement designed to validate infrastructure performance before a long-term partnership.",
      features: [
        "Founder conversations",
        "Prospect enrichment",
        "Infrastructure setup",
        "Performance review",
      ],
    },

    {
      name: "Monthly Operating Retainer",
      price: "Most Popular",
      desc: "Ongoing ownership of your revenue infrastructure, sourcing systems, and reporting environment.",
      features: [
        "System operation",
        "Weekly reporting",
        "Pipeline management",
        "Infrastructure optimization",
      ],
    },

    {
      name: "Performance-Aligned Hybrid",
      price: "Select Partners",
      desc: "A lower retainer paired with performance incentives tied to qualified opportunities and closed outcomes.",
      features: [
        "Performance alignment",
        "Deal support",
        "Relationship infrastructure",
        "Strategic partnership",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden px-5 pt-44 pb-24 text-center">
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Revenue Infrastructure
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Revenue Infrastructure,
            <span className="block font-serif italic font-normal">
              engineered for operators
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
            We design, deploy, and operate AI-powered systems that generate
            predictable deal flow, founder relationships, and pipeline
            visibility.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/45">
            Not campaigns. Not agencies. Infrastructure.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white"
          >
            Book Strategy Call
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* SERVICES */}

      <section className="px-5 pb-24">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Infrastructure systems
            <span className="block font-serif italic font-normal">
              that compound over time
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Every engagement is designed around long-term relationship
            development, pipeline visibility, and proprietary opportunity
            creation.
          </p>
        </div>

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
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm font-medium text-black/70"
                  >
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
            {/* HOW WE BUILD INFRASTRUCTURE */}

      <section className="border-y border-black/10 bg-white/45 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              How we build
              <span className="block font-serif italic font-normal">
                infrastructure
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Our process is designed to create long-term sourcing leverage,
              operational visibility, and founder relationship infrastructure.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "Map The Market",
                "Identify businesses, founders, acquisition criteria, and opportunities aligned with your thesis.",
              ],

              [
                "02",
                "Build The System",
                "Deploy sourcing, CRM, reporting, and automation infrastructure.",
              ],

              [
                "03",
                "Activate Relationships",
                "Launch founder engagement systems and pipeline generation workflows.",
              ],

              [
                "04",
                "Compound Results",
                "Continuously improve visibility, relationships, and sourcing leverage.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-6"
              >
                <p className="text-sm font-semibold text-black/40">{num}</p>

                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR */}

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Built For Operators
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Designed for firms
              <span className="block font-serif italic font-normal">
                that acquire and grow
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "PE Firms",
                text: "Lower middle-market firms seeking proprietary acquisition opportunities.",
              },

              {
                title: "Independent Sponsors",
                text: "Operators building scalable sourcing infrastructure beyond personal networks.",
              },

              {
                title: "Search Funds",
                text: "Searchers using systems and automation to improve acquisition sourcing.",
              },

              {
                title: "Family Offices",
                text: "Permanent capital operators building founder-direct relationships.",
              },

              {
                title: "Marketplaces",
                text: "Platforms scaling seller acquisition and buyer engagement infrastructure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-lg shadow-black/5"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}

      <section className="border-y border-black/10 bg-white/45 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Engagement Models
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Choose the right
              <span className="block font-serif italic font-normal">
                partnership structure
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Whether you're validating a new sourcing strategy or building a
              long-term acquisition engine, we structure engagements around
              infrastructure ownership and measurable outcomes.
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
                    <h3 className="text-2xl font-semibold">
                      {item.name}
                    </h3>

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

      {/* CTA */}

      <section className="px-5 pb-24 text-center">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Build Revenue Infrastructure
            <span className="block font-serif italic font-normal text-blue-400">
              that compounds
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            If proprietary deal flow is a strategic priority for your firm,
            let's discuss the systems required to support it.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
          >
            Book Strategy Call
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}