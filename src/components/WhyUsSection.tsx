import React, { useState, useEffect } from 'react';
import { Search, Menu, Share2, Twitter, Facebook, Instagram, Youtube, ArrowRight, ArrowLeft, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const WhyUsSection: React.FC = () => {
  const [currentPillar, setCurrentPillar] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % 4); // 4 pillars
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const pillars = [
    {
      num: '01.',
      heading: 'CERTIFIED NATIVE GUIDES',
      tagline: 'Born & Raised in Siem Reap',
      description:
        'Born and raised in Siem Reap, fluent in English/multilingual, and deeply versed in temple history and sacred architectural symbolism. Every historian holds an official Ministry of Tourism license.',
      badges: ['Ministry of Tourism Certified', 'Temple History & Symbolism', 'Fluent English & Multilingual'],
    },
    {
      num: '02.',
      heading: 'CROWD-AVOIDANCE TIMING',
      tagline: 'East Gate Evasion Sequences',
      description:
        'Carefully timed entry sequences (like entering via the quieter East Gate) so guests experience temples without massive tour buses or megaphone tour crowds.',
      badges: ['Quiet East Gate Portals', 'Dawn Advantage (04:30 AM)', 'Zero Tour Bus Congestion'],
    },
    {
      num: '03.',
      heading: 'ALL-INCLUSIVE COMFORT',
      tagline: 'Iced Jasmine Towels & Spring Water',
      description:
        'Air-conditioned private transport, complimentary iced jasmine towels, and chilled bottled water after every temple stop to keep you refreshed throughout the tropical heat.',
      badges: ['Chilled Bottled Water', 'Complimentary Iced Towels', 'Air-Conditioned Transport'],
    },
    {
      num: '04.',
      heading: 'RESPONSIBLE TOURISM',
      tagline: '5% Direct Community Heritage Fund',
      description:
        '5% of bookings directly support local village initiatives and heritage conservation, funding clean water wells and youth traditional stone masonry apprenticeships.',
      badges: ['5% Village Initiatives', 'Heritage Conservation', '100% Direct Local Income'],
    },
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section
      id="why-us"
      className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] bg-[#07130e]/60 text-white select-none overflow-hidden border-t border-white/10 flex flex-col justify-between"
    >
      {/* =========================================================================
          ATMOSPHERIC DEEP JUNGLE & CANOPY BACKDROP (Matching Reference Image)
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep rich dark forest tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06120e]/95 via-[#0b1c15]/90 to-[#040c09]/95 z-10" />

        {/* Organic Lush Forest Canopy Ambient Vignette & Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 z-0 filter saturate-150"
          style={{
            backgroundImage: `radial-gradient(circle at 45% 50%, rgba(34, 197, 94, 0.25), transparent 60%), radial-gradient(circle at 75% 70%, rgba(132, 204, 22, 0.2), transparent 50%)`,
          }}
        />

        {/* Subtle Silhouette of Forest Pine & Tropical Ferns (SVG Organic Shapes) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Tree & Fern shapes */}
          <path
            d="M450,700 L490,480 L470,470 L510,380 L490,370 L520,290 L505,280 L525,220 L535,220 L555,280 L540,290 L570,370 L550,380 L590,470 L570,480 L610,700 Z"
            fill="#15803d"
          />
          <path
            d="M320,700 L350,540 L335,530 L365,450 L350,440 L375,370 L395,370 L420,440 L405,450 L435,530 L420,540 L450,700 Z"
            fill="#166534"
          />
          <path
            d="M580,700 L610,510 L595,500 L630,420 L615,410 L645,330 L665,330 L695,410 L680,420 L715,500 L700,510 L730,700 Z"
            fill="#14532d"
          />
        </svg>

        {/* Glowing emerald fog effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime-500/10 rounded-full blur-[140px]" />
      </div>

      {/* =========================================================================
          TOP NAV BAR INSIDE SECTION (Matching Reference: Search, Brand, Nav Links)
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-4 flex items-center justify-between">
        {/* Left: Search Icon + Green Environment Branding Tag */}
        <div className="flex items-center space-x-3 text-white/90">
          <Search size={16} className="text-white/80" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/90">
            ANGKOR HERITAGE
          </span>
        </div>

        {/* Right: Hamburger + Section Nav Links (Home, About, Contact in reference) */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-medium tracking-wider uppercase text-white/80">
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#why-us" className="hover:text-lime-300 transition-colors">
              Pillars
            </a>
            <a href="#prep" className="hover:text-lime-300 transition-colors">
              Ethics
            </a>
            <a href="#booking" className="hover:text-lime-300 transition-colors">
              Direct Booking
            </a>
          </div>
          <button
            onClick={() => {
              setCurrentPillar((prev) => (prev + 1) % pillars.length);
            }}
            className="flex items-center space-x-2 text-white/90 hover:text-lime-300 transition-colors cursor-pointer"
            aria-label="Toggle pillar"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN BODY: LEFT TITLES & RIGHT PILLAR SHOWCASE (Exact Reference Match)
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-16 my-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
        {/* LEFT COLUMN: PROTECT NATURE / THE LOCAL DIFFERENCE */}
        <div className="w-full lg:max-w-xl">
          <FadeIn className="text-left">
            {/* Title Line 1: Light & Clean Tracking */}
            <div className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.08em] uppercase text-white leading-none">
              THE LOCAL
            </div>

            {/* Title Line 2: Bold High-Contrast */}
            <div className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white leading-none mt-1">
              DIFFERENCE
            </div>

            {/* Underline Decoration with Center Label (Matching "—— Design ——" in reference) */}
            <div className="flex items-center space-x-4 mt-5 mb-6 max-w-sm">
              <div className="h-[2px] bg-white/40 flex-1" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/70">
                DIRECT CARE
              </span>
              <div className="h-[2px] bg-white/40 flex-1" />
            </div>

            {/* Sub-attribution */}
            <p className="text-xs sm:text-sm text-neutral-300/80 italic font-light max-w-md leading-relaxed mb-6">
              Rooted in Siem Reap Province • Managed directly by licensed native historians rather than multinational booking engines.
            </p>

            {/* Pillar Selector Pills for Fast Desktop Navigation */}
            <div className="flex flex-wrap gap-2 pt-2">
              {pillars.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPillar(idx)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    currentPillar === idx
                      ? 'bg-lime-400 text-black shadow-md'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {p.heading.split(' ')[0]}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: 01. HEADING + DESCRIPTION + VERTICAL SOCIAL RAIL */}
        <FadeIn direction="left" delay={0.2} className="relative w-full lg:max-w-lg lg:pr-12">
          {/* Active Pillar Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Huge Glowing Lime Green Number "01." (Exact Match to Reference Image) */}
              <div className="text-lime-400 font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none drop-shadow-[0_4px_25px_rgba(163,230,53,0.3)]">
                {pillars[currentPillar].num}
              </div>

              {/* Bright Green Uppercase Heading */}
              <h3 className="text-lime-300 font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-tight">
                {pillars[currentPillar].heading}
              </h3>

              {/* Tagline */}
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-medium pt-1">
                {pillars[currentPillar].tagline}
              </div>

              {/* Body Text */}
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-light pt-2 max-w-md">
                {pillars[currentPillar].description}
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2 pt-3">
                {pillars[currentPillar].badges.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/10 border border-white/15 rounded text-[10px] uppercase tracking-wider text-lime-200"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* Action CTA */}
              <div className="pt-6 flex items-center space-x-4">
                <a
                  href="#booking"
                  className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-[0.2em] rounded-[2px] transition-all active:scale-95 shadow-[0_10px_25px_rgba(163,230,53,0.25)] cursor-pointer inline-flex items-center space-x-2"
                >
                  <span>Reserve This Standard</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons for the Carousel */}
          <div className="flex items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPillar((prev) => (prev - 1 + pillars.length) % pillars.length)}
              className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10 relative"
              aria-label="Previous pillar"
            >
              <ArrowLeft size={13} />
            </button>
            <button
              onClick={() => setCurrentPillar((prev) => (prev + 1) % pillars.length)}
              className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10 relative"
              aria-label="Next pillar"
            >
              <ArrowRight size={13} />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* =========================================================================
          VERTICAL RIGHT RAIL: VERTICAL DIVIDER & SOCIAL ICONS (Exact Reference Match)
         ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 flex-col items-center justify-between py-2">
        {/* Top vertical line */}
        <div className="w-[1.5px] h-20 bg-white/50" />

        {/* Social Icons Stack */}
        <div className="flex flex-col items-center space-y-4 text-white/70">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={15} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={15} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={15} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={15} />
          </a>

          {/* Rotated "follow us" label */}
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 [writing-mode:vertical-rl] rotate-180 pt-2 font-mono">
            follow us
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM BAR: SHARE BUTTON (LEFT) + PAGINATION DOTS (CENTER) (Exact Match)
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-8 pt-4 flex items-center justify-between">
        {/* Left: Share Action */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-lime-300 transition-colors cursor-pointer"
        >
          <Share2 size={15} />
          <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
        </button>

        {/* Center: Pagination Dots (○ ○ ○ ○ with active highlighted state) */}
        <div className="flex items-center space-x-3">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPillar(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentPillar === idx
                  ? 'w-3 h-3 bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)] scale-110'
                  : 'w-2 h-2 border border-white/60 bg-transparent hover:border-white'
              }`}
              aria-label={`Go to pillar 0${idx + 1}`}
            />
          ))}
        </div>

        {/* Right balance spacer */}
        <div className="text-[11px] font-mono text-white/50 tracking-widest hidden sm:block">
          0{currentPillar + 1} / 0{pillars.length}
        </div>
      </div>
    </section>
  );
};

