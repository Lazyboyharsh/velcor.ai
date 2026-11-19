import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  BarChart3,
  Check,
  Info,
  Loader2,
  MessageSquareQuote,
  ShieldCheck,
  Star,
  Target,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

/* ================================================================== */
/*  SETTINGS                                                           */
/* ================================================================== */

const WEB3FORMS_ACCESS_KEY =
  import.meta.env?.VITE_WEB3FORMS_KEY ||
  "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";

/**
 * DEMO_MODE = true  -> shows a "sample reviews" notice and a Sample tag
 *                      on every card, so visitors are never misled.
 * DEMO_MODE = false -> use this ONLY after you have replaced every review
 *                      below with real, permitted client reviews.
 */
const DEMO_MODE = true;

const MIN_FILL_TIME_MS = 4000;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "throwawaymail.com",
  "maildrop.cc",
  "dispostable.com",
  "fakeinbox.com",
  "mohmal.com",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ================================================================== */
/*  REVIEWS: EDIT HERE                                                 */
/*  When a real review arrives in your inbox, add it to TESTIMONIALS.   */
/*  Then update the three column lists under it (3 reviews each).      */
/* ================================================================== */

const TESTIMONIALS = [
  {
    name: "James Anderson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Founder, SaaS",
    rating: 5,
    text: "Velcor didn't just run campaigns, they built a full pipeline system. We finally have consistency in our outreach.",
  },
  {
    name: "Sophie Martin",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Head of Growth, SaaS",
    rating: 5,
    text: "CRM automation alone saved our team hours every week. Follow-ups are no longer broken, and leads never slip through.",
  },
  {
    name: "Lars Hoffmann",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    role: "Revenue Lead, AI Automation",
    rating: 5,
    text: "We went from random outreach to a structured GTM engine. Results feel predictable now for the first time.",
  },
  {
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "VP Sales, B2B",
    rating: 5,
    text: "The signal-based outbound strategy surfaced accounts we'd never have found manually. Pipeline quality is night and day.",
  },
  {
    name: "Thomas Dubois",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    role: "CEO, B2B SaaS",
    rating: 5,
    text: "Onboarding was fast and the team took full ownership. Within 6 weeks we had warm replies coming in consistently.",
  },
  {
    name: "Isabella Rossi",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    role: "Operations Director, M&A",
    rating: 5,
    text: "Their RevOps setup connected our CRM, sequencer, and enrichment tools into one clean workflow. Game-changer.",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    role: "Growth Manager, Fintech",
    rating: 5,
    text: "We booked 18 calls in the first month of the pilot. The targeting and messaging were both razor-sharp.",
  },
  {
    name: "Charlotte Weber",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    role: "CMO, B2B SaaS",
    rating: 5,
    text: "Velcor's content system kept us top-of-mind with prospects throughout the entire buying cycle. Remarkable ROI.",
  },
  {
    name: "William Taylor",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    role: "Enterprise Account Exec",
    rating: 5,
    text: "The ABM campaigns were tailored and precise. Enterprise deals we'd stalled on for months started moving again.",
  },
];

// Split into three scrolling columns
const FIRST_COLUMN = TESTIMONIALS.slice(0, 3);
const SECOND_COLUMN = TESTIMONIALS.slice(3, 6);
const THIRD_COLUMN = TESTIMONIALS.slice(6, 9);

const PROMISES = [
  {
    icon: UserCheck,
    title: "One point of contact",
    desc: "A named person who knows your goals, your market and your deadlines.",
  },
  {
    icon: BarChart3,
    title: "Transparent reporting",
    desc: "You see what is working, what is not and what we are changing next.",
  },
  {
    icon: Workflow,
    title: "Systems, not one-offs",
    desc: "Everything we build is designed to keep producing pipeline after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    desc: "Your accounts, contacts and learnings belong to your business.",
  },
  {
    icon: Target,
    title: "Built around your ICP",
    desc: "Targeting and messaging start from who you actually want to reach.",
  },
  {
    icon: Zap,
    title: "AI plus human review",
    desc: "Automation for the volume, people for the judgment calls.",
  },
];

/* ================================================================== */
/*  Helpers                                                            */
/* ================================================================== */

const looksLikeSpamText = (text) =>
  /https?:\/\/|www\.|<|>/i.test(text);

const getEmailDomain = (email) =>
  email.split("@")[1]?.toLowerCase().trim();

/* Numbers count up when they scroll into view */
function CountUp({ to, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

/* Stars pop in one after another */
function Stars({ count = 5, size = 16, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={"flex items-center gap-0.5 " + className}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={
            reduce ? false : { scale: 0, rotate: -35, opacity: 0 }
          }
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.07,
            type: "spring",
            stiffness: 320,
            damping: 14,
          }}
          className="inline-flex"
        >
          <Star
            size={size}
            className={i < count ? "text-blue-500" : "text-black/15"}
            fill="currentColor"
          />
        </motion.span>
      ))}
    </div>
  );
}

