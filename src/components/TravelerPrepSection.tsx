import React, { useState } from 'react';
import { Ticket, Shirt, Sun, ShieldAlert, Check, ArrowRight, ArrowLeft, X, Sparkles, ExternalLink } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface PrepItem {
  id: string;
  tag: string;
  title: string;
  pill: string;
  shortDesc: string;
  detailedPoints: string[];
  icon: React.ElementType;
  extraMeta?: {
    label: string;
    value: string;
  }[];
}

export const TravelerPrepSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PrepItem | null>(null);

  const prepItems: PrepItem[] = [
    {
      id: 'pass',
      tag: 'Permit & Entry',
      title: 'Angkor Pass Rules',
      pill: 'Mandatory • $37–$72',
      shortDesc:
        'Clear guidance on where and how to purchase the official Angkor ticket (1-day $37, 3-day $62, 7-day $72). Our guides assist with seamless counter pickup on the way to sunrise or direct online purchase.',
      icon: Ticket,
      detailedPoints: [
        '1-Day Pass: $37 USD (Valid for all main temples in the park)',
        '3-Day Pass: $62 USD (Valid across 10 days from date of issue)',
        '7-Day Pass: $72 USD (Valid for 1 full month from issue)',
        'Children under 12 enter 100% free with their passport',
        'Official ticket center opens at 4:30 AM; on-site digital photo taken in minutes',
      ],
      extraMeta: [
        { label: '1-Day Ticket', value: '$37 USD' },
        { label: '3-Day Ticket', value: '$62 USD' },
        { label: '7-Day Ticket', value: '$72 USD' },
      ],
    },
    {
      id: 'dress',
      tag: 'Sacred Decorum',
      title: 'Temple Dress Code',
      pill: 'Covered Shoulders & Knees',
      shortDesc:
        'Practical guidelines requiring covered shoulders and knees to enter the sacred third terrace (Bakan Sanctuary) of Angkor Wat and active Buddhist monuments.',
      icon: Shirt,
      detailedPoints: [
        'Shoulders and knees must remain fully covered by actual clothing (sleeveless tops and short shorts prohibited)',
        'Wrapping scarves or shawls over bare shoulders is strictly rejected by Apsara Authority guards at Bakan',
        'Lightweight, breathable linen or cotton recommended for tropical airflow',
        'Supportive walking shoes or walking sandals with grip recommended for ancient stone steps',
      ],
      extraMeta: [
        { label: 'Shoulders', value: 'Must be Covered' },
        { label: 'Knees', value: 'Must be Covered' },
        { label: '3rd Terrace', value: 'Strict Check' },
      ],
    },
    {
      id: 'season',
      tag: 'Weather & Climate',
      title: 'Best Time to Visit',
      pill: 'Dry vs. Green Season',
      shortDesc:
        'Dry season (November–April) for crisp sunrise skies vs. green season (May–October) for emerald moats and fewer crowds.',
      icon: Sun,
      detailedPoints: [
        'Dry Season (November – April): Crisp golden sunrise skies, cool morning breezes, dry walking paths, peak visibility',
        'Green Season (May – October): Lush emerald foliage, mirror-flat reflection moats, 40% fewer tourists, dramatic cloudscapes',
        'Sunrise time varies between 05:25 AM (Dry) and 06:05 AM (Green Season)',
        'Our fleet carries iced jasmine towels and chilled spring water year-round',
      ],
      extraMeta: [
        { label: 'Dry Season', value: 'Nov — Apr' },
        { label: 'Green Season', value: 'May — Oct' },
        { label: 'Morning Temp', value: '23°C – 27°C' },
      ],
    },
    {
      id: 'cancellation',
      tag: 'Zero Risk Booking',
      title: 'Cancellation Policy',
      pill: 'Free Up to 24–48h',
      shortDesc:
        'Free cancellation up to 24 or 48 hours in advance for peace of mind. Zero deposit required upfront, with instantaneous date rescheduling via direct WhatsApp.',
      icon: ShieldAlert,
      detailedPoints: [
        '100% Free cancellation up to 24 hours prior to departure for standard day circuits',
        'Free cancellation up to 48 hours in advance for custom multi-day VIP expeditions',
        'Instant reschedule if your flight into Siem Reap is delayed or shifted',
        'No advance credit card deduction: pay on arrival after your tour completes',
      ],
      extraMeta: [
        { label: 'Standard Tours', value: 'Free up to 24h' },
        { label: 'VIP Multi-Day', value: 'Free up to 48h' },
        { label: 'Deposit', value: 'None Required' },
      ],
    },
  ];

  return (
    <section
      id="prep"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-[#06191e]/60 via-[#0c262e]/60 to-[#071c22]/60 text-white select-none border-t border-white/10 overflow-hidden"
    >
      {/* Background Ambient Glow (Subtle Slate-Cyan Depth) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =========================================================================
            HEADER & CARDS GRID (Faithful to Reference Image's Left Column + Right Cards)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT COLUMN: // Traveler Guide + Statement (Exact Match to Reference Image) */}
          <FadeIn className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28">
            {/* Tagline matching "// Our story" in lime green */}
            <div className="flex items-center space-x-1.5 text-lime-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-4">
              <span>//</span>
              <span>Traveler Guide</span>
            </div>

            {/* Statement matching "A journey of innovation and environmental responsibility" */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-snug">
              Essential clarity for a frictionless Angkor experience
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Permit regulations, sacred temple decorum, climate seasons, and our flexible cancellation guarantee — reviewed before you arrive.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 hidden lg:block">
              <a
                href="#booking"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-lime-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Ready to schedule departure?</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>

          {/* RIGHT CARDS: Tall Rounded Frosted Cards (Exact Match to Reference Image) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
              {prepItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={item.id}
                    delay={idx * 0.15}
                    id={`prep-card-${item.id}`}
                    onClick={() => setSelectedItem(item)}
                    className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-lime-400/40 backdrop-blur-xl transition-all duration-300 group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.35)] min-h-[340px]"
                  >
                    {/* Top Row of Card: Icon on Left + Pill Badge on Right (Exact Match) */}
                    <div className="flex items-center justify-between mb-10">
                      {/* Vibrant Circular Lime-Green Icon Badge (Matching Reference) */}
                      <div className="w-10 h-10 rounded-full bg-lime-400/15 border border-lime-400/30 text-lime-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                        <Icon size={18} />
                      </div>

                      {/* Pill Capsule with Category / Rate (Matching "2019", "2020–2022" in reference) */}
                      <div className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono text-neutral-300 group-hover:border-white/30 transition-colors">
                        {item.pill}
                      </div>
                    </div>

                    {/* Lower Portion of Card: Title + Description (Exact Match) */}
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-lime-400/80 block mb-1">
                        {item.tag}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-lime-200 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-neutral-300/85 text-xs sm:text-[13px] leading-relaxed font-light mb-6">
                        {item.shortDesc}
                      </p>

                      {/* Interactive View Details Action */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-lime-300 font-semibold uppercase tracking-wider">
                        <span>Inspect Guidelines</span>
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1.5 transition-transform text-lime-400"
                        />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE GUIDELINE DETAIL MODAL
         ========================================================================= */}
      {selectedItem && (
        <div
          id="prep-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/30 flex items-center justify-center shrink-0">
                  <selectedItem.icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-lime-400">
                    {selectedItem.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 text-neutral-400 hover:text-white border border-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
              {selectedItem.shortDesc}
            </p>

            {/* Checklist */}
            <div className="mb-6 space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/10">
              <div className="text-xs uppercase font-bold tracking-wider text-lime-300 mb-2">
                Mandatory Guidelines:
              </div>
              {selectedItem.detailedPoints.map((point, idx) => (
                <div key={idx} className="flex items-start text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  <Check size={14} className="text-lime-400 shrink-0 mt-0.5 mr-2.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Meta Grid */}
            {selectedItem.extraMeta && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedItem.extraMeta.map((meta, i) => (
                  <div key={i} className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-center">
                    <span className="text-[10px] uppercase text-neutral-400 block mb-0.5">
                      {meta.label}
                    </span>
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {meta.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Footer action */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 border border-white/20 text-neutral-300 hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#booking"
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
              >
                Book with Confidence
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

