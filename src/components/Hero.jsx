import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const primaryWhatsAppMessage = `Hello ${content.businessName}, I would like to get started with your services.`;

  // Filter stats: hide any stat that is empty
  const activeStats = (content.stats || []).filter(
    (stat) => stat && stat.value && typeof stat.value === 'string' && stat.value.trim() !== ''
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#FAFAFA] via-white to-white">
      {/* Subtle animated background atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 md:w-96 h-80 md:h-96 rounded-full bg-gradient-to-br from-[#1E9BE0]/10 to-[#F27A2E]/10 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -left-32 w-80 md:w-96 h-80 md:h-96 rounded-full bg-gradient-to-tr from-[#FFD92E]/15 to-[#F27A2E]/10 blur-3xl animate-float" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-[#1050B2]/5 blur-2xl" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#2B2B2B 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#C25212] animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-[#2B2B2B]">
              Nigerian Travel & Business Advisory
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="hidden sm:inline text-xs text-gray-600 font-medium">
              In collaboration with {content.partner.name}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2B2B2B] tracking-tight leading-[1.12]"
          >
            {content.tagline}
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#2B2B2B]/90 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {content.subheadline}
          </motion.p>

          {/* Buttons: Primary (WhatsApp with official glyph), Secondary (View Services) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <a
              href={buildWhatsAppLink(content.whatsappNumber, primaryWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#111827] font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#111827]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#2B2B2B] font-bold text-base border border-gray-200 shadow-xs hover:border-gray-300 transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8]"
            >
              <span>View Services</span>
              <Icon name="ArrowRight" className="w-4 h-4 text-gray-500" />
            </a>
          </motion.div>

          {/* Trust Row: Rendered ONLY if non-empty */}
          {activeStats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 md:gap-14"
            >
              {activeStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
