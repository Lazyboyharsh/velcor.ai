// src/pages/TermsOfService.jsx
// Place in: src/pages/TermsOfService.jsx
// Route: /legal/terms-of-service
// Add to your router: <Route path="/legal/terms-of-service" element={<TermsOfService />} />

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 17, 2025";
const COMPANY     = "Velcor.ai";
const EMAIL       = "legal@velcor.ai";
const SITE        = "https://velcor.ai";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f6f1e8]">

      {/* Dot-grid texture */}
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
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-black/45">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Content */}
        <div className="space-y-10">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the website at{" "}
              <a href={SITE}>{SITE}</a> or engaging any services provided by {COMPANY} ("we", "our",
              "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree,
              do not use our services.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of our services
              after modifications constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="2. Description of Services">
            <p>
              {COMPANY} provides go-to-market systems for B2B technology companies, including but not
              limited to:
            </p>
            <ul>
              <li>Signal-based outbound campaign strategy and execution.</li>
              <li>AI-assisted RevOps automation and CRM workflow setup.</li>
              <li>Account-Based Marketing (ABM) systems.</li>
              <li>Content and demand generation programmes.</li>
              <li>Pipeline infrastructure design and implementation.</li>
            </ul>
            <p>
              The specific scope of services for each client is defined in a separate Statement of Work
              or Service Agreement.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <p>
              Our services are intended for businesses and professionals. By using our services, you
              represent that:
            </p>
            <ul>
              <li>You are at least 18 years of age.</li>
              <li>You have the legal authority to bind the company or entity on whose behalf you are acting.</li>
              <li>Your use of our services does not violate any applicable law or regulation.</li>
            </ul>
          </Section>

          <Section title="4. Client Responsibilities">
            <p>As a client or user of {COMPANY}'s services, you agree to:</p>
            <ul>
              <li>Provide accurate, complete, and up-to-date information required for service delivery.</li>
              <li>Ensure that any contact lists or data you supply comply with applicable privacy and anti-spam laws (including CAN-SPAM, GDPR, CASL, and similar regulations).</li>
              <li>Not use our services to engage in unlawful, deceptive, or harmful outreach.</li>
              <li>Promptly respond to communications required for project progress.</li>
              <li>Make timely payments as agreed in your Service Agreement.</li>
            </ul>
          </Section>

          <Section title="5. Payments and Refunds">
            <p>
              All fees are outlined in the applicable Service Agreement or invoice. Unless otherwise
              stated:
            </p>
            <ul>
              <li>Payments are due on the dates specified in your agreement.</li>
              <li>All fees are non-refundable except as required by applicable law or as explicitly stated in a separate Refund Policy.</li>
              <li>Late payments may incur interest at the rate of 1.5% per month or the maximum permitted by law, whichever is lower.</li>
              <li>We reserve the right to suspend services for overdue accounts.</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content, methodologies, frameworks, templates, and materials created or owned by
              {COMPANY} remain our exclusive intellectual property. Upon full payment, we grant you a
              limited, non-exclusive, non-transferable licence to use deliverables for your internal
              business purposes.
            </p>
            <p>
              You retain ownership of your own brand assets, content, and data. By providing materials
              to us, you grant {COMPANY} a limited licence to use them solely for service delivery.
            </p>
          </Section>

          <Section title="7. Confidentiality">
            <p>
              Each party agrees to keep the other party's confidential information strictly
              confidential and not to disclose it to any third party without prior written consent,
              except as required by law. This obligation survives termination of any service agreement.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              Our services are provided on an "as is" and "as available" basis. {COMPANY} makes no
              warranties, express or implied, including but not limited to:
            </p>
            <ul>
              <li>Guarantees of specific revenue, pipeline, or meeting outcomes.</li>
              <li>Warranties of merchantability or fitness for a particular purpose.</li>
              <li>Uninterrupted or error-free operation of any system or tool.</li>
            </ul>
            <p>
              Outbound performance depends on market conditions, your offer, and factors outside our
              control. We commit to professional execution of agreed deliverables, not specific results.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, {COMPANY} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to
              your use of our services, including but not limited to loss of revenue, loss of data,
              or loss of business opportunities.
            </p>
            <p>
              In no event shall our total liability to you exceed the total fees paid by you to{" "}
              {COMPANY} in the three (3) months preceding the claim.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              Either party may terminate a service engagement in accordance with the terms of the
              applicable Service Agreement. We reserve the right to immediately terminate or suspend
              access to our services if you breach these Terms or engage in conduct we deem harmful,
              unlawful, or disruptive.
            </p>
            <p>
              Upon termination, all outstanding fees become immediately due, and any licences granted
              to you will cease.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              jurisdiction in which {COMPANY} is registered, without regard to its conflict of law
              provisions. Any disputes arising under these Terms shall be subject to the exclusive
              jurisdiction of the courts in that jurisdiction.
            </p>
          </Section>

          <Section title="12. Entire Agreement">
            <p>
              These Terms, together with any applicable Service Agreement, constitute the entire
              agreement between you and {COMPANY} with respect to the subject matter herein, and
              supersede all prior agreements, representations, or understandings.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              For any questions regarding these Terms of Service, please contact:
            </p>
            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur">
              <p className="font-semibold text-black">{COMPANY}</p>
              <p className="mt-1 text-sm text-black/60">
                Email:{" "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <p className="mt-1 text-sm text-black/60">
                Website:{" "}
                <a href={SITE}>{SITE}</a>
              </p>
            </div>
          </Section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 flex flex-wrap gap-4 border-t border-black/10 pt-8 text-sm text-black/45">
          <Link to="/legal/privacy-policy" className="hover:text-black transition">Privacy Policy</Link>
          <Link to="/legal/terms-of-service" className="hover:text-black transition">Terms of Service</Link>
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