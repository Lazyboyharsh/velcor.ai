import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { ArrowRight, BarChart3, Brain, Check, Cpu, Database, Globe, Shield, Target, Workflow, Zap } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/About.jsx
function About() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen overflow-hidden bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "About Velcor.ai",
				description: "Velcor.ai builds AI revenue infrastructure for ambitious B2B companies, combining AI workflows with human expertise across outbound, RevOps and content.",
				path: "/about",
				breadcrumbs: [{
					name: "About",
					path: "/about"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .fade-delay-1 {
          animation: fadeUp 0.8s 0.15s ease forwards;
          opacity: 0;
        }

        .fade-delay-2 {
          animation: fadeUp 0.8s 0.3s ease forwards;
          opacity: 0;
        }

        .card-hover {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
        }
      ` }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden px-5 pt-44 pb-32 text-center",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:24px_24px]" }),
					/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 mx-auto max-w-6xl",
						children: [/* @__PURE__ */ jsxs("h1", {
							className: "fade-delay-1 text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl",
							children: ["Building intelligent", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "revenue systems"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "fade-delay-2 mx-auto mt-8 max-w-4xl text-lg leading-9 text-black/60",
							children: "Velcor.ai helps businesses achieve scalable growth through AI-powered sales automation, intelligent workflows, CRM optimization, and modern revenue operations infrastructure designed for today’s evolving B2B landscape."
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative px-5 pb-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "card-hover relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ jsxs("h2", {
									className: "text-4xl font-semibold tracking-[-0.05em] md:text-6xl",
									children: ["Not just tools.", /* @__PURE__ */ jsx("span", {
										className: "block font-serif italic font-normal text-blue-400",
										children: "Connected infrastructure."
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-lg leading-9 text-white/65",
									children: "At Velcor.ai, we believe modern businesses need more than disconnected software, manual outreach, and fragmented workflows. Companies today operate in an environment where speed, efficiency, personalization, and scalability define growth."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg leading-9 text-white/65",
									children: "Traditional sales and operational systems often create inefficiencies, data silos, inconsistent reporting, and operational bottlenecks that slow down pipeline generation and revenue growth."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg leading-9 text-white/65",
									children: "Our goal is to eliminate those inefficiencies by building intelligent revenue infrastructure powered by AI, automation, analytics, and modern operational systems."
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/contact",
									className: "mt-10 inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-400",
									children: ["Build With Velcor.ai", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-5",
						children: [
							{
								icon: Workflow,
								title: "Revenue Infrastructure",
								desc: "We build connected systems that unify outbound, CRM, analytics, automation, and AI workflows into one scalable operational engine."
							},
							{
								icon: Brain,
								title: "AI-Powered Execution",
								desc: "Our AI systems automate repetitive tasks, improve lead quality, and accelerate operational efficiency across the revenue lifecycle."
							},
							{
								icon: Database,
								title: "CRM & RevOps Optimization",
								desc: "We optimize CRM architecture, data systems, reporting, and operational workflows for scalable revenue growth."
							},
							{
								icon: Shield,
								title: "Scalable Growth Systems",
								desc: "Clean systems, structured data, and intelligent automation create predictable pipeline generation and operational clarity."
							}
						].map((value) => /* @__PURE__ */ jsxs("div", {
							className: "card-hover flex items-start gap-4 rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-blue-400",
								children: /* @__PURE__ */ jsx(value.icon, { size: 20 })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-semibold text-black",
								children: value.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-7 text-black/55",
								children: value.desc
							})] })]
						}, value.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-black/10 bg-white/40 px-5 py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55",
							children: [/* @__PURE__ */ jsx(Target, { size: 14 }), "Our Mission"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["Smarter systems for", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "predictable growth"
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mx-auto mt-16 max-w-5xl space-y-8 text-lg leading-9 text-black/60",
						children: [
							/* @__PURE__ */ jsx("p", { children: "Velcor.ai was built with a simple mission: to help businesses create faster, smarter, and more predictable revenue engines powered by AI and automation." }),
							/* @__PURE__ */ jsx("p", { children: "We help organizations transform how they generate, manage, and convert opportunities by building connected systems that streamline execution across the entire sales lifecycle." }),
							/* @__PURE__ */ jsx("p", { children: "Instead of relying on disconnected tools and repetitive manual processes, we create intelligent operational ecosystems that unify lead generation, outreach automation, CRM management, analytics, and revenue operations into one scalable infrastructure layer." }),
							/* @__PURE__ */ jsx("p", { children: "By combining AI-driven workflows, automation platforms, modern CRM architecture, and advanced pipeline analytics, we enable businesses to improve operational efficiency, enhance customer engagement, and scale growth with greater predictability." }),
							/* @__PURE__ */ jsx("p", { children: "Our systems are designed to reduce friction between teams, eliminate repetitive operational tasks, improve reporting visibility, and create more efficient workflows across sales, marketing, and revenue operations." }),
							/* @__PURE__ */ jsx("p", { children: "Whether it’s automating lead qualification, improving CRM synchronization, deploying AI-powered outbound systems, or building scalable reporting infrastructure, Velcor.ai helps businesses create operational clarity and sustainable growth." })
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-16 text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55",
							children: [/* @__PURE__ */ jsx(Zap, { size: 14 }), "What We Do"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["AI-powered systems", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "built for scale"
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4",
						children: [
							"Sales Process Automation",
							"AI-Powered Lead Nurturing & Scoring",
							"CRM Architecture & Optimization",
							"Revenue Operations Systems",
							"Pipeline Growth Strategy",
							"Analytics & Performance Tracking",
							"Workflow & Outreach Automation",
							"AI Infrastructure & Automation"
						].map((service) => /* @__PURE__ */ jsxs("div", {
							className: "card-hover rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-blue-400",
								children: /* @__PURE__ */ jsx(Check, { size: 18 })
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-5 text-base font-medium leading-7 text-black/75",
								children: service
							})]
						}, service))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-black/10 bg-white/45 px-5 py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55",
							children: [/* @__PURE__ */ jsx(BarChart3, { size: 14 }), "Why Velcor.ai"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["Built for modern", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "B2B growth teams"
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-20 grid gap-8 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "card-hover rounded-[2.5rem] border border-black/10 bg-black p-8 text-white shadow-2xl shadow-black/10",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white",
										children: /* @__PURE__ */ jsx(Cpu, { size: 24 })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-8 text-2xl font-semibold",
										children: "AI Infrastructure"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-5 text-base leading-8 text-white/65",
										children: "We build scalable AI systems that automate repetitive operations, optimize workflows, and improve revenue execution across your organization."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "card-hover rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-2xl shadow-black/5 backdrop-blur",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400",
										children: /* @__PURE__ */ jsx(Globe, { size: 24 })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-8 text-2xl font-semibold",
										children: "Connected Systems"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-5 text-base leading-8 text-black/60",
										children: "Our infrastructure connects CRM platforms, outreach systems, analytics, AI workflows, and operational processes into one intelligent ecosystem."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "card-hover rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-2xl shadow-black/5 backdrop-blur",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400",
										children: /* @__PURE__ */ jsx(BarChart3, { size: 24 })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-8 text-2xl font-semibold",
										children: "Revenue Operations"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-5 text-base leading-8 text-black/60",
										children: "We help organizations improve reporting visibility, pipeline forecasting, operational clarity, and growth predictability using modern RevOps infrastructure."
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto overflow-hidden rounded-[2.5rem] border border-black/10 bg-black px-8 py-16 text-center text-white shadow-2xl shadow-black/20 md:px-16",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-full w-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_55%)]" }), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-4xl font-semibold tracking-[-0.05em] md:text-6xl",
								children: ["Ready to build your", /* @__PURE__ */ jsx("span", {
									className: "block font-serif italic font-normal text-blue-400",
									children: "revenue infrastructure?"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65",
								children: "Whether you're a fast-growing startup or an enterprise organization seeking operational efficiency, Velcor.ai helps you optimize, automate, and scale your revenue systems with intelligent infrastructure built for modern growth."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "/contact",
								className: "mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400",
								children: ["Let’s Connect", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { About as default };
