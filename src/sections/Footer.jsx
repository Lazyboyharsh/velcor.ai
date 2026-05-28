import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#f6f1e8] px-5 pt-24 pb-10">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:26px_26px]" />

      {/* BLUR */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-14 border-b border-black/10 pb-16 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Velcor.ai Logo"
    className="h-12 w-auto object-contain"
  />
</a>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-black/55">
              AI-native revenue infrastructure for outbound systems,
              workflow automation, CRM architecture, revenue operations,
              analytics, and scalable pipeline growth.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-blue-500"
            >
              Book Strategy Call
              {/* ArrowRight inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* COMPANY */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">Company</p>
            <ul className="space-y-4 text-[15px] text-black/55">
              <li><Link to="/about" className="transition hover:text-black">About</Link></li>
              <li><Link to="/services" className="transition hover:text-black">Services</Link></li>
              <li><Link to="/process" className="transition hover:text-black">Process</Link></li>
              <li><Link to="/infrastructure" className="transition hover:text-black">Infrastructure</Link></li>
              <li><Link to="/blog" className="transition hover:text-black">Blog</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">Resources</p>
            <ul className="space-y-4 text-[15px] text-black/55">
              <li className="transition hover:text-black">Revenue Systems</li>
              <li className="transition hover:text-black">AI Automation</li>
              <li className="transition hover:text-black">CRM Optimization</li>
              <li className="transition hover:text-black">Workflow Infrastructure</li>
              <li className="transition hover:text-black">Pipeline Analytics</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">Contact</p>
            <div className="space-y-5 text-[15px] leading-8 text-black/55">
              <p>team@velcor.ai</p>
              <p>Delaware, United States</p>

              {/* SOCIALS */}
              <div className="flex items-center gap-3 pt-2">

                {/* LINKEDIN */}
                <a href="https://www.linkedin.com/company/velcor" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X / TWITTER */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YOUTUBE */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a>

                {/* INSTAGRAM */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative flex flex-col gap-5 py-10 text-sm text-black/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velcor.ai. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="transition hover:text-black">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition hover:text-black">Terms of Service</Link>
          </div>
          <p>Built for modern B2B teams that want systems, not guesswork.</p>
        </div>
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <div className="pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 select-none">
        <h1 className="whitespace-nowrap text-[120px] font-semibold uppercase tracking-[-0.08em] text-black/[0.03] md:text-[220px]">
          Velcor.ai
        </h1>
      </div>
    </footer>
  );
}