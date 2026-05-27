import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <section className="px-5 pt-40 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Contact
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Let’s build your
              <span className="block font-serif italic font-normal">
                GTM system
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Share your offer, ICP and current sales workflow. We’ll map a
              pilot campaign and automation system for your pipeline.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-black/70">
                <Mail size={18} />
                <span>hello@velcor.ai</span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <Phone size={18} />
                <span>Book a strategy call</span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <MapPin size={18} />
                <span>Remote GTM systems for global B2B teams</span>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-2xl shadow-black/10 backdrop-blur md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                placeholder="Full name"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none"
              />
              <input
                placeholder="Work email"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none"
              />
            </div>

            <input
              placeholder="Company website"
              className="mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none"
            />

            <select className="mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black/60 outline-none">
              <option>What do you need help with?</option>
              <option>Outbound lead generation</option>
              <option>CRM automation</option>
              <option>AI sales workflows</option>
              <option>Full GTM system</option>
            </select>

            <textarea
              placeholder="Tell us about your offer, ICP and current sales process..."
              rows="6"
              className="mt-4 w-full rounded-xl border border-black/10 bg-white p-4 text-sm outline-none"
            />

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white"
            >
              Submit enquiry
              <ArrowRight size={15} />
            </button>

            <p className="mt-4 text-center text-xs text-black/45">
              We usually respond within 24 hours.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}