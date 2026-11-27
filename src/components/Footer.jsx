import React from 'react';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import Icon from './Icon';

export default function Footer() {
  const footerWhatsAppMsg = `Hello ${content.businessName}, I am contacting you from your website footer.`;

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-28 sm:pb-20 border-t border-white/10">
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
            <div className="text-xs text-gray-300 font-medium">
              {content.legalName} | {content.licences[0]?.number || "RC 9315987"}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Quick Navigation
            </h4>
            <ul className="space-y-0.5 text-sm">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center min-h-[44px] py-1 text-gray-300 hover:text-[#FFD92E] transition-colors"
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
            <p className="text-xs text-gray-400 leading-relaxed">
              In collaboration with {content.partner.legalName} (RC {content.partner.regNumber}) on transportation, logistics, and hire-purchase financing.
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>{' '}
                <a href={`mailto:${content.email}`} className="text-gray-200 hover:text-[#FFD92E] transition-colors py-1 inline-block min-h-[44px]">
                  {content.email}
                </a>
              </div>

              <div>
                <span className="text-gray-400 block mb-1">Direct Lines (Tap to call):</span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {content.phones.map((phone, idx) => {
                    const isWhatsApp = phone === '07068474849';
                    return (
                      <span key={idx} className="inline-flex items-center gap-1.5">
                        <a
                          href={`tel:${phone}`}
                          className="inline-flex items-center gap-1.5 min-h-[44px] py-1 text-sm text-gray-200 hover:text-[#FFD92E] font-medium transition-colors"
                        >
                          {isWhatsApp && <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />}
                          <span>{phone}</span>
                          {isWhatsApp && <span className="text-[10px] text-[#25D366] font-bold">(WhatsApp)</span>}
                        </a>
                        {idx < content.phones.length - 1 && (
                          <span className="text-gray-600 select-none">•</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              {content.address && (
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <div className="flex items-start gap-2 text-gray-300">
                    <Icon name="MapPin" className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="leading-relaxed">{content.address}</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 min-h-[44px] py-1 text-[#FFD92E] hover:underline font-semibold"
                      >
                        <span>Get Directions</span>
                        <Icon name="ExternalLink" className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-1">
                <a
                  href={buildWhatsAppLink(content.whatsappNumber, footerWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] py-1 text-sm text-[#25D366] hover:text-[#20bd5a] font-bold transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <div>
            © 2026 {content.businessName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Study Abroad</span>
            <span aria-hidden="true">•</span>
            <span>Hajj & Umrah</span>
            <span aria-hidden="true">•</span>
            <span>Corporate Services</span>
            <span aria-hidden="true">•</span>
            <span>Tricycle Hire-Purchase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
