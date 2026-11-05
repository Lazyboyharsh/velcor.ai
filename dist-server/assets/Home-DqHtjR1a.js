import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo, t as SITE_URL } from "./Seo-CqIJsAmM.js";
import { t as Industries } from "./Industries-BjayXmEU.js";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, BarChart3, Bot, CalendarDays, Check, CheckCircle2, Circle, Database, DatabaseZap, Loader2, LoaderCircle, MailCheck, Plus, Target, Workflow, Zap } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { motion as motion$1 } from "motion/react";
//#region src/sections/Hero.jsx
var WEB3FORMS_ACCESS_KEY = "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";
var DISPOSABLE_DOMAINS = /* @__PURE__ */ new Set([
	"mailinator.com",
	"10minutemail.com",
	"guerrillamail.com",
	"tempmail.com",
	"temp-mail.org",
	"yopmail.com",
	"trashmail.com",
	"sharklasers.com",
	"getnada.com",
	"throwawaymail.com",
	"maildrop.cc",
	"dispostable.com",
	"fakeinbox.com",
	"mohmal.com"
]);
var PERSONAL_DOMAINS = /* @__PURE__ */ new Set([
	"gmail.com",
	"googlemail.com",
	"yahoo.com",
	"yahoo.co.in",
	"outlook.com",
	"hotmail.com",
	"icloud.com",
	"aol.com",
	"proton.me",
	"protonmail.com",
	"live.com",
	"msn.com",
	"rediffmail.com",
	"gmx.com",
	"zoho.com"
]);
var MIN_FILL_TIME_MS = 3e3;
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var getEmailDomain = (email) => email.split("@")[1]?.toLowerCase().trim();
var normalizeWebsite = (value) => {
	const trimmed = value.trim();
	if (!trimmed) return null;
	try {
		const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
		if (!url.hostname.includes(".")) return null;
		if (PERSONAL_DOMAINS.has(url.hostname.replace(/^www\./, ""))) return null;
		return url.hostname.toLowerCase().replace(/^www\./, "");
	} catch {
		return null;
	}
};
function Hero() {
	const navigate = useNavigate();
	const words = [
		"pipeline",
		"revenue",
		"sales systems",
		"GTM workflows"
	];
	const [wordIndex, setWordIndex] = useState(0);
	const [mousePos, setMousePos] = useState({
		x: 50,
		y: 50
	});
	const sectionRef = useRef(null);
	const mountTime = useRef(Date.now());
	const [quickForm, setQuickForm] = useState({
		name: "",
		email: "",
		website: ""
	});
	const [honeypot, setHoneypot] = useState("");
	const [quickLoading, setQuickLoading] = useState(false);
	const [error, setError] = useState("");
	useEffect(() => {
		const interval = setInterval(() => {
			setWordIndex((prev) => (prev + 1) % words.length);
		}, 1800);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			setMousePos({
				x: (e.clientX - rect.left) / rect.width * 100,
				y: (e.clientY - rect.top) / rect.height * 100
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	const longestWord = words.reduce((a, b) => a.length >= b.length ? a : b);
	const handleQuickChange = (e) => {
		const { name, value } = e.target;
		if (error) setError("");
		setQuickForm((current) => ({
			...current,
			[name]: value
		}));
	};
	const handleQuickSubmit = async (e) => {
		e.preventDefault();
		if (quickLoading) return;
		setError("");
		if (honeypot || Date.now() - mountTime.current < MIN_FILL_TIME_MS) {
			navigate("/schedule-meeting");
			return;
		}
		const email = quickForm.email.trim();
		const emailDomain = getEmailDomain(email);
		if (!EMAIL_REGEX.test(email) || !emailDomain) {
			setError("Enter a valid email address.");
			return;
		}
		if (DISPOSABLE_DOMAINS.has(emailDomain)) {
			setError("Temporary email addresses aren't accepted. Use a different email.");
			return;
		}
		const cleanName = quickForm.name.trim();
		if (cleanName.length < 2 || /https?:\/\/|www\.|<|>/i.test(cleanName) || /^[\d\W]+$/.test(cleanName)) {
			setError("Enter your real name.");
			return;
		}
		const siteDomain = normalizeWebsite(quickForm.website);
		if (!siteDomain) {
			setError("Enter your company website, for example velcor.ai.");
			return;
		}
		setQuickLoading(true);
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: "New Quick Call Request - Velcor.ai",
					from_name: "Velcor.ai Website",
					name: quickForm.name.trim(),
					email,
					company_website: siteDomain,
					email_type: PERSONAL_DOMAINS.has(emailDomain) ? "personal" : "work",
					email_matches_website: emailDomain === siteDomain || emailDomain.endsWith("." + siteDomain) ? "yes" : "no",
					request_type: "Strategy Call Request",
					source: "Velcor.ai Homepage Hero",
					botcheck: "",
					message: "New strategy call request from the Velcor.ai homepage."
				})
			});
			const data = await response.json();
			if (!response.ok || !data.success) throw new Error(data.message || "Unable to send request.");
			setQuickForm({
				name: "",
				email: "",
				website: ""
			});
			navigate("/schedule-meeting");
		} catch (err) {
			setError(err.message || "Unable to send request. Please try again.");
		} finally {
			setQuickLoading(false);
		}
	};
	const fieldClass = "h-[48px] w-full min-w-0 rounded-lg border border-black/10 bg-white/80 px-4 text-xs text-black shadow-sm outline-none placeholder:text-black/35 focus:border-blue-400 md:rounded-none md:border-0 md:bg-transparent md:shadow-none";
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pb-32 pt-40 md:pt-48",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(32px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes orbDrift {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }

            40% {
              transform: translate(24px, -18px) scale(1.04);
            }

            70% {
              transform: translate(-16px, 12px) scale(0.97);
            }
          }

          @keyframes pulseRing {
            0%,
            100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }

            50% {
              box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.18);
            }
          }

          @keyframes bgWave {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes softGlow {
            0%,
            100% {
              opacity: 0.15;
              transform: scale(1);
            }

            50% {
              opacity: 0.25;
              transform: scale(1.05);
            }
          }

          .fu-1 {
            animation: fadeUp 0.8s 0.18s ease both;
          }

          .fu-2 {
            animation: fadeUp 0.8s 0.38s ease both;
          }

          .fu-3 {
            animation: fadeUp 0.8s 0.58s ease both;
          }

          .orb-a {
            animation: orbDrift 9s ease-in-out infinite;
          }

          .orb-b {
            animation: orbDrift 12s 2s ease-in-out infinite reverse;
          }

          .btn-pulse {
            animation: pulseRing 2.8s ease-in-out infinite;
          }

          .bg-wave {
            background: linear-gradient(
              -45deg,
              #f6f1e8,
              #f0e9df,
              #f5ede2,
              #faf5ec
            );

            background-size: 400% 400%;
            animation: bgWave 15s ease infinite;
          }

          .glow-orb {
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .glow-orb:hover {
            animation: softGlow 3s ease-in-out infinite;
          }

          .hero-container:hover .hover-gradient-bg {
            opacity: 0.4;
          }
        ` }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-wave" }),
			/* @__PURE__ */ jsx("div", {
				className: "hero-container absolute inset-0",
				children: /* @__PURE__ */ jsx("div", { className: "hover-gradient-bg absolute inset-0 bg-gradient-to-tr from-amber-100/0 via-orange-100/0 to-blue-100/0 transition-all duration-700 hover:from-amber-100/30 hover:via-orange-100/20 hover:to-blue-100/20" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "glow-orb absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "glow-orb absolute -right-20 bottom-10 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-blue-100/15 to-indigo-100/15 blur-3xl" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 transition-all duration-700",
				style: { background: "radial-gradient(640px circle at " + mousePos.x + "% " + mousePos.y + "%, rgba(59,130,246,0.06), transparent 65%)" }
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:24px_24px]" }),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "orb-a absolute -left-32 top-20 h-[560px] w-[560px] rounded-full bg-white/30 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "orb-b absolute -right-40 top-28 h-[660px] w-[660px] rounded-full bg-white/35 blur-3xl" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-4xl text-center",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "fu-1 mx-auto max-w-3xl font-semibold tracking-[-0.045em] text-black",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]",
								children: "Go-to-market systems"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mt-3 block font-serif text-[1.8rem] font-normal italic leading-[1.3] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[3.5rem]",
								children: "for predictable"
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "relative mt-4 block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "invisible font-serif font-normal italic tracking-[-0.04em] text-blue-600",
									children: longestWord
								}), words.map((word, index) => /* @__PURE__ */ jsx("span", {
									className: "absolute inset-0 flex items-center justify-center font-serif font-normal italic tracking-[-0.04em] text-blue-600 transition-all duration-[400ms] ease-out",
									style: {
										opacity: index === wordIndex ? 1 : 0,
										transform: index === wordIndex ? "translateY(0)" : "translateY(14px)"
									},
									children: word
								}, word))]
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "fu-2 mx-auto mt-8 max-w-xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7",
						children: "Combining AI workflows with human expertise to implement end-to-end outbound, RevOps and content systems that create qualified pipeline."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "fu-3 mx-auto mt-12 w-full max-w-2xl",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleQuickSubmit,
							noValidate: true,
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "text",
									name: "company_fax",
									value: honeypot,
									onChange: (e) => setHoneypot(e.target.value),
									tabIndex: -1,
									autoComplete: "off",
									"aria-hidden": "true",
									className: "absolute -left-[9999px] h-0 w-0 opacity-0"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/10 md:overflow-hidden md:rounded-xl md:border md:border-black/10 md:bg-white/80 md:shadow-lg md:shadow-black/5 md:ring-1 md:ring-white/50 md:backdrop-blur-sm md:transition-all md:duration-500 md:focus-within:border-blue-200 md:focus-within:bg-white/90 md:hover:shadow-xl",
									children: [
										/* @__PURE__ */ jsx("input", {
											type: "text",
											name: "name",
											required: true,
											autoComplete: "name",
											value: quickForm.name,
											onChange: handleQuickChange,
											placeholder: "Full name",
											className: fieldClass
										}),
										/* @__PURE__ */ jsx("input", {
											type: "email",
											name: "email",
											required: true,
											autoComplete: "email",
											value: quickForm.email,
											onChange: handleQuickChange,
											placeholder: "Email",
											className: fieldClass
										}),
										/* @__PURE__ */ jsx("input", {
											type: "text",
											name: "website",
											required: true,
											autoComplete: "url",
											inputMode: "url",
											value: quickForm.website,
											onChange: handleQuickChange,
											placeholder: "Company website",
											className: fieldClass
										})
									]
								}),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: quickLoading,
									className: "btn-pulse group/btn mx-auto flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 text-xs font-semibold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto",
									children: quickLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, {
										size: 14,
										className: "animate-spin"
									}), "Sending..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: ["Request call", /* @__PURE__ */ jsx(ArrowRight, {
										size: 12,
										className: "transition-transform duration-300 group-hover/btn:translate-x-1"
									})] })
								}),
								error && /* @__PURE__ */ jsx("p", {
									role: "alert",
									className: "text-xs text-red-600",
									children: error
								})
							]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/sections/TrustedBy.jsx
function TrustedBy() {
	const items = [
		{
			icon: DatabaseZap,
			text: "Signal-based lead research"
		},
		{
			icon: MailCheck,
			text: "Personalized outbound systems"
		},
		{
			icon: Workflow,
			text: "CRM workflow automation"
		},
		{
			icon: Bot,
			text: "AI agents for GTM ops"
		},
		{
			icon: BarChart3,
			text: "Pipeline reporting dashboards"
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden border-y border-black/10 bg-[#f6f1e8] py-16",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      ` }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-7xl -mt-14 px-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left",
					children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", {
						className: "mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl",
						children: "The growth stack your team wished it had."
					}) }), /* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10",
						children: [/* @__PURE__ */ jsx(BadgeCheck, {
							size: 16,
							className: "text-blue-400"
						}), "Strategy + systems + execution"]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f6f1e8] to-transparent" }),
						/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f6f1e8] to-transparent" }),
						/* @__PURE__ */ jsx("div", {
							className: "flex w-max animate-[scrollX_28s_linear_infinite] gap-4",
							children: [
								...items,
								...items,
								...items
							].map((item, index) => /* @__PURE__ */ jsxs("div", {
								className: "group flex min-w-[280px] items-center gap-3 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-xl bg-black text-blue-400",
									children: /* @__PURE__ */ jsx(item.icon, { size: 20 })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold text-black/70 group-hover:text-black",
									children: item.text
								})]
							}, index))
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/sections/Services.jsx
var items = [
	{
		icon: Bot,
		label: "AI Automation",
		title: "AI Automation",
		description: "Advanced AI workflow systems that automate operations, lead management, and business execution.",
		video: "https://www.pexels.com/download/video/36405803/",
		card: {
			heading: "AI Workflow",
			badge: "Live",
			goal: "Deploy intelligent automations for lead generation and customer workflows.",
			tasks: [
				{
					title: "Connect CRM systems",
					meta: "Completed in 4.2s",
					status: "completed"
				},
				{
					title: "Deploy AI workflows",
					meta: "Completed in 8.1s",
					status: "completed"
				},
				{
					title: "Optimize automation",
					meta: "In progress... 18s",
					status: "progress"
				},
				{
					title: "Performance monitoring",
					meta: "Pending",
					status: "pending"
				}
			]
		}
	},
	{
		icon: Workflow,
		label: "Lead Generation",
		title: "Lead Generation",
		description: "Scalable outbound systems and AI-powered lead generation infrastructure for modern businesses.",
		video: "https://www.pexels.com/download/video/14152861/",
		card: {
			heading: "Lead Engine",
			badge: "Active",
			goal: "Generate qualified leads with automated outbound and intelligent targeting.",
			tasks: [
				{
					title: "Build ICP targeting",
					meta: "Completed in 3.1s",
					status: "completed"
				},
				{
					title: "Launch campaigns",
					meta: "Completed in 5.4s",
					status: "completed"
				},
				{
					title: "Scale outreach systems",
					meta: "In progress... 24s",
					status: "progress"
				},
				{
					title: "Analyze conversion data",
					meta: "Pending",
					status: "pending"
				}
			]
		}
	},
	{
		icon: Database,
		label: "Data Systems",
		title: "Data Systems",
		description: "Enterprise-grade data collection, organization, and AI-ready infrastructure systems.",
		video: "https://www.pexels.com/download/video/6037155/",
		card: {
			heading: "Data Infrastructure",
			badge: "Optimized",
			goal: "Build scalable data systems for AI training, analytics, and operational workflows.",
			tasks: [
				{
					title: "Collect enterprise data",
					meta: "Completed in 2.3s",
					status: "completed"
				},
				{
					title: "Structure datasets",
					meta: "Completed in 5.1s",
					status: "completed"
				},
				{
					title: "Deploy AI pipelines",
					meta: "In progress... 12s",
					status: "progress"
				},
				{
					title: "Validate infrastructure",
					meta: "Pending",
					status: "pending"
				}
			]
		}
	},
	{
		icon: BarChart3,
		label: "Revenue Systems",
		title: "Revenue Systems",
		description: "Connected revenue infrastructure combining analytics, CRM, automation, and operational intelligence.",
		video: "https://www.pexels.com/download/video/29167798/",
		card: {
			heading: "Revenue Stack",
			badge: "Connected",
			goal: "Create end-to-end revenue systems for scaling B2B operations and growth.",
			tasks: [
				{
					title: "Integrate CRM stack",
					meta: "Completed in 1.9s",
					status: "completed"
				},
				{
					title: "Deploy AI outbound",
					meta: "Completed in 6.7s",
					status: "completed"
				},
				{
					title: "Generate insights",
					meta: "In progress... 16s",
					status: "progress"
				},
				{
					title: "Scale operations",
					meta: "Pending",
					status: "pending"
				}
			]
		}
	}
];
function ServicesSection() {
	const [activeTab, setActiveTab] = useState(0);
	const activeItem = items[activeTab];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-[#f6f1e8] py-20 md:py-24",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:28px_28px]" }),
			/* @__PURE__ */ jsx("div", { className: "absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-5 md:px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mb-12 grid items-start gap-10 md:mb-14 md:grid-cols-2 md:gap-14",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex flex-col justify-start",
						children: /* @__PURE__ */ jsxs("h2", {
							className: "text-[34px] font-semibold leading-[38px] tracking-[-0.05em] text-[#131313] sm:text-[42px] sm:leading-[46px] md:text-[68px] md:leading-[72px]",
							children: ["AI Systems Built For", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal",
								children: "modern revenue growth"
							})]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-col justify-start h-full",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[15px] leading-[30px] text-black/60 md:text-[18px] md:leading-[32px]",
							children: "We build AI-powered automation systems, scalable outbound infrastructure, and intelligent operational workflows designed for modern B2B growth teams."
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4 md:px-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "relative z-20 mb-6 md:absolute md:bottom-16 md:left-5 md:mb-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-[24px] border border-white/15 bg-black/80 p-2 shadow-2xl backdrop-blur-2xl md:w-[280px]",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-2 md:grid-cols-1",
							children: items.map((tab, index) => {
								const Icon = tab.icon;
								return /* @__PURE__ */ jsxs("button", {
									onClick: () => setActiveTab(index),
									className: `
                      group flex items-center gap-2 rounded-2xl border px-3 py-3 text-left transition-all duration-300 md:gap-3 md:px-4
                      ${activeTab === index ? "border-blue-400/30 bg-blue-500/10" : "border-transparent hover:border-blue-400/20 hover:bg-white/5"}
                    `,
									children: [/* @__PURE__ */ jsx(Icon, { className: `
                        h-4 w-4 shrink-0 transition-colors duration-300 md:h-5 md:w-5
                        ${activeTab === index ? "text-blue-400" : "text-white/70 group-hover:text-blue-400"}
                      ` }), /* @__PURE__ */ jsx("span", {
										className: `
                        text-[11px] font-medium transition-colors duration-300 md:text-[14px]
                        ${activeTab === index ? "text-white" : "text-white/70 group-hover:text-white"}
                      `,
										children: tab.label
									})]
								}, index);
							})
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "services-video-clip relative min-h-[760px] overflow-hidden border border-black/10 shadow-2xl shadow-black/10 md:h-[760px] md:min-h-0",
					children: [
						/* @__PURE__ */ jsx(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ jsx(motion.video, {
								src: activeItem.video,
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: .45 },
								className: "absolute inset-0 h-full w-full bg-black object-cover"
							}, activeItem.video)
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_55%)]" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-end justify-center px-4 pb-8 md:items-center md:pb-0",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 14
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: 14
									},
									transition: { duration: .35 },
									className: "w-full max-w-[340px] rounded-[26px] border border-white/15 bg-black/70 p-5 shadow-2xl backdrop-blur-2xl md:max-w-[360px] md:rounded-[30px] md:p-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[18px] font-semibold text-white md:text-[20px]",
												children: activeItem.card.heading
											}), /* @__PURE__ */ jsx("span", {
												className: "rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] text-blue-300 md:text-[11px]",
												children: activeItem.card.badge
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-5 rounded-2xl border border-white/10 bg-white/5 p-4",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[10px] uppercase tracking-[0.15em] text-white/40 md:text-[11px]",
												children: "Goal"
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-2 text-[12px] leading-[22px] text-white/85 md:text-[13px]",
												children: activeItem.card.goal
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-5 flex flex-col gap-4",
											children: activeItem.card.tasks.map((task, index) => /* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "mt-[2px] shrink-0",
													children: [
														task.status === "completed" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-400" }),
														task.status === "progress" && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-blue-400" }),
														task.status === "pending" && /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 text-white/20" })
													]
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: `
                            text-[12px] md:text-[13px]
                            ${task.status === "completed" ? "text-white/45 line-through" : task.status === "progress" ? "font-medium text-blue-300" : "text-white/40"}
                          `,
													children: task.title
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-1 text-[10px] text-white/35 md:text-[11px]",
													children: task.meta
												})] })]
											}, index))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] text-white/40 md:text-[11px]",
											children: [/* @__PURE__ */ jsx("span", { children: "2/5 tasks complete" }), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1 text-blue-300",
												children: [/* @__PURE__ */ jsx("span", { children: "Est. 45s remaining" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })]
											})]
										})
									]
								}, activeItem.card.heading)
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/sections/WorkflowSystem.jsx
var WEEKS = [
	{
		num: "01",
		icon: Target,
		week: "Week 1",
		title: "Onboarding & Strategy",
		text: "We map your ICP, offer, sales process, and CRM setup, then pinpoint the bottlenecks holding back pipeline.",
		panelTitle: "ICP + GTM Plan",
		deliverable: "ICP + GTM plan"
	},
	{
		num: "02",
		icon: Workflow,
		week: "Week 2",
		title: "Execution",
		text: "We build your outbound lists, enrichment systems, CRM workflows, and AI research agents.",
		panelTitle: "AI Workflow Build",
		deliverable: "Live outbound engine"
	},
	{
		num: "03",
		icon: Zap,
		week: "Week 3",
		title: "Distribution",
		text: "We launch multichannel campaigns, content workflows, retargeting, and follow-up automation.",
		panelTitle: "Campaign Calendar",
		deliverable: "Campaigns in market"
	},
	{
		num: "04",
		icon: BarChart3,
		week: "Week 4+",
		title: "Measure & Optimize",
		text: "We review pipeline performance, sharpen messaging, clean CRM data, and lift conversion rates.",
		panelTitle: "Revenue Dashboard",
		deliverable: "Reporting + optimization"
	}
];
function WorkflowSystem() {
	return /* @__PURE__ */ jsx("section", {
		id: "workflows",
		"aria-label": "How we build your growth system, week by week",
		className: "bg-[#f6f1e8] px-6 py-32 lg:px-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/60",
							children: "End-to-end implementation"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl",
							children: ["Growth systems", /* @__PURE__ */ jsx("span", {
								className: "block font-serif font-normal italic",
								children: "built for you"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black/55",
							children: "From strategy and implementation to distribution and optimization, we build the complete revenue engine for your business, with a clear deliverable at every step."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-24 grid overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-2xl shadow-black/[0.04] md:grid-cols-2 lg:grid-cols-4",
					children: WEEKS.map((week) => /* @__PURE__ */ jsxs("div", {
						className: "group flex flex-col border-b border-r border-black/10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-64 overflow-hidden border-b border-black/10 bg-black p-6",
							children: [/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "absolute -left-6 top-0 h-full w-28 bg-blue-500 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-2 rounded-lg bg-white/10 px-2.5 py-1",
										children: [/* @__PURE__ */ jsx(week.icon, {
											size: 13,
											className: "text-blue-400"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[11px] text-white/70",
											children: "Velcor.ai"
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-sm font-semibold tracking-tight text-white/25",
										children: week.num
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-white/10 bg-white/[0.05] p-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm font-semibold text-white",
										children: week.panelTitle
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-4 space-y-2.5",
										children: [
											/* @__PURE__ */ jsx("div", { className: "h-2 w-4/5 rounded-full bg-white/15" }),
											/* @__PURE__ */ jsx("div", { className: "h-2 w-3/5 rounded-full bg-white/15" }),
											/* @__PURE__ */ jsx("div", { className: "h-2 w-2/3 rounded-full bg-white/15" })
										]
									})]
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col p-8",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold uppercase tracking-[0.18em] text-black/40",
									children: week.week
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-[1.4rem] font-semibold leading-tight tracking-[-0.03em] text-black",
									children: week.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-[15px] leading-7 text-black/60",
									children: week.text
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-auto flex items-center gap-2 border-t border-black/5 pt-5 text-[13px] font-medium text-black/50",
									children: [
										/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
										"Deliverable: ",
										week.deliverable
									]
								})
							]
						})]
					}, week.num))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[15px] text-black/55",
						children: "Pipeline in weeks, not quarters, with visibility at every step."
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/schedule-meeting",
						className: "group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600",
						children: ["Book a strategy call", /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "transition-transform duration-300 group-hover:translate-x-1"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/sections/Results.jsx
function Results() {
	return /* @__PURE__ */ jsx("section", {
		id: "customers",
		className: "bg-[#f6f1e8] px-5 py-24 md:py-32",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-black text-white shadow-2xl shadow-black/20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "p-8 md:p-12",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60",
							children: "Sample Campaign Result"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["From cold signals to", /* @__PURE__ */ jsx("span", {
								className: "block font-serif italic font-normal text-blue-400",
								children: "booked pipeline"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-7 max-w-xl text-lg leading-8 text-white/65",
							children: "A pilot-style GTM workflow showing how Velcor.ai turns raw market signals into enriched prospects, personalized outreach and booked strategy calls."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400",
							children: ["Build my pilot campaign", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative border-t border-white/10 bg-white/[0.04] p-6 lg:border-l lg:border-t-0 md:p-10",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" }),
						/* @__PURE__ */ jsx("div", {
							className: "relative z-10 grid gap-4 sm:grid-cols-2",
							children: [
								{
									value: "1,240+",
									label: "Buying signals mapped"
								},
								{
									value: "312",
									label: "Qualified prospects enriched"
								},
								{
									value: "47",
									label: "Warm replies generated"
								},
								{
									value: "18",
									label: "Strategy calls booked"
								}
							].map((stat) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-4xl font-semibold tracking-tight text-white",
									children: stat.value
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-white/55",
									children: stat.label
								})]
							}, stat.label))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-10 mt-5 rounded-3xl border border-white/10 bg-white/10 p-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-5 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-semibold",
									children: "Pipeline movement"
								}), /* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-blue-400 px-3 py-1 text-xs font-bold text-black",
									children: "Live"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: [
									["Signals", "100%"],
									["Enriched", "72%"],
									["Contacted", "58%"],
									["Replies", "24%"],
									["Booked", "11%"]
								].map(([label, width]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-2 flex justify-between text-sm text-white/60",
									children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsx("span", { children: width })]
								}), /* @__PURE__ */ jsx("div", {
									className: "h-2 overflow-hidden rounded-full bg-white/10",
									children: /* @__PURE__ */ jsx("div", {
										className: "h-full rounded-full bg-blue-400",
										style: { width }
									})
								})] }, label))
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "relative z-10 mt-5 text-xs text-white/35",
							children: "Demo metrics for design preview. Replace with real client campaign data before publishing."
						})
					]
				})]
			})
		})
	});
}
//#endregion
//#region src/components/ui/TestimonialsColumn.jsx
var TestimonialsColumn = ({ className = "", testimonials, duration = 10 }) => {
	return /* @__PURE__ */ jsx("div", {
		className: `overflow-hidden ${className}`,
		children: /* @__PURE__ */ jsx(motion$1.div, {
			animate: { translateY: "-50%" },
			transition: {
				duration,
				repeat: Infinity,
				ease: "linear",
				repeatType: "loop"
			},
			className: "flex flex-col gap-6 pb-6",
			children: [0, 1].map((setIndex) => /* @__PURE__ */ jsx(React.Fragment, { children: testimonials.map(({ text, image, name, role }, i) => /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-xs rounded-3xl border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-sm leading-6 text-black/70",
					children: [
						"\"",
						text,
						"\""
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-5 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: image,
						alt: name,
						width: 40,
						height: 40,
						className: "h-10 w-10 rounded-full object-cover"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-sm font-semibold leading-5 tracking-tight text-black",
							children: name
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs leading-5 tracking-tight text-black/50",
							children: role
						})]
					})]
				})]
			}, `${setIndex}-${i}`)) }, setIndex))
		})
	});
};
//#endregion
//#region src/sections/Testimonials.jsx
var testimonials = [
	{
		text: "Velcor didn't just run campaigns — they built a full pipeline system. We finally have consistency in our outreach.",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		name: "James Anderson",
		role: "Founder, SaaS"
	},
	{
		text: "CRM automation alone saved our team hours every week. Follow-ups are no longer broken, and leads never slip through.",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		name: "Sophie Martin",
		role: "Head of Growth"
	},
	{
		text: "We went from random outreach to a structured GTM engine. Results feel predictable now for the first time.",
		image: "https://randomuser.me/api/portraits/men/52.jpg",
		name: "Lars Hoffmann",
		role: "Revenue Lead"
	},
	{
		text: "The signal-based outbound strategy surfaced accounts we'd never have found manually. Pipeline quality is night and day.",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
		name: "Emma Wilson",
		role: "VP Sales"
	},
	{
		text: "Onboarding was fast and the team took full ownership. Within 6 weeks we had warm replies coming in consistently.",
		image: "https://randomuser.me/api/portraits/men/76.jpg",
		name: "Thomas Dubois",
		role: "CEO, B2B SaaS"
	},
	{
		text: "Their RevOps setup connected our CRM, sequencer, and enrichment tools into one clean workflow. Game-changer.",
		image: "https://randomuser.me/api/portraits/women/12.jpg",
		name: "Isabella Rossi",
		role: "Operations Director"
	},
	{
		text: "We booked 18 calls in the first month of the pilot. The targeting and messaging were both razor-sharp.",
		image: "https://randomuser.me/api/portraits/men/14.jpg",
		name: "Michael Brown",
		role: "Growth Manager"
	},
	{
		text: "Velcor's content system kept us top-of-mind with prospects throughout the entire buying cycle. Remarkable ROI.",
		image: "https://randomuser.me/api/portraits/women/26.jpg",
		name: "Charlotte Weber",
		role: "CMO"
	},
	{
		text: "The ABM campaigns were tailored and precise. Enterprise deals we'd stalled on for months started moving again.",
		image: "https://randomuser.me/api/portraits/men/88.jpg",
		name: "William Taylor",
		role: "Enterprise Account Exec"
	}
];
var firstColumn = testimonials.slice(0, 3);
var secondColumn = testimonials.slice(3, 6);
var thirdColumn = testimonials.slice(6, 9);
function Testimonials() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-[#f6f1e8] py-24 md:py-32",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ jsxs(motion$1.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .7,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "mb-14 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mb-4 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur",
						children: "Testimonials"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "max-w-xl text-4xl font-semibold tracking-[-0.055em] text-black sm:text-5xl md:text-6xl",
						children: "What clients say"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-sm text-sm leading-6 text-black/50",
						children: "Real results from B2B teams who built predictable pipeline with Velcor."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(TestimonialsColumn, {
						testimonials: firstColumn,
						duration: 16
					}),
					/* @__PURE__ */ jsx(TestimonialsColumn, {
						testimonials: secondColumn,
						duration: 20,
						className: "hidden md:block"
					}),
					/* @__PURE__ */ jsx(TestimonialsColumn, {
						testimonials: thirdColumn,
						duration: 18,
						className: "hidden lg:block"
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/sections/FAQ.jsx
function FAQ() {
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		id: "resources",
		className: "bg-[#f6f1e8] px-5 py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:sticky lg:top-28 lg:self-start",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
						children: "Questions"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl",
						children: ["Before we build", /* @__PURE__ */ jsx("span", {
							className: "block font-serif italic font-normal",
							children: "your GTM system"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-7 max-w-md text-lg leading-8 text-black/60",
						children: "Straight answers on how Velcor.ai works, who it is for, the industries we serve, and what we can automate."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/schedule-meeting",
						className: "group mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600",
						children: ["Still have a question? Book a call", /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "transition-transform duration-300 group-hover:translate-x-1"
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: [
					{
						q: "What exactly does Velcor.ai build?",
						a: "We build AI-powered go-to-market systems: signal-based lead research, personalized outbound workflows, CRM automation, AI sales assistants, reporting dashboards, and follow-up systems. The goal is a repeatable engine that produces qualified pipeline, not one-off campaigns."
					},
					{
						q: "Is this a marketing agency or an automation service?",
						a: "Velcor.ai sits between both. We do not just run campaigns, we engineer the infrastructure behind pipeline generation, sales operations, and automated follow-up, then hand you a system that keeps working."
					},
					{
						q: "Who is this best for?",
						a: "B2B companies with a considered, higher-value sale: B2B SaaS, M&A and private equity firms, AI and deep-tech teams, financial services, agencies, consultants, and other high-ticket service businesses that need qualified pipeline and cleaner sales workflows."
					},
					{
						q: "Which industries do you specialize in?",
						a: "We focus on B2B SaaS, M&A and private equity, AI and deep tech, and financial services. Each sector gets the same core infrastructure, adapted to its buyers, sales cycles, and compliance realities, from founder-direct deal sourcing to signal-based SaaS outbound."
					},
					{
						q: "What does the engagement look like?",
						a: "Most engagements follow a clear path: Week 1 onboarding and strategy, Week 2 building your outbound and CRM workflows, Week 3 launching campaigns, and Week 4 onward measuring and optimizing. You get a concrete deliverable at every step, so progress is visible from the start."
					},
					{
						q: "How soon will we see results?",
						a: "Your first campaigns are typically live within the first few weeks, with early replies and meetings following soon after. Pipeline compounds over the engagement as we tighten targeting and messaging. We optimize for qualified conversations, not vanity activity."
					},
					{
						q: "Do you use tools like Clay, Smartlead or HubSpot?",
						a: "Yes. Systems can be built around tools like Clay, Smartlead, Instantly, HubSpot, Pipedrive, Airtable, Notion, Zapier, Make, and custom AI workflows. We work inside your existing stack where possible, or recommend the right setup if you are starting fresh."
					},
					{
						q: "Do we own the systems and data you build?",
						a: "Yes. Wherever possible we build inside your own accounts and tools, so the workflows, data, and CRM stay yours. You are not locked into a black box you cannot access or run without us."
					},
					{
						q: "How is this different from a typical lead-gen agency or SDR outsourcing?",
						a: "Most agencies rent you activity: a batch of leads or booked calls that stop the moment you stop paying. We build infrastructure you keep, powered by buying signals and AI, so pipeline generation becomes a system inside your business rather than an outsourced dependency."
					},
					{
						q: "How do you handle compliance and data privacy?",
						a: "Outreach and data workflows are built to respect relevant regulations and your internal compliance requirements, with careful attention to deliverability and sender reputation. This matters especially in financial services and M&A, where precise, relationship-led messaging is essential."
					},
					{
						q: "How much does it cost?",
						a: "Pricing depends on scope, your stack, and the systems you need. Most clients start with a focused pilot, so you can see the approach work before scaling. Book a strategy call and we will map a scope and a clear proposal for your situation."
					},
					{
						q: "How do we get started?",
						a: "Start with a strategy call. We map your offer, ICP, and current sales workflow, then propose a pilot campaign and system structure tailored to your goals."
					}
				].map((item, index) => /* @__PURE__ */ jsxs("div", {
					className: "overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-lg shadow-black/5 backdrop-blur",
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setOpen(open === index ? null : index),
						"aria-expanded": open === index,
						className: "flex w-full items-center justify-between gap-5 px-6 py-6 text-left",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-lg font-semibold tracking-tight text-black",
							children: item.q
						}), /* @__PURE__ */ jsx("span", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white",
							children: /* @__PURE__ */ jsx(Plus, {
								size: 18,
								className: `transition ${open === index ? "rotate-45" : ""}`
							})
						})]
					}), open === index && /* @__PURE__ */ jsx("p", {
						className: "px-6 pb-6 text-base leading-7 text-black/60",
						children: item.a
					})]
				}, item.q))
			})]
		})
	});
}
//#endregion
//#region src/sections/PilotCTA.jsx
function PilotCTA() {
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "relative overflow-hidden bg-[#f6f1e8] px-5 py-24 md:py-32 lg:px-8",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55",
					children: "Pilot Campaign"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl",
					children: ["Apply for a pilot campaign", /* @__PURE__ */ jsx("span", {
						className: "block font-serif font-normal italic",
						children: "built around your offer"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-lg text-base leading-8 text-black/60",
					children: "We map your ICP, identify buying signals, engineer outbound systems, connect CRM automations, and launch revenue infrastructure you can scale."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-9 rounded-3xl border border-black/10 bg-white/60 p-2 backdrop-blur",
					children: [/* @__PURE__ */ jsx("p", {
						className: "px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.15em] text-black/40",
						children: "Your pilot includes"
					}), /* @__PURE__ */ jsx("ul", {
						className: "divide-y divide-black/5",
						children: [
							"Signal-based lead list built for your ICP",
							"AI-personalized outbound sequence",
							"CRM workflow and pipeline tracking",
							"Weekly optimization and reporting"
						].map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 px-4 py-3.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white",
								children: /* @__PURE__ */ jsx(Check, { size: 13 })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[15px] font-medium text-black/75",
								children: item
							})]
						}, item))
					})]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "rounded-[2rem] border border-white/10 bg-black p-8 text-white shadow-xl shadow-black/20 sm:p-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-blue-400",
							children: /* @__PURE__ */ jsx(CalendarDays, { size: 17 })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-medium text-white/70",
							children: "30-minute strategy call"
						})]
					}),
					/* @__PURE__ */ jsxs("h3", {
						className: "mt-7 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.6rem] sm:leading-[1.05]",
						children: ["Book your", /* @__PURE__ */ jsx("span", {
							className: "block font-serif font-normal italic text-blue-400",
							children: "1-on-1 strategy call"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-md text-[15px] leading-7 text-white/65",
						children: "Pick a time that works for you. Calendly shows availability in your local timezone, and we will map your ICP, outbound, and revenue infrastructure live on the call."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-7 flex flex-wrap gap-2",
						children: [
							"30 minutes",
							"Google Meet",
							"Your timezone"
						].map((d) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70",
							children: d
						}, d))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/schedule-meeting",
						className: "group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 sm:w-auto",
						children: ["Schedule a meeting", /* @__PURE__ */ jsx(ArrowRight, {
							size: 16,
							className: "transition-transform duration-300 group-hover:translate-x-1"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-xs text-white/40",
						children: "No commitment. Just a focused conversation about your pipeline."
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/sections/AnimatedWorkflow.jsx
function HeroVideoSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-[#F6F1E8] py-6 md:py-10 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-3 md:px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "relative overflow-hidden rounded-[20px] md:rounded-[40px] border border-gray-200 bg-black",
				children: /* @__PURE__ */ jsx("video", {
					className: "w-full h-auto",
					src: "/video.mp4",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "auto"
				})
			})
		}), /* @__PURE__ */ jsx("style", { children: `
        video {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1920 / 1440;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          video {
            width: 100%;
            height: auto;
          }
        }
      ` })]
	});
}
//#endregion
//#region src/sections/HomeSlider.jsx
function HomeSlider() {
	const images = [
		"/slider1.jpeg",
		"/slider2.jpeg",
		"/slider4.jpeg",
		"/slider6.png",
		"/slider7.png",
		"/slider8.png"
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-[#f6f1e8] py-20 md:py-28",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mb-12 max-w-7xl px-5 text-center md:mb-16",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mb-4 inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur",
						children: "Results That Drive Revenue"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl md:text-5xl",
						children: "The systems behind predictable growth."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/50 sm:text-base",
						children: "Systems built to turn better data, smarter workflows, and consistent execution into measurable revenue."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "slider-container",
				children: /* @__PURE__ */ jsx("div", {
					className: "slider-track",
					children: [...images, ...images].map((image, index) => /* @__PURE__ */ jsx("div", {
						className: "slider-card",
						children: /* @__PURE__ */ jsx("img", {
							src: image,
							alt: `Slide ${index + 1}`,
							className: "slider-image",
							loading: "lazy",
							draggable: "false"
						})
					}, `${image}-${index}`))
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .slider-card {
          width: clamp(280px, 60vw, 700px);
          height: clamp(180px, 35vw, 400px);
          border-radius: 24px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          image-rendering: auto;
          backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-user-drag: none;
          user-select: none;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .slider-track {
            gap: 12px;
            animation-duration: 20s;
          }

          .slider-card {
            width: 85vw;
            height: 52vw;
            border-radius: 18px;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .slider-card {
            width: 70vw;
            height: 42vw;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .slider-card {
            width: 800px;
            height: 450px;
          }
        }
      ` })
		]
	});
}
//#endregion
//#region src/pages/Home.jsx
function Home() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Velcor.ai | AI Revenue Infrastructure for Modern B2B Growth",
				description: "Velcor.ai builds AI-powered outbound systems, RevOps automation, CRM workflows, and revenue infrastructure for B2B SaaS, M&A and private equity, AI and deep-tech, and financial-services teams, generating predictable pipeline and sustainable growth worldwide.",
				path: "/",
				jsonLd: [
					{
						"@type": "Service",
						"@id": `${SITE_URL}/#service-outbound`,
						name: "AI Outbound Systems",
						serviceType: "AI-powered outbound sales system",
						provider: { "@id": `${SITE_URL}/#organization` },
						areaServed: {
							"@type": "Place",
							name: "Worldwide"
						},
						audience: {
							"@type": "BusinessAudience",
							name: "B2B companies"
						},
						description: "Signal-based outbound with AI personalization across email and LinkedIn that generates qualified pipeline."
					},
					{
						"@type": "Service",
						"@id": `${SITE_URL}/#service-revops`,
						name: "AI RevOps",
						serviceType: "Revenue operations automation",
						provider: { "@id": `${SITE_URL}/#organization` },
						areaServed: {
							"@type": "Place",
							name: "Worldwide"
						},
						audience: {
							"@type": "BusinessAudience",
							name: "B2B companies"
						},
						description: "CRM automation, lead routing and revenue-operations workflows that remove manual GTM busywork."
					},
					{
						"@type": "Service",
						"@id": `${SITE_URL}/#service-content`,
						name: "Content Engine",
						serviceType: "Content-driven lead generation",
						provider: { "@id": `${SITE_URL}/#organization` },
						areaServed: {
							"@type": "Place",
							name: "Worldwide"
						},
						audience: {
							"@type": "BusinessAudience",
							name: "B2B companies"
						},
						description: "A content system that turns expertise into inbound demand and compounding organic reach."
					}
				]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(TrustedBy, {}),
			/* @__PURE__ */ jsx(ServicesSection, {}),
			/* @__PURE__ */ jsx(Industries, {}),
			/* @__PURE__ */ jsx(WorkflowSystem, {}),
			/* @__PURE__ */ jsx(Results, {}),
			/* @__PURE__ */ jsx(HeroVideoSection, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(HomeSlider, {}),
			/* @__PURE__ */ jsx(FAQ, {}),
			/* @__PURE__ */ jsx(PilotCTA, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Home as default };
