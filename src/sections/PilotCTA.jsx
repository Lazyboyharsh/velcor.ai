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

export default function PilotCTA() {
  const benefits = [
    "Signal-based lead list built for your ICP",
    "AI-personalized outbound sequence",
    "CRM workflow and pipeline tracking",
    "Weekly optimization and reporting",
  ];

  // ==================================================
  // USER TIMEZONE
  // ==================================================
  const userTimeZone =
    Intl.DateTimeFormat().resolvedOptions()
      .timeZone;

  // ==================================================
  // TIMER
  // ==================================================
  const [timeLeft, setTimeLeft] = useState(
    32 * 60 + 30
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(timeLeft % 60).padStart(
    2,
    "0"
  );

  // ==================================================
  // AUTO FUTURE DATES
  // ==================================================
  const upcomingDates = useMemo(() => {
    const dates = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date();

      date.setDate(date.getDate() + i);

      dates.push({
        day: date.toLocaleDateString("en-US", {
          weekday: "short",
        }),

        dayNumber: date.getDate(),

        fullDate:
          date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
      });
    }

    return dates;
  }, []);

  // ==================================================
  // STATES
  // ==================================================
  const [selectedDate, setSelectedDate] =
    useState(upcomingDates[0]);

  const [selectedTime, setSelectedTime] =
    useState("");

  const [openModal, setOpenModal] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    countryCode: "+1",
    country: "United States",
  });

  // ==================================================
  // AUTO COUNTRY DETECT
  // ==================================================
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,

          country:
            data.country_name ||
            "United States",

          countryCode:
            data.country_calling_code || "+1",
        }));
      })
      .catch(() => {
        console.log("Country detection failed");
      });
  }, []);

  // ==================================================
  // UTC BASE SLOTS
  // ==================================================
  const baseSlots = [
    "2026-01-01T15:00:00Z",
    "2026-01-01T16:00:00Z",
    "2026-01-01T17:30:00Z",
    "2026-01-01T19:00:00Z",
    "2026-01-01T20:30:00Z",
    "2026-01-01T22:00:00Z",
  ];

  // ==================================================
  // AUTO LOCAL TIME CONVERSION
  // ==================================================
  const timeSlots = baseSlots.map((slot) => {
    return new Date(slot).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: userTimeZone,
      }
    );
  });

  // ==================================================
  // DEFAULT SLOT
  // ==================================================
  useEffect(() => {
    if (timeSlots.length > 0) {
      setSelectedTime(timeSlots[0]);
    }
  }, []);

  // ==================================================
  // FORM CHANGE
  // ==================================================
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // ==================================================
  // SUCCESS TOAST
  // ==================================================
  const showSuccessToast = () => {
    const successBox =
      document.createElement("div");

    successBox.innerHTML = `
      <div style="
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 99999;
        background: #111111;
        color: white;
        padding: 18px 20px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        min-width: 320px;
        font-family: sans-serif;
        animation: slideIn .4s ease;
      ">
        <div style="
          display:flex;
          align-items:flex-start;
          gap:14px;
        ">
          
          <div style="
            width:44px;
            height:44px;
            border-radius:14px;
            background:#3b82f6;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
          ">
            ✅
          </div>

          <div>
            <h3 style="
              margin:0;
              font-size:16px;
              font-weight:700;
            ">
              Strategy Session Scheduled
            </h3>

            <p style="
              margin:6px 0 0;
              font-size:13px;
              line-height:1.6;
              color:rgba(255,255,255,0.65);
            ">
              Velcor.ai team will contact you shortly.
            </p>
          </div>
        </div>
      </div>

      <style>
        @keyframes slideIn {
          from {
            opacity:0;
            transform:translateY(-20px);
          }

          to {
            opacity:1;
            transform:translateY(0);
          }
        }
      </style>
    `;

    document.body.appendChild(successBox);

    setTimeout(() => {
      successBox.remove();
    }, 4000);
  };

  // ==================================================
  // SUBMIT WITH WEB3FORMS
  // ==================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataToSend = new FormData();

    formDataToSend.append(
      "access_key",
      "c70b2c7c-243d-44d8-adc5-dcfcef157e6f"
    );

    formDataToSend.append(
      "subject",
      "🚀 New Strategy Session Booking"
    );

    formDataToSend.append(
      "from_name",
      "Velcor.ai Website"
    );

    // USER DATA
    formDataToSend.append(
      "name",
      formData.name
    );

    formDataToSend.append(
      "email",
      formData.email
    );

    formDataToSend.append(
      "mobile",
      `${formData.countryCode} ${formData.mobile}`
    );

    formDataToSend.append(
      "company",
      formData.company
    );

    formDataToSend.append(
      "country",
      formData.country
    );

    formDataToSend.append(
      "selected_date",
      selectedDate.fullDate
    );

    formDataToSend.append(
      "selected_time",
      selectedTime
    );

    formDataToSend.append(
      "timezone",
      userTimeZone
    );

    formDataToSend.append(
      "local_booking_time",
      `${selectedDate.fullDate} - ${selectedTime}`
    );

    formDataToSend.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (data.success) {
        showSuccessToast();

        setFormData((prev) => ({
          ...prev,

          name: "",
          email: "",
          mobile: "",
          company: "",
        }));

        setOpenModal(false);
      } else {
        alert(
          data.message ||
            "Failed to send booking"
        );
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f6f1e8] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          
          {/* LEFT */}
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur-md">
              Pilot Campaign
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-black sm:text-5xl md:text-7xl">
              Apply for a pilot campaign

              <span className="block font-serif italic font-normal">
                built around your offer
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
              We’ll map your ICP, identify buying signals,
              engineer outbound systems, connect CRM
              automations, and launch scalable revenue
              infrastructure.
            </p>

            {/* BENEFITS */}
            <div className="mt-10 grid gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white/70 px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:translate-x-2 hover:border-blue-400/20 hover:bg-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-black shadow-lg shadow-blue-400/20">
                    <Check size={18} />
                  </span>

                  <span className="text-sm font-semibold text-black/75 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-7">

            <div className="absolute -top-24 right-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

            {/* HEADER */}
            <div className="relative flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30">
                <span className="absolute -right-1 top-0 h-3.5 w-3.5 animate-pulse rounded-full bg-green-500 ring-2 ring-black" />
              </div>

              <div>
                <p className="text-lg font-semibold">
                  Velcor.ai Team
                </p>

                <p className="text-sm text-white/60">
                  Revenue Engineering
                </p>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="relative mt-8 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Book your

              <span className="block text-blue-400">
                1-1 Strategy Call
              </span>
            </h3>

            <p className="relative mt-5 text-base leading-7 text-white/70 sm:text-lg">
              Schedule a strategy session and discover
              how we can engineer predictable revenue
              systems for your business.
            </p>

            {/* TIMER */}
            <div className="relative mt-7 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">

              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all duration-1000"
                  style={{
                    width: `${(timeLeft / (32 * 60 + 30)) * 78}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/50">
                    Availability Status
                  </p>

                  <p className="mt-1 font-semibold">
                    Only few slots are left
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-lg font-bold">
                  {minutes}:{seconds}
                </div>
              </div>
            </div>

            {/* DATES */}
            <div className="relative mt-7">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/60">
                <CalendarDays size={16} />

                Select Available Date
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {upcomingDates.map((date) => {
                  const active =
                    selectedDate.fullDate ===
                    date.fullDate;

                  return (
                    <button
                      key={date.fullDate}
                      onClick={() =>
                        setSelectedDate(date)
                      }
                      className={`rounded-2xl border px-2 py-4 text-center transition-all duration-300 ${
                        active
                          ? "border-blue-400 bg-blue-400 text-black shadow-xl shadow-blue-500/30"
                          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      }`}
                    >
                      <p className="text-xs font-medium sm:text-sm">
                        {date.day}
                      </p>

                      <p className="mt-1 text-xl font-bold sm:text-2xl">
                        {date.dayNumber}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIME */}
            <div className="mt-7">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/60">
                <Clock3 size={16} />

                Select Time Slot
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => {
                  const active =
                    selectedTime === time;

                  return (
                    <button
                      key={time}
                      onClick={() =>
                        setSelectedTime(time)
                      }
                      className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "border-blue-400 bg-blue-400 text-black"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setOpenModal(true)}
              className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white py-5 text-center font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98]"
            >
              Schedule A Strategy Session

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <p className="relative mt-7 border-t border-white/10 pt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Powered by Velcor.ai
            </p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">

          <div className="relative max-h-[95vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 text-white shadow-2xl sm:p-8">

            {/* CLOSE */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 text-white/50 transition hover:text-white"
            >
              <X />
            </button>

            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Schedule Your Call
            </h3>

            <p className="mt-3 text-sm text-white/60 sm:text-base">
              Fill your details and our team will
              connect with you.
            </p>

            {/* INFO */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                📅 {selectedDate.fullDate}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                ⏰ {selectedTime}
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* NAME */}
              <div className="relative">
                <Sparkles
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm outline-none transition focus:border-blue-400"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm outline-none transition focus:border-blue-400"
                />
              </div>

              {/* MOBILE */}
              <div className="grid grid-cols-[110px_1fr] gap-3">
                
                {/* COUNTRY CODE */}
                <div className="relative">
                  <Globe
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <input
                    type="text"
                    value={formData.countryCode}
                    readOnly
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-3 text-sm outline-none"
                  />
                </div>

                {/* MOBILE */}
                <div className="relative">
                  <PhoneCall
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm outline-none transition focus:border-blue-400"
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div className="relative">
                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm outline-none transition focus:border-blue-400"
                />
              </div>

              {/* COUNTRY */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <ShieldCheck
                  size={18}
                  className="text-blue-400"
                />

                <div>
                  <p className="text-xs text-white/50">
                    Detected Country
                  </p>

                  <p className="text-sm font-medium">
                    {formData.country}
                  </p>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-400 py-5 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Booking Strategy Session...
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={20} />

                    Confirm Strategy Session
                  </>
                )}
              </button>

              {/* SECURITY */}
              <p className="text-center text-xs leading-6 text-white/40">
                Your information is encrypted and
                securely sent to Velcor.ai team.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}