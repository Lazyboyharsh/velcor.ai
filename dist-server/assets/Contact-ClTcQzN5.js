import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, CircleAlert, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/Contact.jsx
var WEB3FORMS_ACCESS_KEY = "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";
var INITIAL_FORM_DATA = {
	name: "",
	email: "",
	website: "",
	service: "",
	message: ""
};
function Contact() {
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({
		type: "",
		message: ""
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((current) => ({
			...current,
			[name]: value
		}));
		if (status.message) setStatus({
			type: "",
			message: ""
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);
		setStatus({
			type: "",
			message: ""
		});
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: "New Contact Enquiry - " + formData.name + " - Velcor.ai",
					from_name: "Velcor.ai Website",
					name: formData.name,
					email: formData.email,
					website: formData.website || "Not provided",
					service: formData.service,
					message: formData.message,
					source: "Velcor.ai Contact Page"
				})
			});
			const data = await response.json();
			if (!response.ok || !data.success) throw new Error(data.message || "Unable to submit enquiry.");
			setStatus({
				type: "success",
				message: "Enquiry submitted successfully. Velcor.ai will contact you within 24 hours."
			});
			setFormData(INITIAL_FORM_DATA);
		} catch (error) {
			setStatus({
				type: "error",
				message: error.message || "Unable to submit enquiry. Please try again."
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Contact",
				description: "Talk to Velcor.ai about your pipeline, outbound and revenue infrastructure. Share your offer and ICP and we'll map a pilot system for your growth.",
				path: "/contact",
				breadcrumbs: [{
					name: "Contact",
					path: "/contact"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 pb-24 pt-40",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
							children: "Contact"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-5xl font-semibold tracking-[-0.06em] md:text-7xl",
							children: ["Let's build your", /* @__PURE__ */ jsx("span", {
								className: "block font-serif font-normal italic",
								children: "GTM system"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-xl text-lg leading-8 text-black/60",
							children: "Share your offer, ICP and current sales workflow. We'll map a pilot campaign and automation system for your pipeline."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 space-y-5",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "mailto:team@velcor.ai",
									className: "flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white",
										children: /* @__PURE__ */ jsx(Mail, { size: 18 })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs uppercase tracking-wide text-black/45",
										children: "Email"
									}), /* @__PURE__ */ jsx("p", {
										className: "font-medium",
										children: "team@velcor.ai"
									})] })]
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/schedule-meeting",
									className: "flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white",
										children: /* @__PURE__ */ jsx(Phone, { size: 18 })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs uppercase tracking-wide text-black/45",
										children: "Strategy Call"
									}), /* @__PURE__ */ jsx("p", {
										className: "font-medium",
										children: "Book a free consultation"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white",
										children: /* @__PURE__ */ jsx(MapPin, { size: 18 })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs uppercase tracking-wide text-black/45",
										children: "Location"
									}), /* @__PURE__ */ jsx("p", {
										className: "font-medium",
										children: "Delaware, United States"
									})] })]
								})
							]
						})
					] }), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-2xl shadow-black/10 backdrop-blur md:p-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ jsx("input", {
									type: "text",
									name: "name",
									required: true,
									autoComplete: "name",
									value: formData.name,
									onChange: handleChange,
									placeholder: "Full name",
									className: "min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									name: "email",
									required: true,
									autoComplete: "email",
									value: formData.email,
									onChange: handleChange,
									placeholder: "Work email",
									className: "min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
								})]
							}),
							/* @__PURE__ */ jsx("input", {
								type: "url",
								name: "website",
								value: formData.website,
								onChange: handleChange,
								placeholder: "Company website",
								className: "mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
							}),
							/* @__PURE__ */ jsxs("select", {
								name: "service",
								required: true,
								value: formData.service,
								onChange: handleChange,
								className: "mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200",
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "",
										children: "What do you need help with?"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "Outbound lead generation",
										children: "Outbound lead generation"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "CRM automation",
										children: "CRM automation"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "AI sales workflows",
										children: "AI sales workflows"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "Full GTM system",
										children: "Full GTM system"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "AI Automation",
										children: "AI Automation"
									})
								]
							}),
							/* @__PURE__ */ jsx("textarea", {
								rows: 6,
								name: "message",
								required: true,
								value: formData.message,
								onChange: handleChange,
								placeholder: "Tell us about your offer, ICP and current sales process...",
								className: "mt-4 w-full resize-y rounded-xl border border-black/10 bg-white p-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
							}),
							status.message && /* @__PURE__ */ jsxs("div", {
								role: "status",
								className: "mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm " + (status.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"),
								children: [status.type === "success" ? /* @__PURE__ */ jsx(CheckCircle2, {
									size: 18,
									className: "mt-0.5 shrink-0"
								}) : /* @__PURE__ */ jsx(CircleAlert, {
									size: 18,
									className: "mt-0.5 shrink-0"
								}), /* @__PURE__ */ jsx("span", { children: status.message })]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: loading,
								className: "mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70",
								children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, {
									size: 18,
									className: "animate-spin"
								}), "Sending..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
									"Submit enquiry",
									/* @__PURE__ */ jsx(ArrowRight, { size: 15 })
								] })
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-center text-xs text-black/45",
								children: "We usually respond within 24 hours."
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
export { Contact as default };
