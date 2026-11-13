import React from 'react';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const message = `Hello ${content.businessName}, I am visiting your website and have an enquiry.`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <a
        href={buildWhatsAppLink(content.whatsappNumber, message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <span className="hidden sm:inline font-bold text-sm tracking-wide text-white">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}
