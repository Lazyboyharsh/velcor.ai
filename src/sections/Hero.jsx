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

  const [wordIndex, setWordIndex] =
    useState(0);

  // =========================================
  // MOUSE SPOTLIGHT
  // =========================================
  const [mousePos, setMousePos] =
    useState({
      x: 50,
      y: 50,
    });

  const sectionRef = useRef(null);

  // =========================================
  // QUICK FORM
  // =========================================
  const [quickForm, setQuickForm] =
    useState({
      email: "",
      name: "",
    });

  const [quickLoading, setQuickLoading] =
    useState(false);

  // =========================================
  // WORD ANIMATION
  // =========================================
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(
        (prev) => (prev + 1) % words.length
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // =========================================
  // SPOTLIGHT EFFECT
  // =========================================
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      setMousePos({
        x:
          ((e.clientX - rect.left) /
            rect.width) *
          100,

        y:
          ((e.clientY - rect.top) /
            rect.height) *
          100,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
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

    // WEB3FORMS
    formData.append(
      "access_key",
      "c70b2c7c-243d-44d8-adc5-dcfcef157e6f"
    );

    formData.append(
      "subject",
      "🚀 New Quick Call Request"
    );

    formData.append(
      "from_name",
      "Velcor.ai Website"
    );

    // USER DATA
    formData.append(
      "name",
      quickForm.name
    );

    formData.append(
      "email",
      quickForm.email
    );

    formData.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();

      // =========================================
      // SUCCESS
      // =========================================
      if (data.success) {
        const successBox =
          document.createElement("div");

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
            <div style="
              display:flex;
              align-items:flex-start;
              gap:14px;
            ">
              
              <div style="
                width:44px;
                height:44px;
                border-radius:14px;
                background:#3b82f6;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:20px;
              ">
                ✅
              </div>

              <div>
                <h3 style="
                  margin:0;
                  font-size:16px;
                  font-weight:700;
                ">
                  Request Sent Successfully
                </h3>

                <p style="
                  margin:6px 0 0;
                  font-size:13px;
                  line-height:1.6;
                  color:rgba(255,255,255,0.65);
                ">
                  Velcor.ai team will contact you shortly.
                </p>
              </div>
            </div>
          </div>

          <style>
            @keyframes slideIn {
              from {
                opacity:0;
                transform:translateY(-20px);
              }

              to {
                opacity:1;
                transform:translateY(0);
              }
            }
          </style>
        `;

        document.body.appendChild(successBox);

        // REMOVE AFTER 4 SEC
        setTimeout(() => {
          successBox.remove();
        }, 4000);

        // RESET FORM
        setQuickForm({
          email: "",
          name: "",
        });
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
      className="relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pb-28 pt-36 md:pt-44"
    >
      {/* STYLES */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbDrift {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          40% {
            transform: translate(24px,-18px) scale(1.04);
          }

          70% {
            transform: translate(-16px,12px) scale(0.97);
          }
        }

        @keyframes pulseRing {
          0%,100% {
            box-shadow: 0 0 0 0 rgba(59,130,246,0);
          }

          50% {
            box-shadow: 0 0 0 8px rgba(59,130,246,0.18);
          }
        }

        .fu-1 {
          animation: fadeUp .7s .18s ease both;
        }

        .fu-2 {
          animation: fadeUp .7s .32s ease both;
        }

        .fu-3 {
          animation: fadeUp .7s .48s ease both;
        }

        .orb-a {
          animation: orbDrift 9s ease-in-out infinite;
        }

        .orb-b {
          animation: orbDrift 12s 2s ease-in-out infinite reverse;
        }

        .btn-pulse {
          animation: pulseRing 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(640px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.08), transparent 65%)`,
        }}
      />

      {/* GRID */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" />

      {/* ORBS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-a absolute -left-32 top-20 h-[560px] w-[560px] rounded-full bg-white/50 blur-3xl" />

        <div className="orb-b absolute -right-40 top-28 h-[660px] w-[660px] rounded-full bg-white/55 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* TITLE */}
        <h1 className="fu-1 mx-auto max-w-4xl font-semibold tracking-[-0.055em] text-black">
          
          <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            Go-to-market systems
          </span>

          <span className="block font-serif text-[2.6rem] font-normal italic leading-[1.1] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            for predictable
          </span>

          <span className="relative mt-1 block text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            
            <span className="invisible font-serif font-normal italic tracking-[-0.04em] text-blue-600">
              {longestWord}
            </span>

            {words.map((word, i) => (
              <span
                key={word}
                className="absolute inset-0 flex items-center justify-center font-serif font-normal italic tracking-[-0.04em] text-blue-600 transition-all duration-[400ms] ease-out"
                style={{
                  opacity:
                    i === wordIndex ? 1 : 0,

                  transform:
                    i === wordIndex
                      ? "translateY(0)"
                      : "translateY(14px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="fu-2 mx-auto mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
          Combining AI workflows with human
          expertise to implement end-to-end
          outbound, RevOps and content systems
          that create qualified pipeline.
        </p>

        {/* FORM */}
        <div className="fu-3 mx-auto mt-10 w-full max-w-2xl">
          
          {/* DESKTOP */}
          <form
            onSubmit={handleQuickSubmit}
            className="hidden md:flex items-center overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-xl shadow-black/8 backdrop-blur ring-1 ring-white/60 transition-shadow focus-within:shadow-blue-200/40 focus-within:ring-blue-200/50"
          >
            <input
              type="email"
              name="email"
              required
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[56px] min-w-0 flex-1 bg-transparent pl-5 pr-3 text-sm text-black outline-none placeholder:text-black/35"
            />

            <div className="h-6 w-px bg-black/10" />

            <input
              type="text"
              name="name"
              required
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[56px] min-w-0 flex-1 bg-transparent pl-4 pr-3 text-sm text-black outline-none placeholder:text-black/35"
            />

            <div className="p-1.5">
              <button
                type="submit"
                disabled={quickLoading}
                className="btn-pulse group flex h-[44px] items-center gap-2 rounded-xl bg-blue-500 px-6 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-[0.97] disabled:opacity-70"
              >
                {quickLoading ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Request call

                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* MOBILE */}
          <form
            onSubmit={handleQuickSubmit}
            className="flex flex-col gap-3 md:hidden"
          >
            <input
              type="email"
              name="email"
              required
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[52px] w-full rounded-xl border border-black/10 bg-white/85 px-5 text-sm text-black shadow-md shadow-black/5 outline-none placeholder:text-black/40 backdrop-blur transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50"
            />

            <input
              type="text"
              name="name"
              required
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[52px] w-full rounded-xl border border-black/10 bg-white/85 px-5 text-sm text-black shadow-md shadow-black/5 outline-none placeholder:text-black/40 backdrop-blur transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50"
            />

            <button
              type="submit"
              disabled={quickLoading}
              className="btn-pulse group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 active:scale-[0.97] disabled:opacity-70"
            >
              {quickLoading ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />

                  Sending...
                </>
              ) : (
                <>
                  <CheckCircle2 size={16} />

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