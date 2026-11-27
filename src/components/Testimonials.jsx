import React from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Testimonials() {
  if (!Array.isArray(content.testimonials) || content.testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-gradient-to-b from-[#FAFAFA] via-[#FFFDF6] to-white border-b border-gray-100 relative overflow-hidden"
    >
      {/* Subtle warm ambient accents */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#FFD92E]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F27A2E]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {content.testimonialsSection?.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9D6] border border-[#FFD92E]/70 text-[#2B2B2B] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C25212]" />
              <span>{content.testimonialsSection.eyebrow}</span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight leading-tight">
            {content.testimonialsSection?.title}
          </h2>
        </div>

        {/* Portrait Video Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto">
          {content.testimonials.map((item) => (
            <figure
              key={item.id}
              className="bg-white rounded-3xl p-2.5 sm:p-3.5 border border-gray-200/90 shadow-premium hover:border-[#FFD92E] transition-all duration-300 flex flex-col"
            >
              {/* Inner Framed 9:16 Video Viewport with Blurred Ambient Backdrop */}
              <div className="relative w-full aspect-[9/16] max-h-[460px] sm:max-h-[500px] rounded-2xl bg-[#141414] overflow-hidden flex items-center justify-center ring-1 ring-black/10">
                {/* Ambient color-matched blurred poster backdrop */}
                <img
                  src={item.posterSrc}
                  alt=""
                  aria-hidden="true"
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50 pointer-events-none select-none"
                />

                {/* Top-left subtle badge (pointer-events-none so video remains 100% interactive) */}
                {item.badge && (
                  <div className="absolute top-3 left-3 z-20 pointer-events-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92E]" />
                    <span>{item.badge}</span>
                  </div>
                )}

                <video
                  controls
                  preload="none"
                  playsInline
                  poster={item.posterSrc}
                  width={item.width}
                  height={item.height}
                  className="relative z-10 w-full h-full object-contain block"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                </video>
              </div>

              {/* Structured Editorial Caption Footer */}
              <figcaption className="pt-4 pb-2 px-2 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF9D6] border border-[#FFD92E]/70 text-[#2B2B2B] flex items-center justify-center shrink-0">
                  <Icon name="ShieldCheck" className="w-5 h-5 text-[#2B2B2B]" />
                </div>
                <span className="text-base font-semibold text-[#2B2B2B] leading-snug">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
