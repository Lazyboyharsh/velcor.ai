import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import Services from "../sections/Services";
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
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />  
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