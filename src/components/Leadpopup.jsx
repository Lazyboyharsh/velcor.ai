import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const WEB3FORMS_ACCESS_KEY =
  import.meta.env?.VITE_WEB3FORMS_KEY ||
  "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";

const HIDE_ON_PATHS = ["/schedule-meeting"]; // pages where the popup never opens
const FALLBACK_DELAY_MS = 5000; // auto-open after 10s
const MIN_FILL_TIME_MS = 4000;
const TOTAL_STEPS = 5;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "throwawaymail.com",
  "maildrop.cc",
  "dispostable.com",
  "fakeinbox.com",
  "mohmal.com",
]);

const PERSONAL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "live.com",
  "msn.com",
  "rediffmail.com",
  "gmx.com",
  "zoho.com",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FOCUS_OPTIONS = [
  "Outbound",
  "RevOps",
  "CRM automation",
  "All of the above",
];

const TEAM_SIZES = ["Just me", "2–10", "11–50", "50+"];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const getEmailDomain = (email) =>
  email.split("@")[1]?.toLowerCase().trim();

const cleanHost = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(
      /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
    );
    if (!url.hostname.includes(".")) return null;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (PERSONAL_DOMAINS.has(host)) return null;
    return host;
  } catch {
    return null;
  }
};

const looksLikeSpamText = (text) =>
  /https?:\/\/|www\.|<|>/i.test(text);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

/**
 * Props:
 *  - fallbackDelay (ms): opens this long after every page load / refresh (default 10s)
 *  - exitIntent (default false): also open when the cursor leaves through the top of the window
 *
 * You can also open it from anywhere, e.g. a button:
 *   window.dispatchEvent(new Event("velcor:open-lead-popup"));
 */
