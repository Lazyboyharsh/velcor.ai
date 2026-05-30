import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Infrastructure", path: "/infrastructure" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ───────────────── Banner ───────────────── */}
      <div className="fixed left-0 top-0 z-[70] w-full bg-black px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
        ⚡ Only 5 pilot campaign slots available this month
      </div>

      {/* ───────────────── Navbar ───────────────── */}
      <header
        className={`fixed left-0 top-9 z-[60] w-full border-b border-black/10 transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f1e8] shadow-md"
            : "bg-[#f6f1e8]/90 backdrop-blur-md"
        }`}
      >
        <nav className="relative mx-auto flex h-[84px] max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* ───────────────── Logo ───────────────── */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="Velcor.ai Logo"
              className="h-14 w-auto object-contain transition-all duration-300 lg:h-16"
            />
          </Link>

          {/* ───────────────── Desktop Navigation ───────────────── */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1.5 backdrop-blur-sm md:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-full px-4 py-2 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ───────────────── Desktop CTA ───────────────── */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Apply For Pilot
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* ───────────────── Mobile Menu Button ───────────────── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-black transition-all duration-300 hover:bg-black/5 active:scale-95 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* ───────────────── Mobile Menu ───────────────── */}
        <div
          className={`overflow-hidden border-t border-black/10 bg-[#f6f1e8] transition-all duration-300 ease-in-out md:hidden ${
            open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-5 pb-6 pt-2">

            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-semibold text-black/75 transition-all duration-300 hover:text-black last:border-none"
              >
                {item.name}
                <ArrowRight
                  size={15}
                  className="text-black/30"
                />
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl border border-black/15 bg-white py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-black/5"
              >
                Book Demo
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
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