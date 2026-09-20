import React, { useState } from 'react';
import { TourPackage } from '../types';
import { Calendar, Users, Car, Check, MessageCircle, ShieldCheck, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  packages: TourPackage[];
  selectedPackageId: string;
  onSelectPackageId: (id: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  packages,
  selectedPackageId,
  onSelectPackageId,
}) => {
  // Default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(defaultDateStr);
  const [guests, setGuests] = useState<number>(2);
  const [transport, setTransport] = useState<'tuk-tuk' | 'suv'>('tuk-tuk');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [hotelPickup, setHotelPickup] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const currentPkg = packages.find((p) => p.id === selectedPackageId) || packages[0];

  // Calculation
  const pricePerPerson =
    transport === 'tuk-tuk'
      ? currentPkg.tukTukPricePerPerson
      : currentPkg.acCarPricePerPerson;
  const totalPrice = pricePerPerson * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'AKR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#061215]/60 via-[#08181c]/60 to-[#040c0e]/60 text-white select-none border-t border-white/10 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-teal-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-lime-400/30 bg-lime-950/20 text-xs font-mono tracking-wider uppercase text-lime-300 mb-4">
            <span className="font-bold">//</span>
            <span>Direct Dispatch Reservation</span>
          </div>

          <h2
            id="booking-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95"
          >
            <span className="font-editorial italic mr-3 text-4xl sm:text-6xl lg:text-7xl text-white">
              Reserve Your
            </span>
            <span className="font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl">
              Sunrise Slot
            </span>
          </h2>

          <p className="mt-4 text-neutral-300/80 text-xs sm:text-sm font-light leading-relaxed">
            Directly scheduled with our Siem Reap historian fleet. Zero deposit required today • 100% free cancellation up to 24 hours prior.
          </p>
        </div>

        {/* Frosted Booking Container (rounded-3xl matching reference language) */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
          {isSubmitted ? (
            /* Confirmation State */
            <div id="booking-confirmation-view" className="text-center py-10 px-4 max-w-xl mx-auto animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(163,230,53,0.3)]">
                <Check size={32} />
              </div>

              <span className="text-xs font-mono uppercase font-semibold tracking-[0.25em] text-lime-400 block mb-2">
                // Reservation Dispatched
              </span>

              <h3 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mb-2">
                You're Scheduled for Sunrise!
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm mb-6 font-light">
                Booking Reference Code: <strong className="text-lime-300 font-mono text-base ml-1">{bookingRef}</strong>
              </p>

              <div className="p-6 border border-white/15 bg-white/[0.03] backdrop-blur-md text-left text-xs space-y-2.5 mb-8 rounded-2xl">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Selected Expedition:</span>
                  <span className="text-white font-semibold">{currentPkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Departure Date:</span>
                  <span className="text-white font-semibold">{date} (04:30 AM Hotel Pickup)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Private Party:</span>
                  <span className="text-white font-semibold">
                    {guests} {guests === 1 ? 'Guest' : 'Guests'} ({transport === 'tuk-tuk' ? 'Remork Tuk-Tuk' : 'Private A/C SUV'})
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-neutral-300 font-medium">Estimated Direct Total:</span>
                  <span className="text-lime-300 font-extrabold text-base">${totalPrice} USD</span>
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>Pickup Location:</span>
                  <span className="text-neutral-300">{hotelPickup || 'Confirmed via WhatsApp / Email'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/85512345678?text=Hello!%20My%20booking%20ref%20is%20${bookingRef}%20for%20${currentPkg.name}%20on%20${date}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-[0_4px_20px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={16} />
                  <span>Confirm on WhatsApp Dispatch</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3.5 border border-white/20 text-neutral-300 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  Schedule Another Booking
                </button>
              </div>
            </div>
          ) : (
            /* Form Widget */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Tour Package */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-3.5">
                  <span className="text-lime-400 mr-2 font-bold">// 01</span>
                  Select Expedition Circuit
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {packages.map((pkg, pIdx) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <button
                        type="button"
                        key={pkg.id}
                        id={`btn-select-pkg-${pkg.id}`}
                        onClick={() => onSelectPackageId(pkg.id)}
                        className={`p-5 text-left rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-lime-400 bg-lime-400/10 text-white shadow-[0_0_20px_rgba(163,230,53,0.15)]'
                            : 'border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/25'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-mono tracking-wider text-lime-400 mb-1">
                          Circuit 0{pIdx + 1} • {pkg.duration}
                        </div>
                        <div className="font-bold text-xs uppercase tracking-wide text-white">
                          {pkg.name}
                        </div>
                        <div className="text-[11px] text-neutral-300 font-mono mt-1.5">
                          From ${pkg.tukTukPricePerPerson} / person
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 & 3: Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Select Date */}
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-2">
                    <span className="text-lime-400 mr-2 font-bold">// 02</span>
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-white/[0.04] border border-white/15 text-white rounded-xl px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-lime-400 transition-colors"
                  />
                  <span className="text-[11px] text-neutral-400 font-mono mt-1.5 block">
                    * Early 04:30 AM sunrise hotel departure
                  </span>
                </div>

                {/* Select Number of Guests */}
                <div>
                  <label htmlFor="booking-guests" className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-2">
                    <span className="text-lime-400 mr-2 font-bold">// 03</span>
                    Party Size
                  </label>
                  <select
                    id="booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full bg-[#07191d]/60 border border-white/15 text-white rounded-xl px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-lime-400 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-[#07191d]/60 text-white">
                        {num} {num === 1 ? 'Guest (Solo Expedition)' : 'Guests (Private Group)'}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-neutral-400 font-mono mt-1.5 block">
                    * Strictly private tour (never merged with strangers)
                  </span>
                </div>
              </div>

              {/* Step 4: Choose Transport */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-3">
                  <span className="text-lime-400 mr-2 font-bold">// 04</span>
                  Choose Preferred Transport
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option A: Remork Tuk-Tuk */}
                  <button
                    type="button"
                    id="transport-tuktuk-btn"
                    onClick={() => setTransport('tuk-tuk')}
                    className={`p-5 text-left rounded-2xl border transition-all cursor-pointer ${
                      transport === 'tuk-tuk'
                        ? 'border-lime-400 bg-lime-400/10 shadow-[0_0_20px_rgba(163,230,53,0.15)]'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Traditional Khmer Remork (Tuk-Tuk)
                      </span>
                      <span className="text-lime-300 font-mono font-extrabold text-sm">
                        ${currentPkg.tukTukPricePerPerson}/pp
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-300/80 leading-relaxed font-light">
                      Breezy open-air morning ride, authentic local feel, padded leather seats, rain curtains.
                    </p>
                  </button>

                  {/* Option B: Private A/C SUV */}
                  <button
                    type="button"
                    id="transport-suv-btn"
                    onClick={() => setTransport('suv')}
                    className={`p-5 text-left rounded-2xl border transition-all cursor-pointer ${
                      transport === 'suv'
                        ? 'border-lime-400 bg-lime-400/10 shadow-[0_0_20px_rgba(163,230,53,0.15)]'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Private Air-Conditioned SUV / Van
                      </span>
                      <span className="text-lime-300 font-mono font-extrabold text-sm">
                        ${currentPkg.acCarPricePerPerson}/pp
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-300/80 leading-relaxed font-light">
                      Whisper-quiet climate control, reclining captain chairs, ideal for escaping tropical humidity.
                    </p>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <label htmlFor="guest-name" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Lead Traveler Name *
                  </label>
                  <input
                    type="text"
                    id="guest-name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/15 text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label htmlFor="guest-contact" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Email or WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    id="guest-contact"
                    required
                    placeholder="e.g. +1 555-0199 or name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/15 text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="guest-hotel" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Siem Reap Hotel Pickup (Can provide closer to date)
                  </label>
                  <input
                    type="text"
                    id="guest-hotel"
                    placeholder="e.g. Shinta Mani Angkor, Treeline Urban Resort, or Airbnb"
                    value={hotelPickup}
                    onChange={(e) => setHotelPickup(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/15 text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-lime-400"
                  />
                </div>
              </div>

              {/* Transparent Price Summary & Action Bar */}
              <div className="p-6 border border-white/15 bg-white/[0.03] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-lime-400">
                    // Direct Transparent Calculation
                  </div>
                  <div className="flex items-baseline space-x-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      ${totalPrice} USD
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      (${pricePerPerson} × {guests} {guests === 1 ? 'guest' : 'guests'})
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 flex items-center space-x-1.5 mt-1 font-light">
                    <ShieldCheck size={13} className="text-lime-400" />
                    <span>Pay in cash or card on completion • Free cancellation up to 24h</span>
                  </div>
                </div>

                <button
                  type="submit"
                  id="btn-submit-booking"
                  className="w-full sm:w-auto px-9 py-4 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs tracking-[0.2em] uppercase rounded-full transition-all shadow-[0_10px_25px_rgba(163,230,53,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Reserve Sunrise Slot
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

