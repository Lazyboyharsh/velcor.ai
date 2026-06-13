import {
  ArrowRight,
  Sparkles,
  X,
  Clock3,
  CalendarDays,
  Loader2,
  Mail,
  PhoneCall,
  User,
  CheckCircle2,
  Globe2,
  TimerReset,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

// ─── Country list ─────────────────────────────────────────────────────────────
const COUNTRY_CODES = [
  { flag: "🇺🇸", label: "US", code: "+1" },
  { flag: "🇨🇦", label: "CA", code: "+1" },
  { flag: "🇬🇧", label: "UK", code: "+44" },
  { flag: "🇦🇺", label: "AU", code: "+61" },
  { flag: "🇩🇪", label: "DE", code: "+49" },
  { flag: "🇫🇷", label: "FR", code: "+33" },
  { flag: "🇸🇬", label: "SG", code: "+65" },
  { flag: "🇦🇪", label: "UAE", code: "+971" },
  { flag: "🇮🇳", label: "IN", code: "+91" },
  { flag: "🇧🇷", label: "BR", code: "+55" },
  { flag: "🇯🇵", label: "JP", code: "+81" },
  { flag: "🇨🇳", label: "CN", code: "+86" },
  { flag: "🇲🇽", label: "MX", code: "+52" },
  { flag: "🇿🇦", label: "ZA", code: "+27" },
  { flag: "🇳🇬", label: "NG", code: "+234" },
  { flag: "🇮🇩", label: "ID", code: "+62" },
  { flag: "🇵🇭", label: "PH", code: "+63" },
  { flag: "🇵🇰", label: "PK", code: "+92" },
  { flag: "🇧🇩", label: "BD", code: "+880" },
  { flag: "🇳🇿", label: "NZ", code: "+64" },
];

// ─── Slot definitions (UTC, displayed as EST) ─────────────────────────────────
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

function buildFutureDates() {
  return Array.from({ length: 5 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      shortDay:  d.toLocaleDateString("en-US", { weekday: "short" }),
      dayNum:    d.getDate(),
      label:     d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      dayOfWeek: d.getDay(),
    };
  });
}

