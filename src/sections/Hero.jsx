import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const words = ["pipeline", "revenue", "sales systems", "GTM workflows"];
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);
  const wordRefs   = useRef([]);

  // Cycle words every 1.8s
  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const handle = (e) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // const stats = [
  //   { value: "1,240+", label: "Signals mapped"    },
  //   { value: "312",    label: "Prospects enriched" },
  //   { value: "47",     label: "Warm replies"       },
  //   { value: "18",     label: "Calls booked"       },
  // ];

  // const tags = ["Content", "Outbound", "AI RevOps", "ABM", "CRM Automation"];

  // The longest word — used as invisible ghost to lock the row height
  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pb-28 pt-36 md:pt-44"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(24px,-18px) scale(1.04); }
          70%     { transform: translate(-16px,12px) scale(0.97); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0   rgba(59,130,246,0.00); }
          50%     { box-shadow: 0 0 0 8px rgba(59,130,246,0.18); }
        }

        .fu-0 { animation: fadeUp .7s .05s ease both; }
        .fu-1 { animation: fadeUp .7s .18s ease both; }
        .fu-2 { animation: fadeUp .7s .32s ease both; }
        .fu-3 { animation: fadeUp .7s .48s ease both; }
        .fu-4 { animation: fadeUp .7s .62s ease both; }
        .fu-5 { animation: fadeUp .7s .76s ease both; }

        .orb-a { animation: orbDrift  9s ease-in-out infinite; }
        .orb-b { animation: orbDrift 12s 2s ease-in-out infinite reverse; }
        .btn-pulse { animation: pulseRing 2.8s ease-in-out infinite; }
        .badge-shimmer {
          background: linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.55) 50%,rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 2.6s linear infinite;
        }
      `}</style>

      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{ background: `radial-gradient(640px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.08), transparent 65%)` }} />

      {/* Dot texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" />

      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-a absolute -left-32 top-20 h-[560px] w-[560px] rounded-full bg-white/50 blur-3xl" />
        <div className="orb-b absolute -right-40 top-28 h-[660px] w-[660px] rounded-full bg-white/55 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        {/* <div className="fu-0 relative mx-auto mb-7 inline-flex items-center gap-2 overflow-hidden rounded-full border border-black/10 bg-white/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-black/60 shadow-sm backdrop-blur">
          <span className="badge-shimmer pointer-events-none absolute inset-0 rounded-full" />
          <Sparkles size={13} className="text-blue-500" />
          For B2B technology companies
        </div> */}

        {/* ── Headline ─────────────────────────────────────────────────────────
            Structure (3 lines, all centered, all block):
              Line 1: "Go-to-market systems"          ← static
              Line 2: "for predictable"               ← static italic
              Line 3: animated word only              ← blue, zero layout shift

            Zero-shift technique for line 3:
            • An invisible <span> of the LONGEST word sets the row's height
              and contributes to layout exactly once — it never changes.
            • Every word is position:absolute, centered over that ghost.
            • Only opacity + translateY transition — no width/height changes,
              no DOM insertions, no reflow whatsoever.
        ─────────────────────────────────────────────────────────────────── */}
        <h1 className="fu-1 mx-auto max-w-4xl font-semibold tracking-[-0.055em] text-black">

          {/* Line 1 — static */}
          <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            Go-to-market systems
          </span>

          {/* Line 2 — static italic */}
          <span className="block font-serif text-[2.6rem] font-normal italic leading-[1.1] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            for predictable
          </span>

          {/* Line 3 — animated word, isolated block, never shifts siblings */}
          <span className="relative mt-1 block text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            {/*
              Ghost span: invisible, in normal flow, always shows the longest
              word so this line's height is permanently locked to that size.
            */}
            <span
              aria-hidden="true"
              className="invisible font-serif font-normal italic tracking-[-0.04em] text-blue-600"
            >
              {longestWord}
            </span>

            {/*
              Real words: all absolutely positioned over the ghost.
              Transitions are CSS-only — no JS style writes on every frame.
            */}
            {words.map((word, i) => (
              <span
                key={word}
                className="absolute inset-0 flex items-center justify-center font-serif font-normal italic tracking-[-0.04em] text-blue-600 transition-all duration-[400ms] ease-out"
                style={{
                  opacity:       i === wordIndex ? 1 : 0,
                  transform:     i === wordIndex ? "translateY(0) skewY(0deg)" : "translateY(14px) skewY(1deg)",
                  pointerEvents: i === wordIndex ? "auto" : "none",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="fu-2 mx-auto mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
          Combining AI workflows with human expertise to implement end-to-end
          outbound, RevOps and content systems that create qualified pipeline.
        </p>

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        <div className="fu-3 mx-auto mt-10 w-full max-w-2xl">

          {/* Desktop pill */}
          <div className="hidden md:flex items-center overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-xl shadow-black/8 backdrop-blur ring-1 ring-white/60 focus-within:shadow-blue-200/40 focus-within:ring-blue-200/50 transition-shadow">
            <input type="email" placeholder="Work email"
              className="h-[56px] min-w-0 flex-1 bg-transparent pl-5 pr-3 text-sm text-black outline-none placeholder:text-black/35" />
            <div className="h-6 w-px bg-black/10" />
            <input type="text" placeholder="Full name"
              className="h-[56px] min-w-0 flex-1 bg-transparent pl-4 pr-3 text-sm text-black outline-none placeholder:text-black/35" />
            <div className="p-1.5">
              <button className="btn-pulse group flex h-[44px] items-center gap-2 rounded-xl bg-blue-500 px-6 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-[0.97]">
                Request call
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Mobile stacked */}
          <div className="flex flex-col gap-3 md:hidden">
            <input type="email" placeholder="Work email"
              className="h-[52px] w-full rounded-xl border border-black/10 bg-white/85 px-5 text-sm text-black shadow-md shadow-black/5 outline-none placeholder:text-black/40 backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition" />
            <input type="text" placeholder="Full name"
              className="h-[52px] w-full rounded-xl border border-black/10 bg-white/85 px-5 text-sm text-black shadow-md shadow-black/5 outline-none placeholder:text-black/40 backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition" />
            <button className="btn-pulse group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 active:scale-[0.97]">
              Request call
              <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* <p className="mt-3 text-center text-xs text-black/38">
            No credit card required · Response within 24 h
          </p> */}
        </div>

        {/* Tags */}
        {/* <div className="fu-4 mt-8 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag}
              className="cursor-default rounded-lg border border-black/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-black/55 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-blue-600">
              {tag}
            </span>
          ))}
        </div> */}

        {/* Divider */}
        {/* <div className="fu-5 mx-auto mb-8 mt-14 flex max-w-xs items-center gap-4">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-black/30">Live results</span>
          <div className="h-px flex-1 bg-black/10" />
        </div> */}

        {/* Stats */}
        {/* <div className="fu-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/55 p-5 text-left shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/75 hover:shadow-md"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}>
              <div className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full bg-blue-500/70 transition group-hover:bg-blue-500" />
              <p className="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-black/45">{stat.label}</p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}