export default function LeadPopup({
  exitIntent = false,
  fallbackDelay = FALLBACK_DELAY_MS,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // drives the enter animation
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    title: "",
    targets: "",
    focus: "",
    teamSize: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const openedAt = useRef(0);
  const shownThisSession = useRef(false);
  const firstInputRef = useRef(null);

  /* ---------- opening logic ---------- */

  const openPopup = useCallback((force = false) => {
    if (shownThisSession.current && !force) return;
    shownThisSession.current = true;
    openedAt.current = Date.now();
    setOpen(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setVisible(true))
    );
  }, []);

  useEffect(() => {
    if (HIDE_ON_PATHS.includes(pathname)) return undefined;

    const onMouseOut = (e) => {
      // Cursor left through the top edge of the viewport
      if (e.clientY <= 0 && !e.relatedTarget) openPopup();
    };

    if (exitIntent) document.addEventListener("mouseout", onMouseOut);

    const timer = setTimeout(() => openPopup(), fallbackDelay);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(timer);
    };
  }, [exitIntent, fallbackDelay, pathname, openPopup]);

  useEffect(() => {
    const manual = () => openPopup(true);
    window.addEventListener("velcor:open-lead-popup", manual);
    return () =>
      window.removeEventListener("velcor:open-lead-popup", manual);
  }, [openPopup]);

  /* ---------- closing ---------- */

  const closePopup = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 250);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closePopup]);

  // focus first field when step changes
  useEffect(() => {
    if (open && visible) {
      const t = setTimeout(() => firstInputRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [step, open, visible, done]);

  /* ---------- form handling ---------- */

  const update = (name, value) => {
    if (error) setError("");
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleChange = (e) => update(e.target.name, e.target.value);

  const validateStep = () => {
    if (step === 0) {
      const first = form.firstName.trim();
      const last = form.lastName.trim();
      if (first.length < 2 || last.length < 1)
        return "Enter your first and last name.";
      if (
        looksLikeSpamText(first + last) ||
        /^[\d\W]+$/.test(first)
      )
        return "Enter your real name.";
    }

    if (step === 1) {
      const email = form.email.trim();
      const domain = getEmailDomain(email);
      if (!EMAIL_REGEX.test(email) || !domain)
        return "Enter a valid email address.";
      if (DISPOSABLE_DOMAINS.has(domain))
        return "Temporary email addresses aren't accepted. Use a different email.";
    }

    if (step === 2) {
      if (form.company.trim().length < 2)
        return "Enter your company name.";
      if (looksLikeSpamText(form.company))
        return "Company name can't contain links.";
      if (!cleanHost(form.website))
        return "Enter your company website, for example velcor.ai.";
      if (form.title.trim().length < 2)
        return "Enter your job title.";
    }

    if (step === 3) {
      if (form.targets.trim().length < 5)
        return "Tell us who you want to reach, even in a few words.";
      if (looksLikeSpamText(form.targets))
        return "Please remove links from this field.";
    }

    if (step === 4) {
      if (!form.focus) return "Pick the area you want help with.";
      if (!form.teamSize) return "Pick your sales team size.";
    }

    return "";
  };

  const submit = async () => {
    // Bot checks. Pretend success so bots learn nothing.
    if (honeypot || Date.now() - openedAt.current < MIN_FILL_TIME_MS) {
      setDone(true);
      return;
    }

    const email = form.email.trim();
    const emailDomain = getEmailDomain(email);
    const siteDomain = cleanHost(form.website);

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Free Leads Request - Velcor.ai",
          from_name: "Velcor.ai Website",
          name: `${form.firstName.trim()} ${form.lastName.trim()}`,
          first_name: form.firstName.trim(),
          last_name: form.lastName.trim(),
          email,
          company: form.company.trim(),
          company_website: siteDomain,
          job_title: form.title.trim(),
          target_audience: form.targets.trim(),
          focus_area: form.focus,
          sales_team_size: form.teamSize,
          email_type: PERSONAL_DOMAINS.has(emailDomain)
            ? "personal"
            : "work",
          email_matches_website:
            emailDomain === siteDomain ||
            emailDomain.endsWith("." + siteDomain)
              ? "yes"
              : "no",
          request_type: "50 Free Leads Offer",
          source: "Velcor.ai Exit Popup",
          page: window.location.pathname,
          botcheck: "",
          message: "New 50 free leads request from the Velcor.ai popup.",
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send request.");
      }

      setDone(true);
    } catch (err) {
      setError(
        err.message || "Unable to send request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (loading) return;

    const problem = validateStep();
    if (problem) {
      setError(problem);
      return;
    }

    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      submit();
    }
  };

  const handleBack = () => {
    if (error) setError("");
    setStep((s) => Math.max(0, s - 1));
  };

  if (!open) return null;

  /* ---------- styles ---------- */

  const inputClass =
    "h-[52px] w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15";

  const labelClass = "mb-1.5 block text-xs font-semibold text-black/80";

  const chipClass = (active) =>
    "rounded-full border px-4 py-2.5 text-xs font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 " +
    (active
      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20"
      : "border-black/10 bg-white text-black/70 hover:border-blue-300 hover:text-black");

  const titles = [
    "Before you go, want 50 free leads?",
    "Where should we send them?",
    "Tell us about your company",
    "Who do you want to reach?",
    "Last thing: where should we focus?",
  ];

  const subtitle =
    step === 0
      ? "Tell us a bit about your target accounts and we'll put together 50 accounts and contacts, with an outreach plan your team can start working today. No strings attached."
      : null;

  /* ---------- render ---------- */

  return (
    <div
      className={
        "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 " +
        (visible ? "opacity-100" : "opacity-0")
      }
      role="dialog"
      aria-modal="true"
      aria-labelledby="velcor-popup-title"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={closePopup}
      />

      <div
        className={
          "relative grid max-h-[92vh] w-full max-w-[900px] overflow-hidden rounded-3xl bg-[#f6f1e8] shadow-2xl shadow-black/30 transition-all duration-300 md:grid-cols-[2fr_3fr] " +
          (visible
            ? "translate-y-0 scale-100"
            : "translate-y-4 scale-[0.97]")
        }
      >
        {/* ---------------- left panel ---------------- */}
        <aside className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-[#0b1a4a] p-9 text-white md:flex md:flex-col">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative">
            <p className="text-[5.5rem] font-semibold leading-none tracking-[-0.06em]">
              50
            </p>
            <p className="mt-1 font-serif text-2xl italic tracking-[-0.02em]">
              free leads
            </p>
            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-white/75">
              Accounts, contacts and an outreach plan for your team. No
              strings attached.
            </p>
          </div>

          {/* sample lead card */}
          <div className="relative mt-auto pb-2">
            <div className="mx-auto h-3 w-[86%] rounded-t-xl bg-white/10" />
            <div className="mx-auto h-3 w-[93%] rounded-t-xl bg-white/15" />
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-xl shadow-black/20">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[11px] font-bold text-blue-700">
                VP
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold text-black">
                  VP of Sales
                </span>
                <span className="block truncate text-[11px] text-black/50">
                  Northwind SaaS · Series B
                </span>
              </span>
            </div>
          </div>
        </aside>

        {/* ---------------- right panel ---------------- */}
        <div className="relative flex min-h-[460px] flex-col overflow-y-auto p-6 sm:p-9">
          {/* mobile mini-header */}
          <div className="mb-5 flex items-baseline gap-2 md:hidden">
            <span className="text-3xl font-semibold tracking-[-0.05em] text-blue-700">
              50
            </span>
            <span className="font-serif text-lg italic text-blue-700">
              free leads
            </span>
          </div>

          {/* progress + close */}
          <div className="flex items-center gap-4">
            <div
              className="flex flex-1 gap-1.5"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-valuenow={done ? TOTAL_STEPS : step + 1}
            >
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <span
                  key={i}
                  className={
                    "h-1 flex-1 rounded-full transition-colors duration-500 " +
                    (done || i <= step ? "bg-blue-600" : "bg-black/10")
                  }
                />
              ))}
            </div>

            <span className="text-xs tabular-nums text-black/45">
              {done ? TOTAL_STEPS : step + 1} / {TOTAL_STEPS}
            </span>

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 hover:bg-black/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
            >
              <X size={16} />
            </button>
          </div>

          {done ? (
            /* ---------- success ---------- */
            <div className="flex flex-1 flex-col justify-center py-10">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check size={22} />
              </span>
              <h2
                id="velcor-popup-title"
                className="text-2xl font-semibold tracking-[-0.03em] text-black sm:text-3xl"
              >
                Request received.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                We'll build your list of 50 accounts and contacts and
                send it to{" "}
                <span className="font-medium text-black/80">
                  {form.email.trim()}
                </span>
                . Want to talk it through live? Book a time and we'll
                walk you through the outreach plan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      setOpen(false);
                      navigate("/schedule-meeting");
                    }, 200);
                  }}
                  className="group/btn flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Book a call
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={closePopup}
                  className="h-12 rounded-full bg-black/5 px-7 text-sm font-semibold text-black/70 transition hover:bg-black/10"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* ---------- steps ---------- */
            <form
              onSubmit={handleNext}
              noValidate
              className="flex flex-1 flex-col pt-9"
            >
              {/* honeypot */}
              <input
                type="text"
                name="company_fax"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <h2
                id="velcor-popup-title"
                className="max-w-md text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.035em] text-black sm:text-[1.9rem]"
              >
                {titles[step]}
              </h2>

              {subtitle && (
                <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                  {subtitle}
                </p>
              )}

              <div
                key={step}
                className="mt-7 animate-[popStep_0.35s_ease_both]"
              >
                {step === 0 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lp-first" className={labelClass}>
                        First name
                      </label>
                      <input
                        ref={firstInputRef}
                        id="lp-first"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Sara"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="lp-last" className={labelClass}>
                        Last name
                      </label>
                      <input
                        id="lp-last"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Bennett"
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <label htmlFor="lp-email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      ref={firstInputRef}
                      id="lp-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sara@yourcompany.com"
                      className={inputClass}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lp-company" className={labelClass}>
                        Company
                      </label>
                      <input
                        ref={firstInputRef}
                        id="lp-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme SaaS"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="lp-title" className={labelClass}>
                        Title
                      </label>
                      <input
                        id="lp-title"
                        name="title"
                        type="text"
                        autoComplete="organization-title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Head of Sales"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="lp-site" className={labelClass}>
                        Company website
                      </label>
                      <input
                        id="lp-site"
                        name="website"
                        type="text"
                        inputMode="url"
                        autoComplete="url"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="acme.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label htmlFor="lp-targets" className={labelClass}>
                      Your ideal customers: roles, industries, company
                      size
                    </label>
                    <textarea
                      ref={firstInputRef}
                      id="lp-targets"
                      name="targets"
                      rows={4}
                      value={form.targets}
                      onChange={handleChange}
                      placeholder="e.g. CROs and VPs of Sales at US B2B SaaS companies with 50–500 employees"
                      className={
                        inputClass + " h-auto resize-none py-3.5 leading-6"
                      }
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <fieldset>
                      <legend className={labelClass}>
                        What do you need most help with?
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {FOCUS_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            aria-pressed={form.focus === opt}
                            onClick={() => update("focus", opt)}
                            className={chipClass(form.focus === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className={labelClass}>
                        How big is your sales team?
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {TEAM_SIZES.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            aria-pressed={form.teamSize === opt}
                            onClick={() => update("teamSize", opt)}
                            className={chipClass(form.teamSize === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>

              {error && (
                <p role="alert" className="mt-4 text-xs text-red-600">
                  {error}
                </p>
              )}

              <div className="mt-auto flex items-center gap-3 pt-8">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={loading}
                    className="flex h-12 items-center gap-2 rounded-full bg-black/5 px-6 text-sm font-semibold text-black/70 transition hover:bg-black/10 disabled:opacity-60"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group/btn flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : step === 0 ? (
                    <>
                      Let's go
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </>
                  ) : step === TOTAL_STEPS - 1 ? (
                    <>
                      Get my 50 leads
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes popStep {
            from { opacity: 0; transform: translateX(14px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            [class*="popStep"] { animation: none !important; }
          }
        `}
      </style>
    </div>
  );
}