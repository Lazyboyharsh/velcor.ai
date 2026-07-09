import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Check,
  Sparkles,
  Layers3,
  ShieldCheck,
  Activity,
  Radar,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── Inline SVGs for brands NOT in SimpleIcons v16 ───────────────────────────

const OpenAISVG = ({ className, white }) => (
  <svg className={className} viewBox="0 0 24 24" fill={white ? "#ffffff" : "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.31a4.501 4.501 0 0 1-1.66-6.414zm16.597 3.855l-5.843-3.369 2.019-1.168a.076.076 0 0 1 .071 0l4.816 2.797a4.5 4.5 0 0 1-.676 8.109v-5.677a.795.795 0 0 0-.387-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.772a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const SalesforceSVG = ({ className, white }) => (
  <svg className={className} viewBox="0 0 24 24" fill={white ? "#ffffff" : "#00A1E0"} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.85 4.27a4.17 4.17 0 0 1 3.01-1.27 4.2 4.2 0 0 1 3.16 1.44 5.84 5.84 0 0 1 1.63-.23 5.87 5.87 0 0 1 5.87 5.87 5.87 5.87 0 0 1-5.87 5.87H6.14A4.14 4.14 0 0 1 2 11.81a4.14 4.14 0 0 1 4.14-4.14c.17 0 .34.01.5.03A4.17 4.17 0 0 1 9.85 4.27z"/>
  </svg>
);

const AWSSVG = ({ className, white }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill={white ? "#ffffff" : "#FF9900"} d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
    <path fill={white ? "#ffffff" : "#FF9900"} fillRule="evenodd" d="M20.16 17.143c-2.209 1.631-5.415 2.498-8.175 2.498-3.867 0-7.345-1.43-9.978-3.806-.207-.187-.023-.44.224-.296 2.842 1.654 6.355 2.649 9.978 2.649 2.447 0 5.135-.51 7.608-1.559.375-.168.686.247.343.514zm.974-1.11c-.28-.36-1.853-.17-2.563-.086-.215.025-.248-.16-.056-.295 1.254-.881 3.313-.629 3.552-.334.24.303-.064 2.363-1.245 3.348-.18.152-.352.072-.272-.127.267-.662.854-2.147.584-2.506z"/>
  </svg>
);

// ─── Universal icon renderer ─────────────────────────────────────────────────
// SimpleIcons v16 confirmed slugs → use CDN
// Missing brands → inline SVG components
const SI_SLUGS = new Set([
  "hubspot","zapier","anthropic","notion","cloudflare","apollographql",
  "langchain","n8n","make","googleanalytics","looker","metabase","vercel",
  "firebase","perplexity","googleanalytics",
]);

const SVG_COMPONENTS = {
  openai:      OpenAISVG,
  salesforce:  SalesforceSVG,
  amazonaws:   AWSSVG,
};

const BrandIcon = ({ id, name, className = "h-7 w-7", white = false }) => {
  if (SVG_COMPONENTS[id]) {
    const Comp = SVG_COMPONENTS[id];
    return <Comp className={className} white={white} />;
  }
  if (SI_SLUGS.has(id)) {
    const src = white
      ? `https://cdn.simpleicons.org/${id}/ffffff`
      : `https://cdn.simpleicons.org/${id}`;
    return (
      <img src={src} alt={name} className={className}
        style={{ objectFit: "contain" }}
        onError={(e) => { e.currentTarget.style.display = "none"; }} />
    );
  }
  return null;
};

// ─── Process step icon map ────────────────────────────────────────────────────
// Each step gets a real brand logo representing the domain
const processIcons = [
  { id: "salesforce", name: "Salesforce" },   // Infrastructure Audit → CRM
  { id: "openai",     name: "OpenAI" },        // AI Workflow Architecture → AI
  { id: "zapier",     name: "Zapier" },        // Deployment & Integration → Automation
  { id: "googleanalytics", name: "GA4" },     // Optimization & Scale → Analytics
];

// Ecosystem section icons
const ecosystemIcons = [
  { id: "hubspot",        name: "HubSpot" },
  { id: "openai",         name: "OpenAI" },
  { id: "zapier",         name: "Zapier" },
  { id: "anthropic",      name: "Anthropic" },
  { id: "googleanalytics",name: "GA4" },
];

export default function Process() {
  const process = [
    {
      step: "01",
      title: "Infrastructure Audit",
      desc: "We deeply analyze your GTM stack, workflows, CRM systems, outbound architecture, reporting setup, and operational bottlenecks.",
    },
    {
      step: "02",
      title: "AI Workflow Architecture",
      desc: "We engineer scalable AI-powered systems that automate outreach, qualification, routing, enrichment, and revenue operations.",
    },
    {
      step: "03",
      title: "Deployment & Integration",
      desc: "We connect APIs, CRMs, outbound engines, AI agents, automations, and tracking systems into one intelligent ecosystem.",
    },
    {
      step: "04",
      title: "Optimization & Scale",
      desc: "Continuous testing, analytics, monitoring, and workflow optimization help scale pipeline generation predictably.",
    },
  ];

  const ecosystem = [
    { title: "CRM Infrastructure",        iconId: "hubspot",         iconName: "HubSpot" },
    { title: "AI Prospecting",             iconId: "openai",          iconName: "OpenAI" },
    { title: "Outbound Automation",        iconId: "zapier",          iconName: "Zapier" },
    { title: "Conversation Intelligence",  iconId: "anthropic",       iconName: "Claude" },
    { title: "Revenue Analytics",          iconId: "googleanalytics", iconName: "GA4" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-32">
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:28px_28px]" />
        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
      

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              Intelligent systems for
              <span className="block font-serif italic font-normal">modern revenue teams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60"
            >
              We transform fragmented operations into scalable AI-powered infrastructure built for automation, predictability, and accelerated growth.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              href="/schedule-meeting"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
            >
              Build Your Infrastructure <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="relative mx-auto mt-24 max-w-6xl"
          >
            <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                {/* LEFT */}
                <div className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black/50">Revenue Workflow Engine</p>
                      <h3 className="mt-2 text-3xl font-semibold">Unified AI Pipeline</h3>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
                      <Radar size={28} className="text-blue-400" />
                    </div>
                  </div>

                  {/* FLOW with real logos */}
                  <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                    {[
                      { label: "CRM",        id: "hubspot" },
                      { label: "AI Agents",  id: "openai" },
                      { label: "Enrichment", id: "apollographql" },
                      { label: "Outbound",   id: "zapier" },
                      { label: "Analytics",  id: "googleanalytics" },
                    ].map((item, i) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ y: -6 }}
                          className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold shadow-sm"
                        >
                          <BrandIcon id={item.id} name={item.label} className="h-5 w-5 flex-shrink-0" />
                          {item.label}
                        </motion.div>
                        {i !== 4 && <div className="hidden h-[2px] w-10 bg-black/20 lg:block" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="grid gap-5">
                  <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-black/10 bg-black p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/50">Workflow Activity</p>
                        <h3 className="mt-2 text-5xl font-semibold">24/7</h3>
                      </div>
                      <Activity className="text-blue-400" size={40} />
                    </div>
                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.5 }}
                        className="h-full rounded-full bg-blue-400" />
                    </div>
                    <p className="mt-3 text-sm text-white/60">AI workflows continuously executing across your stack.</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-black/10 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
                        <ShieldCheck size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Enterprise Infrastructure</h3>
                        <p className="text-sm text-black/55">Built for operational scale</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {["Advanced workflow automation","Real-time synchronization","AI-powered orchestration"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm font-medium text-black/70">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                            <Check size={12} />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
       <section className="relative px-5 py-28">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
        Deployment Framework
      </p>

      <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
        Deployment
        <span className="block font-serif italic font-normal">
          process architecture
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        Every engagement follows a structured implementation framework
        designed to build, launch, and optimize revenue infrastructure
        with predictable outcomes.
      </p>
    </div>

    <div className="relative mt-24">
      <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black/10 lg:block" />

      <div className="space-y-12">
        {[
          {
            step: "01",
            title: "Strategy & Market Mapping",
            desc: "Define ideal customer profiles, acquisition criteria, positioning, and growth objectives before infrastructure deployment begins.",
          },
          {
            step: "02",
            title: "Infrastructure Deployment",
            desc: "Build CRM architecture, prospect databases, enrichment workflows, reporting systems, and automation foundations.",
          },
          {
            step: "03",
            title: "Campaign Activation",
            desc: "Launch outbound programs, founder engagement workflows, multi-channel outreach, and pipeline generation systems.",
          },
          {
            step: "04",
            title: "Measurement & Optimization",
            desc: "Track performance, improve conversion rates, refine messaging, and continuously optimize revenue operations.",
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 !== 0
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:bg-blue-400/20" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Generic Step Badge */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-lg font-semibold text-white">
                      {item.step}
                    </div>

                    <span className="text-sm font-semibold tracking-[0.15em] text-black/35">
                      PHASE {item.step}
                    </span>
                  </div>

                  <h3 className="mt-8 text-4xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-black/60">
                    {item.desc}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-8 h-[2px] w-12 rounded-full bg-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* Timeline Number */}
            <div className="hidden justify-center lg:flex">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex h-28 w-28 items-center justify-center rounded-full border border-black/10 bg-black text-3xl font-semibold text-blue-400 shadow-xl"
              >
                {item.step}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ECOSYSTEM */}
      <section className="border-y border-black/10 bg-white/40 px-5 py-28">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
        Connected Infrastructure
      </p>

      <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
        One connected
        <span className="block font-serif italic font-normal">
          revenue ecosystem
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
        Every component works together to create a predictable system for
        sourcing, engagement, pipeline visibility, and revenue growth.
      </p>
    </div>

    <div className="mt-20 grid gap-6 lg:grid-cols-5">
      {[
        {
          icon: "01",
          title: "Market Intelligence",
          desc: "Identify high-value accounts using acquisition criteria, intent signals, and market research.",
        },
        {
          icon: "02",
          title: "Prospect Database",
          desc: "Build enriched contact databases with verified decision-makers and company insights.",
        },
        {
          icon: "03",
          title: "Outreach Engine",
          desc: "Launch personalized outbound campaigns across email, LinkedIn, and automated workflows.",
        },
        {
          icon: "04",
          title: "CRM Infrastructure",
          desc: "Centralize conversations, opportunities, reporting, and relationship management.",
        },
        {
          icon: "05",
          title: "Revenue Analytics",
          desc: "Track pipeline performance, conversion metrics, and growth opportunities in real time.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -8 }}
          className="relative flex min-h-[320px] flex-col rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-8 shadow-lg shadow-black/5"
        >
          {/* Generic Number Badge */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-lg font-semibold text-white">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="mt-6 min-h-[64px] text-xl font-semibold leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-black/60">
            {item.desc}
          </p>

          {/* Connector */}
          {i !== 4 && (
            <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-black/20 lg:block" />
          )}

          {/* Bottom Accent */}
          <div className="mt-auto pt-8">
            <div className="h-[2px] w-12 rounded-full bg-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="px-5 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
              <Layers3 size={14} />
              Performance Layer
            </div>
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Systems designed
              <span className="block font-serif italic font-normal">to compound growth</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Every workflow improves operational efficiency, response rates, lead quality, and revenue predictability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["3.4x", "Pipeline acceleration"],
              ["65%",  "Manual work reduction"],
              ["24/7", "AI workflow execution"],
              ["92%",  "Data sync accuracy"],
            ].map(([value, text]) => (
              <motion.div
                whileHover={{ y: -8 }} key={text}
                className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5"
              >
                <h3 className="text-5xl font-semibold tracking-tight">{value}</h3>
                <p className="mt-4 text-base text-black/60">{text}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-black/70">
                  <Check size={16} className="text-blue-500" />
                  Enterprise-grade automation
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-28">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-black/10 bg-black px-8 py-16 text-center text-white shadow-2xl shadow-black/20 md:px-16">
          <div className="absolute left-0 top-0 h-full w-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_55%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Ready to build your
              <span className="block font-serif italic font-normal text-blue-400">revenue infrastructure?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              We help modern B2B teams automate operations, scale outreach, centralize workflows, and accelerate predictable growth.
            </p>
            <a href="/schedule-meeting" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400">
              Book Strategy Call <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}