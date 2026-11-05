import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { t as Industries } from "./Industries-BjayXmEU.js";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Bot, Check, Database, Mail, SearchCheck, Workflow } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/ServicesPage.jsx
function ServicesPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "AI Revenue Systems & Services",
				description: "Outbound systems, RevOps automation, CRM workflows and content engines that build predictable B2B pipeline. Explore Velcor.ai's revenue infrastructure services.",
				path: "/services",
				breadcrumbs: [{
					name: "Services",
					path: "/services"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden px-5 pt-44 pb-24 text-center",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
							children: "Revenue Infrastructure"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl",
							children: ["Revenue Infrastructure,", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "engineered for operators"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60",
							children: "We design, deploy, and operate AI-powered systems that generate predictable deal flow, founder relationships, and pipeline visibility."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-base leading-7 text-black/45",
							children: "Not campaigns. Not agencies. Infrastructure."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/schedule-meeting",
							className: "mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white",
							children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-5 pb-32",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto mb-20 max-w-4xl text-center",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-7xl",
						children: ["Infrastructure systems", /* @__PURE__ */ jsx("span", {
							className: "block font-serif italic font-normal",
							children: "that compound over time"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-8 max-w-2xl text-[18px] leading-8 text-black/55",
						children: "Every engagement is designed around long-term relationship development, pipeline visibility, and proprietary opportunity creation."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							icon: SearchCheck,
							title: "Proprietary Deal Flow Systems",
							desc: "Founder-direct sourcing infrastructure designed for lower middle-market PE firms, independent sponsors, search funds, and acquisition operators seeking opportunities before competitive processes emerge.",
							points: [
								"Acquisition thesis mapping",
								"Founder identification systems",
								"Signal-based targeting",
								"CRM pipeline visibility"
							]
						},
						{
							icon: Workflow,
							title: "Pipeline Architecture",
							desc: "Integrated seller and buyer acquisition systems for marketplaces, brokers, and transaction platforms seeking sustainable pipeline growth.",
							points: [
								"Seller acquisition systems",
								"Buyer engagement workflows",
								"Conversion optimization",
								"Pipeline reporting"
							]
						},
						{
							icon: Mail,
							title: "Founder Relationship Infrastructure",
							desc: "Long-cycle founder relationship systems designed to cultivate trust and engagement years before transaction intent becomes visible.",
							points: [
								"Relationship-led outreach",
								"Founder tracking",
								"CRM nurture systems",
								"Long-term engagement"
							]
						},
						{
							icon: Database,
							title: "Revenue Intelligence Systems",
							desc: "Connected CRM, reporting, and workflow infrastructure that transforms fragmented information into operational visibility.",
							points: [
								"CRM optimization",
								"Pipeline reporting",
								"Operational dashboards",
								"Revenue visibility"
							]
						},
						{
							icon: Bot,
							title: "Acquisition Workflow Automation",
							desc: "Automated workflows that eliminate operational bottlenecks across sourcing, qualification, engagement, and pipeline management.",
							points: [
								"Workflow automation",
								"Data enrichment",
								"Task orchestration",
								"Pipeline routing"
							]
						},
						{
							icon: BarChart3,
							title: "Signal-Based Market Intelligence",
							desc: "Continuous monitoring of ownership, hiring, expansion, and operational signals that identify opportunities before competitors.",
							points: [
								"Ownership signals",
								"Hiring intelligence",
								"Expansion tracking",
								"Opportunity monitoring"
							]
						}
					].map((service) => /* @__PURE__ */ jsxs("div", {
						className: "group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/[0.04] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400",
								children: /* @__PURE__ */ jsx(service.icon, { size: 24 })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "min-h-[78px] text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.03em] text-black",
								children: service.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 min-h-[150px] text-[15px] leading-8 text-black/60",
								children: service.desc
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-auto space-y-4 pt-6",
								children: service.points.map((p) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-[15px] font-medium text-black/70",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-black",
										children: /* @__PURE__ */ jsx(Check, { size: 12 })
									}), p]
								}, p))
							})
						]
					}, service.title))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-black/10 bg-white/45 px-5 py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
								children: "The Process"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
								children: ["How we build", /* @__PURE__ */ jsx("span", {
									className: "block font-serif italic font-normal",
									children: "your infrastructure"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60",
								children: "A repeatable path from strategy to a running system, designed to create long-term sourcing leverage and operational visibility."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-5",
						children: [
							{
								num: "01",
								title: "Thesis & ICP Mapping",
								text: "We map your acquisition thesis or ICP, target criteria, and the buying signals that mark a real opportunity."
							},
							{
								num: "02",
								title: "Sourcing Infrastructure",
								text: "We build enrichment, signal monitoring, and founder-identification systems that surface opportunities continuously."
							},
							{
								num: "03",
								title: "Relationship Outreach",
								text: "We deploy founder-direct, relationship-led outreach and nurture sequences that build trust before intent is visible."
							},
							{
								num: "04",
								title: "CRM & Pipeline",
								text: "We connect CRM, routing, reporting, and pipeline visibility so nothing slips and every opportunity is tracked."
							},
							{
								num: "05",
								title: "Operate & Optimize",
								text: "We run the system, monitor signals, refine messaging, and compound sourcing leverage over time."
							}
						].map((step) => /* @__PURE__ */ jsxs("div", {
							className: "group relative flex flex-col rounded-[2rem] border border-black/10 bg-white/70 p-7 shadow-lg shadow-black/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-serif text-4xl italic leading-none text-black/20 transition-colors duration-300 group-hover:text-blue-500/40",
									children: step.num
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 text-[1.15rem] font-semibold leading-[1.2] tracking-[-0.02em] text-black",
									children: step.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-[14px] leading-7 text-black/60",
									children: step.text
								})
							]
						}, step.num))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["Designed for firms", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "that acquire and grow"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60",
							children: "Purpose-built infrastructure for acquisition-focused organizations."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-20 grid gap-6 lg:grid-cols-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-[2rem] border border-black/10 bg-white/60 p-8 shadow-xl shadow-black/5 lg:col-span-5",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold uppercase tracking-wide text-blue-500",
									children: "Primary Users"
								}),
								/* @__PURE__ */ jsxs("h3", {
									className: "mt-4 text-3xl font-semibold tracking-tight",
									children: [
										"Private Equity &",
										/* @__PURE__ */ jsx("br", {}),
										"Independent Sponsors"
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 max-w-md text-base leading-8 text-black/60",
									children: "Proprietary sourcing infrastructure, founder-direct outreach, relationship management, and acquisition intelligence systems."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-8 flex flex-wrap gap-2",
									children: [
										"Deal Flow",
										"Founder Outreach",
										"CRM Systems",
										"Pipeline Visibility"
									].map((item) => /* @__PURE__ */ jsx("span", {
										className: "rounded-full border border-black/10 bg-[#f6f1e8] px-3 py-2 text-xs font-medium",
										children: item
									}, item))
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 lg:col-span-7 lg:grid-cols-2",
							children: [
								{
									title: "Search Funds",
									text: "Automated sourcing and acquisition workflows."
								},
								{
									title: "Family Offices",
									text: "Founder-direct relationship infrastructure."
								},
								{
									title: "Marketplaces",
									text: "Seller acquisition and buyer engagement systems."
								},
								{
									title: "Acquisition Operators",
									text: "Scalable pipeline and opportunity management."
								}
							].map((item) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-[2rem] border border-black/10 bg-white/60 p-7 shadow-lg shadow-black/5",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-semibold",
									children: item.title
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-7 text-black/60",
									children: item.text
								})]
							}, item.title))
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-black/10 bg-white/45 px-5 py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
							children: "Engagement Models"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["Choose the right", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "partnership structure"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-xl text-lg leading-8 text-black/60",
							children: "Whether you are validating a new sourcing strategy or building a long-term acquisition engine, we structure engagements around infrastructure ownership and measurable outcomes."
						})
					] }), /* @__PURE__ */ jsx("div", {
						className: "grid gap-4",
						children: [
							{
								name: "Proof-of-Value Pilot",
								price: "30-45 Days",
								desc: "A focused engagement designed to validate infrastructure performance before a long-term partnership.",
								features: [
									"Founder conversations",
									"Prospect enrichment",
									"Infrastructure setup",
									"Performance review"
								]
							},
							{
								name: "Monthly Operating Retainer",
								price: "Most Popular",
								desc: "Ongoing ownership of your revenue infrastructure, sourcing systems, and reporting environment.",
								features: [
									"System operation",
									"Weekly reporting",
									"Pipeline management",
									"Infrastructure optimization"
								]
							},
							{
								name: "Performance-Aligned Hybrid",
								price: "Select Partners",
								desc: "A lower retainer paired with performance incentives tied to qualified opportunities and closed outcomes.",
								features: [
									"Performance alignment",
									"Deal support",
									"Relationship infrastructure",
									"Strategic partnership"
								]
							}
						].map((item) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-xl shadow-black/5 transition hover:-translate-y-1",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-semibold",
									children: item.name
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-6 text-black/60",
									children: item.desc
								})] }), /* @__PURE__ */ jsx("span", {
									className: "w-fit shrink-0 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400",
									children: item.price
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: item.features.map((feature) => /* @__PURE__ */ jsx("span", {
									className: "rounded-lg border border-black/10 bg-[#f6f1e8] px-3 py-2 text-xs font-medium text-black/65",
									children: feature
								}, feature))
							})]
						}, item.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 py-24 text-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl font-semibold tracking-[-0.05em] md:text-6xl",
							children: ["Build Revenue Infrastructure", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal text-blue-400",
								children: "that compounds"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65",
							children: "If proprietary deal flow is a strategic priority for your firm, let us discuss the systems required to support it."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/schedule-meeting",
							className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400",
							children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Industries, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { ServicesPage as default };
