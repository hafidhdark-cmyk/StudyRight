import React, { useState } from 'react';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Study Abroad & Travel Advisory',
    message: '',
  });

  const serviceOptions = [
    'Study Abroad & Travel Advisory',
    'Hajj & Umrah',
    'Travel Planning',
    'Business Consulting',
    'Tricycle Installment',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = [
      `*New Website Enquiry - ${content.businessName}*`,
      `• *Name:* ${formData.name || 'Not specified'}`,
      `• *Phone:* ${formData.phone || 'Not specified'}`,
      `• *Service Needed:* ${formData.service}`,
      formData.message ? `• *Message:* ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = buildWhatsAppLink(content.whatsappNumber, formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const hasAddress = content.address && typeof content.address === 'string' && content.address.trim() !== '';
  const activeSocials = Object.entries(content.socials || {}).filter(
    ([_, url]) => url && typeof url === 'string' && url.trim() !== ''
  );
  const hasLicences = Array.isArray(content.licences) && content.licences.length > 0;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C25212]">
            Direct Consultation
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            Get in Touch With Our Team
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Have questions about admissions, pilgrimage schedules, corporate registration, or tricycle plans? We are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-xs">
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-6">
                Contact Information
              </h3>

              {/* Tap to Call Phones */}
              <div className="space-y-4 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Call Our Helpdesks (Tap to dial)
                </div>
                {content.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#2B2B2B] hover:text-[#0C6BA8] transition-colors group p-2 rounded-xl hover:bg-white"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0C6BA8] group-hover:bg-[#0C6BA8] group-hover:text-white transition-colors">
                      <Icon name="Phone" className="w-5 h-5" />
                    </div>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>

              {/* Email Address */}
              <div className="pt-4 border-t border-stone-200">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Official Email
                </div>
                <a
                  href={`mailto:${content.email}`}
                  className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#2B2B2B] hover:text-[#C25212] transition-colors group p-2 rounded-xl hover:bg-white break-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#C25212] group-hover:bg-[#C25212] group-hover:text-white transition-colors shrink-0">
                    <Icon name="Mail" className="w-5 h-5" />
                  </div>
                  <span>{content.email}</span>
                </a>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-stone-200">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Instant Messaging
                </div>
                <a
                  href={buildWhatsAppLink(
                    content.whatsappNumber,
                    `Hello ${content.businessName}, I would like to make an enquiry.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp Directly"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#111827] font-bold text-sm shadow-xs transition-all active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#111827]" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

              {/* Address (Render ONLY if filled) */}
              {hasAddress && (
                <div className="pt-4 border-t border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Physical Office
                  </div>
                  <div className="flex items-start gap-3 p-2 text-sm text-gray-700">
                    <Icon name="MapPin" className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <span>{content.address}</span>
                  </div>
                </div>
              )}

              {/* Licences & Accreditations (Render ONLY if filled) */}
              {hasLicences && (
                <div className="pt-4 border-t border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Accreditation & Registrations
                  </div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {content.licences.map((licence, lIdx) => (
                      <li key={lIdx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-green-700" />
                        <span>{licence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Links (Render ONLY if filled) */}
              {activeSocials.length > 0 && (
                <div className="pt-4 border-t border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Connect on Social Media
                  </div>
                  <div className="flex items-center gap-3">
                    {activeSocials.map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-bold capitalize text-[#2B2B2B] hover:text-[#0C6BA8]"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Pre-fill Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200 shadow-premium">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B]">
                  Send an Enquiry
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Fill in your requirements below. Submitting will open WhatsApp with your details pre-formatted for rapid response.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Ibrahim Adeyemi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0C6BA8] focus:ring-2 focus:ring-[#0C6BA8]/20 text-sm font-medium text-[#2B2B2B] placeholder-gray-400 outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="e.g. 08012345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0C6BA8] focus:ring-2 focus:ring-[#0C6BA8]/20 text-sm font-medium text-[#2B2B2B] placeholder-gray-400 outline-none transition-all"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Select Service *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0C6BA8] focus:ring-2 focus:ring-[#0C6BA8]/20 text-sm font-medium text-[#2B2B2B] bg-white outline-none appearance-none transition-all pr-10 cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <Icon name="ChevronRight" className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Message / Specific Question
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about the school, country of interest, pilgrimage season, business entity, or tricycle inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0C6BA8] focus:ring-2 focus:ring-[#0C6BA8]/20 text-sm font-medium text-[#2B2B2B] placeholder-gray-400 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button with WhatsApp glyph */}
                <button
                  type="submit"
                  aria-label="Send enquiry via WhatsApp"
                  className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#111827] font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#111827]" />
                  <span>Send via WhatsApp</span>
                </button>
                <p className="text-center text-xs text-gray-500">
                  Instant response • We reply within standard business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
