import React, { useState } from 'react';
import { TourPackage } from '../types';
import { Clock, Check, ArrowRight, ArrowLeft, Droplets, ShieldCheck, Sparkles, Compass, Eye, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface PackagesSectionProps {
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
  onBookTour: (pkg: TourPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onSelectPackage,
  onBookTour,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % packages.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  // Top dossier folder tab items
  const dossierItems = [
    {
      tab: 'Circuit A',
      title: 'Angkor Dawn Sanctuary',
      description: 'Dawn reflection over lotus pools with curated northern bank access before general crowds.',
    },
    {
      tab: 'Circuit B',
      title: 'Bayon Stone Faces',
      description: '216 enigmatic smiles of Jayavarman VII explored through quiet southern moat approaches.',
    },
    {
      tab: 'Circuit C',
      title: 'Ta Prohm Jungle Roots',
      description: 'Ancient stone embraced by giant ficus trees entered exclusively via the tranquil East Gate.',
    },
    {
      tab: 'Circuit D',
      title: 'Banteay Srei Jewel',
      description: 'Intricate 10th-century rose sandstone carvings framed by palm-sugar countryside paths.',
    },
  ];

  // Bottom 5-column standards matching the reference image's footer row
  const standards = [
    {
      title: 'East Gate Evasion',
      description: 'Counter-flow entrance sequences to experience key sanctuaries before bus groups arrive.',
    },
    {
      title: 'Licensed Historians',
      description: 'Native Siem Reap scholars fluent in Sanskrit symbolism and temple architecture.',
    },
    {
      title: 'Iced Jasmine Comfort',
      description: 'Chilled mineral water and jasmine-scented cold towels after every temple monument.',
    },
    {
      title: 'Private Transport',
      description: 'Choose between traditional open Remork Tuk-Tuk or luxury climate-controlled SUV.',
    },
    {
      title: '5% Heritage Giving',
      description: 'Direct support to rural Siem Reap clean water wells and local youth stone masonry.',
    },
  ];

  return (
    <section
      id="tours"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#0c181a]/60 via-[#14282c]/60 to-[#0a1416]/60 text-white select-none overflow-hidden border-t border-white/10"
    >
      {/* Fluid Ambient Wave Contours & Dot-Matrix Background (Matching Reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing ambient pools */}
        <div className="absolute top-[18%] left-[10%] w-[500px] h-[350px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl" />

        {/* Fluid Organic Wave Curves in Midground */}
        <svg
          className="absolute top-1/3 left-0 w-full h-80 opacity-20 text-teal-200"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C320,300 420,40 720,180 C1020,320 1140,80 1440,160 L1440,320 L0,320 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dot Matrix Halftone Constellation (matching bottom right of reference) */}
        <div className="absolute -bottom-10 right-0 w-72 h-72 opacity-15 pointer-events-none flex flex-wrap gap-3.5 p-6">
          {[...Array(48)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{
                opacity: Math.sin((i / 48) * Math.PI),
                transform: `scale(${0.5 + (i % 5) * 0.15})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* =========================================================================
            TIER 1: "Why Angkor Expeditions" with Dossier Tabbed Cards (Reference Top)
           ========================================================================= */}
        <div>
          {/* Header */}
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white/95">
                <span className="font-editorial italic font-normal mr-3 text-4xl sm:text-6xl lg:text-7xl text-white">
                  Signature
                </span>
                <span className="font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl">
                  Experiences
                </span>
              </h2>
            </div>
            <p className="text-neutral-300/80 text-xs sm:text-[13px] max-w-md leading-relaxed font-light">
              Angkor should be intimate, unhurried, and led by native historians who grew up in temple villages — not by mass tour aggregators.
            </p>
          </FadeIn>

          {/* 4 Folder-Tab Dossier Cards (Faithful to Reference Image's Tabbed Folders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {dossierItems.map((item, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.15}
                className="relative group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Folder Tab Notch at top */}
                <div className="flex items-center">
                  <div className="px-3.5 py-1 bg-white/[0.08] backdrop-blur-md border-t border-l border-r border-white/20 rounded-t-md text-[10px] uppercase font-mono tracking-widest text-neutral-300 flex items-center space-x-1.5 group-hover:bg-white/[0.12] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                    <span>{item.tab}</span>
                  </div>
                  <div className="flex-1 border-b border-white/15 h-px -mb-px" />
                </div>

                {/* Dossier Card Body */}
                <div className="p-6 bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-b-xl rounded-tr-xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] min-h-[170px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base tracking-tight mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-teal-300/80 uppercase tracking-wider font-medium">
                    <span>Exclusive Circuit</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TIER 2: "How do we achieve this" with 01, 02, 03 Numbered Glass Cards & Carousel Controls
           ========================================================================= */}
        <div>
          {/* Header with Title + Middle Explanatory Text + Navigation Arrows (Exact Layout in Reference) */}
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white/95 leading-[1.05]">
                <span className="font-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-light">
                  How our circuits
                </span>
                <span className="font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl text-white">
                  are achieved
                </span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-neutral-300/80 text-xs sm:text-[13px] leading-relaxed font-light">
                A crowd-evasion system engineered across ten years of dawn timings, private perimeter access points, and dedicated native historians.
              </p>
            </div>

            {/* Carousel Arrow Controls (Exactly like in the reference's middle row) */}
            <div className="flex items-center space-x-3 self-end lg:self-auto">
              <span className="text-xs font-mono text-neutral-400 mr-2">
                0{activeCardIndex + 1} / 0{packages.length}
              </span>
              <button
                onClick={prevCard}
                id="carousel-btn-prev"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous package"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextCard}
                id="carousel-btn-next"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next package"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </FadeIn>

          {/* 3 Large Numbered Glass Cards (with 01, 02, 03 Watermarks as in Reference Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => {
              const isSelected = activeCardIndex === idx;
              const watermark = `0${idx + 1}`;

              return (
                <FadeIn
                  key={pkg.id}
                  delay={idx * 0.15}
                  id={`tour-card-${pkg.id}`}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl backdrop-blur-xl border transition-all duration-300 group overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'border-white/40 bg-white/[0.09] shadow-[0_12px_45px_rgba(0,0,0,0.5)] scale-[1.01]'
                      : 'border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]'
                  }`}
                >
                  {/* Subtle Top-Right Ambient Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Huge Translucent Watermark Number in Upper-Right (As seen in 01, 02, 03 in reference) */}
                  <div className="absolute top-3 right-5 text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-white/[0.07] group-hover:text-white/[0.12] transition-colors pointer-events-none select-none">
                    {watermark}
                  </div>

                  <div className="relative z-10">
                    {/* Duration Badge & Category */}
                    <div className="flex items-center justify-between text-xs text-neutral-300 mb-6 tracking-wider uppercase">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold">
                        <Clock size={12} className="text-teal-300" />
                        <span>{pkg.duration}</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {watermark} / 0{packages.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight mb-2 uppercase">
                      {pkg.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {pkg.subtitle}
                    </p>

                    {/* Perfect For Banner */}
                    <div className="mb-6 p-3 bg-black/40 border border-white/10 rounded-lg">
                      <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-teal-300 mb-1">
                        Ideal For
                      </div>
                      <div className="text-xs font-normal text-neutral-200">
                        {pkg.perfectFor}
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] uppercase font-bold tracking-[0.2em] text-neutral-400">
                        Circuit Highlights
                      </div>
                      <ul className="space-y-2">
                        {pkg.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start text-xs text-neutral-300 leading-normal">
                            <Check size={13} className="text-teal-300 shrink-0 mt-0.5 mr-2" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inclusions Box */}
                    <div className="mb-8 pt-4 border-t border-white/10 text-xs text-neutral-300 space-y-2">
                      <div className="flex items-center space-x-2 text-[11px] uppercase font-mono font-semibold text-lime-400 mb-2">
                        <Droplets size={13} className="text-lime-400" />
                        <span>Included With Every Booking</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {pkg.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-[11px] text-neutral-300">
                            <Check size={12} className="text-lime-400 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions & Transparent Pricing */}
                  <div className="relative z-10 pt-6 border-t border-white/15">
                    <div className="flex items-baseline justify-between mb-5">
                      <div>
                        <span className="text-3xl font-extrabold text-white">
                          ${pkg.tukTukPricePerPerson}
                        </span>
                        <span className="text-xs text-neutral-400 ml-1.5">
                          / guest (Tuk-Tuk)
                        </span>
                      </div>
                      <div className="text-right text-xs text-neutral-400">
                        A/C SUV: <span className="text-white font-semibold">${pkg.acCarPricePerPerson}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <button
                        id={`btn-view-itinerary-${pkg.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPackage(pkg);
                        }}
                        className="flex-1 py-3 px-3 text-center border border-white/25 text-white font-semibold text-xs tracking-[0.14em] uppercase rounded-lg transition-colors hover:bg-white/10 hover:border-white cursor-pointer"
                      >
                        View Itinerary & Pricing
                      </button>

                      <button
                        id={`btn-book-${pkg.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookTour(pkg);
                        }}
                        className="py-3 px-5 text-center bg-white text-black font-bold text-xs tracking-[0.14em] uppercase rounded-lg transition-all hover:bg-neutral-200 active:scale-[0.98] cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            TIER 3: "Where Angkor Expeditions Works" (Bottom 5-Column Strip in Reference)
           ========================================================================= */}
        <div className="pt-10 border-t border-white/15">
          {/* Centered Editorial Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white/95">
              <span className="font-editorial italic mr-2 text-3xl sm:text-5xl text-white">
                Where Every Tour
              </span>
              <span className="font-extrabold uppercase tracking-tight text-xl sm:text-3xl">
                Excels
              </span>
            </h3>
            <p className="mt-2 text-neutral-400 text-xs sm:text-[13px] font-light">
              Universal operational standards across every Angkor Archaeological Park expedition
            </p>
          </div>

          {/* 5-Column Horizontal Strip with Vertical Hairline Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
            {standards.map((std, sIdx) => (
              <div
                key={sIdx}
                className={`pt-5 sm:pt-0 ${sIdx > 0 ? 'lg:pl-6' : ''} flex flex-col justify-start`}
              >
                <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-2 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                  <span>{std.title}</span>
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

