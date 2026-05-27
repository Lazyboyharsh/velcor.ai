import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Database,
  Bot,
  Zap,
  Workflow,
  BarChart3,
  ShieldCheck,
  Cloud,
  Cpu,
  Layers3,
  Globe,
  Sparkles,
  Network,
  Activity,
  Radar,
  Check,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Infrastructure() {
  const integrations = [
    {
      name: "OpenAI",
      logo: "https://cdn.simpleicons.org/openai",
    },
    {
      name: "HubSpot",
      logo: "https://cdn.simpleicons.org/hubspot",
    },
    {
      name: "Salesforce",
      logo: "https://cdn.simpleicons.org/salesforce",
    },
    {
      name: "Zapier",
      logo: "https://cdn.simpleicons.org/zapier",
    },
    {
      name: "Apollo",
      logo: "https://cdn.simpleicons.org/apollographql",
    },
    {
      name: "Slack",
      logo: "https://cdn.simpleicons.org/slack",
    },
    {
      name: "Notion",
      logo: "https://cdn.simpleicons.org/notion",
    },
    {
      name: "Cloudflare",
      logo: "https://cdn.simpleicons.org/cloudflare",
    },
  ];

  const categories = [
    {
      title: "CRM Infrastructure",
      icon: Database,
      tools: ["HubSpot", "Salesforce", "Pipedrive", "Close CRM"],
    },
    {
      title: "AI Intelligence",
      icon: Brain,
      tools: ["OpenAI", "Claude", "Perplexity", "LangChain"],
    },
    {
      title: "Outbound Systems",
      icon: Zap,
      tools: ["Apollo", "Instantly", "Smartlead", "Lemlist"],
    },
    {
      title: "Automation Stack",
      icon: Workflow,
      tools: ["Zapier", "Make", "n8n", "Webhooks"],
    },
    {
      title: "Analytics Layer",
      icon: BarChart3,
      tools: ["GA4", "Looker", "Metabase", "Power BI"],
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      tools: ["AWS", "Vercel", "Cloudflare", "Firebase"],
    },
  ];

  const systems = [
    {
      title: "Lead Capture",
      icon: Globe,
    },
    {
      title: "AI Qualification",
      icon: Bot,
    },
    {
      title: "Data Enrichment",
      icon: Cpu,
    },
    {
      title: "Outbound Automation",
      icon: Zap,
    },
    {
      title: "CRM Sync",
      icon: Database,
    },
    {
      title: "Revenue Analytics",
      icon: BarChart3,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-32">
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:28px_28px]" />

        {/* BLURS */}
        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur"
          >
            <Sparkles size={14} />
            Revenue Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            Connected systems for
            <span className="block font-serif italic font-normal">
              modern revenue teams
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60"
          >
            AI infrastructure, outbound systems, workflow automation,
            analytics, and operational architecture designed for scalable
            B2B growth.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
          >
            Build Your Stack
            <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mx-auto mt-24 max-w-6xl"
        >
          <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT */}
              <div className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-black/50">
                      Revenue Workflow Engine
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold">
                      Unified AI Pipeline
                    </h3>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                    <Radar size={28} />
                  </div>
                </div>

                {/* FLOW */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                  {[
                    "CRM",
                    "AI Agents",
                    "Enrichment",
                    "Outbound",
                    "Analytics",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        whileHover={{ y: -6 }}
                        className="rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm font-semibold shadow-sm"
                      >
                        {item}
                      </motion.div>

                      {i !== 4 && (
                        <div className="hidden h-[2px] w-10 bg-black/20 lg:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid gap-5">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-black/10 bg-black p-6 text-white"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">
                        AI Workflow Activity
                      </p>

                      <h3 className="mt-2 text-5xl font-semibold">
                        24/7
                      </h3>
                    </div>

                    <Activity className="text-blue-400" size={40} />
                  </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full rounded-full bg-blue-400"
                    />
                  </div>

                  <p className="mt-3 text-sm text-white/60">
                    Intelligent systems continuously executing.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400">
                      <ShieldCheck size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        Enterprise Infrastructure
                      </h3>

                      <p className="text-sm text-black/55">
                        Built for scalable operations
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Advanced workflow automation",
                      "Real-time synchronization",
                      "AI-powered orchestration",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-black/70"
                      >
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
      </section>

      {/* LOGO CLOUD */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
              Connected Infrastructure Stack
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-6"
            >
              {[...integrations, ...integrations].map((item, i) => (
                <div
                  key={i}
                  className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-black/10 bg-white/70 px-6 py-5 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-8 w-8 grayscale transition duration-300 group-hover:grayscale-0"
                  />

                  <span className="text-sm font-semibold text-black/70">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative px-5 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Connected revenue
              <span className="block font-serif italic font-normal">
                ecosystem architecture
              </span>
            </h2>
          </div>

          <div className="relative mt-24">
            {/* LINE */}
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-black/10 lg:block" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-6">
              {systems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[2rem] border border-black/10 bg-white/75 p-6 text-center shadow-xl shadow-black/5 backdrop-blur"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 rounded-[2rem] bg-blue-400/0 blur-2xl transition duration-500 group-hover:bg-blue-400/10" />

                  <div className="relative z-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                      <item.icon size={24} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/55">
                      Intelligent orchestration across your revenue stack.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-y border-black/10 bg-white/40 px-5 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
              <Layers3 size={14} />
              Infrastructure Stack
            </div>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Enterprise-grade
              <span className="block font-serif italic font-normal">
                technology ecosystem
              </span>
            </h2>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f6f1e8] p-8 shadow-xl shadow-black/5 transition duration-500 hover:shadow-2xl"
              >
                {/* ORB */}
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:bg-blue-400/20" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                    <item.icon size={26} />
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/70 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-28">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-black/10 bg-black px-8 py-16 text-center text-white shadow-2xl shadow-black/20 md:px-16">
          <div className="absolute left-0 top-0 h-full w-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_55%)]" />

          <div className="relative z-10">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Ready to build your
              <span className="block font-serif italic font-normal text-blue-400">
                revenue infrastructure?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              We engineer scalable AI systems, connected workflows,
              automation infrastructure, and operational architecture
              designed for modern B2B growth.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400"
            >
              Book Strategy Call
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}