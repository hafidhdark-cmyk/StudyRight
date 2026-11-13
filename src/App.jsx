import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HajjUmrah from './components/HajjUmrah';
import Tricycle from './components/Tricycle';
import HowItWorks from './components/HowItWorks';
import PartnerStrip from './components/PartnerStrip';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2B2B2B]">
      {/* 1. Sticky Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Colour-Blocked Services */}
        <Services />

        {/* 4. Hajj & Umrah Feature */}
        <HajjUmrah />

        {/* 5. Tricycle Feature */}
        <Tricycle />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Partner Strip */}
        <PartnerStrip />

        {/* 8. Testimonials & FAQ (Conditional) */}
        <Testimonials />
        <Faq />

        {/* 9. Contact & Enquiry */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
