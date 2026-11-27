import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import HajjUmrah from './components/HajjUmrah';
import Tricycle from './components/Tricycle';
import HowItWorks from './components/HowItWorks';
import PartnerStrip from './components/PartnerStrip';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2B2B2B] overflow-x-hidden">
      {/* 1. Fixed Header */}
      <Header />

      {/* Spacer to prevent fixed header from overlapping Hero */}
      <div className="h-[64px] sm:h-[78px] md:h-[90px] shrink-0" aria-hidden="true" />

      <main className="flex-grow overflow-x-hidden">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Colour-Blocked Services */}
        <Services />

        {/* 4. StudyRight Gallery: Meetings and recognition */}
        <Gallery />

        {/* 5. Hajj & Umrah Feature */}
        <HajjUmrah />

        {/* 6. Tricycle Feature */}
        <Tricycle />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Partner Strip */}
        <PartnerStrip />

        {/* 9. Beneficiary Video Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions (Accordion) */}
        <Faq />

        {/* 11. Contact & Enquiry */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Back to Top & Floating WhatsApp Button */}
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}
