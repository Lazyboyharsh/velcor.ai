import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#f6f1e8] px-5 pt-16 pb-6">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:26px_26px]" />

      {/* BLUR EFFECTS */}
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* CTA SECTION */}
        {/* <section className="mb-16 rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur-md lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Currently onboarding new B2B clients
              </span>

              <h2 className="mt-4 text-3xl font-semibold text-black lg:text-4xl">
                Ready to Build Predictable Revenue?
              </h2>

              <p className="mt-3 max-w-2xl text-black/60">
                AI-powered outbound systems, RevOps automation,
                CRM architecture, and scalable revenue infrastructure.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            >
              Claim Free Revenue Audit
            </Link>

          </div>
        </section> */}

        {/* FOOTER GRID */}
        <div className="grid gap-12 border-b border-black/10 pb-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* BRAND */}
          <div>

            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Velcor.ai Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-xs font-medium text-black/60">
                Currently onboarding new B2B clients
              </span>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-black/55">
              AI-native revenue infrastructure for outbound systems,
              workflow automation, CRM architecture,
              revenue operations, analytics, and scalable
              pipeline growth.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Claim Free Revenue Audit

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

          </div>

          {/* COMPANY */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">
              Company
            </p>

            <ul className="space-y-4 text-[15px] text-black/55">
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-black"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-black"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/process"
                  className="transition hover:text-black"
                >
                  Process
                </Link>
              </li>

              <li>
                <Link
                  to="/infrastructure"
                  className="transition hover:text-black"
                >
                  Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="transition hover:text-black"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">
              Resources
            </p>

            <ul className="space-y-4 text-[15px] text-black/55">
              <li className="transition hover:text-black">
                Revenue Systems
              </li>

              <li className="transition hover:text-black">
                AI Automation
              </li>

              <li className="transition hover:text-black">
                CRM Optimization
              </li>

              <li className="transition hover:text-black">
                Workflow Infrastructure
              </li>

              <li className="transition hover:text-black">
                Pipeline Analytics
              </li>
            </ul>
          </div>
          {/* CONTACT */}
          <div>
            <p className="mb-6 text-sm font-semibold text-black">
              Contact
            </p>

            <div className="space-y-5 text-[15px] leading-8 text-black/55">

              <p>team@velcor.ai</p>

              <p>Delaware, United States</p>

              {/* SOCIALS */}
              <div className="flex flex-wrap items-center gap-2 pt-2">

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/velcor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X */}
                {/* <a
                  href="https://x.com/Velcor_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a> */}

                {/* YOUTUBE */}
                {/* <a
                  href="https://www.youtube.com/@Velcorai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a> */}

                {/* REDDIT */}
                {/* <a
                  href="https://www.reddit.com/user/Velcorai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M440.3 203.5c-15 0-28.2 6.2-37.7 16.1-37.1-25.4-86.4-41.6-141.1-43.3l29.2-92.1 79.5 18.7c0.2 20.6 16.9 37.2 37.5 37.2 20.7 0 37.5-16.8 37.5-37.5S428.4 65 407.7 65c-14.7 0-27.3 8.4-33.4 20.7l-89.3-21c-5.5-1.3-11.1 1.9-12.8 7.3l-32.2 101.5c-55.2 1.1-105.2 17.4-142.8 43.2-9.5-9.5-22.6-15.4-37-15.4C27 201.3 0 228.3 0 261.7c0 22.7 12.5 42.4 31 53.1-1 6.4-1.5 13-1.5 19.7 0 90.2 101.6 163.5 226.5 163.5s226.5-73.3 226.5-163.5c0-6.5-.5-12.9-1.4-19.1 19.2-10.6 32.2-31 32.2-54.4 0-33.4-27-60.5-60.3-60.5zM155.6 315.4c0-20.8 16.9-37.7 37.7-37.7 20.8 0 37.7 16.9 37.7 37.7s-16.9 37.7-37.7 37.7c-20.8 0-37.7-16.9-37.7-37.7zm204.8 88.3c-25.9 25.9-75.5 27.8-104.4 27.8-28.9 0-78.5-1.9-104.4-27.8-5.1-5.1-5.1-13.4 0-18.5 5.1-5.1 13.4-5.1 18.5 0 17.2 17.2 54.6 20 85.9 20 31.3 0 68.7-2.8 85.9-20 5.1-5.1 13.4-5.1 18.5 0 5.1 5.1 5.1 13.4 0 18.5zm-41.7-50.6c-20.8 0-37.7-16.9-37.7-37.7s16.9-37.7 37.7-37.7c20.8 0 37.7 16.9 37.7 37.7s-16.9 37.7-37.7 37.7z" />
                  </svg>
                </a> */}

                {/* INSTAGRAM */}
                {/* <a
                  href="https://www.instagram.com/velcor.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a> */}

              </div>

            </div>
          </div>

        </div>
        {/* BOTTOM */}
        <div className="relative border-t border-black/10 py-8">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

            {/* COPYRIGHT */}
            <div>
              <p className="text-sm text-black/50">
                © 2026 Velcor.ai. All rights reserved.
              </p>

              <p className="mt-2 text-xs text-black/40">
                Built for modern B2B teams that want systems, not guesswork.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black/50">

              <Link
                to="/privacy-policy"
                className="transition hover:text-black"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className="transition hover:text-black"
              >
                Terms of Service
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-black"
              >
                Contact
              </Link>

            </div>

            {/* CREDIT */}
            <div className="text-sm text-[#F4F0E8]/50">
  Design & Developed by{" "}
  <a
    href="https://www.lazyworkz.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#F4F0E8] transition hover:text-[#F4F0E8]/80"
  >
    LazyWorkz
  </a>
</div>

          </div>
        </div>

      </div>

      {/* HUGE BACKGROUND TEXT */}
      <div className="pointer-events-none absolute bottom-[-35px] left-1/2 -translate-x-1/2 select-none">
        <h1 className="whitespace-nowrap text-[80px] font-semibold uppercase tracking-[-0.08em] text-black/[0.025] md:text-[140px] lg:text-[180px]">
          Velcor.ai
        </h1>
      </div>

    </footer>
  );
}