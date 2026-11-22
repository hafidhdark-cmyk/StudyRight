import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C25212]">
            Comprehensive Solutions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Tailored travel, pilgrimage, corporate registration, and asset financing designed to help Nigerians thrive.
          </p>
        </div>

        {/* 4 Colour-Blocked Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {content.services.map((service, index) => {
            const isYellow = service.color === 'yellow';
            const isOrange = service.color === 'orange';
            const isBlue = service.color === 'blue';
            
            // AA-compliant background colors for white text contrast >= 4.5:1
            let cardBgClass = service.bgClass;
            if (isOrange) {
              cardBgClass = 'bg-[#C25212] text-white'; // 4.66:1 contrast against white text (passes WCAG AA)
            } else if (isBlue) {
              cardBgClass = 'bg-[#0F74B3] text-white'; // 5.37:1 contrast against white text (passes WCAG AA)
            } else if (isYellow) {
              cardBgClass = 'bg-[#FFD92E] text-[#2B2B2B]'; // 10.26:1 contrast with #2B2B2B (passes WCAG AAA)
            }

            const textColor = isYellow ? 'text-[#2B2B2B]' : 'text-white';
            const subTextColor = isYellow ? 'text-[#2B2B2B]' : 'text-white';
            const bulletBg = isYellow ? 'bg-black/10' : 'bg-white/20';
            const buttonClass = isYellow
              ? 'bg-[#2B2B2B] hover:bg-black text-white'
              : 'bg-white hover:bg-gray-100 text-[#1F2937]';
            const waIconColor = isYellow ? 'text-[#25D366]' : 'text-[#16a34a]';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-premium transition-shadow relative overflow-hidden ${cardBgClass}`}
              >
                {/* Decorative background glow circle */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${service.badgeClass}`}
                    >
                      {service.category}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${bulletBg}`}
                    >
                      <Icon name={service.icon} className={`w-6 h-6 ${textColor}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold tracking-tight mb-2.5 ${textColor}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${subTextColor}`}>
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <div className="space-y-2.5 mb-8">
                    {service.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${bulletBg}`}
                        >
                          <Icon name="CheckCircle2" className={`w-3.5 h-3.5 ${textColor}`} />
                        </div>
                        <span className={`text-sm font-semibold ${textColor}`}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA with official WhatsApp glyph */}
                <a
                  href={buildWhatsAppLink(content.whatsappNumber, service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                  className={`w-full min-h-[48px] py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98] ${buttonClass}`}
                >
                  <WhatsAppIcon className={`w-4 h-4 ${waIconColor}`} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
