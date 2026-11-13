import React, { useState, useEffect } from 'react';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultWhatsAppMsg = `Hello ${content.businessName}, I would like to make an enquiry about your services.`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8] rounded-xl p-1"
            aria-label={`${content.businessName} Homepage`}
          >
            <div className="bg-white p-1 rounded-xl shadow-xs border border-gray-100/80 transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src={content.logo}
                alt={`${content.businessName} - Travel & Business Consultant`}
                width="174"
                height="48"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#2B2B2B] hover:text-[#C25212] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C25212] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink(content.whatsappNumber, defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#111827] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              aria-label="Chat with StudyRight on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#111827]" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#2B2B2B] hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <Icon name="X" className="w-6 h-6" />
              ) : (
                <Icon name="Menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[73px] bg-white border-b border-gray-200 shadow-xl px-5 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-[#2B2B2B] hover:text-[#C25212] py-2 border-b border-gray-50"
              >
                <span>{item.label}</span>
                <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
              </a>
            ))}

            <div className="pt-2">
              <a
                href={buildWhatsAppLink(content.whatsappNumber, defaultWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#111827] font-bold py-3 px-4 rounded-xl shadow-sm text-center"
                aria-label="Chat with StudyRight on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#111827]" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
