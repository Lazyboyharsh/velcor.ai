import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f6f1e8] px-5 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tight text-black">
              Velcor<span className="text-blue-500">.ai</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-black/55">
              AI-native GTM systems for outbound, RevOps, CRM automation and pipeline growth.
            </p>
            <div className="mt-5 flex gap-3">
              {["in", "tw", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/60 text-xs font-bold text-black/50 transition hover:bg-blue-500 hover:text-white hover:border-blue-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-black/60">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-black">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/40">Services</p>
            <ul className="space-y-3 text-sm font-medium text-black/60">
              {[
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "GTM Flowcharts", href: "/flowcharts" },
                { label: "Outbound Lead Gen", href: "/services" },
                { label: "RevOps & CRM", href: "/services" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-black">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black/40">Get Started</p>
            <p className="text-sm leading-6 text-black/55">
              Only 5 pilot campaign slots available this month.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Apply for Pilot →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velcor.ai. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy">Privacy Policy</Link>
<Link to="/terms-of-service">Terms of Service</Link>
          </div>
          <p>Built for B2B teams that want systems, not guesswork.</p>
        </div>
      </div>
    </footer>
  );
}
