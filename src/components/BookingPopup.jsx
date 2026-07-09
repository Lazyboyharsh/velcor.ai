import { X, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/velcor-ai-team/30min";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("open-booking", show);
    if (location.pathname === "/" && !sessionStorage.getItem("velcor-booking-shown")) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("velcor-booking-shown", "1");
      }, 8000);
      return () => { clearTimeout(timer); window.removeEventListener("open-booking", show); };
    }
    return () => window.removeEventListener("open-booking", show);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Schedule a meeting">
      <div className="relative h-[min(820px,94vh)] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="flex h-16 items-center justify-between border-b border-black/10 px-5">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white"><CalendarDays size={18} /></span><div><p className="text-sm font-semibold">Schedule a strategy call</p><p className="text-xs text-black/50">30 minutes · Google Meet</p></div></div>
          <button onClick={() => setOpen(false)} aria-label="Close scheduling popup" className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-black hover:text-white"><X size={19} /></button>
        </div>
        <iframe title="Book a Velcor.ai strategy call" src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=3b82f6`} className="h-[calc(100%_-_4rem)] w-full border-0" loading="eager" />
      </div>
    </div>
  );
}
