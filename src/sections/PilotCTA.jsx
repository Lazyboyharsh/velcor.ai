import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Loader2,
  X,
  Globe,
  Mail,
  Building2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

// ─── Extended country list ─────────────────────────────────────────────────────
const COUNTRY_LIST = [
  { flag: "🇺🇸", label: "US", code: "+1",   name: "United States" },
  { flag: "🇨🇦", label: "CA", code: "+1",   name: "Canada" },
  { flag: "🇬🇧", label: "UK", code: "+44",  name: "United Kingdom" },
  { flag: "🇦🇺", label: "AU", code: "+61",  name: "Australia" },
  { flag: "🇩🇪", label: "DE", code: "+49",  name: "Germany" },
  { flag: "🇫🇷", label: "FR", code: "+33",  name: "France" },
  { flag: "🇸🇬", label: "SG", code: "+65",  name: "Singapore" },
  { flag: "🇦🇪", label: "UAE", code: "+971", name: "UAE" },
  { flag: "🇮🇳", label: "IN", code: "+91",  name: "India" },
  { flag: "🇧🇷", label: "BR", code: "+55",  name: "Brazil" },
  { flag: "🇯🇵", label: "JP", code: "+81",  name: "Japan" },
  { flag: "🇨🇳", label: "CN", code: "+86",  name: "China" },
  { flag: "🇲🇽", label: "MX", code: "+52",  name: "Mexico" },
  { flag: "🇿🇦", label: "ZA", code: "+27",  name: "South Africa" },
  { flag: "🇳🇬", label: "NG", code: "+234", name: "Nigeria" },
  { flag: "🇮🇩", label: "ID", code: "+62",  name: "Indonesia" },
  { flag: "🇵🇭", label: "PH", code: "+63",  name: "Philippines" },
  { flag: "🇵🇰", label: "PK", code: "+92",  name: "Pakistan" },
  { flag: "🇧🇩", label: "BD", code: "+880", name: "Bangladesh" },
  { flag: "🇳🇿", label: "NZ", code: "+64",  name: "New Zealand" },
];

const DISPLAY_TZ = "America/New_York";

const FULL_DAY_UTC = [
  "2026-01-01T14:00:00Z","2026-01-01T14:30:00Z",
  "2026-01-01T15:00:00Z","2026-01-01T15:30:00Z",
  "2026-01-01T16:00:00Z","2026-01-01T16:30:00Z",
  "2026-01-01T17:00:00Z","2026-01-01T17:30:00Z",
  "2026-01-01T18:00:00Z","2026-01-01T18:30:00Z",
  "2026-01-01T19:00:00Z","2026-01-01T19:30:00Z",
  "2026-01-01T20:00:00Z","2026-01-01T20:30:00Z",
  "2026-01-01T21:00:00Z","2026-01-01T21:30:00Z",
  "2026-01-01T22:00:00Z",
];

const HALF_DAY_UTC = [
  "2026-01-01T14:00:00Z","2026-01-01T14:30:00Z",
  "2026-01-01T15:00:00Z","2026-01-01T15:30:00Z",
  "2026-01-01T16:00:00Z","2026-01-01T16:30:00Z",
  "2026-01-01T17:00:00Z","2026-01-01T17:30:00Z",
];

function toEST(utcSlots) {
  return utcSlots.map((s) =>
    new Date(s).toLocaleTimeString([], {
      hour: "2-digit", minute: "2-digit", hour12: true, timeZone: DISPLAY_TZ,
    })
  );
}

function getSlotsForDay(dow) {
  if (dow === 0) return [];
  if (dow === 6) return HALF_DAY_UTC;
  return FULL_DAY_UTC;
}

