import { n as Seo } from "./Seo-CqIJsAmM.js";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/TermsOfService.jsx
var LAST_UPDATED = "May 17, 2025";
var COMPANY = "Velcor.ai";
var EMAIL = "team@velcor.ai";
var SITE = "https://velcor.ai";
function TermsOfService() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#f6f1e8]",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Terms of Service",
				description: "The terms governing use of the Velcor.ai website and services.",
				path: "/terms-of-service",
				breadcrumbs: [{
					name: "Terms of Service",
					path: "/terms-of-service"
				}]
			}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-3xl px-5 py-24 md:py-32",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/50 transition hover:text-black",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 15 }), "Back to Velcor.ai"]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mb-4 inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur",
								children: "Legal"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-3 text-4xl font-semibold tracking-[-0.055em] text-black sm:text-5xl",
								children: "Terms of Service"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-3 text-sm text-black/45",
								children: ["Last updated: ", LAST_UPDATED]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-10",
						children: [
							/* @__PURE__ */ jsxs(Section, {
								title: "1. Acceptance of Terms",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"By accessing or using the website at",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: SITE,
										children: SITE
									}),
									" or engaging any services provided by ",
									COMPANY,
									" (\"we\", \"our\", \"us\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree, do not use our services."
								] }), /* @__PURE__ */ jsx("p", { children: "We reserve the right to modify these Terms at any time. Continued use of our services after modifications constitutes acceptance of the revised Terms." })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "2. Description of Services",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [COMPANY, " provides go-to-market systems for B2B technology companies, including but not limited to:"] }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsx("li", { children: "Signal-based outbound campaign strategy and execution." }),
										/* @__PURE__ */ jsx("li", { children: "AI-assisted RevOps automation and CRM workflow setup." }),
										/* @__PURE__ */ jsx("li", { children: "Account-Based Marketing (ABM) systems." }),
										/* @__PURE__ */ jsx("li", { children: "Content and demand generation programmes." }),
										/* @__PURE__ */ jsx("li", { children: "Pipeline infrastructure design and implementation." })
									] }),
									/* @__PURE__ */ jsx("p", { children: "The specific scope of services for each client is defined in a separate Statement of Work or Service Agreement." })
								]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "3. Eligibility",
								children: [/* @__PURE__ */ jsx("p", { children: "Our services are intended for businesses and professionals. By using our services, you represent that:" }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsx("li", { children: "You are at least 18 years of age." }),
									/* @__PURE__ */ jsx("li", { children: "You have the legal authority to bind the company or entity on whose behalf you are acting." }),
									/* @__PURE__ */ jsx("li", { children: "Your use of our services does not violate any applicable law or regulation." })
								] })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "4. Client Responsibilities",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"As a client or user of ",
									COMPANY,
									"'s services, you agree to:"
								] }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsx("li", { children: "Provide accurate, complete, and up-to-date information required for service delivery." }),
									/* @__PURE__ */ jsx("li", { children: "Ensure that any contact lists or data you supply comply with applicable privacy and anti-spam laws (including CAN-SPAM, GDPR, CASL, and similar regulations)." }),
									/* @__PURE__ */ jsx("li", { children: "Not use our services to engage in unlawful, deceptive, or harmful outreach." }),
									/* @__PURE__ */ jsx("li", { children: "Promptly respond to communications required for project progress." }),
									/* @__PURE__ */ jsx("li", { children: "Make timely payments as agreed in your Service Agreement." })
								] })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "5. Payments and Refunds",
								children: [/* @__PURE__ */ jsx("p", { children: "All fees are outlined in the applicable Service Agreement or invoice. Unless otherwise stated:" }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsx("li", { children: "Payments are due on the dates specified in your agreement." }),
									/* @__PURE__ */ jsx("li", { children: "All fees are non-refundable except as required by applicable law or as explicitly stated in a separate Refund Policy." }),
									/* @__PURE__ */ jsx("li", { children: "Late payments may incur interest at the rate of 1.5% per month or the maximum permitted by law, whichever is lower." }),
									/* @__PURE__ */ jsx("li", { children: "We reserve the right to suspend services for overdue accounts." })
								] })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "6. Intellectual Property",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"All content, methodologies, frameworks, templates, and materials created or owned by",
									COMPANY,
									" remain our exclusive intellectual property. Upon full payment, we grant you a limited, non-exclusive, non-transferable licence to use deliverables for your internal business purposes."
								] }), /* @__PURE__ */ jsxs("p", { children: [
									"You retain ownership of your own brand assets, content, and data. By providing materials to us, you grant ",
									COMPANY,
									" a limited licence to use them solely for service delivery."
								] })]
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "7. Confidentiality",
								children: /* @__PURE__ */ jsx("p", { children: "Each party agrees to keep the other party's confidential information strictly confidential and not to disclose it to any third party without prior written consent, except as required by law. This obligation survives termination of any service agreement." })
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "8. Disclaimer of Warranties",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"Our services are provided on an \"as is\" and \"as available\" basis. ",
										COMPANY,
										" makes no warranties, express or implied, including but not limited to:"
									] }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsx("li", { children: "Guarantees of specific revenue, pipeline, or meeting outcomes." }),
										/* @__PURE__ */ jsx("li", { children: "Warranties of merchantability or fitness for a particular purpose." }),
										/* @__PURE__ */ jsx("li", { children: "Uninterrupted or error-free operation of any system or tool." })
									] }),
									/* @__PURE__ */ jsx("p", { children: "Outbound performance depends on market conditions, your offer, and factors outside our control. We commit to professional execution of agreed deliverables, not specific results." })
								]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "9. Limitation of Liability",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"To the fullest extent permitted by law, ",
									COMPANY,
									" shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, including but not limited to loss of revenue, loss of data, or loss of business opportunities."
								] }), /* @__PURE__ */ jsxs("p", { children: [
									"In no event shall our total liability to you exceed the total fees paid by you to",
									" ",
									COMPANY,
									" in the three (3) months preceding the claim."
								] })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "10. Termination",
								children: [/* @__PURE__ */ jsx("p", { children: "Either party may terminate a service engagement in accordance with the terms of the applicable Service Agreement. We reserve the right to immediately terminate or suspend access to our services if you breach these Terms or engage in conduct we deem harmful, unlawful, or disruptive." }), /* @__PURE__ */ jsx("p", { children: "Upon termination, all outstanding fees become immediately due, and any licences granted to you will cease." })]
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "11. Governing Law",
								children: /* @__PURE__ */ jsxs("p", { children: [
									"These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ",
									COMPANY,
									" is registered, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction."
								] })
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "12. Entire Agreement",
								children: /* @__PURE__ */ jsxs("p", { children: [
									"These Terms, together with any applicable Service Agreement, constitute the entire agreement between you and ",
									COMPANY,
									" with respect to the subject matter herein, and supersede all prior agreements, representations, or understandings."
								] })
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "13. Contact Us",
								children: [/* @__PURE__ */ jsx("p", { children: "For any questions regarding these Terms of Service, please contact:" }), /* @__PURE__ */ jsxs("div", {
									className: "mt-4 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-semibold text-black",
											children: COMPANY
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-sm text-black/60",
											children: [
												"Email:",
												" ",
												/* @__PURE__ */ jsx("a", {
													href: `mailto:${EMAIL}`,
													children: EMAIL
												})
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-sm text-black/60",
											children: [
												"Website:",
												" ",
												/* @__PURE__ */ jsx("a", {
													href: SITE,
													children: SITE
												})
											]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-16 flex flex-wrap gap-4 border-t border-black/10 pt-8 text-sm text-black/45",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/privacy-policy",
								className: "hover:text-black transition",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/terms-of-service",
								className: "hover:text-black transition",
								children: "Terms of Service"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "hover:text-black transition",
								children: "← Back to Home"
							})
						]
					})
				]
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-black/10 bg-white/50 p-7 backdrop-blur",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-lg font-semibold tracking-tight text-black",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-3 text-sm leading-7 text-black/65 [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-black/80",
			children
		})]
	});
}
//#endregion
export { TermsOfService as default };
