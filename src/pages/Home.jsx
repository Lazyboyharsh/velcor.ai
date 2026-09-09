import Navbar from "../components/Navbar";
import Seo, { SITE_URL } from "../components/Seo";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import WorkflowSystem from "../sections/WorkflowSystem";
import CaseStudies from "../sections/CaseStudies";
import Results from "../sections/Results";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import PilotCTA from "../sections/PilotCTA";
import Footer from "../sections/Footer";
import AnimatedWorkflow from "../sections/AnimatedWorkflow";
import HomeSlider from "../sections/HomeSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Seo
        title="Velcor.ai | AI Revenue Infrastructure for Modern B2B Growth"
        description="Velcor.ai builds AI-powered outbound systems, RevOps automation, CRM workflows, and revenue infrastructure for B2B SaaS, M&A and private equity, AI and deep-tech, and financial-services teams, generating predictable pipeline and sustainable growth worldwide."
        path="/"
        jsonLd={[
          {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-outbound`,
            name: "AI Outbound Systems",
            serviceType: "AI-powered outbound sales system",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Place", name: "Worldwide" },
            audience: { "@type": "BusinessAudience", name: "B2B companies" },
            description:
              "Signal-based outbound with AI personalization across email and LinkedIn that generates qualified pipeline.",
          },
          {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-revops`,
            name: "AI RevOps",
            serviceType: "Revenue operations automation",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Place", name: "Worldwide" },
            audience: { "@type": "BusinessAudience", name: "B2B companies" },
            description:
              "CRM automation, lead routing and revenue-operations workflows that remove manual GTM busywork.",
          },
          {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-content`,
            name: "Content Engine",
            serviceType: "Content-driven lead generation",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Place", name: "Worldwide" },
            audience: { "@type": "BusinessAudience", name: "B2B companies" },
            description:
              "A content system that turns expertise into inbound demand and compounding organic reach.",
          },
        ]}
      />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />  
      <Industries />
      <WorkflowSystem />
      <Results />
       <AnimatedWorkflow />
      <Testimonials />
       <HomeSlider />
      <FAQ />
      <PilotCTA />
      <Footer />
    </main>
  );
}