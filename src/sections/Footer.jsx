import { Link } from "react-router-dom";

const VELCOR_URL = "https://velcor.ai/";

const AI_PROMPT = `Summarize and analyze the key insights from "${VELCOR_URL}".
Explain what Velcor.ai does, who it serves, its core services, positioning,
revenue/GTM systems, workflows, and key differentiators.
Use ${VELCOR_URL} as the primary source and cite it wherever relevant.`;

const AI_TOOLS = [
  {
    name: "ChatGPT",
    description: "Summarize Velcor.ai with ChatGPT",
    logo: " \chatgpt-icon.webp",
    url: `https://chatgpt.com/?q=${encodeURIComponent(AI_PROMPT)}`,
  },
  {
    name: "Claude",
    description: "Analyze Velcor.ai with Claude",
    logo: "https://cdn.simpleicons.org/claude",
    url: `https://claude.ai/new?q=${encodeURIComponent(AI_PROMPT)}`,
  },
  // {
  //   name: "Gemini",
  //   description: "Explore Velcor.ai with Gemini",
  //   logo: "https://cdn.simpleicons.org/googlegemini",
  //   url: `https://gemini.google.com/app?q=${encodeURIComponent(AI_PROMPT)}`,
  // },
  {
    name: "Perplexity",
    description: "Research Velcor.ai with Perplexity",
    logo: "https://cdn.simpleicons.org/perplexity",
    url: `https://www.perplexity.ai/search?q=${encodeURIComponent(AI_PROMPT)}`,
  },
  {
    name: "Grok",
    description: "Ask Grok about Velcor.ai",
    logo: "/grok-icon.webp",
    url: `https://grok.com/?q=${encodeURIComponent(AI_PROMPT)}`,
  },
  // {
  //   name: "Copilot",
  //   description: "Explore Velcor.ai with Microsoft Copilot",
  //   logo: "/copilot-icon.webp",
  //   url: `https://copilot.microsoft.com/?q=${encodeURIComponent(AI_PROMPT)}`,
  // },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#f6f1e8] px-5 pt-16 pb-6">
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:26px_26px]" />
      <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-black/10 pb-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.35fr]">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Velcor.ai Logo" className="h-12 w-auto object-contain" />
            </Link>

            <div className="m-3 flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#166534]/40" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#166534] shadow-[0_0_10px_rgba(22,101,52,0.45)]" />
              </span>
              <span className="text-sm font-bold tracking-tight text-black">
                Currently onboarding new B2B clients
              </span>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-black/55">
              AI-native revenue infrastructure for outbound systems,
              workflow automation, CRM architecture, revenue operations,
              analytics, and scalable pipeline growth.
            </p>

            <Link
              to="/schedule-meeting"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
            >
              Claim Free Revenue Audit
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
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
              <li>Revenue Systems</li>
              <li>AI Automation</li>
              <li>CRM Optimization</li>
              <li>Workflow Infrastructure</li>
              <li>Pipeline Analytics</li>
            </ul>
          </div>

          {/* AI + CONTACT */}
          <div>
            <p className="mb-2 text-sm font-semibold text-black">Explore with AI</p>
            <p className="mb-5 max-w-xs text-xs leading-5 text-black/45">
              Ask your preferred AI assistant to summarize and analyze
              Velcor.ai using the website as the primary source.
            </p>

            <div className="grid grid-cols-3 gap-2.5">
              {AI_TOOLS.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tool.description}
                  title={tool.description}
                  className="group flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white/85 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white hover:shadow-lg"
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    loading="lazy"
                    className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            <p className="mt-3 text-[10px] leading-4 text-black/35">
              AI assistants open in a new tab with a prepared Velcor.ai research prompt.
            </p>

            <div className="mt-7 space-y-2 text-[14px] text-black/55">
              <p className="font-semibold text-black/75">Contact</p>
              <a href="mailto:team@velcor.ai" className="block transition hover:text-black">
                team@velcor.ai
              </a>
              <p>Delaware, United States</p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/velcor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Velcor.ai on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/55 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative border-t border-black/10 py-8">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <p className="text-sm text-black/50">© 2026 Velcor.ai. All rights reserved.</p>
              <p className="mt-2 text-xs text-black/40">
                Built for modern B2B teams that want systems, not guesswork.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black/50">
              <Link to="/privacy-policy" className="transition hover:text-black">Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition hover:text-black">Terms of Service</Link>
              <Link to="/contact" className="transition hover:text-black">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-35px] left-1/2 -translate-x-1/2 select-none">
        <h1 className="whitespace-nowrap text-[80px] font-semibold uppercase tracking-[-0.09em] text-black/[0.025] md:text-[140px] lg:text-[180px]">
          Velcor.ai
        </h1>
      </div>
    </footer>
  );
}

