import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Controls mobile menu open/close state
  const [open, setOpen] = useState(false);

  // Tracks scroll position to apply stronger navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // All navigation links in one place — easy to update
  const links = [
    { name: "Services", path: "/services" },
    // { name: "Case Studies", path: "/case-studies" },
    // { name: "Flowcharts", path: "/flowcharts" },
    { name: "Process", path: "/process" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Infrastructure", path: "/infrastructure" },
  ];

  // ── Scroll listener ────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ──────────────────────────────
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Helper to close menu (used on link clicks)
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ── Top urgency banner ─────────────────────────────────────────────── */}
      <div className="fixed left-0 top-0 z-[70] w-full bg-black px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
        ⚡ Only 5 pilot campaign slots available this month
      </div>

      {/* ── Navbar (sits just below the banner) ───────────────────────────── */}
      <header
        className={`fixed left-0 top-8 z-[60] w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f1e8] shadow-md"
            : "bg-[#f6f1e8]/90 backdrop-blur-md"
        } border-b border-black/10`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">

          {/* ── Logo ────────────────────────────────────────────────────────── */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-black"
          >
            Velcor.ai
          </Link>

          {/* ── Desktop: centre nav links ────────────────────────────────────── */}
          {/* Visible only on md and above */}
          <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/50 p-1 md:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-black/60 transition hover:bg-white hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ── Desktop: CTA buttons ─────────────────────────────────────────── */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="text-sm font-semibold text-black/70 transition hover:text-black"
            >
              Book Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Apply For Pilot
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Mobile: hamburger button only ───────────────────────────────── */}
          {/* Clean icon-only toggle — no extra buttons cluttering the bar */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-black transition hover:bg-black/5 active:scale-95 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* ── Mobile dropdown menu ─────────────────────────────────────────── */}
        {/* Expands directly beneath the navbar — clean, no floating panel */}
        <div
          className={`overflow-hidden border-t border-black/10 bg-[#f6f1e8] transition-all duration-300 ease-in-out md:hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-5 pb-6 pt-2">

            {/* Nav links — simple full-width rows with a subtle divider */}
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/8 py-3.5 text-sm font-semibold text-black/75 transition hover:text-black last:border-none"
              >
                {item.name}
                <ArrowRight size={15} className="text-black/30" />
              </Link>
            ))}

            {/* CTA buttons stacked at the bottom of the mobile menu */}
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl border border-black/15 bg-white py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Book Demo
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Apply For Pilot
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}