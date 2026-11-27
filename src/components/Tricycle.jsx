import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Tricycle() {
  return (
    <section id="tricycle" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FFFDF0] via-[#FFF9D6] to-[#FFF4BE] border border-[#FFD92E]/60 rounded-3xl sm:rounded-4xl p-5 sm:p-10 lg:p-16 relative overflow-hidden shadow-premium">
          {/* Decorative background shapes */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FFD92E]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mb-12">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 border border-black/15 text-[#2B2B2B] text-xs font-bold uppercase tracking-wider mb-4">
              <Icon name="Truck" className="w-3.5 h-3.5 text-[#2B2B2B]" />
              <span>Asset Financing & Empowerment</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight leading-tight">
              {content.tricycle.headline}
            </h2>

            {/* Subheadline */}
            <p className="mt-4 text-base sm:text-lg text-[#2B2B2B] leading-relaxed font-normal">
              {content.tricycle.subheadline}
            </p>
          </div>

          {/* 4 Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {content.tricycle.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/95 rounded-2xl p-6 border border-black/10 shadow-xs hover:shadow-subtle transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFD92E]/40 text-[#2B2B2B] flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#2B2B2B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to action bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-black/10">
            <div className="flex items-start sm:items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C25212] animate-ping shrink-0 mt-1 sm:mt-0" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#2B2B2B]">
                Units available for verified operators in Nigeria. Flexible daily or weekly plans.
              </p>
            </div>

            <a
              href={buildWhatsAppLink(content.whatsappNumber, content.tricycle.whatsappPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask About Tricycle Plans on WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-7 py-3.5 rounded-xl bg-[#2B2B2B] hover:bg-black text-white font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Ask About Tricycle Plans</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
