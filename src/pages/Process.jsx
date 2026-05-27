import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Database,
  Workflow,
  Bot,
  BarChart3,
  Check,
  Sparkles,
  Layers3,
  Cpu,
  ShieldCheck,
  Activity,
  Radar,
  Globe,
  Zap,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const process = [
    {
      step: "01",
      title: "Infrastructure Audit",
      desc: "We deeply analyze your GTM stack, workflows, CRM systems, outbound architecture, reporting setup, and operational bottlenecks.",
      icon: Database,
    },
    {
      step: "02",
      title: "AI Workflow Architecture",
      desc: "We engineer scalable AI-powered systems that automate outreach, qualification, routing, enrichment, and revenue operations.",
      icon: Workflow,
    },
    {
      step: "03",
      title: "Deployment & Integration",
      desc: "We connect APIs, CRMs, outbound engines, AI agents, automations, and tracking systems into one intelligent ecosystem.",
      icon: Bot,
    },
    {
      step: "04",
      title: "Optimization & Scale",
      desc: "Continuous testing, analytics, monitoring, and workflow optimization help scale pipeline generation predictably.",
      icon: BarChart3,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-32">
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:28px_28px]" />

        {/* BLUR ORBS */}
        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur"
            >
              <Sparkles size={14} />
              AI Revenue Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              Intelligent systems for
              <span className="block font-serif italic font-normal">
                modern revenue teams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60"
            >
              We transform fragmented operations into scalable AI-powered
              infrastructure built for automation, predictability, and
              accelerated growth.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
            >
              Build Your Infrastructure
              <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative mx-auto mt-24 max-w-6xl"
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
                          Workflow Activity
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
                      AI workflows continuously executing across your stack.
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
                          Built for operational scale
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Deployment
              <span className="block font-serif italic font-normal">
                process architecture
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
              Every engagement follows a scalable infrastructure-first
              framework designed for modern B2B growth systems.
            </p>
          </div>

          <div className="relative mt-24">
            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black/10 lg:block" />

            <div className="space-y-12">
              {process.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
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
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                            <item.icon size={26} />
                          </div>

                          <span className="text-sm font-semibold tracking-[0.15em] text-black/35">
                            STEP {item.step}
                          </span>
                        </div>

                        <h3 className="mt-8 text-4xl font-semibold tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-6 text-base leading-8 text-black/60">
                          {item.desc}
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-500">
                          Learn More
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="hidden lg:flex justify-center">
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
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              One connected
              <span className="block font-serif italic font-normal">
                revenue ecosystem
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-5">
            {[
              {
                title: "CRM Infrastructure",
                icon: Globe,
              },
              {
                title: "AI Prospecting",
                icon: BrainCircuit,
              },
              {
                title: "Outbound Automation",
                icon: Zap,
              },
              {
                title: "Conversation Intelligence",
                icon: Activity,
              },
              {
                title: "Revenue Analytics",
                icon: Cpu,
              },
            ].map((item, i) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={item.title}
                className="relative rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-6 text-center shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                  <item.icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/55">
                  Unified infrastructure connected through intelligent
                  workflows and automation systems.
                </p>

                {i !== 4 && (
                  <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-black/20 lg:block" />
                )}
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
              <span className="block font-serif italic font-normal">
                to compound growth
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Every workflow improves operational efficiency, response rates,
              lead quality, and revenue predictability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["3.4x", "Pipeline acceleration"],
              ["65%", "Manual work reduction"],
              ["24/7", "AI workflow execution"],
              ["92%", "Data sync accuracy"],
            ].map(([value, text]) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={text}
                className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5"
              >
                <h3 className="text-5xl font-semibold tracking-tight">
                  {value}
                </h3>

                <p className="mt-4 text-base text-black/60">
                  {text}
                </p>

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
              <span className="block font-serif italic font-normal text-blue-400">
                revenue infrastructure?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              We help modern B2B teams automate operations, scale outreach,
              centralize workflows, and accelerate predictable growth.
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