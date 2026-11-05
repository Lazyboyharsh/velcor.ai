import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, Loader2, X } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ScrollToTop.jsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [pathname]);
	return null;
}
//#endregion
//#region src/components/BookingPopup.jsx
function BookingPopup() {
	const [open, setOpen] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const show = () => {
			setOpen(true);
		};
		window.addEventListener("open-booking", show);
		if (location.pathname === "/" && !sessionStorage.getItem("velcor-booking-shown")) {
			const timer = setTimeout(() => {
				setOpen(true);
				sessionStorage.setItem("velcor-booking-shown", "1");
			}, 8e3);
			return () => {
				clearTimeout(timer);
				window.removeEventListener("open-booking", show);
			};
		}
		return () => {
			window.removeEventListener("open-booking", show);
		};
	}, [location.pathname]);
	if (!open) return null;
	const calendlyUrl = "https://calendly.com/velcor-ai-team/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=2563eb";
	if (calendarOpen) return /* @__PURE__ */ jsxs("div", {
		className: "\n          fixed\n          bottom-5\n          right-5\n          z-[99999]\n          w-[380px]\n          max-w-[calc(100vw-2rem)]\n          overflow-hidden\n          rounded-2xl\n          border\n          border-black/10\n          bg-white\n          shadow-[0_20px_60px_rgba(0,0,0,0.18)]\n        ",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between border-b border-black/5 px-4 py-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600",
					children: /* @__PURE__ */ jsx(CalendarDays, { size: 16 })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold text-[#131313]",
					children: "Book a strategy call"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-gray-500",
					children: "30 minutes · Google Meet"
				})] })]
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setOpen(false),
				className: "\n              flex\n              h-7\n              w-7\n              items-center\n              justify-center\n              rounded-full\n              bg-black/5\n              text-gray-500\n              transition\n              hover:bg-black\n              hover:text-white\n            ",
				"aria-label": "Close booking",
				children: /* @__PURE__ */ jsx(X, { size: 14 })
			})]
		}), /* @__PURE__ */ jsx("iframe", {
			title: "Book a Velcor.ai strategy call",
			src: calendlyUrl,
			className: "h-[420px] w-full border-0",
			loading: "eager"
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "\n        fixed\n        bottom-5\n        right-5\n        z-[99999]\n        w-[330px]\n        max-w-[calc(100vw-2rem)]\n        rounded-2xl\n        border\n        border-black/10\n        bg-white\n        p-5\n        shadow-[0_18px_50px_rgba(0,0,0,0.14)]\n      ",
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setOpen(false),
				"aria-label": "Close booking popup",
				className: "\n          absolute\n          right-3\n          top-3\n          flex\n          h-7\n          w-7\n          items-center\n          justify-center\n          rounded-full\n          text-gray-400\n          transition\n          hover:bg-black/5\n          hover:text-black\n        ",
				children: /* @__PURE__ */ jsx(X, { size: 15 })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600",
				children: /* @__PURE__ */ jsx(CalendarDays, { size: 19 })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pr-5",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-base font-semibold tracking-tight text-[#131313]",
					children: "Have a revenue challenge?"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1.5 text-xs leading-5 text-gray-500",
					children: "Let’s talk about your pipeline, outbound, and revenue infrastructure."
				})]
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => setCalendarOpen(true),
				className: "\n          mt-4\n          flex\n          w-full\n          items-center\n          justify-center\n          gap-2\n          rounded-xl\n          bg-[#131313]\n          px-4\n          py-2.5\n          text-sm\n          font-medium\n          text-white\n          transition\n          hover:bg-blue-600\n        ",
				children: ["Book a strategy call", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2.5 text-center text-[10px] text-gray-400",
				children: "30 minutes · No commitment"
			})
		]
	});
}
//#endregion
//#region src/components/LeadPopup.jsx
var WEB3FORMS_ACCESS_KEY = "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";
var STORAGE_KEY = "velcor_lead_popup";
var SNOOZE_DAYS = 7;
var FALLBACK_DELAY_MS = 1e4;
var MIN_FILL_TIME_MS = 4e3;
var TOTAL_STEPS = 5;
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
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var FOCUS_OPTIONS = [
	"Outbound",
	"RevOps",
	"Content",
	"All of the above"
];
var TEAM_SIZES = [
	"Just me",
	"2–10",
	"11–50",
	"50+"
];
var getEmailDomain = (email) => email.split("@")[1]?.toLowerCase().trim();
var cleanHost = (value) => {
	const trimmed = value.trim();
	if (!trimmed) return null;
	try {
		const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
		if (!url.hostname.includes(".")) return null;
		const host = url.hostname.toLowerCase().replace(/^www\./, "");
		if (PERSONAL_DOMAINS.has(host)) return null;
		return host;
	} catch {
		return null;
	}
};
var looksLikeSpamText = (text) => /https?:\/\/|www\.|<|>/i.test(text);
var readSnooze = () => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return false;
		const { until } = JSON.parse(raw);
		return typeof until === "number" && Date.now() < until;
	} catch {
		return false;
	}
};
var writeSnooze = (days) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ until: Date.now() + days * 24 * 60 * 60 * 1e3 }));
	} catch {}
};
/**
* Props:
*  - exitIntent (default true): open when the cursor leaves through the top of the window
*  - fallbackDelay (ms): open after this delay if exit intent never fires (covers mobile)
*
* You can also open it from anywhere, e.g. a button:
*   window.dispatchEvent(new Event("velcor:open-lead-popup"));
*/
function LeadPopup({ exitIntent = true, fallbackDelay = FALLBACK_DELAY_MS, ignoreSnooze = false }) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const [step, setStep] = useState(0);
	const [done, setDone] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		website: "",
		title: "",
		targets: "",
		focus: "",
		teamSize: ""
	});
	const [honeypot, setHoneypot] = useState("");
	const openedAt = useRef(0);
	const shownThisSession = useRef(false);
	const firstInputRef = useRef(null);
	const openPopup = useCallback((force = false) => {
		if (shownThisSession.current && !force) return;
		if (!force && !ignoreSnooze && readSnooze()) return;
		shownThisSession.current = true;
		openedAt.current = Date.now();
		setOpen(true);
		requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
	}, [ignoreSnooze]);
	useEffect(() => {
		if (!ignoreSnooze && readSnooze()) return void 0;
		const onMouseOut = (e) => {
			if (e.clientY <= 0 && !e.relatedTarget) openPopup();
		};
		if (exitIntent) document.addEventListener("mouseout", onMouseOut);
		const timer = setTimeout(() => openPopup(), fallbackDelay);
		return () => {
			document.removeEventListener("mouseout", onMouseOut);
			clearTimeout(timer);
		};
	}, [
		exitIntent,
		fallbackDelay,
		ignoreSnooze,
		openPopup
	]);
	useEffect(() => {
		const manual = () => openPopup(true);
		window.addEventListener("velcor:open-lead-popup", manual);
		return () => window.removeEventListener("velcor:open-lead-popup", manual);
	}, [openPopup]);
	const closePopup = useCallback(() => {
		setVisible(false);
		writeSnooze(SNOOZE_DAYS);
		setTimeout(() => setOpen(false), 250);
	}, []);
	useEffect(() => {
		if (!open) return void 0;
		const onKey = (e) => {
			if (e.key === "Escape") closePopup();
		};
		document.addEventListener("keydown", onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [open, closePopup]);
	useEffect(() => {
		if (open && visible) {
			const t = setTimeout(() => firstInputRef.current?.focus(), 120);
			return () => clearTimeout(t);
		}
	}, [
		step,
		open,
		visible,
		done
	]);
	const update = (name, value) => {
		if (error) setError("");
		setForm((f) => ({
			...f,
			[name]: value
		}));
	};
	const handleChange = (e) => update(e.target.name, e.target.value);
	const validateStep = () => {
		if (step === 0) {
			const first = form.firstName.trim();
			const last = form.lastName.trim();
			if (first.length < 2 || last.length < 1) return "Enter your first and last name.";
			if (looksLikeSpamText(first + last) || /^[\d\W]+$/.test(first)) return "Enter your real name.";
		}
		if (step === 1) {
			const email = form.email.trim();
			const domain = getEmailDomain(email);
			if (!EMAIL_REGEX.test(email) || !domain) return "Enter a valid email address.";
			if (DISPOSABLE_DOMAINS.has(domain)) return "Temporary email addresses aren't accepted. Use a different email.";
		}
		if (step === 2) {
			if (form.company.trim().length < 2) return "Enter your company name.";
			if (looksLikeSpamText(form.company)) return "Company name can't contain links.";
			if (!cleanHost(form.website)) return "Enter your company website, for example velcor.ai.";
			if (form.title.trim().length < 2) return "Enter your job title.";
		}
		if (step === 3) {
			if (form.targets.trim().length < 5) return "Tell us who you want to reach, even in a few words.";
			if (looksLikeSpamText(form.targets)) return "Please remove links from this field.";
		}
		if (step === 4) {
			if (!form.focus) return "Pick the area you want help with.";
			if (!form.teamSize) return "Pick your sales team size.";
		}
		return "";
	};
	const submit = async () => {
		if (honeypot || Date.now() - openedAt.current < MIN_FILL_TIME_MS) {
			setDone(true);
			return;
		}
		const email = form.email.trim();
		const emailDomain = getEmailDomain(email);
		const siteDomain = cleanHost(form.website);
		setLoading(true);
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: "New Free Leads Request - Velcor.ai",
					from_name: "Velcor.ai Website",
					name: `${form.firstName.trim()} ${form.lastName.trim()}`,
					first_name: form.firstName.trim(),
					last_name: form.lastName.trim(),
					email,
					company: form.company.trim(),
					company_website: siteDomain,
					job_title: form.title.trim(),
					target_audience: form.targets.trim(),
					focus_area: form.focus,
					sales_team_size: form.teamSize,
					email_type: PERSONAL_DOMAINS.has(emailDomain) ? "personal" : "work",
					email_matches_website: emailDomain === siteDomain || emailDomain.endsWith("." + siteDomain) ? "yes" : "no",
					request_type: "50 Free Leads Offer",
					source: "Velcor.ai Exit Popup",
					page: window.location.pathname,
					botcheck: "",
					message: "New 50 free leads request from the Velcor.ai popup."
				})
			});
			const data = await response.json();
			if (!response.ok || !data.success) throw new Error(data.message || "Unable to send request.");
			writeSnooze(365);
			setDone(true);
		} catch (err) {
			setError(err.message || "Unable to send request. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	const handleNext = (e) => {
		e.preventDefault();
		if (loading) return;
		const problem = validateStep();
		if (problem) {
			setError(problem);
			return;
		}
		if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
		else submit();
	};
	const handleBack = () => {
		if (error) setError("");
		setStep((s) => Math.max(0, s - 1));
	};
	if (!open) return null;
	const inputClass = "h-[52px] w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15";
	const labelClass = "mb-1.5 block text-xs font-semibold text-black/80";
	const chipClass = (active) => "rounded-full border px-4 py-2.5 text-xs font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 " + (active ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20" : "border-black/10 bg-white text-black/70 hover:border-blue-300 hover:text-black");
	const titles = [
		"Before you go, want 50 free leads?",
		"Where should we send them?",
		"Tell us about your company",
		"Who do you want to reach?",
		"Last thing: where should we focus?"
	];
	const subtitle = step === 0 ? "Tell us a bit about your target accounts and we'll put together 50 accounts and contacts, with an outreach plan your team can start working today. No strings attached." : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 " + (visible ? "opacity-100" : "opacity-0"),
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "velcor-popup-title",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-black/55 backdrop-blur-[2px]",
				onClick: closePopup
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative grid max-h-[92vh] w-full max-w-[900px] overflow-hidden rounded-3xl bg-[#f6f1e8] shadow-2xl shadow-black/30 transition-all duration-300 md:grid-cols-[2fr_3fr] " + (visible ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.97]"),
				children: [/* @__PURE__ */ jsxs("aside", {
					className: "relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-[#0b1a4a] p-9 text-white md:flex md:flex-col",
					children: [
						/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" }),
						/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[5.5rem] font-semibold leading-none tracking-[-0.06em]",
									children: "50"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 font-serif text-2xl italic tracking-[-0.02em]",
									children: "free leads"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 max-w-[16rem] text-sm leading-6 text-white/75",
									children: "Accounts, contacts and an outreach plan for your team. No strings attached."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative mt-auto pb-2",
							children: [
								/* @__PURE__ */ jsx("div", { className: "mx-auto h-3 w-[86%] rounded-t-xl bg-white/10" }),
								/* @__PURE__ */ jsx("div", { className: "mx-auto h-3 w-[93%] rounded-t-xl bg-white/15" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 rounded-xl bg-white p-3 shadow-xl shadow-black/20",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[11px] font-bold text-blue-700",
										children: "VP"
									}), /* @__PURE__ */ jsxs("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block truncate text-xs font-semibold text-black",
											children: "VP of Sales"
										}), /* @__PURE__ */ jsx("span", {
											className: "block truncate text-[11px] text-black/50",
											children: "Northwind SaaS · Series B"
										})]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative flex min-h-[460px] flex-col overflow-y-auto p-6 sm:p-9",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-5 flex items-baseline gap-2 md:hidden",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-3xl font-semibold tracking-[-0.05em] text-blue-700",
								children: "50"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-serif text-lg italic text-blue-700",
								children: "free leads"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-1 gap-1.5",
									role: "progressbar",
									"aria-valuemin": 1,
									"aria-valuemax": TOTAL_STEPS,
									"aria-valuenow": done ? TOTAL_STEPS : step + 1,
									children: Array.from({ length: TOTAL_STEPS }).map((_, i) => /* @__PURE__ */ jsx("span", { className: "h-1 flex-1 rounded-full transition-colors duration-500 " + (done || i <= step ? "bg-blue-600" : "bg-black/10") }, i))
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-xs tabular-nums text-black/45",
									children: [
										done ? TOTAL_STEPS : step + 1,
										" / ",
										TOTAL_STEPS
									]
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: closePopup,
									"aria-label": "Close",
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 hover:bg-black/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30",
									children: /* @__PURE__ */ jsx(X, { size: 16 })
								})
							]
						}),
						done ? /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col justify-center py-10",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",
									children: /* @__PURE__ */ jsx(Check, { size: 22 })
								}),
								/* @__PURE__ */ jsx("h2", {
									id: "velcor-popup-title",
									className: "text-2xl font-semibold tracking-[-0.03em] text-black sm:text-3xl",
									children: "Request received."
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-3 max-w-md text-sm leading-6 text-black/55",
									children: [
										"We'll build your list of 50 accounts and contacts and send it to",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-black/80",
											children: form.email.trim()
										}),
										". Want to talk it through live? Book a time and we'll walk you through the outreach plan."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => {
											setVisible(false);
											setTimeout(() => {
												setOpen(false);
												navigate("/schedule-meeting");
											}, 200);
										},
										className: "group/btn flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700",
										children: ["Book a call", /* @__PURE__ */ jsx(ArrowRight, {
											size: 14,
											className: "transition-transform group-hover/btn:translate-x-1"
										})]
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: closePopup,
										className: "h-12 rounded-full bg-black/5 px-7 text-sm font-semibold text-black/70 transition hover:bg-black/10",
										children: "Close"
									})]
								})
							]
						}) : /* @__PURE__ */ jsxs("form", {
							onSubmit: handleNext,
							noValidate: true,
							className: "flex flex-1 flex-col pt-9",
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
								/* @__PURE__ */ jsx("h2", {
									id: "velcor-popup-title",
									className: "max-w-md text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.035em] text-black sm:text-[1.9rem]",
									children: titles[step]
								}),
								subtitle && /* @__PURE__ */ jsx("p", {
									className: "mt-4 max-w-md text-sm leading-6 text-black/55",
									children: subtitle
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-7 animate-[popStep_0.35s_ease_both]",
									children: [
										step === 0 && /* @__PURE__ */ jsxs("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												htmlFor: "lp-first",
												className: labelClass,
												children: "First name"
											}), /* @__PURE__ */ jsx("input", {
												ref: firstInputRef,
												id: "lp-first",
												name: "firstName",
												type: "text",
												autoComplete: "given-name",
												value: form.firstName,
												onChange: handleChange,
												placeholder: "Sara",
												className: inputClass
											})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												htmlFor: "lp-last",
												className: labelClass,
												children: "Last name"
											}), /* @__PURE__ */ jsx("input", {
												id: "lp-last",
												name: "lastName",
												type: "text",
												autoComplete: "family-name",
												value: form.lastName,
												onChange: handleChange,
												placeholder: "Bennett",
												className: inputClass
											})] })]
										}),
										step === 1 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "lp-email",
											className: labelClass,
											children: "Work email"
										}), /* @__PURE__ */ jsx("input", {
											ref: firstInputRef,
											id: "lp-email",
											name: "email",
											type: "email",
											autoComplete: "email",
											value: form.email,
											onChange: handleChange,
											placeholder: "sara@yourcompany.com",
											className: inputClass
										})] }),
										step === 2 && /* @__PURE__ */ jsxs("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													htmlFor: "lp-company",
													className: labelClass,
													children: "Company"
												}), /* @__PURE__ */ jsx("input", {
													ref: firstInputRef,
													id: "lp-company",
													name: "company",
													type: "text",
													autoComplete: "organization",
													value: form.company,
													onChange: handleChange,
													placeholder: "Acme SaaS",
													className: inputClass
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													htmlFor: "lp-title",
													className: labelClass,
													children: "Title"
												}), /* @__PURE__ */ jsx("input", {
													id: "lp-title",
													name: "title",
													type: "text",
													autoComplete: "organization-title",
													value: form.title,
													onChange: handleChange,
													placeholder: "Head of Sales",
													className: inputClass
												})] }),
												/* @__PURE__ */ jsxs("div", {
													className: "sm:col-span-2",
													children: [/* @__PURE__ */ jsx("label", {
														htmlFor: "lp-site",
														className: labelClass,
														children: "Company website"
													}), /* @__PURE__ */ jsx("input", {
														id: "lp-site",
														name: "website",
														type: "text",
														inputMode: "url",
														autoComplete: "url",
														value: form.website,
														onChange: handleChange,
														placeholder: "acme.com",
														className: inputClass
													})]
												})
											]
										}),
										step === 3 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "lp-targets",
											className: labelClass,
											children: "Your ideal customers: roles, industries, company size"
										}), /* @__PURE__ */ jsx("textarea", {
											ref: firstInputRef,
											id: "lp-targets",
											name: "targets",
											rows: 4,
											value: form.targets,
											onChange: handleChange,
											placeholder: "e.g. CROs and VPs of Sales at US B2B SaaS companies with 50–500 employees",
											className: "h-[52px] w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 h-auto resize-none py-3.5 leading-6"
										})] }),
										step === 4 && /* @__PURE__ */ jsxs("div", {
											className: "space-y-6",
											children: [/* @__PURE__ */ jsxs("fieldset", { children: [/* @__PURE__ */ jsx("legend", {
												className: labelClass,
												children: "What do you need most help with?"
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-2 flex flex-wrap gap-2",
												children: FOCUS_OPTIONS.map((opt) => /* @__PURE__ */ jsx("button", {
													type: "button",
													"aria-pressed": form.focus === opt,
													onClick: () => update("focus", opt),
													className: chipClass(form.focus === opt),
													children: opt
												}, opt))
											})] }), /* @__PURE__ */ jsxs("fieldset", { children: [/* @__PURE__ */ jsx("legend", {
												className: labelClass,
												children: "How big is your sales team?"
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-2 flex flex-wrap gap-2",
												children: TEAM_SIZES.map((opt) => /* @__PURE__ */ jsx("button", {
													type: "button",
													"aria-pressed": form.teamSize === opt,
													onClick: () => update("teamSize", opt),
													className: chipClass(form.teamSize === opt),
													children: opt
												}, opt))
											})] })]
										})
									]
								}, step),
								error && /* @__PURE__ */ jsx("p", {
									role: "alert",
									className: "mt-4 text-xs text-red-600",
									children: error
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-auto flex items-center gap-3 pt-8",
									children: [step > 0 && /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: handleBack,
										disabled: loading,
										className: "flex h-12 items-center gap-2 rounded-full bg-black/5 px-6 text-sm font-semibold text-black/70 transition hover:bg-black/10 disabled:opacity-60",
										children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 14 }), "Back"]
									}), /* @__PURE__ */ jsx("button", {
										type: "submit",
										disabled: loading,
										className: "group/btn flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70",
										children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, {
											size: 14,
											className: "animate-spin"
										}), "Sending..."] }) : step === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: ["Let's go", /* @__PURE__ */ jsx(ArrowRight, {
											size: 14,
											className: "transition-transform group-hover/btn:translate-x-1"
										})] }) : step === TOTAL_STEPS - 1 ? /* @__PURE__ */ jsxs(Fragment, { children: ["Get my 50 leads", /* @__PURE__ */ jsx(ArrowRight, {
											size: 14,
											className: "transition-transform group-hover/btn:translate-x-1"
										})] }) : /* @__PURE__ */ jsxs(Fragment, { children: ["Next", /* @__PURE__ */ jsx(ArrowRight, {
											size: 14,
											className: "transition-transform group-hover/btn:translate-x-1"
										})] })
									})]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
          @keyframes popStep {
            from { opacity: 0; transform: translateX(14px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            [class*="popStep"] { animation: none !important; }
          }
        ` })
		]
	});
}
//#endregion
//#region src/App.jsx
var Home$1 = lazy(() => import("./assets/Home-DqHtjR1a.js"));
var ServicesPage = lazy(() => import("./assets/ServicesPage-8DZ7Cl8P.js"));
var CaseStudiesPage = lazy(() => import("./assets/CaseStudiesPage-MVXiZ0a3.js"));
var CaseStudyDetail = lazy(() => import("./assets/CaseStudyDetail-BeAmNCnR.js"));
var About = lazy(() => import("./assets/About-CnOWZWvd.js"));
var Contact = lazy(() => import("./assets/Contact-ClTcQzN5.js"));
var Blog = lazy(() => import("./assets/Blog-ChdCsABf.js"));
var BlogPost = lazy(() => import("./assets/BlogPost-Cn23J452.js"));
var Process = lazy(() => import("./assets/Process-BpsIJxmu.js"));
var Infrastructure = lazy(() => import("./assets/Infrastructure-Cc1kl8ME.js"));
var PrivacyPolicy = lazy(() => import("./assets/PrivacyPolicy-B0i1Tpix.js"));
var TermsOfService = lazy(() => import("./assets/TermsOfService-GsOX4ezO.js"));
var NotFound = lazy(() => import("./assets/NotFound-3zDpzE-3.js"));
var ScheduleMeeting = lazy(() => import("./assets/ScheduleMeeting-Cri6YntU.js"));
function App() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(ScrollToTop, {}),
		/* @__PURE__ */ jsx(Suspense, {
			fallback: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#f6f1e8]" }),
			children: /* @__PURE__ */ jsxs(Routes, { children: [
				/* @__PURE__ */ jsx(Route, {
					path: "/",
					element: /* @__PURE__ */ jsx(Home$1, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/schedule-meeting",
					element: /* @__PURE__ */ jsx(ScheduleMeeting, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services",
					element: /* @__PURE__ */ jsx(ServicesPage, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/about",
					element: /* @__PURE__ */ jsx(About, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/contact",
					element: /* @__PURE__ */ jsx(Contact, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/process",
					element: /* @__PURE__ */ jsx(Process, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/infrastructure",
					element: /* @__PURE__ */ jsx(Infrastructure, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/case-studies",
					element: /* @__PURE__ */ jsx(CaseStudiesPage, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/case-studies/:slug",
					element: /* @__PURE__ */ jsx(CaseStudyDetail, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog",
					element: /* @__PURE__ */ jsx(Blog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/:slug",
					element: /* @__PURE__ */ jsx(BlogPost, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/privacy-policy",
					element: /* @__PURE__ */ jsx(PrivacyPolicy, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/terms-of-service",
					element: /* @__PURE__ */ jsx(TermsOfService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "*",
					element: /* @__PURE__ */ jsx(NotFound, {})
				})
			] })
		}),
		/* @__PURE__ */ jsx(LeadPopup, {}),
		/* @__PURE__ */ jsx(BookingPopup, {})
	] });
}
//#endregion
//#region src/entry-server.jsx
function render(url) {
	const tree = /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(App, {})
	}) }) });
	return new Promise((resolve, reject) => {
		let raw = "";
		const writable = new Writable({
			write(chunk, _enc, cb) {
				raw += chunk.toString();
				cb();
			},
			final(cb) {
				cb();
			}
		});
		writable.on("finish", () => {
			const headTags = [];
			resolve({
				html: raw.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?\/?>/gi, (tag) => {
					headTags.push(tag);
					return "";
				}),
				head: headTags.join("\n    ")
			});
		});
		const { pipe } = renderToPipeableStream(tree, {
			onAllReady() {
				pipe(writable);
			},
			onShellError: reject,
			onError: reject
		});
	});
}
//#endregion
export { render };
