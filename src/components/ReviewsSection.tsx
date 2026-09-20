import React from 'react';
import { TESTIMONIALS } from '../data/toursData';
import { Star, CheckCircle2, Award, Quote, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#0a171a]/60 via-[#081518]/60 to-[#061215]/60 text-white border-t border-white/10 select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-teal-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-lime-400/30 bg-lime-950/20 text-xs font-mono tracking-wider uppercase text-lime-300 mb-4">
            <span className="font-bold">//</span>
            <span>Verified Guest Journals</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95"
          >
            <span className="font-editorial italic mr-3 text-4xl sm:text-6xl lg:text-7xl text-white">
              Words from
            </span>
            <span className="font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl">
              Our Travelers
            </span>
          </h2>

          <p className="mt-4 text-neutral-300/80 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Unfiltered accounts honoring our licensed native historians by name across thousands of early morning departures.
          </p>
        </div>

        {/* 3 Authentic Reviews Grid (Frosted Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-lime-400/40 backdrop-blur-xl transition-all duration-300 group shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-lime-400 text-lime-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {review.date}
                  </span>
                </div>

                {/* Tour Taken Capsule Badge */}
                <div className="inline-block px-3 py-1 bg-white/[0.06] border border-white/15 rounded-full text-[10px] uppercase font-mono tracking-wider text-lime-300 mb-5">
                  {review.tourTaken}
                </div>

                {/* Quote */}
                <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed mb-6 font-light italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Guide Recognition */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-wide">
                    {review.author}
                  </div>
                  <div className="text-neutral-400 text-[11px] font-mono">
                    {review.country}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Historian Guide
                  </span>
                  <span className="text-lime-300 font-bold text-xs tracking-wide">
                    {review.guideName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TripAdvisor Aggregate Metric Box */}
        <div className="mt-14 text-center p-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 shadow-lg">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/30 flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-white">
              1,420+ Five-Star Reviews
            </span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <div className="text-xs text-neutral-300/80 font-light">
            Ranked Top 1% of Outdoor Expeditions in Siem Reap Province
          </div>
        </div>
      </div>
    </section>
  );
};

