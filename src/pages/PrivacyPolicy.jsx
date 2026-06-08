// src/pages/PrivacyPolicy.jsx
// Place in: src/pages/PrivacyPolicy.jsx
// Route: /legal/privacy-policy
// Add to your router: <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 17, 2025";
const COMPANY     = "Velcor.ai";
const EMAIL       = "legal@velcor.ai";
const SITE        = "https://velcor.ai";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f6f1e8]">

      {/* Dot-grid texture — matches Hero / Testimonials */}
      <div className="pointer-events-none fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.13)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 md:py-32">

        {/* Back link */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/50 transition hover:text-black"
        >
          <ArrowLeft size={15} />
          Back to Velcor.ai
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black/55 backdrop-blur">
            Legal
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-black sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-black/45">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Content */}
        <div className="prose-velcor space-y-10">

          <Section title="1. Introduction">
            <p>
              Welcome to {COMPANY} ("{COMPANY}", "we", "our", or "us"). We are committed to protecting
              your personal information and your right to privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website at{" "}
              <a href={SITE} className="text-blue-600 underline underline-offset-2">{SITE}</a> or
              engage with our services.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms, please discontinue use
              of our site.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Contact information</strong> — name, email address, company name, job title, and phone number when you fill out a form or book a call.</li>
              <li><strong>Communication data</strong> — messages, emails, and any other content you send us.</li>
              <li><strong>Payment information</strong> — billing details processed securely through our payment processors. We do not store raw card data.</li>
            </ul>
            <p>We also collect certain information automatically when you visit our website:</p>
            <ul>
              <li>IP address, browser type, operating system, and referring URLs.</li>
              <li>Pages viewed, time spent on pages, and links clicked.</li>
              <li>Cookies and similar tracking technologies (see Section 7).</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services.</li>
              <li>Respond to your inquiries and fulfil service requests.</li>
              <li>Send administrative and transactional communications.</li>
              <li>Send marketing and promotional materials — you may opt out at any time.</li>
              <li>Analyse usage trends to improve our website and services.</li>
              <li>Comply with legal obligations and enforce our agreements.</li>
              <li>Protect against fraud and unauthorised access.</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Your Information">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information with:
            </p>
            <ul>
              <li><strong>Service providers</strong> — third-party vendors who assist us in operating our website and delivering services (e.g. CRM platforms, email infrastructure, analytics tools). They are contractually bound to protect your data.</li>
              <li><strong>Business transfers</strong> — in connection with any merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Legal requirements</strong> — if required by law or to protect the rights, property, or safety of {COMPANY}, our clients, or others.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal data for as long as necessary to fulfil the purposes outlined in
              this policy, unless a longer retention period is required by law. When data is no longer
              needed, we securely delete or anonymise it.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data ("right to be forgotten").</li>
              <li>Object to or restrict our processing of your data.</li>
              <li>Request portability of your data in a structured, machine-readable format.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-blue-600 underline underline-offset-2">{EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website.
              Cookies are small files placed on your device. We use:
            </p>
            <ul>
              <li><strong>Essential cookies</strong> — required for the site to function.</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our site (e.g. Google Analytics).</li>
              <li><strong>Marketing cookies</strong> — used to deliver relevant advertisements and track campaign performance.</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling certain cookies may affect
              site functionality.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </Section>

          <Section title="9. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction. However, no
              method of internet transmission or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly
              collect personal data from children. If we become aware that a child has provided us with
              personal information, we will promptly delete it.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by updating the "Last updated" date at the top of this page. Your continued use of
              our services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur">
              <p className="font-semibold text-black">{COMPANY}</p>
              <p className="mt-1 text-sm text-black/60">
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-blue-600 underline underline-offset-2">
                  {EMAIL}
                </a>
              </p>
              <p className="mt-1 text-sm text-black/60">
                Website:{" "}
                <a href={SITE} className="text-blue-600 underline underline-offset-2">{SITE}</a>
              </p>
            </div>
          </Section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 flex flex-wrap gap-4 border-t border-black/10 pt-8 text-sm text-black/45">
          <Link to="/privacy-policy" className="hover:text-black transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-black transition">Terms of Service</Link>
          <Link to="/" className="hover:text-black transition">← Back to Home</Link>
        </div>

      </div>
    </div>
  );
}

// ── Reusable section wrapper ──────────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/50 p-7 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-black">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-black/65 [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-black/80">
        {children}
      </div>
    </div>
  );
}