export default function BookingPopup() {
  const [show,      setShow]      = useState(false);
  const [openForm,  setOpenForm]  = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [timeLeft,  setTimeLeft]  = useState(32 * 60 + 30);
  const [countryCode, setCountryCode] = useState("+1");

  const futureDates = useMemo(() => buildFutureDates(), []);

  const [selectedDate, setSelectedDate] = useState(() => futureDates[0]);
  const [selectedTime, setSelectedTime] = useState(() => {
    const slots = toEST(getSlotsForDay(futureDates[0].dayOfWeek));
    return slots[0] ?? "";
  });

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const timeSlots = useMemo(
    () => toEST(getSlotsForDay(selectedDate.dayOfWeek)),
    [selectedDate]
  );

  const isSunday   = selectedDate.dayOfWeek === 0;
  const isSaturday = selectedDate.dayOfWeek === 6;

  // Auto-detect country code
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data.country_calling_code) {
          const match = COUNTRY_CODES.find(
            (c) => c.code === data.country_calling_code
          );
          if (match) setCountryCode(match.code);
          else setCountryCode(data.country_calling_code);
        }
      })
      .catch(() => {});
  }, []);

  // Auto-show popup after 5s
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Countdown timer
  useEffect(() => {
    const t = setInterval(() => setTimeLeft((p) => (p <= 0 ? 0 : p - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const slots = toEST(getSlotsForDay(date.dayOfWeek));
    setSelectedTime(slots[0] ?? "");
  };

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    fd.append("access_key",       "c70b2c7c-243d-44d8-adc5-dcfcef157e6f");
    fd.append("subject",          "🚀 New Strategy Session Booking");
    fd.append("from_name",        "Velcor.ai Popup");
    fd.append("name",             formData.name);
    fd.append("email",            formData.email);
    fd.append("mobile",           `${countryCode} ${formData.mobile}`);
    fd.append("selected_date",    selectedDate.label);
    fd.append("selected_time",    selectedTime);
    fd.append("timezone",         "America/New_York (EST)");
    fd.append("local_booking_time", `${selectedDate.label} — ${selectedTime} EST`);
    fd.append("botcheck",         "");

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        const box = document.createElement("div");
        box.innerHTML = `
          <div style="position:fixed;top:24px;right:24px;z-index:99999;background:#111;color:#fff;
            padding:18px 20px;border-radius:18px;border:1px solid rgba(255,255,255,.08);
            box-shadow:0 20px 60px rgba(0,0,0,.35);min-width:280px;max-width:calc(100vw - 48px);font-family:sans-serif;
            animation:sIn .4s ease">
            <div style="display:flex;align-items:flex-start;gap:14px">
              <div style="width:44px;height:44px;border-radius:14px;background:#3b82f6;flex-shrink:0;
                display:flex;align-items:center;justify-content:center;font-size:20px">✅</div>
              <div>
                <h3 style="margin:0;font-size:16px;font-weight:700">Strategy Call Booked</h3>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.65)">
                  Velcor.ai team will contact you shortly.</p>
              </div>
            </div>
          </div>
          <style>@keyframes sIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}</style>`;
        document.body.appendChild(box);
        setTimeout(() => box.remove(), 4000);
        setFormData({ name: "", email: "", mobile: "" });
        setOpenForm(false);
        setShow(false);
      } else {
        alert("Failed to send booking");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <>
      <style>{`
        @keyframes popupFade {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bp-scrollbar::-webkit-scrollbar { width: 4px; }
        .bp-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .bp-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}</style>

      {/* ── MAIN POPUP ── */}
      <div
        style={{ animation: "popupFade 0.5s ease" }}
        className="fixed bottom-3 right-3 z-[9999] w-[calc(100vw-24px)] max-w-[360px] sm:bottom-6 sm:right-6 sm:w-[370px]"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black p-5 text-white shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:p-6">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

          {/* close */}
          <button
            onClick={() => setShow(false)}
            className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/50 transition hover:bg-white/20 hover:text-white"
          >
            <X size={15} />
          </button>

          {/* header */}
         <div className="flex items-center gap-3">
  <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white to-cyan-400 shadow-lg shadow-blue-500/30 overflow-hidden">
    
    <img
      src="/favicon.svg"
      alt="Velcor.ai Logo"
      className="h-8 w-8 object-contain"
    />

    {/* <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-green-500 ring-2 ring-black" /> */}
  </div>

  <div>
    <p className="text-sm font-semibold">Velcor.ai Team</p>
    <p className="text-xs text-white/60">Revenue Engineering</p>
  </div>
</div>

          <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl">
            Book your <span className="block text-blue-400">Strategy Call</span>
          </h3>
          <p className="mt-2 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
            Discover how we engineer scalable AI-powered revenue systems.
          </p>

          {/* slot preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs sm:text-sm">
              <CalendarDays size={14} className="text-blue-400" />
              <span>{selectedDate.label}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs sm:text-sm">
              <Clock3 size={14} className="text-blue-400" />
              <span>{isSunday ? "Closed" : selectedTime + " EST"}</span>
            </div>
          </div>

          {/* timer */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
            <div className="mb-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-400 transition-all duration-1000"
                style={{ width: `${(timeLeft / (32 * 60 + 30)) * 75}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/70 sm:text-sm">Few slots remaining</p>
              <p className="text-sm font-bold tabular-nums sm:text-base">{mm}:{ss}</p>
            </div>
          </div>

          <button
            onClick={() => setOpenForm(true)}
            className="group mt-4 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98] sm:py-4"
          >
            Schedule Strategy Call
            <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* ── MODAL ── */}
      {openForm && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center sm:p-4">
          <div className="bp-scrollbar relative max-h-[93dvh] w-full overflow-y-auto rounded-t-[2rem] border border-white/10 bg-[#0d0d0d] p-5 text-white shadow-2xl sm:max-h-[95vh] sm:max-w-lg sm:rounded-[2rem] sm:p-6">

            {/* drag handle on mobile */}
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

            <button
              onClick={() => setOpenForm(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/50 transition hover:bg-white/20 hover:text-white"
            >
              <X size={16} />
            </button>

            {/* header */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14">
                <CalendarDays size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">Schedule Call</h3>
                <p className="text-xs text-white/60 sm:text-sm">Choose your preferred slot</p>
              </div>
            </div>

            {/* DATE PICKER */}
            <div className="mt-5">
              <div className="mb-2.5 flex items-center gap-2 text-xs font-medium text-white/70 sm:text-sm">
                <CalendarDays size={14} className="text-blue-400" />
                Select Date
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {futureDates.map((date) => {
                  const active  = selectedDate.label === date.label;
                  const isSun   = date.dayOfWeek === 0;
                  const isSat   = date.dayOfWeek === 6;
                  return (
                    <button
                      key={date.label}
                      type="button"
                      disabled={isSun}
                      onClick={() => handleDateSelect(date)}
                      className={`relative rounded-2xl border py-3 text-center transition-all duration-300 sm:py-4 ${
                        isSun
                          ? "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-40"
                          : active
                          ? "border-blue-400 bg-blue-400 text-black shadow-lg shadow-blue-500/20"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <p className="text-[10px] font-medium sm:text-xs">{date.shortDay}</p>
                      <p className="mt-0.5 text-base font-bold sm:mt-1 sm:text-lg">{date.dayNum}</p>
                      {isSat && (
                        <p className={`mt-0.5 text-[8px] font-semibold sm:text-[9px] ${active ? "text-black/60" : "text-yellow-400/80"}`}>
                          ½ day
                        </p>
                      )}
                      {isSun && (
                        <p className="mt-0.5 text-[8px] font-semibold text-white/30 sm:text-[9px]">closed</p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIME SLOTS */}
            <div className="mt-5">
              <div className="mb-2.5 flex items-center gap-2 text-xs font-medium text-white/70 sm:text-sm">
                <TimerReset size={14} className="text-blue-400" />
                Select Time Slot
                <span className="ml-auto text-[10px] font-normal text-white/35 sm:text-xs">(Eastern Time)</span>
              </div>

              {isSunday ? (
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-7 text-xs text-white/40 sm:text-sm">
                  🚫 Closed on Sundays
                </div>
              ) : (
                <div className="bp-scrollbar max-h-[160px] overflow-y-auto rounded-2xl pr-1 sm:max-h-[200px]">
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-xl border px-2 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:px-3 sm:py-3 sm:text-sm ${
                          selectedTime === time
                            ? "border-blue-400 bg-blue-400 text-black shadow-lg shadow-blue-500/20"
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

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3 sm:space-y-4">
              {/* NAME */}
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input type="text" name="name" required placeholder="Your Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input type="email" name="email" required placeholder="Email Address"
                  value={formData.email} onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
              </div>

              {/* MOBILE */}
              <div className="grid grid-cols-[110px_1fr] gap-2 sm:grid-cols-[130px_1fr] sm:gap-3">
                <div className="relative">
                  <Globe2 size={14} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-blue-400" />
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-[#111] py-3.5 pl-8 pr-5 text-xs text-white outline-none transition focus:border-blue-400 sm:py-4 sm:pl-9 sm:text-sm"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={`${c.label}-${c.code}`} value={c.code}>
                        {c.flag} {c.label} {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-white/40">▼</div>
                </div>
                <div className="relative">
                  <PhoneCall size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input type="tel" name="mobile" required placeholder="Phone Number"
                    value={formData.mobile} onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 sm:py-4" />
                </div>
              </div>

              {/* SUBMIT */}
              <button type="submit" disabled={loading}
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-400 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:py-4">
                {loading ? (
                  <><Loader2 size={17} className="animate-spin" /> Booking...</>
                ) : (
                  <><CheckCircle2 size={17} /> Confirm Booking</>
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