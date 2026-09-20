import React from 'react';
import { TourPackage } from '../types';
import { X, Clock, MapPin, Camera, Check, ShieldCheck, Droplets, Users, Car, ArrowRight } from 'lucide-react';

interface ItineraryModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  onSelectForBooking: (pkg: TourPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  pkg,
  onClose,
  onSelectForBooking,
}) => {
  if (!pkg) return null;

  return (
    <div
      id="itinerary-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="itinerary-modal-container"
        className="relative w-full max-w-3xl my-8 bg-[#061418]/60 border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/10 mb-6">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-lime-400 uppercase mb-1">
              // Circuit Specification • {pkg.duration}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              {pkg.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300/80 mt-1 max-w-xl font-light">
              {pkg.subtitle}
            </p>
          </div>

          <button
            id="close-itinerary-modal"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10 rounded-full ml-4 shrink-0 hover:border-lime-400/40"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Crowd Avoidance Strategy Banner */}
        <div className="mb-8 p-4 bg-lime-950/20 border border-lime-400/30 rounded-2xl flex items-start space-x-3.5">
          <ShieldCheck size={20} className="text-lime-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-lime-300 mb-0.5">
              Proprietary Crowd-Evasion Route
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              {pkg.crowdStrategy}
            </p>
          </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-300 mb-4 flex items-center space-x-2">
            <Clock size={14} className="text-lime-400" />
            <span>Curated Chronological Timeline</span>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-px before:bg-white/15 pl-8">
            {pkg.itinerary.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-1 w-2.5 h-2.5 rounded-full bg-lime-400 border-2 border-black" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                    {step.title}
                  </h4>
                  <span className="text-[11px] font-mono text-lime-300/80 tracking-wider">
                    {step.time}
                  </span>
                </div>

                <p className="text-xs text-neutral-300/90 leading-relaxed font-light">
                  {step.description}
                </p>

                {step.photoTip && (
                  <div className="mt-2 flex items-center space-x-2 text-[11px] text-lime-200/90 italic font-mono">
                    <Camera size={12} className="shrink-0 text-lime-400" />
                    <span>Photo Tip: {step.photoTip}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions & Pricing Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 border border-white/10 bg-white/[0.03] rounded-2xl mb-8">
          {/* Column 1: Inclusions */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-300 mb-3 flex items-center space-x-1.5">
              <Droplets size={13} className="text-lime-400" />
              <span>Included In This Circuit</span>
            </div>
            <ul className="space-y-2">
              {pkg.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start text-xs text-neutral-300 leading-normal font-light">
                  <Check size={13} className="text-lime-400 shrink-0 mt-0.5 mr-2" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Transparent Pricing */}
          <div className="flex flex-col justify-between pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-300 mb-3">
                Transparent Pricing
              </div>

              <div className="space-y-2.5 text-xs font-light">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Traditional Remork Tuk-Tuk:</span>
                  <span className="text-lime-300 font-bold font-mono">${pkg.tukTukPricePerPerson} / guest</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Private Air-Conditioned SUV/Van:</span>
                  <span className="text-lime-300 font-bold font-mono">${pkg.acCarPricePerPerson} / guest</span>
                </div>
                <p className="text-[11px] text-neutral-500 pt-2 border-t border-white/10 font-mono">
                  *Official Angkor Pass ($37) purchased separately as required by Cambodia Ministry.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-lime-400 font-mono flex items-center space-x-1.5">
              <Check size={13} />
              <span>Free cancellation up to 24 hrs prior</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 border border-white/20 text-neutral-300 hover:text-white font-semibold text-xs tracking-[0.16em] uppercase rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            id="modal-select-tour-btn"
            onClick={() => onSelectForBooking(pkg)}
            className="w-full sm:w-auto px-8 py-3 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs tracking-[0.18em] uppercase rounded-full transition-all shadow-[0_4px_20px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Proceed to Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

