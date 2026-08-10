import { X, CalendarDays, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/velcor-ai-team/30min";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const show = () => {
      setOpen(true);
    };

    window.addEventListener("open-booking", show);

    if (
      location.pathname === "/" &&
      !sessionStorage.getItem("velcor-booking-shown")
    ) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("velcor-booking-shown", "1");
      }, 8000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("open-booking", show);
      };
    }

    return () => {
      window.removeEventListener("open-booking", show);
    };
  }, [location.pathname]);

  if (!open) {
    return null;
  }

  const calendlyUrl =
    CALENDLY_URL +
    "?hide_gdpr_banner=1" +
    "&background_color=ffffff" +
    "&text_color=111111" +
    "&primary_color=2563eb";

  /* Calendly view */
  if (calendarOpen) {
    return (
      <div
        className="
          fixed
          bottom-5
          right-5
          z-[99999]
          w-[380px]
          max-w-[calc(100vw-2rem)]
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
      >
        {/* Calendar Header */}
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <CalendarDays size={16} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#131313]">
                Book a strategy call
              </p>

              <p className="text-[11px] text-gray-500">
                30 minutes · Google Meet
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-black/5
              text-gray-500
              transition
              hover:bg-black
              hover:text-white
            "
            aria-label="Close booking"
          >
            <X size={14} />
          </button>
        </div>

        <iframe
          title="Book a Velcor.ai strategy call"
          src={calendlyUrl}
          className="h-[420px] w-full border-0"
          loading="eager"
        />
      </div>
    );
  }

  /* Compact popup */
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[99999]
        w-[330px]
        max-w-[calc(100vw-2rem)]
        rounded-2xl
        border
        border-black/10
        bg-white
        p-5
        shadow-[0_18px_50px_rgba(0,0,0,0.14)]
      "
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close booking popup"
        className="
          absolute
          right-3
          top-3
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          text-gray-400
          transition
          hover:bg-black/5
          hover:text-black
        "
      >
        <X size={15} />
      </button>

      {/* Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <CalendarDays size={19} />
      </div>

      {/* Content */}
      <div className="pr-5">
        <h3 className="text-base font-semibold tracking-tight text-[#131313]">
          Have a revenue challenge?
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-gray-500">
          Let’s talk about your pipeline, outbound, and revenue infrastructure.
        </p>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={() => setCalendarOpen(true)}
        className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#131313]
          px-4
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          hover:bg-blue-600
        "
      >
        Book a strategy call
        <ArrowUpRight size={15} />
      </button>

      {/* Small detail */}
      <p className="mt-2.5 text-center text-[10px] text-gray-400">
        30 minutes · No commitment
      </p>
    </div>
  );
}