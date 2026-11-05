import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/NotFound.jsx
function NotFound() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Page not found",
				description: "The page you're looking for doesn't exist or has moved.",
				path: "/404",
				noindex: true
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-delay-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .fade-delay-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .float-anim { animation: float 4s ease-in-out infinite; }
      ` }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 text-center",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }),
					/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-200/20 blur-[120px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 max-w-2xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "float-anim mx-auto mb-8 inline-flex h-32 w-32 items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 shadow-2xl shadow-black/10 backdrop-blur",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-5xl font-bold tracking-tighter text-blue-500",
									children: "404"
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "fade-up mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
								children: "Page not found"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "fade-delay-1 text-4xl font-semibold tracking-[-0.05em] md:text-6xl",
								children: ["This page doesn't exist", /* @__PURE__ */ jsx("span", {
									className: "block font-serif italic font-normal text-black/50",
									children: "but your pipeline can"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "fade-delay-2 mx-auto mt-6 max-w-md text-base leading-7 text-black/55",
								children: "The page you're looking for has moved or never existed. Head back home or explore what Velcor.ai can build for you."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/",
									className: "inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500",
									children: [/* @__PURE__ */ jsx(Home, { size: 15 }), " Back to Home"]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white",
									children: ["Book a Call ", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { NotFound as default };
