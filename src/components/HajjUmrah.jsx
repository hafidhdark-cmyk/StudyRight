import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function HajjUmrah() {
  const hasPackages = Array.isArray(content.packages) && content.packages.length > 0;

  return (
    <section id="hajj-umrah" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-[#FAF9F5] border-y border-stone-200/60 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F27A2E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B08821]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Calm Intro Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#C25212] text-xs font-bold uppercase tracking-wider mb-4">
            <Icon name="MoonStar" className="w-3.5 h-3.5 text-[#C25212]" />
            <span>Spiritual Journey Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            {content.hajjUmrah.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            {content.hajjUmrah.subtitle}
          </p>
        </div>

        {/* 3 Core Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {content.hajjUmrah.highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-stone-200 shadow-xs hover:shadow-subtle transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 text-[#C25212]">
                <Icon name={highlight.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2B2B2B] mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Packages Grid or Empty State Card */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#2B2B2B]">
              Current Pilgrimage Packages
            </h3>
            <span className="text-xs font-semibold text-stone-600">
              Makkah & Madinah
            </span>
          </div>

          {hasPackages ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.packages.map((pkg, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xl font-bold text-[#2B2B2B]">{pkg.name}</h4>
                    <p className="text-sm text-stone-600 mt-1">{pkg.duration} • {pkg.dates}</p>
                    <div className="my-4 text-2xl font-extrabold text-[#C25212]">{pkg.price}</div>
                    <p className="text-xs text-stone-700">Hotel: {pkg.hotels}</p>
                    <p className="text-xs text-stone-700 mt-0.5">Airline: {pkg.airline}</p>
                  </div>
                  <a
                    href={buildWhatsAppLink(
                      content.whatsappNumber,
                      `Assalamu Alaikum, I would like to book the ${pkg.name} package.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${pkg.name} package on WhatsApp`}
                    className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#C25212] hover:bg-[#a33e05] text-white text-xs font-bold text-center flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Enquire About This Package</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* Graceful Empty State Announcement Card */
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-[#C25212] flex items-center justify-center mb-4 border border-amber-100">
                <Icon name="CalendarCheck" className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#2B2B2B]">
                Pilgrimage Packages Announced Soon
              </h4>
              <p className="mt-2 text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                Official Umrah and Hajj season packages are currently being scheduled with NAHCON and verified airline partners. Message our pilgrimage desk for current slot availability and visa timelines.
              </p>
              <div className="mt-6">
                <a
                  href={buildWhatsAppLink(content.whatsappNumber, content.hajjUmrah.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message StudyRight for current pilgrimage details on WhatsApp"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-6 py-3 rounded-xl bg-[#C25212] hover:bg-[#a33e05] text-white text-sm font-bold shadow-xs transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Message Us for Current Details</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Global Section CTA */}
        <div className="text-center pt-2">
          <a
            href={buildWhatsAppLink(content.whatsappNumber, content.hajjUmrah.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire about Hajj & Umrah on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-7 py-3.5 rounded-xl bg-[#2B2B2B] hover:bg-black text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Enquire About Hajj & Umrah</span>
          </a>
        </div>
      </div>
    </section>
  );
}
