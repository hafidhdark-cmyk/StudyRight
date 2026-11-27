import React, { useRef, useState, useEffect, useCallback } from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const items = Array.isArray(content.testimonials) ? content.testimonials : [];

  // Observe when section enters/leaves viewport for smart autoplay & off-screen pause
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play or pause stage video when entering/leaving view or switching index
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // If browser blocks unmuted autoplay, gracefully fall back to muted inline playback
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, activeIndex, isMuted]);

  const handleSelect = useCallback((idx) => {
    setProgress(0);
    setActiveIndex(idx);
    setIsInView(true);
  }, []);

  const handleEnded = useCallback(() => {
    setProgress(0);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (video) {
      video.muted = nextMuted;
      if (!nextMuted && video.paused) {
        video.play().catch(() => {});
      }
    }
  };

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex] || items[0];

  return (
    <section
      ref={sectionRef}
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
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-14">
          {content.testimonialsSection?.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9D6] border border-[#FFD92E]/70 text-[#2B2B2B] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C25212]" />
              <span>{content.testimonialsSection.eyebrow}</span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight leading-tight">
            {content.testimonialsSection?.title}
          </h2>
        </div>

        {/* Unified Cinema Story Stage (Mobile, Tablet & Desktop) */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl lg:rounded-4xl bg-[#161616] border border-white/10 shadow-2xl overflow-hidden p-4 sm:p-6 lg:p-8 xl:p-10">
            {/* Dynamic color-matched ambient glow shifting with active video */}
            <img
              key={`bg-${activeItem.id}`}
              src={activeItem.posterSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-20 pointer-events-none select-none transition-opacity duration-700"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#161616]/90 via-[#161616]/85 to-[#161616]/95 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-12 items-center">
              {/* Main 9:16 Cinema Video Stage */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[350px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-black ring-2 ring-[#FFD92E]/70 shadow-2xl">
                  {/* Top Segmented Story Progress Bars */}
                  <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 z-20 flex gap-1.5 pointer-events-none">
                    {items.map((item, idx) => {
                      let barWidth = '0%';
                      if (idx < activeIndex) barWidth = '100%';
                      else if (idx === activeIndex) barWidth = `${Math.max(4, progress)}%`;
                      return (
                        <div
                          key={item.id}
                          className="h-1 flex-1 rounded-full bg-white/25 overflow-hidden"
                        >
                          <div
                            className="h-full bg-[#FFD92E] transition-[width] duration-150 ease-linear motion-reduce:transition-none"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Top-left Active Badge + Top-right Sound Toggle */}
                  <div className="absolute top-6 sm:top-7 inset-x-2.5 sm:inset-x-3 z-20 flex items-center justify-between gap-2">
                    <div className="pointer-events-none inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wide whitespace-nowrap">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isPlaying ? 'bg-[#25D366] animate-pulse' : 'bg-[#FFD92E]'
                        }`}
                      />
                      <span>{activeItem.badge}</span>
                    </div>

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute testimonial video' : 'Mute testimonial video'}
                      className="inline-flex items-center gap-1.5 min-h-[36px] px-2.5 sm:px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E]"
                    >
                      <Icon name={isMuted ? 'VolumeX' : 'Volume2'} className="w-3.5 h-3.5 text-[#FFD92E] shrink-0" />
                      <span>{isMuted ? 'Tap for sound' : 'Sound on'}</span>
                    </button>
                  </div>

                  <video
                    key={activeItem.id}
                    ref={videoRef}
                    controls
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                    poster={activeItem.posterSrc}
                    width={activeItem.width}
                    height={activeItem.height}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-contain bg-black block"
                  >
                    <source src={activeItem.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Editorial Story Info & Interactive Auto-Queue Playlist */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-3.5 sm:space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD92E]/15 border border-[#FFD92E]/35 text-[#FFD92E] text-xs font-bold uppercase tracking-wider">
                    <span>
                      Now Playing • 0{activeIndex + 1} / 0{items.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-white leading-snug tracking-tight">
                    {activeItem.caption}
                  </h3>

                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 sm:px-5 py-2.5 rounded-xl bg-[#FFD92E] hover:bg-[#f5cb1b] text-[#161616] text-sm font-bold transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Icon name={isMuted ? 'Volume2' : 'VolumeX'} className="w-4 h-4 shrink-0" />
                      <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelect((activeIndex + 1) % items.length)}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[48px] px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E]"
                    >
                      <span>Next Story</span>
                      <Icon name="ChevronRight" className="w-4 h-4 text-[#FFD92E] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Interactive Playlist Queue Cards */}
                <div className="pt-5 sm:pt-6 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3.5 text-center lg:text-left">
                    Story Queue — Plays Automatically in Sequence
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {items.map((item, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelect(idx)}
                          aria-pressed={isCurrent}
                          className={`group relative text-left rounded-2xl p-3 border transition-all duration-300 flex items-center gap-3.5 min-h-[84px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E] ${
                            isCurrent
                              ? 'bg-white/12 border-[#FFD92E] shadow-lg'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                          }`}
                        >
                          {/* Portrait Thumbnail */}
                          <div className="relative w-14 h-18 sm:w-16 sm:h-20 rounded-xl overflow-hidden bg-black shrink-0 ring-1 ring-white/15">
                            <img
                              src={item.posterSrc}
                              alt=""
                              width={item.width}
                              height={item.height}
                              loading="lazy"
                              className="w-full h-full object-cover object-top"
                            />
                            <div
                              className={`absolute inset-0 flex items-center justify-center transition-colors ${
                                isCurrent ? 'bg-black/35' : 'bg-black/50 group-hover:bg-black/30'
                              }`}
                            >
                              <div className="w-7 h-7 rounded-full bg-white/90 text-[#161616] flex items-center justify-center shadow-sm">
                                <Icon name={isCurrent && isPlaying ? 'Pause' : 'Play'} className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>

                          {/* Card Metadata */}
                          <div className="min-w-0 flex-1">
                            <span
                              className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${
                                isCurrent ? 'text-[#FFD92E]' : 'text-gray-400'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  isCurrent ? 'bg-[#25D366] animate-pulse' : 'bg-gray-500'
                                }`}
                              />
                              {isCurrent ? 'Now Playing' : 'Up Next'}
                            </span>
                            <div className="text-sm font-bold text-white mt-0.5">
                              {item.badge}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-0.5 leading-snug">
                              {item.caption}
                            </p>
                          </div>

                          {/* Active bottom progress line */}
                          {isCurrent && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/15">
                              <div
                                className="h-full bg-[#FFD92E] transition-[width] duration-150 ease-linear motion-reduce:transition-none"
                                style={{ width: `${Math.max(4, progress)}%` }}
                              />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