/* Profile picture, falls back to initials if the image fails to load */
function PersonAvatar({ name, image }) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={name}
        width={44}
        height={44}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="h-11 w-11 flex-shrink-0 rounded-full object-cover shadow-md ring-2 ring-white transition duration-500 group-hover:scale-110"
      />
    );
  }

  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black font-serif text-lg italic text-blue-400 transition duration-500 group-hover:scale-110">
      {name[0]}
    </span>
  );
}

/* One testimonial card */
function TestimonialCard({ item }) {
  return (
    <figure className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-7 shadow-xl shadow-black/5 backdrop-blur transition-shadow duration-500 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="absolute inset-0 rounded-[2rem] bg-blue-400/0 blur-2xl transition duration-500 group-hover:bg-blue-400/10" />

      {/* shine sweep on hover */}
      <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div
            className="flex gap-0.5 text-blue-500"
            role="img"
            aria-label={`${item.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                fill="currentColor"
                className={i < item.rating ? "" : "text-black/15"}
              />
            ))}
          </div>
        </div>

        <blockquote className="mt-5 text-[15px] leading-7 text-black/70">
          {item.text}
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5">
          <PersonAvatar name={item.name} image={item.image} />
          <span>
            <span className="block text-sm font-semibold text-black">
              {item.name}
            </span>
            <span className="block text-xs text-black/50">{item.role}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

/* A column that scrolls upward forever */
function ScrollColumn({ items, duration = 18, className = "" }) {
  return (
    <div className={"w-[340px] max-w-full shrink-0 " + className}>
      <div
        className="vel-col flex flex-col gap-6 pb-6"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex flex-col gap-6"
          >
            {items.map((item) => (
              <TestimonialCard key={item.name + copy} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function ReviewPage() {
  const allReviews = TESTIMONIALS;
  const average = (
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  ).toFixed(1);

  /* ---------- form state ---------- */

  const formRef = useRef(null);
  const mountTime = useRef(Date.now());

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    review: "",
  });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    if (error) setError("");
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");

    // Bot checks: pretend success so bots learn nothing.
    if (honeypot || Date.now() - mountTime.current < MIN_FILL_TIME_MS) {
      setSent(true);
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const emailDomain = getEmailDomain(email);
    const review = form.review.trim();

    if (
      name.length < 2 ||
      looksLikeSpamText(name) ||
      /^[\d\W]+$/.test(name)
    ) {
      setError("Enter your real name.");
      return;
    }
    if (!EMAIL_REGEX.test(email) || !emailDomain) {
      setError("Enter a valid email address.");
      return;
    }
    if (DISPOSABLE_DOMAINS.has(emailDomain)) {
      setError(
        "Temporary email addresses aren't accepted. Use a different email."
      );
      return;
    }
    if (!rating) {
      setError("Pick a star rating.");
      return;
    }
    if (review.length < 20) {
      setError("Please write at least a couple of sentences (20+ characters).");
      return;
    }
    if (looksLikeSpamText(review) || looksLikeSpamText(form.company)) {
      setError("Please remove links from your review.");
      return;
    }
    if (!consent) {
      setError("Please confirm we can publish your review.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Review (${rating}/5) - Velcor.ai`,
          from_name: "Velcor.ai Website",
          name,
          email,
          company: form.company.trim(),
          job_title: form.role.trim(),
          rating: `${rating} / 5`,
          review,
          consent_to_publish: "yes",
          request_type: "Customer Review",
          source: "Velcor.ai Reviews Page",
          botcheck: "",
          message: `New ${rating}-star review submitted on the Velcor.ai reviews page.`,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your review.");
      }

      setSent(true);
      setForm({ name: "", email: "", company: "", role: "", review: "" });
      setRating(0);
      setConsent(false);
    } catch (err) {
      setError(
        err.message || "Unable to send your review. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-[52px] w-full min-w-0 rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15";
  const labelClass = "mb-1.5 block text-xs font-semibold text-black/80";

  /* ---------- render ---------- */

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-black">
      <Seo
        title="Client Reviews"
        description="See what clients say about working with Velcor.ai, and share your own experience with our AI-powered outbound, RevOps and content systems."
        path="/reviews"
        breadcrumbs={[{ name: "Reviews", path: "/reviews" }]}
      />
      <Navbar />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden px-5 pt-40 pb-24">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:28px_28px]" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55"
          >
            Client Reviews
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            What teams say about
            <span className="block font-serif italic font-normal">
              working with Velcor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60"
          >
            Founders and sales leaders on how connected outbound, RevOps
            and content systems changed the way they build pipeline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/schedule-meeting"
              className="inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
            >
              Book Strategy Call <ArrowRight size={15} />
            </a>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-8 py-4 text-sm font-semibold text-black/75 shadow-sm transition duration-300 hover:bg-black hover:text-white"
            >
              Leave a review
            </button>
          </motion.div>

  
         

      
        </div>
      </section>

      {/* ================= SCROLLING TESTIMONIALS ================= */}
      <section className="relative overflow-hidden px-5 pb-28">
        <style>
          {`
            @keyframes velScrollY {
              from { transform: translateY(0); }
              to { transform: translateY(-50%); }
            }
            .vel-col {
              animation: velScrollY 18s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .vel-col { animation: none; }
            }
          `}
        </style>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Testimonials
            </p> */}
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              What clients say
              <span className="block font-serif italic font-normal">
                about Velcor
              </span>
            </h2>
            {/* <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/55">
              {DEMO_MODE
                ? "Sample testimonials shown for design preview."
                : "Real results from B2B teams who built predictable pipeline with Velcor."}
            </p> */}
          </motion.div>

          <div className="mt-16 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] motion-reduce:overflow-y-auto">
            <ScrollColumn items={FIRST_COLUMN} duration={18} />
            <ScrollColumn
              items={SECOND_COLUMN}
              duration={24}
              className="hidden md:block"
            />
            <ScrollColumn
              items={THIRD_COLUMN}
              duration={20}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* ========================== PROMISES ========================== */}
      <section className="relative px-5 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              What every client
              <span className="block font-serif italic font-normal">
                can count on
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROMISES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-xl shadow-black/5 backdrop-blur"
              >
                <div className="absolute right-[-50px] top-[-50px] h-36 w-36 rounded-full bg-blue-400/20 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-blue-400">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {item.desc}
                  </p>
                  <div className="mt-6 h-[2px] w-10 rounded-full bg-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= SUBMIT A REVIEW ====================== */}
      <section
        ref={formRef}
        id="leave-review"
        className="scroll-mt-28 px-5 pb-28"
      >
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* left: pitch */}
            <div className="flex flex-col justify-center">
              <p className="w-fit rounded-full border border-black/10 bg-[#f6f1e8] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
                Share your experience
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Worked with
                <span className="block font-serif italic font-normal text-blue-600">
                  Velcor?
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-black/60">
                Tell us how it went. Your review comes straight to our
                team. We read every one and may feature it on this page.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Takes about a minute",
                  "Your email is never shown publicly",
                  "Names are shortened before publishing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-black/70"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-400">
                      <Check size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* right: form */}
            <div className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-6 md:p-8">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-blue-400">
                    <Check size={26} />
                  </span>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-black/60">
                    Your review has been sent to our team. We really
                    appreciate you taking the time.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      mountTime.current = Date.now();
                    }}
                    className="mt-8 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 transition hover:bg-black hover:text-white"
                  >
                    Send another review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* honeypot */}
                  <input
                    type="text"
                    name="company_fax"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {/* rating */}
                  <fieldset>
                    <legend className={labelClass}>Your rating</legend>
                    <div
                      className="mt-2 flex items-center gap-1.5"
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      {[1, 2, 3, 4, 5].map((n) => {
                        const active = n <= (hoverRating || rating);
                        return (
                          <button
                            key={n}
                            type="button"
                            aria-label={`${n} star${n > 1 ? "s" : ""}`}
                            aria-pressed={rating === n}
                            onMouseEnter={() => setHoverRating(n)}
                            onClick={() => {
                              setRating(n);
                              if (error) setError("");
                            }}
                            className="rounded-lg p-1 transition hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
                          >
                            <Star
                              size={30}
                              fill="currentColor"
                              className={
                                active ? "text-blue-500" : "text-black/15"
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="rv-name" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="rv-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Sara Bennett"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="rv-email" className={labelClass}>
                        Email (kept private)
                      </label>
                      <input
                        id="rv-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="sara@yourcompany.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="rv-company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="rv-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme SaaS"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="rv-role" className={labelClass}>
                        Role
                      </label>
                      <input
                        id="rv-role"
                        name="role"
                        type="text"
                        autoComplete="organization-title"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="Head of Sales"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="rv-review" className={labelClass}>
                      Your review
                    </label>
                    <textarea
                      id="rv-review"
                      name="review"
                      rows={5}
                      maxLength={1000}
                      value={form.review}
                      onChange={handleChange}
                      placeholder="What was it like working with Velcor? What changed for your team?"
                      className={
                        inputClass + " h-auto resize-none py-3.5 leading-6"
                      }
                    />
                    <p className="mt-1 text-right text-[11px] text-black/40">
                      {form.review.length} / 1000
                    </p>
                  </div>

                  <label className="mt-3 flex cursor-pointer items-start gap-3 text-xs leading-5 text-black/60">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (error) setError("");
                      }}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 accent-blue-600"
                    />
                    I agree that Velcor.ai may publish my review on its
                    website with my name shortened (for example, "Sara
                    B.").
                  </label>

                  {error && (
                    <p role="alert" className="mt-4 text-xs text-red-600">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group/btn mt-6 inline-flex h-12 items-center gap-2 rounded-2xl bg-black px-8 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit review
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="px-5 pb-28">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-black/10 bg-black px-8 py-16 text-center text-white shadow-2xl shadow-black/20 md:px-16">
          <div className="absolute left-0 top-0 h-full w-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_55%)]" />

          <div className="relative z-10">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Ready to build your
              <span className="block font-serif italic font-normal text-blue-400">
                own success story?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Book a strategy call and we'll walk you through how we'd
              build your outbound, RevOps and content systems.
            </p>
            <a
              href="/schedule-meeting"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400"
            >
              Book Strategy Call <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
