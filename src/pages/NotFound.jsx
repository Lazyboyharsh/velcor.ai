import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-delay-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .fade-delay-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .float-anim { animation: float 4s ease-in-out infinite; }
      `}</style>

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-200/20 blur-[120px]" />

        <div className="relative z-10 max-w-2xl">
          <div className="float-anim mx-auto mb-8 inline-flex h-32 w-32 items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 shadow-2xl shadow-black/10 backdrop-blur">
            <span className="text-5xl font-bold tracking-tighter text-blue-500">404</span>
          </div>

          <p className="fade-up mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Page not found
          </p>

          <h1 className="fade-delay-1 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            This page doesn't exist
            <span className="block font-serif italic font-normal text-black/50">
              but your pipeline can
            </span>
          </h1>

          <p className="fade-delay-2 mx-auto mt-6 max-w-md text-base leading-7 text-black/55">
            The page you're looking for has moved or never existed. Head back home or explore what Velcor.ai can build for you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <Home size={15} /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
            >
              Book a Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
