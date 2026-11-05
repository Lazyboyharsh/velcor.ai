import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Navbar.jsx
function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const links = [
		{
			name: "Services",
			path: "/services"
		},
		{
			name: "Process",
			path: "/process"
		},
		{
			name: "Blog",
			path: "/blog"
		},
		{
			name: "About",
			path: "/about"
		},
		{
			name: "Infrastructure",
			path: "/infrastructure"
		},
		{
			name: "Contact",
			path: "/contact"
		}
	];
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const closeMenu = () => setOpen(false);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-black/10 bg-[#f6f1e8]/95 shadow-lg backdrop-blur-xl" : "bg-[#f6f1e8]/80 backdrop-blur-md"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					onClick: closeMenu,
					className: "relative z-50 flex items-center",
					children: /* @__PURE__ */ jsx("img", {
						src: "/logo.png",
						alt: "Velcor.ai Logo",
						className: "h-12 w-auto object-contain transition-all duration-300 lg:h-14"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center md:flex",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1.5 shadow-sm backdrop-blur-md",
						children: links.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.path,
							className: "rounded-full px-4 py-2 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white",
							children: item.name
						}, item.name))
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-3 md:flex",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/schedule-meeting",
						className: "group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-600",
						children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "transition-transform duration-300 group-hover:translate-x-1"
						})]
					})
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(!open),
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					className: "relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-black transition-all duration-300 hover:bg-black/5 md:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: `absolute top-full left-0 w-full overflow-hidden border-t border-black/10 bg-[#f6f1e8]/95 shadow-xl backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-5 py-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-col",
					children: links.map((item) => /* @__PURE__ */ jsxs(Link, {
						to: item.path,
						onClick: closeMenu,
						className: "flex items-center justify-between border-b border-black/10 py-4 text-sm font-medium text-black/75 transition-all duration-300 hover:text-black last:border-none",
						children: [item.name, /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "text-black/30"
						})]
					}, item.name))
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/schedule-meeting",
						onClick: closeMenu,
						className: "flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600",
						children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
					})
				})]
			})
		})]
	});
}
//#endregion
//#region src/sections/Footer.jsx
var VELCOR_URL = "https://velcor.ai/";
var AI_PROMPT = `Summarize and analyze the key insights from "${VELCOR_URL}".
Explain what Velcor.ai does, who it serves, its core services, positioning,
revenue/GTM systems, workflows, and key differentiators.
Use ${VELCOR_URL} as the primary source and cite it wherever relevant.`;
var AI_TOOLS = [
	{
		name: "ChatGPT",
		description: "Summarize Velcor.ai with ChatGPT",
		logo: "/chatgpt-icon.webp",
		url: `https://chatgpt.com/?q=${encodeURIComponent(AI_PROMPT)}`
	},
	{
		name: "Claude",
		description: "Analyze Velcor.ai with Claude",
		logo: "https://cdn.simpleicons.org/claude",
		url: `https://claude.ai/new?q=${encodeURIComponent(AI_PROMPT)}`
	},
	{
		name: "Perplexity",
		description: "Research Velcor.ai with Perplexity",
		logo: "https://cdn.simpleicons.org/perplexity",
		url: `https://www.perplexity.ai/search?q=${encodeURIComponent(AI_PROMPT)}`
	},
	{
		name: "Grok",
		description: "Ask Grok about Velcor.ai",
		logo: "/grok-icon.webp",
		url: `https://grok.com/?q=${encodeURIComponent(AI_PROMPT)}`
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative overflow-hidden border-t border-black/10 bg-[#f6f1e8] px-5 pt-16 pb-6",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:26px_26px]" }),
			/* @__PURE__ */ jsx("div", { className: "absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-7xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 border-b border-black/10 pb-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.35fr]",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "flex items-center",
								children: /* @__PURE__ */ jsx("img", {
									src: "/logo.png",
									alt: "Velcor.ai Logo",
									className: "h-12 w-auto object-contain"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "m-3 flex items-center gap-3",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "relative flex h-3.5 w-3.5 shrink-0",
									children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#166534]/40" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3.5 w-3.5 rounded-full bg-[#166534] shadow-[0_0_10px_rgba(22,101,52,0.45)]" })]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold tracking-tight text-black",
									children: "Currently onboarding new B2B clients"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-md text-[15px] leading-8 text-black/55",
								children: "AI-native revenue infrastructure for outbound systems, workflow automation, CRM architecture, revenue operations, analytics, and scalable pipeline growth."
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/schedule-meeting",
								className: "mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600",
								children: ["Claim Free Revenue Audit", /* @__PURE__ */ jsxs("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "15",
									height: "15",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									children: [/* @__PURE__ */ jsx("line", {
										x1: "5",
										y1: "12",
										x2: "19",
										y2: "12"
									}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
								})]
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "mb-6 text-sm font-semibold text-black",
							children: "Company"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-4 text-[15px] text-black/55",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "transition hover:text-black",
									children: "About"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services",
									className: "transition hover:text-black",
									children: "Services"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/process",
									className: "transition hover:text-black",
									children: "Process"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/infrastructure",
									className: "transition hover:text-black",
									children: "Infrastructure"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/blog",
									className: "transition hover:text-black",
									children: "Blog"
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "mb-6 text-sm font-semibold text-black",
							children: "Resources"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-4 text-[15px] text-black/55",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Revenue Systems" }),
								/* @__PURE__ */ jsx("li", { children: "AI Automation" }),
								/* @__PURE__ */ jsx("li", { children: "CRM Optimization" }),
								/* @__PURE__ */ jsx("li", { children: "Workflow Infrastructure" }),
								/* @__PURE__ */ jsx("li", { children: "Pipeline Analytics" })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "mb-2 text-sm font-semibold text-black",
								children: "Explore with AI"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mb-5 max-w-xs text-xs leading-5 text-black/45",
								children: "Ask your preferred AI assistant to summarize and analyze Velcor.ai using the website as the primary source."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-3 gap-2.5",
								children: AI_TOOLS.map((tool) => /* @__PURE__ */ jsx("a", {
									href: tool.url,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": tool.description,
									title: tool.description,
									className: "group flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white/85 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white hover:shadow-lg",
									children: /* @__PURE__ */ jsx("img", {
										src: tool.logo,
										alt: `${tool.name} logo`,
										loading: "lazy",
										className: "h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
									})
								}, tool.name))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-[10px] leading-4 text-black/35",
								children: "AI assistants open in a new tab with a prepared Velcor.ai research prompt."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-7 space-y-2 text-[14px] text-black/55",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-semibold text-black/75",
										children: "Contact"
									}),
									/* @__PURE__ */ jsx("a", {
										href: "mailto:team@velcor.ai",
										className: "block transition hover:text-black",
										children: "team@velcor.ai"
									}),
									/* @__PURE__ */ jsx("p", { children: "Delaware, United States" })
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 flex items-center gap-2",
								children: /* @__PURE__ */ jsx("a", {
									href: "https://www.linkedin.com/company/velcor",
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Velcor.ai on LinkedIn",
									className: "flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white",
									children: /* @__PURE__ */ jsxs("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [
											/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
											/* @__PURE__ */ jsx("rect", {
												x: "2",
												y: "9",
												width: "4",
												height: "12"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "4",
												cy: "4",
												r: "2"
											})
										]
									})
								})
							})
						] })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative border-t border-black/10 py-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-black/50",
							children: "© 2026 Velcor.ai. All rights reserved."
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-xs text-black/40",
							children: "Built for modern B2B teams that want systems, not guesswork."
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-6 text-sm text-black/50",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/privacy-policy",
									className: "transition hover:text-black",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/terms-of-service",
									className: "transition hover:text-black",
									children: "Terms of Service"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "transition hover:text-black",
									children: "Contact"
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute bottom-[-35px] left-1/2 -translate-x-1/2 select-none",
				children: /* @__PURE__ */ jsx("h1", {
					className: "whitespace-nowrap text-[80px] font-semibold uppercase tracking-[-0.09em] text-black/[0.025] md:text-[140px] lg:text-[180px]",
					children: "Velcor.ai"
				})
			})
		]
	});
}
//#endregion
export { Navbar as n, Footer as t };
