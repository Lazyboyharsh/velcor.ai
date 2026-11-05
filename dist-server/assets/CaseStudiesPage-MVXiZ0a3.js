import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/CaseStudiesPage.jsx
var cases = [
	{
		slug: "saas-platform-qualified-calls",
		company: "B2B SaaS Platform",
		title: "18 qualified strategy calls in 30 days",
		desc: "Built a signal-based outbound workflow with enrichment, AI personalization and CRM routing.",
		stats: [
			"1,240+ signals",
			"312 prospects",
			"47 replies",
			"18 calls"
		],
		industry: "SaaS",
		challenge: "The client had a strong product but outbound was random, manual and inconsistent. Their team had no clear system for finding high-intent accounts.",
		solution: "We created a signal-based outbound engine using buying triggers, lead enrichment, AI-personalized messaging and CRM routing.",
		outcome: "Within 30 days, the workflow generated 47 warm replies and 18 qualified strategy calls."
	},
	{
		slug: "growth-agency-crm-automation",
		company: "Growth Agency",
		title: "3x faster follow-ups with CRM automation",
		desc: "Cleaned CRM data, created lead scoring, automated reminders and improved response speed.",
		stats: [
			"65% less manual work",
			"0 missed leads",
			"3x faster replies"
		],
		industry: "Agency",
		challenge: "The sales team was losing leads because follow-ups were delayed and CRM data was messy.",
		solution: "We built CRM automation for lead scoring, routing, follow-up reminders and pipeline reporting.",
		outcome: "The team reduced manual CRM work by 65% and improved follow-up speed by 3x."
	},
	{
		slug: "b2b-services-content-system",
		company: "B2B Services Firm",
		title: "Consistent inbound from content system",
		desc: "Created LinkedIn content workflows connected with outbound and warm lead follow-up.",
		stats: [
			"4 weeks",
			"28 posts",
			"11 warm leads"
		],
		industry: "B2B Services",
		challenge: "The company had expertise but no consistent content engine to build trust and generate inbound demand.",
		solution: "We created a LinkedIn content workflow with topic mining, AI drafting, approval flow and warm lead follow-up.",
		outcome: "In 4 weeks, the system produced 28 posts and generated 11 warm inbound conversations."
	}
];
function CaseStudiesPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Case Studies",
				description: "Real revenue systems Velcor.ai has built: outbound campaigns, CRM automation and content engines that generated qualified pipeline for B2B clients.",
				path: "/case-studies",
				breadcrumbs: [{
					name: "Case Studies",
					path: "/case-studies"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-5 pt-40 pb-20 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
						children: "Case Studies"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
						children: ["Growth systems that", /* @__PURE__ */ jsx("span", {
							className: "block font-serif italic font-normal",
							children: "create pipeline"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60",
						children: "Demo case studies showing how Velcor.ai builds outbound, RevOps and content systems for B2B growth."
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 pb-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl gap-6 lg:grid-cols-3",
					children: cases.map((item) => /* @__PURE__ */ jsxs(Link, {
						to: `/case-studies/${item.slug}`,
						className: "group overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-xl shadow-black/5 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-64 bg-black p-6 text-white",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" }),
								/* @__PURE__ */ jsx("div", { className: "absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-blue-400/30 blur-3xl" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm text-white/50",
										children: item.company
									}), /* @__PURE__ */ jsx("h2", {
										className: "mt-5 text-3xl font-semibold tracking-tight",
										children: item.title
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm leading-7 text-black/65",
									children: item.desc
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: item.stats.map((stat) => /* @__PURE__ */ jsx("span", {
										className: "rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-black/65",
										children: stat
									}, stat))
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black",
									children: ["Read case study", /* @__PURE__ */ jsx(ArrowRight, {
										size: 15,
										className: "transition group-hover:translate-x-1"
									})]
								})
							]
						})]
					}, item.title))
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { cases, CaseStudiesPage as default };
