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
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-[#f6f1e8]/95 shadow-lg backdrop-blur-xl"
          : "bg-[#f6f1e8]/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="relative z-50 flex items-center"
        >
          <img
            src="/logo.png"
            alt="Velcor.ai Logo"
            className="h-12 w-auto object-contain transition-all duration-300 lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1.5 shadow-sm backdrop-blur-md">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-full px-4 py-2 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-600"
          >
            Book Strategy Call
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-black transition-all duration-300 hover:bg-black/5 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden border-t border-black/10 bg-[#f6f1e8]/95 shadow-xl backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4">
          <div className="flex flex-col">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-medium text-black/75 transition-all duration-300 hover:text-black last:border-none"
              >
                {item.name}
                <ArrowRight
                  size={15}
                  className="text-black/30"
                />
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Book Strategy Call
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}