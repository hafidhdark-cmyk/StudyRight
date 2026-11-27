import React, { useRef, useState } from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Testimonials() {
  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!Array.isArray(content.testimonials) || content.testimonials.length === 0) {
    return null;
  }

  const items = content.testimonials;

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const card = track.children[clamped];
    if (card) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      card.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setActiveIndex(clamped);
    }
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;
    Array.from(track.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(trackCenter - childCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  const handleVideoPlay = (playingIdx) => {
    setActiveIndex(playingIdx);
    videoRefs.current.forEach((videoEl, idx) => {
      if (idx !== playingIdx && videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    });
  };

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
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
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

        {/* Side-by-Side Horizontal Snap Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            role="region"
            aria-label="Beneficiary video testimonials carousel"
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 sm:gap-6 lg:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-2 md:justify-center"
          >
            {items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <figure
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`shrink-0 snap-center w-[78vw] max-w-[300px] sm:w-[310px] md:w-[330px] bg-white rounded-3xl p-2.5 sm:p-3 border transition-all duration-300 flex flex-col ${
                    isActive
                      ? 'border-[#FFD92E] shadow-premium'
                      : 'border-gray-200/90 shadow-xs hover:border-[#FFD92E]/70'
                  }`}
                >
                  {/* Exact 9:16 Portrait Video Stage */}
                  <div className="relative w-full aspect-[9/16] rounded-2xl bg-[#141414] overflow-hidden flex items-center justify-center ring-1 ring-black/10">
                    {/* Ambient color-matched blurred poster backdrop */}
                    <img
                      src={item.posterSrc}
                      alt=""
                      aria-hidden="true"
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-45 pointer-events-none select-none"
                    />

                    {/* Top-left glass badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 z-20 pointer-events-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92E]" />
                        <span>{item.badge}</span>
                      </div>
                    )}

                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      controls
                      preload="none"
                      playsInline
                      poster={item.posterSrc}
                      width={item.width}
                      height={item.height}
                      onPlay={() => handleVideoPlay(idx)}
                      className="relative z-10 w-full h-full object-contain block"
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                    </video>
                  </div>

                  {/* Structured Caption Footer */}
                  <figcaption className="pt-3.5 pb-1.5 px-2 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF9D6] border border-[#FFD92E]/70 text-[#2B2B2B] flex items-center justify-center shrink-0">
                      <Icon name="ShieldCheck" className="w-4 h-4 text-[#2B2B2B]" />
                    </div>
                    <span className="text-base font-semibold text-[#2B2B2B] leading-snug">
                      {item.caption}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Carousel Navigation Controls & Pagination Dots */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial video"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-[#2B2B2B] hover:border-[#2B2B2B] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-xs transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8]"
            >
              <Icon name="ChevronLeft" className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial video">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-label={`View testimonial ${idx + 1}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8] ${
                    activeIndex === idx
                      ? 'w-8 bg-[#2B2B2B]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSlide(activeIndex + 1)}
              disabled={activeIndex === items.length - 1}
              aria-label="Next testimonial video"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-[#2B2B2B] hover:border-[#2B2B2B] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-xs transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8]"
            >
              <Icon name="ChevronRight" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
