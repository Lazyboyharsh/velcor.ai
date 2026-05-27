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

export default function BookingPopup() {
  const [show, setShow] = useState(false);

  const [openForm, setOpenForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [countryCode, setCountryCode] =
    useState("+91");

  const [selectedTime, setSelectedTime] =
    useState("11:00 AM");

  const [selectedDate, setSelectedDate] =
    useState("");

  const [timeLeft, setTimeLeft] = useState(
    32 * 60 + 30
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // =========================================
  // AUTO SHOW
  // =========================================
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  // =========================================
  // AUTO COUNTRY DETECT
  // =========================================
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(
          data.country_calling_code || "+91"
        );
      })
      .catch(() => {
        console.log("Country detect failed");
      });
  }, []);

  // =========================================
  // TIMER
  // =========================================
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================================
  // FUTURE DATES
  // =========================================
  const futureDates = useMemo(() => {
    return Array.from({ length: 5 }).map(
      (_, index) => {
        const date = new Date();

        date.setDate(date.getDate() + index);

        return {
          shortDay:
            date.toLocaleDateString("en-US", {
              weekday: "short",
            }),

          day: date.getDate(),

          fullDate:
            date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            }),
        };
      }
    );
  }, []);

  // =========================================
  // DEFAULT DATE
  // =========================================
  useEffect(() => {
    if (futureDates.length > 0) {
      setSelectedDate(
        futureDates[0].fullDate
      );
    }
  }, [futureDates]);

  // =========================================
  // TIMER FORMAT
  // =========================================
  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(timeLeft % 60).padStart(
    2,
    "0"
  );

  // =========================================
  // TIME SLOTS
  // =========================================
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
  ];

  // =========================================
  // FORM CHANGE
  // =========================================
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // =========================================
  // SUBMIT
  // =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataToSend = new FormData();

    // =========================================
    // WEB3FORMS
    // =========================================
    formDataToSend.append(
      "access_key",
      "c70b2c7c-44d8-adc5-dcfcef157e6f"
    );

    formDataToSend.append(
      "subject",
      "🚀 New Strategy Session Booking"
    );

    formDataToSend.append(
      "from_name",
      "Velcor.ai Popup"
    );

    // =========================================
    // USER DATA
    // =========================================
    formDataToSend.append("name", formData.name);

    formDataToSend.append(
      "email",
      formData.email
    );

    formDataToSend.append(
      "mobile",
      `${countryCode} ${formData.mobile}`
    );

    formDataToSend.append(
      "selected_date",
      selectedDate
    );

    formDataToSend.append(
      "selected_time",
      selectedTime
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
        alert(
          "🎉 Strategy Session Scheduled Successfully!\n\nVelcor.ai team will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          mobile: "",
        });

        setOpenForm(false);

        setShow(false);
      } else {
        alert("Failed to send booking");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <>
      {/* MAIN SHORT POPUP */}
      <div className="fixed bottom-4 right-4 z-[9999] w-[370px] max-w-[calc(100%-32px)] animate-[popupFade_0.5s_ease] sm:bottom-6 sm:right-6">
        
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          
          {/* GLOW */}
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

          {/* CLOSE */}
          <button
            onClick={() => setShow(false)}
            className="absolute right-4 top-4 text-white/50 transition hover:text-white"
          >
            <X size={18} />
          </button>

          {/* HEADER */}
          <div className="flex items-center gap-3">
            
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30">
              
              <Sparkles
                size={18}
                className="text-black"
              />

              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 ring-2 ring-black" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Velcor.ai Team
              </p>

              <p className="text-xs text-white/60">
                Revenue Engineering
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <h3 className="mt-5 text-2xl font-semibold leading-tight">
            Book your
            <span className="block text-blue-400">
              Strategy Call
            </span>
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Discover how we engineer scalable
            AI-powered revenue systems.
          </p>

          {/* DATE + TIME */}
          <div className="mt-5 flex flex-wrap gap-3">
            
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              
              <CalendarDays
                size={16}
                className="text-blue-400"
              />

              <span>{selectedDate}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              
              <Clock3
                size={16}
                className="text-blue-400"
              />

              <span>{selectedTime}</span>
            </div>
          </div>

          {/* TIMER */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            
            <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/10">
              
              <div
                className="h-full rounded-full bg-blue-400"
                style={{
                  width: `${
                    (timeLeft / (32 * 60 + 30)) * 75
                  }%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              
              <p className="text-sm">
                Few slots remaining
              </p>

              <p className="text-sm font-bold">
                {minutes}:{seconds}
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpenForm(true)}
            className="group mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400"
          >
            Schedule Strategy Call

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-4">
          
          <div className="relative max-h-[95vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5 text-white shadow-2xl sm:p-6">
            
            {/* CLOSE */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute right-5 top-5 text-white/50 transition hover:text-white"
            >
              <X size={20} />
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-4">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30">
                
                <CalendarDays
                  size={22}
                  className="text-black"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Schedule Call
                </h3>

                <p className="text-sm text-white/60">
                  Choose your preferred slot
                </p>
              </div>
            </div>

            {/* SELECT DATE */}
            <div className="mt-6">
              
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/70">
                
                <CalendarDays
                  size={16}
                  className="text-blue-400"
                />

                Select Date
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {futureDates.map((date) => {
                  const active =
                    selectedDate ===
                    date.fullDate;

                  return (
                    <button
                      key={date.fullDate}
                      type="button"
                      onClick={() =>
                        setSelectedDate(
                          date.fullDate
                        )
                      }
                      className={`rounded-2xl border px-3 py-4 text-center transition-all duration-300 ${
                        active
                          ? "border-blue-400 bg-blue-400 text-black shadow-lg shadow-blue-500/20"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <p className="text-xs font-medium">
                        {date.shortDay}
                      </p>

                      <p className="mt-1 text-lg font-bold">
                        {date.day}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIME */}
            <div className="mt-6">
              
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/70">
                
                <TimerReset
                  size={16}
                  className="text-blue-400"
                />

                Select Time Slot
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => {
                  const active =
                    selectedTime === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() =>
                        setSelectedTime(time)
                      }
                      className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "border-blue-400 bg-blue-400 text-black shadow-lg shadow-blue-500/20"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              {/* NAME */}
              <div className="relative">
                <User
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-400"
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-400"
                />
              </div>

              {/* MOBILE */}
              <div className="grid grid-cols-[120px_1fr] gap-3">
                
                {/* COUNTRY CODE */}
                <div className="relative">
                  <Globe2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <select
                    value={countryCode}
                    onChange={(e) =>
                      setCountryCode(
                        e.target.value
                      )
                    }
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400"
                  >
                    <option value="+1">
                      🇺🇸 +1
                    </option>

                    <option value="+44">
                      🇬🇧 +44
                    </option>

                    <option value="+91">
                      🇮🇳 +91
                    </option>

                    <option value="+971">
                      🇦🇪 +971
                    </option>

                    <option value="+61">
                      🇦🇺 +61
                    </option>

                    <option value="+65">
                      🇸🇬 +65
                    </option>

                    <option value="+81">
                      🇯🇵 +81
                    </option>
                  </select>
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
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-400"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-400 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Booking...
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={18} />

                    Confirm Booking
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes popupFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}