import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "signal-based-outbound",
    tag: "Outbound",
    title: "How Signal-Based Outbound Generates 3x More Qualified Meetings",
    excerpt:
      "Most cold email fails because it's not timed right. Learn how buying signals — job changes, funding rounds, tech installs — unlock radically better reply rates.",
    readTime: "7 min read",
    date: "Apr 14, 2026",
    featured: true,
  },
  {
    slug: "crm-automation-mistakes",
    tag: "RevOps",
    title: "5 CRM Automation Mistakes That Kill Your Pipeline Velocity",
    excerpt:
      "Messy CRM data costs your team hours per week. Here are the most common automation errors and how to fix them without a 3-month overhaul.",
    readTime: "5 min read",
    date: "Apr 7, 2026",
    featured: false,
  },
  {
    slug: "ai-gtm-workflow",
    tag: "AI Workflows",
    title: "Building an AI-Powered GTM Workflow from Scratch",
    excerpt:
      "A step-by-step breakdown of how to wire together prospecting, enrichment, personalization, and CRM routing using AI — without needing an engineer.",
    readTime: "10 min read",
    date: "Mar 28, 2026",
    featured: false,
  },
  {
    slug: "linkedin-outbound-system",
    tag: "Outbound",
    title: "LinkedIn Outbound That Doesn't Feel Spammy: A System Walkthrough",
    excerpt:
      "Generic connection requests are ignored. This is how to build a LinkedIn outbound workflow that leads with value, earns replies, and scales.",
    readTime: "6 min read",
    date: "Mar 20, 2026",
    featured: false,
  },
  {
    slug: "revops-for-early-stage",
    tag: "RevOps",
    title: "RevOps for Early-Stage SaaS: What to Build First",
    excerpt:
      "You don't need a massive ops team. You need the right systems in the right order. Here's the RevOps stack that works for teams under 20 AEs.",
    readTime: "8 min read",
    date: "Mar 12, 2026",
    featured: false,
  },
  {
    slug: "content-to-pipeline",
    tag: "Content",
    title: "Turning LinkedIn Content Into a Predictable Pipeline Engine",
    excerpt:
      "Content without follow-through is just noise. Here's how to connect your LinkedIn posts to warm lead identification and outbound triggers.",
    readTime: "6 min read",
    date: "Mar 5, 2026",
    featured: false,
  },
];

const tagColors = {
  Outbound: "bg-blue-100 text-blue-700",
  RevOps: "bg-blue-50 text-blue-600",
  "AI Workflows": "bg-blue-200 text-blue-800",
  Content: "bg-blue-50 text-blue-600",
};

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-delay-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .fade-delay-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .post-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .post-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.10); }
      `}</style>

      {/* Header */}
      <section className="relative overflow-hidden px-5 pt-44 pb-20 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-1/2 top-32 -translate-x-1/2 h-[360px] w-[600px] rounded-full bg-blue-200/25 blur-[90px] opacity-60" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="fade-up mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Velcor.ai Blog
          </p>
          <h1 className="fade-delay-1 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            GTM insights for
            <span className="block font-serif italic font-normal">modern B2B teams</span>
          </h1>
          <p className="fade-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Outbound systems, RevOps automation, AI workflows, and pipeline thinking — written
            by practitioners.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-7xl">
            <Link
              to={`/blog/${featured.slug}`}
              className="post-card group block overflow-hidden rounded-[2rem] border border-black/10 bg-white/65 shadow-xl shadow-black/5 lg:grid lg:grid-cols-2"
            >
              <div className="relative h-72 overflow-hidden bg-black lg:h-auto">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#1d4ed8_0%,#1e3a8a_50%,#0f172a_100%)] opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(96,165,250,0.3)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tagColors[featured.tag]}`}
                  >
                    {featured.tag}
                  </span>
                  <p className="mt-3 text-3xl font-semibold text-white leading-tight">
                    {featured.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="rounded-full bg-blue-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Featured
                  </span>
                  <p className="mt-5 text-lg leading-8 text-black/65">{featured.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                  <div className="flex items-center gap-4 text-xs text-black/45">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Read article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="post-card group overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-xl shadow-black/5"
            >
              <div className="relative h-48 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#1d4ed8_0%,#0f172a_100%)] opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(96,165,250,0.2)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute bottom-5 left-5">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tagColors[post.tag]}`}
                  >
                    {post.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold leading-tight tracking-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  <div className="flex items-center gap-3 text-xs text-black/40">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-blue-500 transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-black/10 bg-white/40 px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            GTM insights, straight
            <span className="block font-serif italic font-normal">to your inbox</span>
          </h2>
          <p className="mt-4 text-base text-black/55">
            No fluff. Just actionable outbound, RevOps, and AI workflow breakdowns every two
            weeks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="your@company.com"
              className="min-h-12 w-full rounded-xl border border-black/10 bg-white px-5 text-sm outline-none sm:w-72"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
