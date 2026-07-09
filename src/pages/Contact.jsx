import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  "c70b2c7c-243d-44d8-adc5-dcfcef157e6f";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  website: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject:
              "New Contact Enquiry - " +
              formData.name +
              " - Velcor.ai",
            from_name: "Velcor.ai Website",
            name: formData.name,
            email: formData.email,
            website:
              formData.website || "Not provided",
            service: formData.service,
            message: formData.message,
            source: "Velcor.ai Contact Page",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to submit enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          "Enquiry submitted successfully. Velcor.ai will contact you within 24 hours.",
      });

      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to submit enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <section className="px-5 pb-24 pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT CONTENT */}

          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Contact
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Let&apos;s build your

              <span className="block font-serif font-normal italic">
                GTM system
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Share your offer, ICP and current sales workflow.
              We&apos;ll map a pilot campaign and automation system
              for your pipeline.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:team@velcor.ai"
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-black/45">
                    Email
                  </p>

                  <p className="font-medium">
                    team@velcor.ai
                  </p>
                </div>
              </a>

              <a
                href="/schedule-meeting"
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-black/45">
                    Strategy Call
                  </p>

                  <p className="font-medium">
                    Book a free consultation
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-black/45">
                    Location
                  </p>

                  <p className="font-medium">
                    Delaware, United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-2xl shadow-black/10 backdrop-blur md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />

              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Work email"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Company website"
              className="mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">
                What do you need help with?
              </option>

              <option value="Outbound lead generation">
                Outbound lead generation
              </option>

              <option value="CRM automation">
                CRM automation
              </option>

              <option value="AI sales workflows">
                AI sales workflows
              </option>

              <option value="Full GTM system">
                Full GTM system
              </option>

              <option value="AI Automation">
                AI Automation
              </option>
            </select>

            <textarea
              rows={6}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your offer, ICP and current sales process..."
              className="mt-4 w-full resize-y rounded-xl border border-black/10 bg-white p-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />

            {status.message && (
              <div
                role="status"
                className={
                  "mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm " +
                  (status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700")
                }
              >
                {status.type === "success" ? (
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                ) : (
                  <CircleAlert
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  Sending...
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} />

                  Submit enquiry

                  <ArrowRight size={15} />
                </>
              )}
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