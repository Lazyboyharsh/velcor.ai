import { ArrowLeft, CalendarDays, Clock3, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const CALENDLY_URL = "https://calendly.com/velcor-ai-team/30min";

export default function ScheduleMeeting() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-black/55 transition hover:text-black"><ArrowLeft size={16} /> Back to home</Link>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Strategy Call</p>
              <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[.95] tracking-[-0.06em]">Schedule a <span className="block font-serif font-normal italic">meeting.</span></h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-black/60">Book a focused 30-minute session with the Velcor.ai team to map your ICP, outbound workflow and revenue infrastructure.</p>
              {/* <div className="mt-8 grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4"><Clock3 size={19} className="text-blue-500" /><span className="text-sm font-semibold">30-minute strategy call</span></div>
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4"><Video size={19} className="text-blue-500" /><span className="text-sm font-semibold">Google Meet video call</span></div>
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4"><CalendarDays size={19} className="text-blue-500" /><span className="text-sm font-semibold">Times shown in your local timezone</span></div>
              </div> */}
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-2xl shadow-black/10 sm:p-4">
              <iframe title="Schedule a meeting with Velcor.ai" src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=3b82f6`} className="h-[760px] w-full rounded-2xl border-0" loading="eager" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
