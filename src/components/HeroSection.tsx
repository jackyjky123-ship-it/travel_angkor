import React from 'react';
import { Star, ShieldCheck, Users, Play, ArrowDown, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onBookNowClick: () => void;
  onWatchVideoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onBookNowClick,
  onWatchVideoClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#051114]/60 via-[#091d22]/60 to-[#0c181a]/60 text-white overflow-hidden select-none"
    >
      {/* Ethereal Atmospheric Dawn & Reflection Pond Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing dawn ambient light */}
        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-teal-500/15 via-emerald-600/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[300px] bg-lime-400/10 rounded-full blur-[120px]" />

        {/* Silhouette of Angkor Wat 5 Towers against Dawn Sky */}
        <div className="absolute bottom-[20%] left-0 right-0 h-44 sm:h-64 opacity-25 flex items-end justify-center pointer-events-none">
          <svg
            viewBox="0 0 1200 240"
            fill="currentColor"
            className="w-full h-full text-teal-950"
            preserveAspectRatio="none"
          >
            <rect x="0" y="220" width="1200" height="20" />
            <path d="M 570 220 L 585 100 L 590 60 L 600 35 L 610 60 L 615 100 L 630 220 Z" />
            <path d="M 520 220 L 530 120 L 540 80 L 548 65 L 556 80 L 565 120 L 575 220 Z" />
            <path d="M 625 220 L 635 120 L 644 80 L 652 65 L 660 80 L 670 120 L 680 220 Z" />
            <path d="M 470 220 L 480 140 L 490 105 L 496 95 L 504 105 L 512 140 L 522 220 Z" />
            <path d="M 678 220 L 688 140 L 696 105 L 704 95 L 712 105 L 720 140 L 730 220 Z" />
            <rect x="420" y="180" width="360" height="40" />
            <rect x="360" y="200" width="480" height="20" />
          </svg>
        </div>

        {/* Shimmering Reflection Pond Base with Dot Halftone Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-[#0c181a]/60 via-[#091a1e]/80 to-transparent border-t border-white/[0.05]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto w-full text-center flex flex-col items-center">
        {/* Monospace Pre-header Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-950/20 backdrop-blur-md mb-6 sm:mb-8 text-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
          <span className="font-mono text-xs font-bold tracking-wider">//</span>
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase">
            Handcrafted Sunrise Expeditions
          </span>
        </div>

        {/* Dual-Typography Editorial Headline */}
        <h1
          id="hero-headline"
          className="text-white tracking-tight leading-[1.04] max-w-4xl"
        >
          <span className="block font-editorial italic font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white/95 mb-1">
            Witness the Soul
          </span>
          <span className="block font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white">
            of the Khmer Empire
          </span>
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="mt-6 text-neutral-300/90 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed tracking-normal"
        >
          Handcrafted sunrise tours, licensed local historians, and crowd-free routes across Angkor Archaeological Park.
        </p>

        {/* Primary Call-to-Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-cta-book"
            onClick={onBookNowClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(163,230,53,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book Sunrise Tour
          </button>

          <button
            id="hero-cta-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/25 bg-white/[0.04] hover:bg-white/10 hover:border-white text-white font-semibold text-xs tracking-[0.18em] uppercase rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            Explore Tour Packages
          </button>

          {/* Watch Dawn Video Option */}
          <button
            id="hero-cta-video"
            onClick={onWatchVideoClick}
            className="group flex items-center space-x-2 text-neutral-300 hover:text-white px-4 py-2 transition-colors cursor-pointer text-xs font-mono tracking-wider uppercase"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.05] flex items-center justify-center group-hover:border-lime-400 group-hover:text-lime-400 transition-all">
              <Play size={12} className="fill-current ml-0.5" />
            </div>
            <span>Dawn Film</span>
          </button>
        </div>
      </div>

      {/* Trust Badges / Social Proof */}
      <div
        id="hero-trust-badges"
        className="relative z-10 max-w-5xl mx-auto w-full pt-8 sm:pt-10 border-t border-white/10 mt-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center justify-between text-center sm:text-left">
          {/* Badge 1: TripAdvisor */}
          <div className="flex items-center justify-center sm:justify-start space-x-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-full border border-lime-400/30 bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
              <Star size={18} className="fill-lime-400" />
            </div>
            <div>
              <div className="flex items-center space-x-1 justify-center sm:justify-start">
                <span className="text-white font-bold text-sm sm:text-base tracking-tight">
                  Rated 5.0
                </span>
                <span className="text-lime-400 text-xs">★★★★★</span>
              </div>
              <p className="text-neutral-400 text-[11px] font-mono tracking-wider uppercase">
                TripAdvisor (1,400+ Reviews)
              </p>
            </div>
          </div>

          {/* Badge 2: Ministry License */}
          <div className="flex items-center justify-center space-x-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.05] flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base tracking-tight">
                Official Ministry License
              </div>
              <p className="text-neutral-400 text-[11px] font-mono tracking-wider uppercase">
                Kingdom of Cambodia Tourism
              </p>
            </div>
          </div>

          {/* Badge 3: Happy Travelers */}
          <div className="flex items-center justify-center sm:justify-end space-x-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-full border border-teal-400/30 bg-teal-400/10 flex items-center justify-center text-teal-300 shrink-0">
              <Users size={18} />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base tracking-tight">
                10,000+ Happy Travelers
              </div>
              <p className="text-neutral-400 text-[11px] font-mono tracking-wider uppercase">
                Guided Safely Since 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

