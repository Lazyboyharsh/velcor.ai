import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  // =========================================
  // ANIMATED WORDS
  // =========================================
  const words = [
    "pipeline",
    "revenue",
    "sales systems",
    "GTM workflows",
  ];

  const [wordIndex, setWordIndex] = useState(0);

  // =========================================
  // MOUSE SPOTLIGHT
  // =========================================
  const [mousePos, setMousePos] = useState({
    x: 50,
    y: 50,
  });

  const sectionRef = useRef(null);

  // =========================================
  // QUICK FORM
  // =========================================
  const [quickForm, setQuickForm] = useState({
    email: "",
    name: "",
  });

  const [quickLoading, setQuickLoading] = useState(false);

  // =========================================
  // WORD ANIMATION
  // =========================================
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // =========================================
  // SPOTLIGHT EFFECT
  // =========================================
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // =========================================
  // LONGEST WORD
  // =========================================
  const longestWord = words.reduce((a, b) =>
    a.length >= b.length ? a : b
  );

  // =========================================
  // INPUT CHANGE
  // =========================================
  const handleQuickChange = (e) => {
    setQuickForm({
      ...quickForm,
      [e.target.name]: e.target.value,
    });
  };

  // =========================================
  // SUBMIT FORM
  // =========================================
  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    setQuickLoading(true);

    const formData = new FormData();

    formData.append("access_key", "c70b2c7c-243d-44d8-adc5-dcfcef157e6f");
    formData.append("subject", "🚀 New Quick Call Request");
    formData.append("from_name", "Velcor.ai Website");
    formData.append("name", quickForm.name);
    formData.append("email", quickForm.email);
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        const successBox = document.createElement("div");
        successBox.innerHTML = `
          <div style="
            position: fixed;
            top: 24px;
            right: 24px;
            z-index: 99999;
            background: #111111;
            color: white;
            padding: 18px 20px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 20px 60px rgba(0,0,0,0.35);
            min-width: 320px;
            font-family: sans-serif;
            animation: slideIn .4s ease;
          ">
            <div style="display:flex; align-items:flex-start; gap:14px;">
              <div style="width:44px; height:44px; border-radius:14px; background:#3b82f6; display:flex; align-items:center; justify-content:center; font-size:20px;">
                ✅
              </div>
              <div>
                <h3 style="margin:0; font-size:16px; font-weight:700;">
                  Request Sent Successfully
                </h3>
                <p style="margin:6px 0 0; font-size:13px; line-height:1.6; color:rgba(255,255,255,0.65);">
                  Velcor.ai team will contact you shortly.
                </p>
              </div>
            </div>
          </div>
          <style>
            @keyframes slideIn {
              from { opacity:0; transform:translateY(-20px); }
              to { opacity:1; transform:translateY(0); }
            }
          </style>
        `;
        document.body.appendChild(successBox);
        setTimeout(() => successBox.remove(), 4000);
        setQuickForm({ email: "", name: "" });
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setQuickLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pb-32 pt-40 md:pt-48"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40% { transform: translate(24px,-18px) scale(1.04); }
          70% { transform: translate(-16px,12px) scale(0.97); }
        }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
          50% { box-shadow: 0 0 0 8px rgba(59,130,246,0.18); }
        }
        @keyframes bgWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes softGlow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }
        .fu-1 { animation: fadeUp .8s .18s ease both; }
        .fu-2 { animation: fadeUp .8s .38s ease both; }
        .fu-3 { animation: fadeUp .8s .58s ease both; }
        .orb-a { animation: orbDrift 9s ease-in-out infinite; }
        .orb-b { animation: orbDrift 12s 2s ease-in-out infinite reverse; }
        .btn-pulse { animation: pulseRing 2.8s ease-in-out infinite; }
        
        /* NEW HOVER BG ANIMATIONS */
        .bg-wave {
          background: linear-gradient(
            -45deg,
            #f6f1e8,
            #f0e9df,
            #f5ede2,
            #faf5ec
          );
          background-size: 400% 400%;
          animation: bgWave 15s ease infinite;
        }
        .glow-orb {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .glow-orb:hover {
          animation: softGlow 3s ease-in-out infinite;
        }
        .hover-gradient {
          transition: all 0.4s ease;
        }
        .hero-container:hover .hover-gradient-bg {
          opacity: 0.4;
        }
      `}</style>

      {/* NEW SIMPLE HOVER ANIMATION BG */}
      <div className="absolute inset-0 bg-wave pointer-events-none" />
      
      {/* HOVER TRIGGER AREA - animated gradient that reacts to hover */}
      <div className="hero-container absolute inset-0 pointer-events-auto">
        <div 
          className="hover-gradient-bg absolute inset-0 bg-gradient-to-tr from-amber-100/0 via-orange-100/0 to-blue-100/0 transition-all duration-700 hover:from-amber-100/30 hover:via-orange-100/20 hover:to-blue-100/20"
          style={{ transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' }}
        />
      </div>

      {/* SOFT GLOW ORBS THAT RESPOND TO HOVER */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 blur-3xl transition-all duration-700 hover:scale-110 hover:from-amber-200/35 hover:to-orange-200/35" />
        <div className="glow-orb absolute -right-20 bottom-10 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-blue-100/15 to-indigo-100/15 blur-3xl transition-all duration-700 delay-100 hover:scale-110 hover:from-blue-100/30 hover:to-indigo-100/30" />
      </div>

      {/* SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(640px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.06), transparent 65%)`,
        }}
      />

      {/* GRID */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:24px_24px]" />

      {/* ORBS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-a absolute -left-32 top-20 h-[560px] w-[560px] rounded-full bg-white/30 blur-3xl" />
        <div className="orb-b absolute -right-40 top-28 h-[660px] w-[660px] rounded-full bg-white/35 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* TITLE */}
        <h1 className="fu-1 mx-auto max-w-3xl font-semibold tracking-[-0.045em] text-black">
          
          <span className="block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Go-to-market systems
          </span>

          <span className="block font-serif text-[1.8rem] font-normal italic leading-[1.3] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[3.5rem] mt-3">
            for predictable
          </span>

          <span className="relative mt-4 block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            
            <span className="invisible font-serif font-normal italic tracking-[-0.04em] text-blue-600">
              {longestWord}
            </span>

            {words.map((word, i) => (
              <span
                key={word}
                className="absolute inset-0 flex items-center justify-center font-serif font-normal italic tracking-[-0.04em] text-blue-600 transition-all duration-[400ms] ease-out"
                style={{
                  opacity: i === wordIndex ? 1 : 0,
                  transform: i === wordIndex ? "translateY(0)" : "translateY(14px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="fu-2 mx-auto mt-8 max-w-xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
          Combining AI workflows with human
          expertise to implement end-to-end
          outbound, RevOps and content systems
          that create qualified pipeline.
        </p>

        {/* FORM */}
        <div className="fu-3 mx-auto mt-12 w-full max-w-lg">
          
          {/* DESKTOP */}
          <form
            onSubmit={handleQuickSubmit}
            className="group/form hidden md:flex items-center overflow-hidden rounded-xl border border-black/8 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-sm ring-1 ring-white/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/20 hover:border-blue-200/30 hover:bg-white/90 focus-within:shadow-blue-100/30 focus-within:ring-blue-100/40"
          >
            <input
              type="email"
              name="email"
              required
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[48px] min-w-0 flex-1 bg-transparent pl-5 pr-3 text-xs text-black outline-none placeholder:text-black/30 transition-all duration-300 focus:pl-6"
            />

            <div className="h-5 w-px bg-black/8 group-hover/form:bg-black/15 transition-all duration-300" />

            <input
              type="text"
              name="name"
              required
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[48px] min-w-0 flex-1 bg-transparent pl-4 pr-3 text-xs text-black outline-none placeholder:text-black/30 transition-all duration-300 focus:pl-5"
            />

            <div className="p-1.5">
              <button
                type="submit"
                disabled={quickLoading}
                className="btn-pulse group/btn flex h-[40px] items-center gap-2 rounded-lg bg-blue-500 px-5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.97] disabled:opacity-70"
              >
                {quickLoading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request call
                    <ArrowRight size={12} className="transition-all duration-300 group-hover/btn:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* MOBILE */}
          <form
            onSubmit={handleQuickSubmit}
            className="flex flex-col gap-4 md:hidden"
          >
            <input
              type="email"
              name="email"
              required
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[48px] w-full rounded-lg border border-black/8 bg-white/80 px-4 text-xs text-black shadow-sm shadow-black/5 outline-none placeholder:text-black/35 backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:pl-5 focus:shadow-md focus:shadow-blue-100/30 hover:border-blue-300/50 hover:bg-white/90"
            />

            <input
              type="text"
              name="name"
              required
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[48px] w-full rounded-lg border border-black/8 bg-white/80 px-4 text-xs text-black shadow-sm shadow-black/5 outline-none placeholder:text-black/35 backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:pl-5 focus:shadow-md focus:shadow-blue-100/30 hover:border-blue-300/50 hover:bg-white/90"
            />

            <button
              type="submit"
              disabled={quickLoading}
              className="btn-pulse group/btn flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:bg-blue-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-70"
            >
              {quickLoading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} className="transition-all duration-300 group-hover/btn:scale-110" />
                  Request call
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}