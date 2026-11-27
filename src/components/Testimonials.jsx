import React, { useRef, useState, useEffect, useCallback } from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Testimonials() {
  const sectionRef = useRef(null);

  // Mobile carousel refs & state
  const trackRef = useRef(null);
  const mobileVideoRefs = useRef([]);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop cinema stage refs & state
  const desktopVideoRef = useRef(null);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const items = Array.isArray(content.testimonials) ? content.testimonials : [];

  // Track lg breakpoint (>= 1024px) so desktop autoplay only runs on desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktopViewport(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Observe when section enters/leaves viewport for smart autoplay/pause
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !isDesktopViewport) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktopViewport]);

  // Play or pause desktop stage video when entering/leaving view or switching index
  useEffect(() => {
    const video = desktopVideoRef.current;
    if (!video || !isDesktopViewport) return;

    video.muted = isMuted;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // If browser blocks unmuted autoplay, gracefully fall back to muted
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, desktopIndex, isDesktopViewport, isMuted]);

  const handleDesktopSelect = useCallback((idx) => {
    setProgress(0);
    setDesktopIndex(idx);
    setIsInView(true);
  }, []);

  const handleDesktopEnded = useCallback(() => {
    setProgress(0);
    setDesktopIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handleDesktopTimeUpdate = () => {
    const video = desktopVideoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const toggleMute = () => {
    const video = desktopVideoRef.current;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (video) {
      video.muted = nextMuted;
      if (!nextMuted && video.paused) {
        video.play().catch(() => {});
      }
    }
  };

  // Mobile carousel helpers
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
      setMobileIndex(clamped);
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
    setMobileIndex(closestIdx);
  };

  const handleMobileVideoPlay = (playingIdx) => {
    setMobileIndex(playingIdx);
    mobileVideoRefs.current.forEach((videoEl, idx) => {
      if (idx !== playingIdx && videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    });
  };

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[desktopIndex] || items[0];

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

        {/* ============================================================
            DESKTOP EXPERIENCE (lg+): Cinema Story Stage with Auto-Advance
           ============================================================ */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative rounded-4xl bg-[#161616] border border-white/10 shadow-2xl overflow-hidden p-8 xl:p-10">
            {/* Dynamic color-matched ambient glow shifting with active video */}
            <img
              key={`bg-${activeItem.id}`}
              src={activeItem.posterSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-20 pointer-events-none select-none transition-opacity duration-700"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#161616]/90 via-[#161616]/85 to-[#161616]/95 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-12 gap-8 xl:gap-12 items-center">
              {/* Left: Prominent 9:16 Cinema Video Stage */}
              <div className="col-span-5 flex justify-center">
                <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-3xl overflow-hidden bg-black ring-2 ring-[#FFD92E]/70 shadow-2xl">
                  {/* Top Segmented Story Progress Bars */}
                  <div className="absolute top-3 inset-x-3 z-20 flex gap-1.5 pointer-events-none">
                    {items.map((item, idx) => {
                      let barWidth = '0%';
                      if (idx < desktopIndex) barWidth = '100%';
                      else if (idx === desktopIndex) barWidth = `${Math.max(4, progress)}%`;
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
                  <div className="absolute top-7 inset-x-3 z-20 flex items-center justify-between gap-2">
                    <div className="pointer-events-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wide">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isPlaying ? 'bg-[#25D366] animate-pulse' : 'bg-[#FFD92E]'
                        }`}
                      />
                      <span>{activeItem.badge}</span>
                    </div>

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute testimonial video' : 'Mute testimonial video'}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E]"
                    >
                      <Icon name={isMuted ? 'VolumeX' : 'Volume2'} className="w-3.5 h-3.5 text-[#FFD92E]" />
                      <span>{isMuted ? 'Tap for sound' : 'Sound on'}</span>
                    </button>
                  </div>

                  <video
                    key={activeItem.id}
                    ref={desktopVideoRef}
                    controls
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                    poster={activeItem.posterSrc}
                    width={activeItem.width}
                    height={activeItem.height}
                    onEnded={handleDesktopEnded}
                    onTimeUpdate={handleDesktopTimeUpdate}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-contain bg-black block"
                  >
                    <source src={activeItem.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Right: Editorial Story Info & Interactive Auto-Queue Playlist */}
              <div className="col-span-7 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD92E]/15 border border-[#FFD92E]/35 text-[#FFD92E] text-xs font-bold uppercase tracking-wider">
                    <span>
                      Now Playing • 0{desktopIndex + 1} / 0{items.length}
                    </span>
                  </div>

                  <h3 className="text-2xl xl:text-3xl font-extrabold text-white leading-snug tracking-tight">
                    {activeItem.caption}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#FFD92E] hover:bg-[#f5cb1b] text-[#161616] text-sm font-bold transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Icon name={isMuted ? 'Volume2' : 'VolumeX'} className="w-4 h-4" />
                      <span>{isMuted ? 'Unmute Video' : 'Mute Video'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDesktopSelect((desktopIndex + 1) % items.length)}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E]"
                    >
                      <span>Play Next Story</span>
                      <Icon name="ChevronRight" className="w-4 h-4 text-[#FFD92E]" />
                    </button>
                  </div>
                </div>

                {/* Interactive Playlist Queue Cards */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Story Queue — Plays Automatically in Sequence
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((item, idx) => {
                      const isCurrent = idx === desktopIndex;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleDesktopSelect(idx)}
                          aria-pressed={isCurrent}
                          className={`group relative text-left rounded-2xl p-3 border transition-all duration-300 flex items-center gap-3.5 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD92E] ${
                            isCurrent
                              ? 'bg-white/12 border-[#FFD92E] shadow-lg'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                          }`}
                        >
                          {/* Portrait Thumbnail */}
                          <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-black shrink-0 ring-1 ring-white/15">
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
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isCurrent ? 'bg-[#25D366] animate-pulse' : 'bg-gray-500'
                                }`}
                              />
                              {isCurrent ? 'Now Playing' : 'Up Next'}
                            </span>
                            <div className="text-sm font-bold text-white mt-0.5">
                              {item.badge}
                            </div>
                            <p className="text-xs text-gray-300 line-clamp-2 mt-0.5 leading-snug">
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

        {/* ============================================================
            MOBILE & TABLET EXPERIENCE (< lg): Side-by-Side Snap Carousel
           ============================================================ */}
        <div className="lg:hidden relative">
          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            role="region"
            aria-label="Beneficiary video testimonials carousel"
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-2 md:justify-center"
          >
            {items.map((item, idx) => {
              const isActive = mobileIndex === idx;
              return (
                <figure
                  key={item.id}
                  onClick={() => setMobileIndex(idx)}
                  className={`shrink-0 snap-center w-[78vw] max-w-[300px] sm:w-[310px] bg-white rounded-3xl p-2.5 sm:p-3 border transition-all duration-300 flex flex-col ${
                    isActive
                      ? 'border-[#FFD92E] shadow-premium'
                      : 'border-gray-200/90 shadow-xs hover:border-[#FFD92E]/70'
                  }`}
                >
                  {/* Exact 9:16 Portrait Video Stage */}
                  <div className="relative w-full aspect-[9/16] rounded-2xl bg-[#141414] overflow-hidden flex items-center justify-center ring-1 ring-black/10">
                    <img
                      src={item.posterSrc}
                      alt=""
                      aria-hidden="true"
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-45 pointer-events-none select-none"
                    />

                    {item.badge && (
                      <div className="absolute top-3 left-3 z-20 pointer-events-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92E]" />
                        <span>{item.badge}</span>
                      </div>
                    )}

                    <video
                      ref={(el) => {
                        mobileVideoRefs.current[idx] = el;
                      }}
                      controls
                      preload="none"
                      playsInline
                      poster={item.posterSrc}
                      width={item.width}
                      height={item.height}
                      onPlay={() => handleMobileVideoPlay(idx)}
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

          {/* Mobile-only Carousel Controls */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSlide(mobileIndex - 1)}
              disabled={mobileIndex === 0}
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
                  aria-selected={mobileIndex === idx}
                  aria-label={`View testimonial ${idx + 1}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8] ${
                    mobileIndex === idx
                      ? 'w-8 bg-[#2B2B2B]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSlide(mobileIndex + 1)}
              disabled={mobileIndex === items.length - 1}
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
