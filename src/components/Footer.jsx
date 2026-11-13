import React from 'react';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const footerWhatsAppMsg = `Hello ${content.businessName}, I am contacting you from your website footer.`;

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-white p-2 rounded-2xl">
              <img
                src={content.logo}
                alt={`${content.businessName} Logo`}
                width="174"
                height="48"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-normal">
              {content.tagline}. Providing reliable educational advisory, pilgrimage logistics, business registration, and tricycle financing across Nigeria.
            </p>
            <div className="text-xs text-gray-400 font-medium">
              {content.legalName}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#FFD92E] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Brand & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Collaborative Partner
            </h4>
            <div className="bg-white p-2.5 rounded-xl inline-block max-w-[280px]">
              <img
                src={content.partner.logo}
                alt={content.partner.name}
                width="240"
                height="57"
                className="w-full h-auto max-h-12 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-400">
              Partnering on transportation, logistics, and hire-purchase financing ({content.partner.regNumber}).
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-2">
              <div>Email: {content.email}</div>
              <div>Direct: {content.phones.join(' • ')}</div>
              <div>
                <a
                  href={buildWhatsAppLink(content.whatsappNumber, footerWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] font-bold transition-colors"
                  aria-label="Direct WhatsApp Support"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Direct WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 {content.businessName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Study Abroad</span>
            <span>•</span>
            <span>Hajj & Umrah</span>
            <span>•</span>
            <span>Corporate Services</span>
            <span>•</span>
            <span>Tricycle Hire-Purchase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
