// Testimonials.jsx
// Scrolling 3-column testimonials section.
// Matches the existing #f6f1e8 cream theme from Navbar / Hero.
//
// Dependencies:
//   npm install motion
//
// Place TestimonialsColumn.jsx in the same folder (or adjust the import path).

import { motion } from "motion/react";

import { TestimonialsColumn } from "../components/ui/TestimonialsColumn";
// ── Testimonial data ──────────────────────────────────────────────────────────
const testimonials = [
  {
    text: "Velcor didn't just run campaigns — they built a full pipeline system. We finally have consistency in our outreach.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Anderson",
    role: "Founder, SaaS",
  },
  {
    text: "CRM automation alone saved our team hours every week. Follow-ups are no longer broken, and leads never slip through.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Martin",
    role: "Head of Growth",
  },
  {
    text: "We went from random outreach to a structured GTM engine. Results feel predictable now for the first time.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Lars Hoffmann",
    role: "Revenue Lead",
  },
  {
    text: "The signal-based outbound strategy surfaced accounts we'd never have found manually. Pipeline quality is night and day.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emma Wilson",
    role: "VP Sales",
  },
  {
    text: "Onboarding was fast and the team took full ownership. Within 6 weeks we had warm replies coming in consistently.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Thomas Dubois",
    role: "CEO, B2B SaaS",
  },
  {
    text: "Their RevOps setup connected our CRM, sequencer, and enrichment tools into one clean workflow. Game-changer.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Isabella Rossi",
    role: "Operations Director",
  },
  {
    text: "We booked 18 calls in the first month of the pilot. The targeting and messaging were both razor-sharp.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Michael Brown",
    role: "Growth Manager",
  },
  {
    text: "Velcor's content system kept us top-of-mind with prospects throughout the entire buying cycle. Remarkable ROI.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Charlotte Weber",
    role: "CMO",
  },
  {
    text: "The ABM campaigns were tailored and precise. Enterprise deals we'd stalled on for months started moving again.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "William Taylor",
    role: "Enterprise Account Exec",
  },
];

// Split into three columns
const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

// ── Component ─────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-24 md:py-32">

      {/* Subtle dot-grid texture to match Hero */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* ── Section header ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-center text-center"
        >
          {/* Badge */}
          <span className="mb-4 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur">
            Testimonials
          </span>

          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.055em] text-black sm:text-5xl md:text-6xl">
            What clients say
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-black/50">
            Real results from B2B teams who built predictable pipeline with Velcor.
          </p>
        </motion.div>

        {/* ── Scrolling columns ──────────────────────────────────────────────── */}
        {/*
          [mask-image] fades the top and bottom edges so cards
          appear to emerge and disappear smoothly — no hard clip.
          max-h caps the visible area to ~740px regardless of content.
        */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">

          {/* Column 1 — always visible */}
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={16}
          />

          {/* Column 2 — hidden on mobile, shown md+ */}
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={20}
            className="hidden md:block"
          />

          {/* Column 3 — hidden on mobile + tablet, shown lg+ */}
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={18}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}