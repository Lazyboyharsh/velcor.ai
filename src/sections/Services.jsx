"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  CheckCircle2,
  LoaderCircle,
  Circle,
  Workflow,
  BarChart3,
  Cpu,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    icon: Bot,
    label: "AI Automation",
    title: "AI Automation",
    description:
      "Advanced AI workflow systems that automate operations, lead management, and business execution.",

    video:
      "https://res.cloudinary.com/dy4bqxt8p/video/upload/v1779622196/new107_qhrklf.mp4",

    card: {
      heading: "AI Workflow",
      badge: "Live",
      goal:
        "Deploy intelligent automations for lead generation and customer workflows.",

      tasks: [
        {
          title: "Connect CRM systems",
          meta: "Completed in 4.2s",
          status: "completed",
        },
        {
          title: "Deploy AI workflows",
          meta: "Completed in 8.1s",
          status: "completed",
        },
        {
          title: "Optimize automation",
          meta: "In progress... 18s",
          status: "progress",
        },
        {
          title: "Performance monitoring",
          meta: "Pending",
          status: "pending",
        },
      ],
    },
  },

  {
    icon: Workflow,
    label: "Lead Generation",
    title: "Lead Generation",
    description:
      "Scalable outbound systems and AI-powered lead generation infrastructure for modern businesses.",

    video:
      "https://res.cloudinary.com/dy4bqxt8p/video/upload/v1779621768/new105_meaomd.mp4",

    card: {
      heading: "Lead Engine",
      badge: "Active",
      goal:
        "Generate qualified leads with automated outbound and intelligent targeting.",

      tasks: [
        {
          title: "Build ICP targeting",
          meta: "Completed in 3.1s",
          status: "completed",
        },
        {
          title: "Launch campaigns",
          meta: "Completed in 5.4s",
          status: "completed",
        },
        {
          title: "Scale outreach systems",
          meta: "In progress... 24s",
          status: "progress",
        },
        {
          title: "Analyze conversion data",
          meta: "Pending",
          status: "pending",
        },
      ],
    },
  },

  {
    icon: Database,
    label: "Data Systems",
    title: "Data Systems",
    description:
      "Enterprise-grade data collection, organization, and AI-ready infrastructure systems.",

    video:
      "https://res.cloudinary.com/dy4bqxt8p/video/upload/v1779622220/new108_k1a47m.mp4",

    card: {
      heading: "Data Infrastructure",
      badge: "Optimized",
      goal:
        "Build scalable data systems for AI training, analytics, and operational workflows.",

      tasks: [
        {
          title: "Collect enterprise data",
          meta: "Completed in 2.3s",
          status: "completed",
        },
        {
          title: "Structure datasets",
          meta: "Completed in 5.1s",
          status: "completed",
        },
        {
          title: "Deploy AI pipelines",
          meta: "In progress... 12s",
          status: "progress",
        },
        {
          title: "Validate infrastructure",
          meta: "Pending",
          status: "pending",
        },
      ],
    },
  },

  {
    icon: BarChart3,
    label: "Revenue Systems",
    title: "Revenue Systems",
    description:
      "Connected revenue infrastructure combining analytics, CRM, automation, and operational intelligence.",

    video:
      "https://res.cloudinary.com/dy4bqxt8p/video/upload/v1779622271/02_u2efg7.mp4",

    card: {
      heading: "Revenue Stack",
      badge: "Connected",
      goal:
        "Create end-to-end revenue systems for scaling B2B operations and growth.",

      tasks: [
        {
          title: "Integrate CRM stack",
          meta: "Completed in 1.9s",
          status: "completed",
        },
        {
          title: "Deploy AI outbound",
          meta: "Completed in 6.7s",
          status: "completed",
        },
        {
          title: "Generate insights",
          meta: "In progress... 16s",
          status: "progress",
        },
        {
          title: "Scale operations",
          meta: "Pending",
          status: "pending",
        },
      ],
    },
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeItem = items[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-20 md:py-24">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:28px_28px]" />

      {/* BLUR ORBS */}
      <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl" />

      {/* TOP SECTION - HEADING & PARAGRAPH ON SAME HEIGHT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
        <div className="mb-12 grid items-start gap-10 md:mb-14 md:grid-cols-2 md:gap-14">
          
          {/* LEFT - HEADING */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[34px] font-semibold leading-[38px] tracking-[-0.05em] text-[#131313] sm:text-[42px] sm:leading-[46px] md:text-[68px] md:leading-[72px]">
              AI Systems Built For
              <span className="block font-serif italic font-normal">
                modern revenue growth
              </span>
            </h2>
          </div>

          {/* RIGHT - PARAGRAPH (SAME HEIGHT AS HEADING) */}
          <div className="flex flex-col justify-start h-full">
            <p className="text-[15px] leading-[30px] text-black/60 md:text-[18px] md:leading-[32px]">
              We build AI-powered automation systems, scalable outbound
              infrastructure, and intelligent operational workflows designed
              for modern B2B growth teams.
            </p>
          </div>
        </div>
      </div>

      {/* VIDEO AREA */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* TABS */}
        <div className="relative z-20 mb-6 md:absolute md:bottom-16 md:left-5 md:mb-0">
          <div className="overflow-hidden rounded-[24px] border border-white/15 bg-black/80 p-2 shadow-2xl backdrop-blur-2xl md:w-[280px]">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
              {items.map((tab, index) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      group flex items-center gap-2 rounded-2xl border px-3 py-3 text-left transition-all duration-300 md:gap-3 md:px-4
                      ${
                        activeTab === index
                          ? "border-blue-400/30 bg-blue-500/10"
                          : "border-transparent hover:border-blue-400/20 hover:bg-white/5"
                      }
                    `}
                  >
                    <Icon
                      className={`
                        h-4 w-4 shrink-0 transition-colors duration-300 md:h-5 md:w-5
                        ${
                          activeTab === index
                            ? "text-blue-400"
                            : "text-white/70 group-hover:text-blue-400"
                        }
                      `}
                    />

                    <span
                      className={`
                        text-[11px] font-medium transition-colors duration-300 md:text-[14px]
                        ${
                          activeTab === index
                            ? "text-white"
                            : "text-white/70 group-hover:text-white"
                        }
                      `}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* VIDEO CONTAINER */}
        <div
          className="relative min-h-[760px] overflow-hidden border border-black/10 shadow-2xl shadow-black/10 md:h-[760px] md:min-h-0"
          style={{
            clipPath:
              typeof window !== "undefined" && window.innerWidth >= 768
                ? "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 30% 100%, 22% 88%, 0 88%)"
                : "none",
            borderRadius: "32px",
          }}
        >
          {/* VIDEO */}
          <AnimatePresence mode="wait">
            <motion.video
              key={activeItem.video}
              src={activeItem.video}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 h-full w-full bg-black object-cover"
            />
          </AnimatePresence>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* CENTER CARD */}
          <div className="absolute inset-0 flex items-end justify-center px-4 pb-8 md:items-center md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.card.heading}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-[340px] rounded-[26px] border border-white/15 bg-black/70 p-5 shadow-2xl backdrop-blur-2xl md:max-w-[360px] md:rounded-[30px] md:p-6"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[18px] font-semibold text-white md:text-[20px]">
                    {activeItem.card.heading}
                  </h3>

                  <span className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] text-blue-300 md:text-[11px]">
                    {activeItem.card.badge}
                  </span>
                </div>

                {/* GOAL */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 md:text-[11px]">
                    Goal
                  </p>

                  <p className="mt-2 text-[12px] leading-[22px] text-white/85 md:text-[13px]">
                    {activeItem.card.goal}
                  </p>
                </div>

                {/* TASKS */}
                <div className="mt-5 flex flex-col gap-4">
                  {activeItem.card.tasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      {/* ICON */}
                      <div className="mt-[2px] shrink-0">
                        {task.status === "completed" && (
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                        )}

                        {task.status === "progress" && (
                          <LoaderCircle className="h-4 w-4 animate-spin text-blue-400" />
                        )}

                        {task.status === "pending" && (
                          <Circle className="h-4 w-4 text-white/20" />
                        )}
                      </div>

                      {/* CONTENT */}
                      <div>
                        <p
                          className={`
                            text-[12px] md:text-[13px]
                            ${
                              task.status === "completed"
                                ? "text-white/45 line-through"
                                : task.status === "progress"
                                ? "font-medium text-blue-300"
                                : "text-white/40"
                            }
                          `}
                        >
                          {task.title}
                        </p>

                        <p className="mt-1 text-[10px] text-white/35 md:text-[11px]">
                          {task.meta}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] text-white/40 md:text-[11px]">
                  <span>2/5 tasks complete</span>

                  <div className="flex items-center gap-1 text-blue-300">
                    <span>Est. 45s remaining</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}