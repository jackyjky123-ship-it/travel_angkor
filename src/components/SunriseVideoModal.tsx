import React, { useState } from 'react';
import { X, Volume2, VolumeX, Sun, Sparkles } from 'lucide-react';

interface SunriseVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const SunriseVideoModal: React.FC<SunriseVideoModalProps> = ({
  isOpen,
  onClose,
  onBookNow,
}) => {
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      id="sunrise-video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        id="sunrise-video-container"
        className="relative w-full max-w-4xl bg-[#061418]/60 border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
            <span className="text-white text-xs sm:text-sm font-mono tracking-wider uppercase">
              Angkor Wat Dawn Reflection Pond // 4K Sequence
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10 rounded-full hover:border-lime-400/40"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-video w-full bg-[#03090b]/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group">
          {/* Animated Atmospheric Sunrise Visual */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061418]/60 via-teal-950/20 to-neutral-900/60 pointer-events-none" />

          {/* Glowing Sun emergence */}
          <div className="absolute top-[35%] left-[55%] w-44 h-44 rounded-full bg-lime-400/15 blur-3xl animate-pulse pointer-events-none" />

          {/* SVG Silhouette of Angkor Wat at Sunrise */}
          <div className="absolute bottom-0 left-0 right-0 h-44 opacity-85 flex items-end justify-center pointer-events-none">
            <svg
              viewBox="0 0 1200 240"
              fill="currentColor"
              className="w-full h-full text-[#030a0c]"
              preserveAspectRatio="none"
            >
              <rect x="0" y="215" width="1200" height="25" />
              <path d="M 570 215 L 585 95 L 590 55 L 600 30 L 610 55 L 615 95 L 630 215 Z" />
              <path d="M 520 215 L 530 115 L 540 75 L 548 60 L 556 75 L 565 115 L 575 215 Z" />
              <path d="M 625 215 L 635 115 L 644 75 L 652 60 L 660 75 L 670 115 L 680 215 Z" />
              <path d="M 470 215 L 480 135 L 490 100 L 496 90 L 504 100 L 512 135 L 522 215 Z" />
              <path d="M 678 215 L 688 135 L 696 100 L 704 90 L 712 100 L 720 135 L 730 215 Z" />
              <rect x="420" y="175" width="360" height="40" />
            </svg>
          </div>

          {/* Center Title overlay */}
          <div className="relative z-10 text-center px-6 max-w-lg">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-black/60 border border-lime-400/30 rounded-full text-[11px] font-mono tracking-widest text-lime-300 mb-3 backdrop-blur-md">
              <Sun size={12} className="text-lime-400" />
              <span>Recorded 05:22 AM // North Lotus Reflection Pond</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mb-2">
              Witness the Soul of the Khmer Empire
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed mb-6 font-light">
              Our guides arrive 45 minutes before general tour groups to secure unobstructed vantage positions along the quiet northern pond margin.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="px-7 py-3 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-[0_4px_20px_rgba(163,230,53,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              Book This Exact Sunrise
            </button>
          </div>

          {/* Audio toggle */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-black/70 border border-white/20 rounded-full text-white hover:border-lime-400 hover:text-lime-400 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <span className="text-[11px] text-lime-400/90">// TIMELAPSE: 04:45 AM TO 06:15 AM</span>
          <button
            onClick={onClose}
            className="text-neutral-300 hover:text-lime-300 uppercase text-xs tracking-wider cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

