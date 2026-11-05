import { n as Seo } from "./Seo-CqIJsAmM.js";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/PrivacyPolicy.jsx
var LAST_UPDATED = "May 17, 2025";
var COMPANY = "Velcor.ai";
var EMAIL = "team@velcor.ai";
var SITE = "https://velcor.ai";
function PrivacyPolicy() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#f6f1e8]",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Privacy Policy",
				description: "How Velcor.ai collects, uses and protects your information.",
				path: "/privacy-policy",
				breadcrumbs: [{
					name: "Privacy Policy",
					path: "/privacy-policy"
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
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-3 text-sm text-black/45",
								children: ["Last updated: ", LAST_UPDATED]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "prose-velcor space-y-10",
						children: [
							/* @__PURE__ */ jsxs(Section, {
								title: "1. Introduction",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"Welcome to ",
									COMPANY,
									" (\"",
									COMPANY,
									"\", \"we\", \"our\", or \"us\"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: SITE,
										className: "text-blue-600 underline underline-offset-2",
										children: SITE
									}),
									" or engage with our services."
								] }), /* @__PURE__ */ jsx("p", { children: "Please read this policy carefully. If you disagree with its terms, please discontinue use of our site." })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "2. Information We Collect",
								children: [
									/* @__PURE__ */ jsx("p", { children: "We collect information you provide directly to us, including:" }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Contact information" }), " — name, email address, company name, job title, and phone number when you fill out a form or book a call."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Communication data" }), " — messages, emails, and any other content you send us."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Payment information" }), " — billing details processed securely through our payment processors. We do not store raw card data."] })
									] }),
									/* @__PURE__ */ jsx("p", { children: "We also collect certain information automatically when you visit our website:" }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsx("li", { children: "IP address, browser type, operating system, and referring URLs." }),
										/* @__PURE__ */ jsx("li", { children: "Pages viewed, time spent on pages, and links clicked." }),
										/* @__PURE__ */ jsx("li", { children: "Cookies and similar tracking technologies (see Section 7)." })
									] })
								]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "3. How We Use Your Information",
								children: [/* @__PURE__ */ jsx("p", { children: "We use the information we collect to:" }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsx("li", { children: "Provide, operate, and maintain our services." }),
									/* @__PURE__ */ jsx("li", { children: "Respond to your inquiries and fulfil service requests." }),
									/* @__PURE__ */ jsx("li", { children: "Send administrative and transactional communications." }),
									/* @__PURE__ */ jsx("li", { children: "Send marketing and promotional materials — you may opt out at any time." }),
									/* @__PURE__ */ jsx("li", { children: "Analyse usage trends to improve our website and services." }),
									/* @__PURE__ */ jsx("li", { children: "Comply with legal obligations and enforce our agreements." }),
									/* @__PURE__ */ jsx("li", { children: "Protect against fraud and unauthorised access." })
								] })]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "4. Sharing of Your Information",
								children: [/* @__PURE__ */ jsx("p", { children: "We do not sell, trade, or rent your personal information to third parties. We may share your information with:" }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Service providers" }), " — third-party vendors who assist us in operating our website and delivering services (e.g. CRM platforms, email infrastructure, analytics tools). They are contractually bound to protect your data."] }),
									/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Business transfers" }), " — in connection with any merger, acquisition, or sale of assets, your information may be transferred."] }),
									/* @__PURE__ */ jsxs("li", { children: [
										/* @__PURE__ */ jsx("strong", { children: "Legal requirements" }),
										" — if required by law or to protect the rights, property, or safety of ",
										COMPANY,
										", our clients, or others."
									] })
								] })]
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "5. Data Retention",
								children: /* @__PURE__ */ jsx("p", { children: "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymise it." })
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "6. Your Rights",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Depending on your location, you may have the right to:" }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsx("li", { children: "Access the personal data we hold about you." }),
										/* @__PURE__ */ jsx("li", { children: "Request correction of inaccurate or incomplete data." }),
										/* @__PURE__ */ jsx("li", { children: "Request deletion of your personal data (\"right to be forgotten\")." }),
										/* @__PURE__ */ jsx("li", { children: "Object to or restrict our processing of your data." }),
										/* @__PURE__ */ jsx("li", { children: "Request portability of your data in a structured, machine-readable format." }),
										/* @__PURE__ */ jsx("li", { children: "Withdraw consent at any time where processing is based on consent." })
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"To exercise any of these rights, contact us at",
										" ",
										/* @__PURE__ */ jsx("a", {
											href: `mailto:${EMAIL}`,
											className: "text-blue-600 underline underline-offset-2",
											children: EMAIL
										}),
										". We will respond within 30 days."
									] })
								]
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "7. Cookies",
								children: [
									/* @__PURE__ */ jsx("p", { children: "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files placed on your device. We use:" }),
									/* @__PURE__ */ jsxs("ul", { children: [
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Essential cookies" }), " — required for the site to function."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Analytics cookies" }), " — help us understand how visitors interact with our site (e.g. Google Analytics)."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Marketing cookies" }), " — used to deliver relevant advertisements and track campaign performance."] })
									] }),
									/* @__PURE__ */ jsx("p", { children: "You can control cookies through your browser settings. Disabling certain cookies may affect site functionality." })
								]
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "8. Third-Party Links",
								children: /* @__PURE__ */ jsx("p", { children: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information." })
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "9. Data Security",
								children: /* @__PURE__ */ jsx("p", { children: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security." })
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "10. Children's Privacy",
								children: /* @__PURE__ */ jsx("p", { children: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal information, we will promptly delete it." })
							}),
							/* @__PURE__ */ jsx(Section, {
								title: "11. Changes to This Policy",
								children: /* @__PURE__ */ jsx("p", { children: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the \"Last updated\" date at the top of this page. Your continued use of our services after changes are posted constitutes acceptance of the updated policy." })
							}),
							/* @__PURE__ */ jsxs(Section, {
								title: "12. Contact Us",
								children: [/* @__PURE__ */ jsx("p", { children: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:" }), /* @__PURE__ */ jsxs("div", {
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
													className: "text-blue-600 underline underline-offset-2",
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
													className: "text-blue-600 underline underline-offset-2",
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
export { PrivacyPolicy as default };
