import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { t as blogPosts } from "./blogData-BccsiFQN.js";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/Blog.jsx
var FALLBACK_THUMBNAIL = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=75";
function Blog() {
	const posts = blogPosts;
	const featured = posts.find((post) => post.featured);
	const rest = posts.filter((post) => !post.featured);
	const handleImageError = (event) => {
		event.currentTarget.onerror = null;
		event.currentTarget.src = FALLBACK_THUMBNAIL;
	};
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Blog",
				description: "Insights on AI revenue infrastructure, outbound, RevOps, deal flow and go-to-market strategy from the Velcor.ai team.",
				path: "/blog",
				breadcrumbs: [{
					name: "Blog",
					path: "/blog"
				}]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("style", { children: `
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp 0.7s ease forwards;
          }

          .fade-delay-1 {
            animation: fadeUp 0.7s 0.1s ease forwards;
            opacity: 0;
          }

          .fade-delay-2 {
            animation: fadeUp 0.7s 0.2s ease forwards;
            opacity: 0;
          }

          .post-card {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .post-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1);
          }
        ` }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden px-5 pb-24 pt-44 text-center",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }),
					/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-32 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[90px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 mx-auto max-w-5xl",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "fade-up mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55",
								children: "Revenue Infrastructure Insights"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "fade-delay-1 text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl",
								children: ["Revenue infrastructure", /* @__PURE__ */ jsx("span", {
									className: "block font-serif font-normal italic",
									children: "for operators, investors & acquirers"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "fade-delay-2 mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60",
								children: "Insights on proprietary deal flow, acquisition infrastructure, founder relationships, AI-powered sourcing, and lower middle-market growth systems."
							})
						]
					})
				]
			}),
			featured && /* @__PURE__ */ jsx("section", {
				className: "px-5 pb-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl",
					children: /* @__PURE__ */ jsxs(Link, {
						to: `/blog/${featured.slug}`,
						className: "post-card group grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-xl shadow-black/5 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative min-h-[320px] overflow-hidden bg-black lg:min-h-[460px]",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: featured.thumbnail || FALLBACK_THUMBNAIL,
									alt: `${featured.title} - Velcor.ai`,
									loading: "eager",
									decoding: "async",
									fetchPriority: "high",
									width: "1200",
									height: "800",
									onError: handleImageError,
									className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-6 left-6",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-block rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md",
										children: "Featured"
									})
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col justify-center p-8 md:p-12",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium uppercase tracking-[0.12em] text-blue-500",
										children: featured.tag
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-black/40",
										children: featured.date
									})]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl",
									children: featured.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-base leading-8 text-black/60",
									children: featured.excerpt
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex items-center justify-between border-t border-black/10 pt-5",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-black/45",
										children: [/* @__PURE__ */ jsx(Clock, { size: 13 }), featured.readTime]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-sm font-semibold text-blue-600",
										children: ["Read article", /* @__PURE__ */ jsx(ArrowRight, {
											size: 15,
											className: "transition-transform group-hover:translate-x-1"
										})]
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 pb-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: rest.map((post) => /* @__PURE__ */ jsxs(Link, {
						to: `/blog/${post.slug}`,
						className: "post-card group overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-xl shadow-black/5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-52 overflow-hidden bg-black",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: post.thumbnail || FALLBACK_THUMBNAIL,
									alt: `${post.title} - Velcor.ai`,
									loading: "lazy",
									decoding: "async",
									width: "600",
									height: "400",
									onError: handleImageError,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-5 left-5",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-block rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md",
										children: post.tag
									})
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium uppercase tracking-[0.12em] text-blue-500",
										children: post.tag
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs text-black/40",
										children: post.date
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-semibold leading-tight tracking-tight text-black",
									children: post.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-7 text-black/60",
									children: post.excerpt
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center justify-between border-t border-black/10 pt-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-black/45",
										children: [/* @__PURE__ */ jsx(Clock, { size: 11 }), post.readTime]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-sm font-semibold text-blue-600",
										children: ["Read", /* @__PURE__ */ jsx(ArrowRight, {
											size: 14,
											className: "transition-transform group-hover:translate-x-1"
										})]
									})]
								})
							]
						})]
					}, post.slug))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-5 pb-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl rounded-[2rem] bg-black p-12 text-center text-white shadow-2xl shadow-black/20 md:p-16",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl font-semibold tracking-[-0.05em] md:text-6xl",
							children: ["Build Revenue Infrastructure", /* @__PURE__ */ jsx("span", {
								className: "block font-serif font-normal italic text-blue-400",
								children: "that compounds"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65",
							children: "If proprietary deal flow is a strategic priority for your firm, let's discuss the infrastructure required to support it."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/schedule-meeting",
								className: "inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400",
								children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Blog as default };
