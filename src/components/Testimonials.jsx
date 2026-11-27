import React from 'react';
import { content } from '../content';

export default function Testimonials() {
  if (!Array.isArray(content.testimonials) || content.testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            {content.testimonialsSection?.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {content.testimonials.map((item) => (
            <figure
              key={item.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-subtle transition-shadow flex flex-col"
            >
              <div className="w-full bg-[#1C1C1C] flex items-center justify-center overflow-hidden">
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={item.posterSrc}
                  width={item.width}
                  height={item.height}
                  className="w-full h-[360px] sm:h-[420px] object-contain bg-[#1C1C1C] block"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <figcaption className="p-5 sm:p-6 text-base font-medium text-[#2B2B2B] leading-relaxed border-t border-gray-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