export default function PilotCTA() {
  const benefits = [
    "Signal-based lead list built for your ICP",
    "AI-personalized outbound sequence",
    "CRM workflow and pipeline tracking",
    "Weekly optimization and reporting",
  ];

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [timeLeft, setTimeLeft] = useState(32 * 60 + 30);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((p) => (p <= 0 ? 0 : p - 1)), 1000);
    return () => clearInterval(timer);
  }, []);
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // ── Dates ──────────────────────────────────────────────────────────────────
  const upcomingDates = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return {
        day:       d.toLocaleDateString("en-US", { weekday: "short" }),
        dayNumber: d.getDate(),
        fullDate:  d.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
        dayOfWeek: d.getDay(),
      };
    });
  }, []);

  const [selectedDate, setSelectedDate] = useState(upcomingDates[0]);
  const [selectedTime, setSelectedTime] = useState("");
  const [openModal,    setOpenModal]    = useState(false);
  const [loading,      setLoading]      = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", company: "",
    countryCode: "+1", country: "United States",
  });

  // Auto country detect
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        const callingCode = data.country_calling_code || "+1";
        const countryName = data.country_name || "United States";
        setFormData((p) => ({ ...p, countryCode: callingCode, country: countryName }));
      })
      .catch(() => {});
  }, []);

  // Derive time slots from selected date
  const timeSlots = useMemo(
    () => toEST(getSlotsForDay(selectedDate.dayOfWeek)),
    [selectedDate]
  );

  const isSunday   = selectedDate.dayOfWeek === 0;
  const isSaturday = selectedDate.dayOfWeek === 6;

  // Set default time when date changes
  useEffect(() => {
    const slots = toEST(getSlotsForDay(selectedDate.dayOfWeek));
    setSelectedTime(slots[0] ?? "");
  }, [selectedDate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showSuccessToast = () => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="position:fixed;top:24px;right:24px;z-index:99999;background:#111;color:#fff;
        padding:18px 20px;border-radius:18px;border:1px solid rgba(255,255,255,.08);
        box-shadow:0 20px 60px rgba(0,0,0,.35);min-width:280px;max-width:calc(100vw - 48px);
        font-family:sans-serif;animation:slideIn .4s ease">
        <div style="display:flex;align-items:flex-start;gap:14px">
          <div style="width:44px;height:44px;border-radius:14px;background:#3b82f6;flex-shrink:0;
            display:flex;align-items:center;justify-content:center;font-size:20px">✅</div>
          <div>
            <h3 style="margin:0;font-size:16px;font-weight:700">Strategy Session Scheduled</h3>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.65)">
              Velcor.ai team will contact you shortly.</p>
          </div>
        </div>
      </div>
      <style>@keyframes slideIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}</style>`;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    fd.append("access_key",         "c70b2c7c-243d-44d8-adc5-dcfcef157e6f");
    fd.append("subject",            "🚀 New Strategy Session Booking");
    fd.append("from_name",          "Velcor.ai Website");
    fd.append("name",               formData.name);
    fd.append("email",              formData.email);
    fd.append("mobile",             `${formData.countryCode} ${formData.mobile}`);
    fd.append("company",            formData.company);
    fd.append("country",            formData.country);
    fd.append("selected_date",      selectedDate.fullDate);
    fd.append("selected_time",      selectedTime);
    fd.append("timezone",           userTimeZone);
    fd.append("local_booking_time", `${selectedDate.fullDate} - ${selectedTime}`);
    fd.append("botcheck",           "");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        showSuccessToast();
        setFormData((p) => ({ ...p, name: "", email: "", mobile: "", company: "" }));
        setOpenModal(false);
      } else {
        alert(data.message || "Failed to send booking");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .pilot-scrollbar::-webkit-scrollbar { width: 4px; }
        .pilot-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .pilot-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}</style>

      <section id="contact" className="relative overflow-hidden bg-[#f6f1e8] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* background */}
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">

          {/* ── LEFT ── */}
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur-md">
              Pilot Campaign
            </p>

            <h2 className="max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] text-black leading-[1.05]">
              Apply for a pilot campaign
              <span className="block font-serif italic font-normal">
                built around your offer
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              We'll map your ICP, identify buying signals, engineer outbound systems, connect CRM
              automations, and launch scalable revenue infrastructure.
            </p>

            <div className="mt-8 grid gap-3 sm:gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3.5 backdrop-blur-xl transition-all duration-300 hover:translate-x-2 hover:border-blue-400/20 hover:bg-white sm:gap-4 sm:py-4"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-black shadow-lg shadow-blue-400/20 sm:h-10 sm:w-10">
                    <Check size={16} />
                  </span>
                  <span className="text-sm font-semibold text-black/75">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT CARD ── */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-7">
            <div className="absolute -top-24 right-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

            {/* header */}
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="relative h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14">
                <span className="absolute -right-1 top-0 h-3 w-3 animate-pulse rounded-full bg-green-500 ring-2 ring-black sm:h-3.5 sm:w-3.5" />
              </div>
              <div>
                <p className="text-base font-semibold sm:text-lg">Velcor.ai Team</p>
                <p className="text-xs text-white/60 sm:text-sm">Revenue Engineering</p>
              </div>
            </div>

            <h3 className="relative mt-6 text-2xl font-semibold leading-tight tracking-tight sm:mt-8 sm:text-4xl">
              Book your
              <span className="block text-blue-400">1-1 Strategy Call</span>
            </h3>

            <p className="relative mt-3 text-sm leading-6 text-white/70 sm:mt-5 sm:text-base sm:leading-7">
              Schedule a strategy session and discover how we engineer predictable revenue systems.
            </p>

            {/* Timer */}
            <div className="relative mt-5 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-2xl sm:mt-7 sm:p-5">
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all duration-1000"
                  style={{ width: `${(timeLeft / (32 * 60 + 30)) * 78}%` }}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-white/50 sm:text-sm">Availability Status</p>
                  <p className="mt-0.5 text-sm font-semibold sm:text-base">Few slots remaining</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-1.5 text-base font-bold tabular-nums sm:px-4 sm:py-2 sm:text-lg">
                  {minutes}:{seconds}
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="relative mt-5 sm:mt-7">
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/60 sm:text-sm">
                <CalendarDays size={14} />
                Select Available Date
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {upcomingDates.map((date) => {
                  const active = selectedDate.fullDate === date.fullDate;
                  const isSun  = date.dayOfWeek === 0;
                  const isSat  = date.dayOfWeek === 6;
                  return (
                    <button
                      key={date.fullDate}
                      disabled={isSun}
                      onClick={() => setSelectedDate(date)}
                      className={`relative rounded-2xl border py-3 text-center transition-all duration-300 sm:py-4 ${
                        isSun
                          ? "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-40"
                          : active
                          ? "border-blue-400 bg-blue-400 text-black shadow-xl shadow-blue-500/30"
                          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      }`}
                    >
                      <p className="text-[10px] font-medium sm:text-xs">{date.day}</p>
                      <p className="mt-0.5 text-lg font-bold sm:mt-1 sm:text-2xl">{date.dayNumber}</p>
                      {isSat && !active && (
                        <p className="mt-0.5 text-[8px] font-semibold text-yellow-400/80 sm:mt-1 sm:text-[10px]">½ day</p>
                      )}
                      {isSun && (
                        <p className="mt-0.5 text-[8px] font-semibold text-white/30 sm:mt-1 sm:text-[10px]">closed</p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time */}
            <div className="mt-5 sm:mt-7">
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/60 sm:text-sm">
                <Clock3 size={14} />
                Select Time Slot
                <span className="ml-auto text-[10px] text-white/35 sm:text-xs">(Eastern Time)</span>
              </div>

              {isSunday ? (
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-7 text-xs text-white/40 sm:text-sm">
                  🚫 Closed on Sundays
                </div>
              ) : (
                <div className="pilot-scrollbar max-h-[160px] overflow-y-auto rounded-2xl pr-1 sm:max-h-[220px]">
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-xl border px-2 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:px-3 sm:py-3 sm:text-sm ${
                          selectedTime === time
                            ? "border-blue-400 bg-blue-400 text-black"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => setOpenModal(true)}
              className="group relative mt-6 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98] sm:mt-8 sm:py-5"
            >
              Schedule A Strategy Session
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="relative mt-5 border-t border-white/10 pt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35 sm:mt-7 sm:pt-5 sm:text-xs">
              Powered by Velcor.ai
            </p>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center sm:p-4">
          <div className="pilot-scrollbar relative max-h-[93dvh] w-full overflow-y-auto rounded-t-[2rem] border border-white/10 bg-[#0d0d0d] p-5 text-white shadow-2xl sm:max-h-[95vh] sm:max-w-xl sm:rounded-[2rem] sm:p-8">

            {/* drag handle */}
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/50 transition hover:bg-white/20 hover:text-white"
            >
              <X size={16} />
            </button>

            <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Schedule Your Call
            </h3>
            <p className="mt-2 text-xs text-white/60 sm:mt-3 sm:text-base">
              Fill in your details and our team will reach out.
            </p>

            {/* selected slot chips */}
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
                📅 {selectedDate.fullDate}
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
                ⏰ {selectedTime}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3 sm:mt-8 sm:space-y-5">
              {/* NAME */}
              <div className="relative">
                <Sparkles size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input type="text" name="name" required placeholder="Your Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input type="email" name="email" required placeholder="Email Address"
                  value={formData.email} onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
              </div>

              {/* MOBILE — editable country code select */}
              <div className="grid grid-cols-[110px_1fr] gap-2 sm:grid-cols-[130px_1fr] sm:gap-3">
                <div className="relative">
                  <Globe size={14} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-blue-400" />
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData((p) => ({ ...p, countryCode: e.target.value }))}
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-[#111] py-3.5 pl-8 pr-5 text-xs text-white outline-none transition focus:border-blue-400 sm:py-4 sm:pl-9 sm:text-sm"
                  >
                    {COUNTRY_LIST.map((c) => (
                      <option key={`${c.label}-${c.code}`} value={c.code}>
                        {c.flag} {c.label} {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-white/40">▼</div>
                </div>
                <div className="relative">
                  <PhoneCall size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input type="tel" name="mobile" required placeholder="Mobile Number"
                    value={formData.mobile} onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
                </div>
              </div>

              {/* COMPANY */}
              <div className="relative">
                <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input type="text" name="company" placeholder="Company Name (optional)"
                  value={formData.company} onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
              </div>

              {/* DETECTED COUNTRY */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5">
                <ShieldCheck size={16} className="flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-[10px] text-white/50 sm:text-xs">Detected Country</p>
                  <p className="text-xs font-medium sm:text-sm">{formData.country}</p>
                </div>
              </div>

              {/* SUBMIT */}
              <button type="submit" disabled={loading}
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-400 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:py-5">
                {loading ? (
                  <><Loader2 size={18} className="animate-spin" /> Booking Session...</>
                ) : (
                  <><CheckCircle2 size={18} /> Confirm Strategy Session</>
                )}
              </button>

              <p className="text-center text-[11px] leading-5 text-white/40 sm:text-xs">
                Your information is encrypted and securely sent to Velcor.ai team.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}