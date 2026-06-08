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
} from "lucide-react";

export default function Contact() {
  // =========================================
  // FORM STATE
  // =========================================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  // =========================================
  // INPUT CHANGE
  // =========================================
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // =========================================
  // SUBMIT FORM
  // =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const web3FormData = new FormData();

    // WEB3FORMS API
    web3FormData.append(
      "access_key",
      "c70b2c7c-243d-44d8-adc5-dcfcef157e6f"
    );

    web3FormData.append(
      "subject",
      "🚀 New Contact Enquiry - Velcor.ai"
    );

    web3FormData.append(
      "from_name",
      "Velcor.ai Website"
    );

    // USER DATA
    web3FormData.append(
      "Full Name",
      formData.name
    );

    web3FormData.append(
      "Email",
      formData.email
    );

    web3FormData.append(
      "Company Website",
      formData.website
    );

    web3FormData.append(
      "Service Needed",
      formData.service
    );

    web3FormData.append(
      "Message",
      formData.message
    );

    web3FormData.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          body: web3FormData,
        }
      );

      const data = await response.json();

      // SUCCESS
      if (data.success) {
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
                  Enquiry Submitted
                </h3>

                <p style="
                  margin:6px 0 0;
                  font-size:13px;
                  line-height:1.6;
                  color:rgba(255,255,255,0.65);
                ">
                  Velcor.ai team will contact you within 24 hours.
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

        // REMOVE AFTER 4 SEC
        setTimeout(() => {
          successBox.remove();
        }, 4000);

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          website: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send enquiry");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
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
              Let’s build your
              
              <span className="block font-serif font-normal italic">
                GTM system
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Share your offer, ICP and current
              sales workflow. We’ll map a pilot
              campaign and automation system for
              your pipeline.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-5">
              
              <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur">
                
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
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur">
                
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
              </div>

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
            
            {/* NAME + EMAIL */}
            <div className="grid gap-4 md:grid-cols-2">
              
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Work email"
                className="min-h-14 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* WEBSITE */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Company website"
              className="mt-4 min-h-14 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />

            {/* SELECT */}
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

              <option>
                Outbound lead generation
              </option>

              <option>
                CRM automation
              </option>

              <option>
                AI sales workflows
              </option>

              <option>
                Full GTM system
              </option>
            </select>

            {/* MESSAGE */}
            <textarea
              rows="6"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your offer, ICP and current sales process..."
              className="mt-4 w-full rounded-xl border border-black/10 bg-white p-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
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
                </>
              )}

              {!loading && (
                <ArrowRight size={15} />
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