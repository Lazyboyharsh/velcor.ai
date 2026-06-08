import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  const posts = blogPosts;

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <style>{`
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
          box-shadow: 0 24px 48px rgba(0,0,0,.10);
        }
      `}</style>

      {/* HERO */}

      <section className="relative overflow-hidden px-5 pt-44 pb-24 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="absolute left-1/2 top-32 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="fade-up mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Revenue Infrastructure Insights
          </p>

          <h1 className="fade-delay-1 text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Revenue infrastructure
            <span className="block font-serif italic font-normal">
              for operators, investors & acquirers
            </span>
          </h1>

          <p className="fade-delay-2 mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Insights on proprietary deal flow, acquisition infrastructure,
            founder relationships, AI-powered sourcing, and lower
            middle-market growth systems.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
            {/* POST GRID */}

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="post-card group overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-xl shadow-black/5"
            >
              <div className="relative h-52 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#000000_100%)] opacity-95" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(96,165,250,0.15)_0%,transparent_60%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="absolute bottom-5 left-5">
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {post.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-blue-500">
                    {post.tag}
                  </span>

                  <span className="text-xs text-black/40">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight tracking-tight text-black">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-black/45">
                    <Clock size={11} />
                    {post.readTime}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Read
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-black p-12 text-center text-white shadow-2xl shadow-black/20 md:p-16">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Build Revenue Infrastructure
            <span className="block font-serif italic font-normal text-blue-400">
              that compounds
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            If proprietary deal flow is a strategic priority for your firm,
            let's discuss the infrastructure required to support it.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
            >
              Book Strategy Call
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}