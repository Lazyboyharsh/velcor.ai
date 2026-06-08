import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { blogPosts } from "../data/blogData";

import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  const [progress, setProgress] = useState(0);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progressValue =
        docHeight > 0
          ? (scrollTop / docHeight) * 100
          : 0;

      setProgress(progressValue);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  const relatedPosts = useMemo(() => {
    return blogPosts
      .filter(
        (item) =>
          item.slug !== slug &&
          item.category === post?.category
      )
      .slice(0, 3);
  }, [slug, post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const sections = post.content
    .split("\n")
    .filter((line) => line.startsWith("##"))
    .map((line) =>
      line.replace("##", "").trim()
    );

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      {/* Reading Progress */}
      <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-black/5">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-black/10 pt-40 pb-20">
        <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-black"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
              {post.category}
            </span>

            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
              {post.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-black/45">
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>

              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[260px_1fr]">
          {/* TOC */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl shadow-black/5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                Contents
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-sm text-black/55 transition hover:text-black"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* ARTICLE */}

          <article className="max-w-4xl">
            <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur-xl md:p-12">
              <div className="max-w-none">
                {post.content
                  .split("\n")
                  .map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1
                          key={index}
                          className="mb-8 mt-12 text-4xl font-semibold tracking-tight text-black"
                        >
                          {line.replace(
                            "# ",
                            ""
                          )}
                        </h1>
                      );
                    }

                    if (line.startsWith("## ")) {
                      const heading =
                        line.replace(
                          "## ",
                          ""
                        );

                      return (
                        <h2
                          key={index}
                          id={heading
                            .toLowerCase()
                            .replace(
                              /\s+/g,
                              "-"
                            )}
                          className="mt-14 mb-5 text-3xl font-semibold text-black"
                        >
                          {heading}
                        </h2>
                      );
                    }

                    if (line.startsWith("### ")) {
                      return (
                        <h3
                          key={index}
                          className="mt-10 mb-4 text-xl font-semibold text-black"
                        >
                          {line.replace(
                            "### ",
                            ""
                          )}
                        </h3>
                      );
                    }

                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={index}
                          className="ml-5 text-lg leading-8 text-black/70"
                        >
                          {line.replace(
                            "- ",
                            ""
                          )}
                        </li>
                      );
                    }

                    if (!line.trim()) {
                      return (
                        <br key={index} />
                      );
                    }

                    return (
                      <p
                        key={index}
                        className="mb-6 text-lg leading-9 text-black/70"
                      >
                        {line}
                      </p>
                    );
                  })}
              </div>
            </div>
                        {/* CTA */}

            <div className="mt-16 rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20">
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Build Revenue Infrastructure
                <span className="mt-2 block font-serif italic font-normal text-blue-400">
                  that compounds
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                If proprietary deal flow is a strategic priority
                for your firm, let's discuss the systems required
                to support it.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-400"
              >
                Book Strategy Call
                <ArrowRight size={14} />
              </a>
            </div>

            {/* RELATED ARTICLES */}

            {relatedPosts.length > 0 && (
              <div className="mt-20">
                <h3 className="text-3xl font-semibold tracking-tight text-black">
                  Related Articles
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="group rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-500">
                        {article.category}
                      </span>

                      <h4 className="mt-4 text-lg font-semibold text-black">
                        {article.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-black/60">
                        {article.excerpt}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-500">
                        Read Article
                        <ArrowRight
                          size={14}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
  );
}