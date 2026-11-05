import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/ScheduleMeeting.jsx
var CALENDLY_URL = "https://calendly.com/velcor-ai-team/30min";
function ScheduleMeeting() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Schedule a Meeting",
				description: "Book a focused 30-minute strategy call with the Velcor.ai team to map your ICP, outbound workflow and revenue infrastructure.",
				path: "/schedule-meeting",
				breadcrumbs: [{
					name: "Schedule a Meeting",
					path: "/schedule-meeting"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden px-5 pb-20 pt-32 md:pt-40",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "mb-7 inline-flex items-center gap-2 text-sm font-medium text-black/55 transition hover:text-black",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 16 }), " Back to home"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:sticky lg:top-28",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55",
									children: "Strategy Call"
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[.95] tracking-[-0.06em]",
									children: ["Schedule a ", /* @__PURE__ */ jsx("span", {
										className: "block font-serif font-normal italic",
										children: "meeting."
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 max-w-lg text-base leading-8 text-black/60",
									children: "Book a focused 30-minute session with the Velcor.ai team to map your ICP, outbound workflow and revenue infrastructure."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-2xl shadow-black/10 sm:p-4",
							children: /* @__PURE__ */ jsx("iframe", {
								title: "Schedule a meeting with Velcor.ai",
								src: `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=3b82f6`,
								className: "h-[760px] w-full rounded-2xl border-0",
								loading: "eager"
							})
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { ScheduleMeeting as default };
