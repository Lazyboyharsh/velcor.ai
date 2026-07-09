import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BookingPopup from "./components/BookingPopup";
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Process = lazy(() => import("./pages/Process"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScheduleMeeting = lazy(() => import("./pages/ScheduleMeeting"));
export default function App() {
  return <BrowserRouter><ScrollToTop /><Suspense fallback={<div className="min-h-screen bg-[#f6f1e8]" />}><Routes>
    <Route path="/" element={<Home />} /><Route path="/schedule-meeting" element={<ScheduleMeeting />} /><Route path="/services" element={<ServicesPage />} /><Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /><Route path="/pricing" element={<Pricing />} /><Route path="/process" element={<Process />} />
    <Route path="/infrastructure" element={<Infrastructure />} /><Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/case-studies/:slug" element={<CaseStudyDetail />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} /><Route path="/terms-of-service" element={<TermsOfService />} /><Route path="*" element={<NotFound />} />
  </Routes></Suspense><BookingPopup /></BrowserRouter>;
}
