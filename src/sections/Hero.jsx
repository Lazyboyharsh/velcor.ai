import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";

export default function Hero() {
  const words = [
    "pipeline",
    "revenue",
    "sales systems",
    "GTM workflows",
  ];

  const [wordIndex, setWordIndex] = useState(0);

  const [mousePos, setMousePos] = useState({
    x: 50,
    y: 50,
  });

  const sectionRef = useRef(null);

  const [quickForm, setQuickForm] = useState({
    email: "",
    name: "",
  });

  const [quickLoading, setQuickLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const longestWord = words.reduce((a, b) =>
    a.length >= b.length ? a : b
  );

  const handleQuickChange = (e) => {
    const { name, value } = e.target;

    setQuickForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleQuickSubmit = async (e) => {
    e.preventDefault();

    if (quickLoading) return;

    setQuickLoading(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "New Quick Call Request - Velcor.ai",
            from_name: "Velcor.ai Website",
            name: quickForm.name,
            email: quickForm.email,
            request_type: "Strategy Call Request",
            source: "Velcor.ai Homepage Hero",
            message:
              "New strategy call request from the Velcor.ai homepage.",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send request."
        );
      }

      setQuickForm({
        name: "",
        email: "",
      });

      window.location.href = "/schedule-meeting";
    } catch (error) {
      alert(
        error.message ||
          "Unable to send request. Please try again."
      );
    } finally {
      setQuickLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pb-32 pt-40 md:pt-48"
    >
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(32px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes orbDrift {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }

            40% {
              transform: translate(24px, -18px) scale(1.04);
            }

            70% {
              transform: translate(-16px, 12px) scale(0.97);
            }
          }

          @keyframes pulseRing {
            0%,
            100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }

            50% {
              box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.18);
            }
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
            0%,
            100% {
              opacity: 0.15;
              transform: scale(1);
            }

            50% {
              opacity: 0.25;
              transform: scale(1.05);
            }
          }

          .fu-1 {
            animation: fadeUp 0.8s 0.18s ease both;
          }

          .fu-2 {
            animation: fadeUp 0.8s 0.38s ease both;
          }

          .fu-3 {
            animation: fadeUp 0.8s 0.58s ease both;
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

          .hero-container:hover .hover-gradient-bg {
            opacity: 0.4;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 bg-wave" />

      <div className="hero-container absolute inset-0">
        <div className="hover-gradient-bg absolute inset-0 bg-gradient-to-tr from-amber-100/0 via-orange-100/0 to-blue-100/0 transition-all duration-700 hover:from-amber-100/30 hover:via-orange-100/20 hover:to-blue-100/20" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 blur-3xl" />

        <div className="glow-orb absolute -right-20 bottom-10 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-blue-100/15 to-indigo-100/15 blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background:
            "radial-gradient(640px circle at " +
            mousePos.x +
            "% " +
            mousePos.y +
            "%, rgba(59,130,246,0.06), transparent 65%)",
        }}
      />

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-a absolute -left-32 top-20 h-[560px] w-[560px] rounded-full bg-white/30 blur-3xl" />

        <div className="orb-b absolute -right-40 top-28 h-[660px] w-[660px] rounded-full bg-white/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="fu-1 mx-auto max-w-3xl font-semibold tracking-[-0.045em] text-black">
          <span className="block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Go-to-market systems
          </span>

          <span className="mt-3 block font-serif text-[1.8rem] font-normal italic leading-[1.3] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            for predictable
          </span>

          <span className="relative mt-4 block text-[1.8rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            <span className="invisible font-serif font-normal italic tracking-[-0.04em] text-blue-600">
              {longestWord}
            </span>

            {words.map((word, index) => (
              <span
                key={word}
                className="absolute inset-0 flex items-center justify-center font-serif font-normal italic tracking-[-0.04em] text-blue-600 transition-all duration-[400ms] ease-out"
                style={{
                  opacity: index === wordIndex ? 1 : 0,

                  transform:
                    index === wordIndex
                      ? "translateY(0)"
                      : "translateY(14px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className="fu-2 mx-auto mt-8 max-w-xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
          Combining AI workflows with human expertise to implement
          end-to-end outbound, RevOps and content systems that create
          qualified pipeline.
        </p>

        <div className="fu-3 mx-auto mt-12 w-full max-w-lg">
          <form
            onSubmit={handleQuickSubmit}
            className="group/form hidden items-center overflow-hidden rounded-xl border border-black/8 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-sm ring-1 ring-white/50 transition-all duration-500 hover:border-blue-200/30 hover:bg-white/90 hover:shadow-xl focus-within:ring-blue-100/40 md:flex"
          >
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[48px] min-w-0 flex-1 bg-transparent pl-5 pr-3 text-xs text-black outline-none placeholder:text-black/30"
            />

            <div className="h-5 w-px bg-black/10" />

            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[48px] min-w-0 flex-1 bg-transparent pl-4 pr-3 text-xs text-black outline-none placeholder:text-black/30"
            />

            <div className="p-1.5">
              <button
                type="submit"
                disabled={quickLoading}
                className="btn-pulse group/btn flex h-[40px] items-center gap-2 rounded-lg bg-blue-500 px-5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {quickLoading ? (
                  <>
                    <Loader2
                      size={14}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Request call

                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          <form
            onSubmit={handleQuickSubmit}
            className="flex flex-col gap-4 md:hidden"
          >
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={quickForm.email}
              onChange={handleQuickChange}
              placeholder="Work email"
              className="h-[48px] w-full rounded-lg border border-black/10 bg-white/80 px-4 text-xs text-black shadow-sm outline-none placeholder:text-black/35 focus:border-blue-400"
            />

            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={quickForm.name}
              onChange={handleQuickChange}
              placeholder="Full name"
              className="h-[48px] w-full rounded-lg border border-black/10 bg-white/80 px-4 text-xs text-black shadow-sm outline-none placeholder:text-black/35 focus:border-blue-400"
            />

            <button
              type="submit"
              disabled={quickLoading}
              className="btn-pulse group/btn flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {quickLoading ? (
                <>
                  <Loader2
                    size={14}
                    className="animate-spin"
                  />

                  Sending...
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} />

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