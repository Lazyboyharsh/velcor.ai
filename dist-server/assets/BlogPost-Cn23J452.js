import { n as Navbar, t as Footer } from "./Footer-BHAvBMRL.js";
import { n as Seo } from "./Seo-CqIJsAmM.js";
import { t as blogPosts } from "./blogData-BccsiFQN.js";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/BlogPost.jsx
var MONTHS = {
	january: "01",
	february: "02",
	march: "03",
	april: "04",
	may: "05",
	june: "06",
	july: "07",
	august: "08",
	september: "09",
	october: "10",
	november: "11",
	december: "12"
};
function toIsoDate(dateStr) {
	if (!dateStr) return void 0;
	const parts = String(dateStr).trim().toLowerCase().split(/\s+/);
	const month = parts.find((p) => MONTHS[p]);
	const year = parts.find((p) => /^\d{4}$/.test(p));
	if (year && month) return `${year}-${MONTHS[month]}-01`;
	if (year) return `${year}-01-01`;
}
function BlogPost() {
	const { slug } = useParams();
	const [progress, setProgress] = useState(0);
	const post = blogPosts.find((p) => p.slug === slug);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);
	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progressValue = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
			setProgress(progressValue);
		};
		window.addEventListener("scroll", updateProgress);
		return () => window.removeEventListener("scroll", updateProgress);
	}, []);
	const relatedPosts = useMemo(() => {
		return blogPosts.filter((item) => item.slug !== slug && item.category === post?.category).slice(0, 3);
	}, [slug, post]);
	if (!post) return /* @__PURE__ */ jsx(Navigate, {
		to: "/blog",
		replace: true
	});
	const sections = post.content.split("\n").filter((line) => line.startsWith("##")).map((line) => line.replace("##", "").trim());
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-[#f6f1e8] text-black",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: post.title,
				description: post.excerpt,
				path: `/blog/${post.slug}`,
				image: post.thumbnail,
				type: "article",
				article: {
					publishedTime: toIsoDate(post.date),
					section: post.category
				},
				breadcrumbs: [{
					name: "Blog",
					path: "/blog"
				}, {
					name: post.title,
					path: `/blog/${post.slug}`
				}]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "fixed left-0 top-0 z-[9999] h-[3px] w-full bg-black/5",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full bg-black transition-all duration-150",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden border-b border-black/10 pt-40 pb-20",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-5xl px-6",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-black",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 14 }), "Back to Blog"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/70",
								children: post.category
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-8 text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl",
								children: post.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 max-w-3xl text-lg leading-8 text-black/60",
								children: post.excerpt
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-6 text-sm text-black/45",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Clock, { size: 14 }), post.readTime]
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Calendar, { size: 14 }), post.date]
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-6 py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-16 lg:grid-cols-[260px_1fr]",
					children: [/* @__PURE__ */ jsx("aside", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ jsxs("div", {
							className: "sticky top-28 rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl shadow-black/5 backdrop-blur-xl",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-black/40",
								children: "Contents"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-6 flex flex-col gap-4",
								children: sections.map((section) => /* @__PURE__ */ jsx("a", {
									href: `#${section.toLowerCase().replace(/\s+/g, "-")}`,
									className: "text-sm text-black/55 transition hover:text-black",
									children: section
								}, section))
							})]
						})
					}), /* @__PURE__ */ jsxs("article", {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur-xl md:p-12",
								children: /* @__PURE__ */ jsx("div", {
									className: "max-w-none",
									children: post.content.split("\n").map((line, index) => {
										if (line.startsWith("# ")) return /* @__PURE__ */ jsx("h1", {
											className: "mb-8 mt-12 text-4xl font-semibold tracking-tight text-black",
											children: line.replace("# ", "")
										}, index);
										if (line.startsWith("## ")) {
											const heading = line.replace("## ", "");
											return /* @__PURE__ */ jsx("h2", {
												id: heading.toLowerCase().replace(/\s+/g, "-"),
												className: "mt-14 mb-5 text-3xl font-semibold text-black",
												children: heading
											}, index);
										}
										if (line.startsWith("### ")) return /* @__PURE__ */ jsx("h3", {
											className: "mt-10 mb-4 text-xl font-semibold text-black",
											children: line.replace("### ", "")
										}, index);
										if (line.startsWith("- ")) return /* @__PURE__ */ jsx("li", {
											className: "ml-5 text-lg leading-8 text-black/70",
											children: line.replace("- ", "")
										}, index);
										if (!line.trim()) return /* @__PURE__ */ jsx("br", {}, index);
										return /* @__PURE__ */ jsx("p", {
											className: "mb-6 text-lg leading-9 text-black/70",
											children: line
										}, index);
									})
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-16 rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20",
								children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-3xl font-semibold tracking-tight md:text-4xl",
										children: ["Build Revenue Infrastructure", /* @__PURE__ */ jsx("span", {
											className: "mt-2 block font-serif italic font-normal text-blue-400",
											children: "that compounds"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-5 max-w-2xl text-lg leading-8 text-white/65",
										children: "If proprietary deal flow is a strategic priority for your firm, let's discuss the systems required to support it."
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/schedule-meeting",
										className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-400",
										children: ["Book Strategy Call", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
									})
								]
							}),
							relatedPosts.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "mt-20",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-semibold tracking-tight text-black",
									children: "Related Articles"
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-8 grid gap-6 md:grid-cols-3",
									children: relatedPosts.map((article) => /* @__PURE__ */ jsxs(Link, {
										to: `/blog/${article.slug}`,
										className: "group rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:bg-white",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-xs font-semibold uppercase tracking-[0.15em] text-blue-500",
												children: article.category
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "mt-4 text-lg font-semibold text-black",
												children: article.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-3 text-sm leading-7 text-black/60",
												children: article.excerpt
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-500",
												children: ["Read Article", /* @__PURE__ */ jsx(ArrowRight, {
													size: 14,
													className: "transition group-hover:translate-x-1"
												})]
											})
										]
									}, article.slug))
								})]
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
export { BlogPost as default };
