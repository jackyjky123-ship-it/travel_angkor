import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030a0c]/60 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-10 text-neutral-400 text-xs select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-lime-400/15 border border-lime-400/30 text-lime-400 flex items-center justify-center">
                <Compass size={15} />
              </div>
              <span className="text-white font-extrabold text-base tracking-[0.22em] uppercase">
                ANGKOR EXPEDITIONS
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-[13px] font-light max-w-md leading-relaxed mb-6">
              Independent, licensed local historians based in Siem Reap. Providing crowd-avoidance sunrise routes and intimate archaeological storytelling across Angkor Wat, Bayon, and the ancient Khmer empire.
            </p>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-lime-400/30 bg-lime-950/20 text-[11px] font-mono text-lime-300">
              <ShieldCheck size={14} className="text-lime-400 shrink-0" />
              <span>Official License No. MOT-KH-SR-2018-0429 (Ministry of Tourism Cambodia)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-lime-400 font-mono text-xs uppercase tracking-[0.2em] mb-4 flex items-center space-x-1">
              <span>//</span>
              <span>Navigation</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#tours" className="hover:text-lime-300 transition-colors">
                  Signature Tour Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-lime-300 transition-colors">
                  The Local Difference
                </a>
              </li>
              <li>
                <a href="#prep" className="hover:text-lime-300 transition-colors">
                  Angkor Pass & Temple Dress Code
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-lime-300 transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-lime-300 transition-colors">
                  Direct Booking Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <div className="text-lime-400 font-mono text-xs uppercase tracking-[0.2em] mb-4 flex items-center space-x-1">
              <span>//</span>
              <span>Siem Reap Base</span>
            </div>
            <ul className="space-y-3 font-light">
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-lime-400 shrink-0 mt-0.5" />
                <span>Wat Bo Road, Sala Kamreuk Commune, Siem Reap, Kingdom of Cambodia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-lime-400 shrink-0" />
                <span>+855 (0) 12 345 678 (WhatsApp 24/7)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-lime-400 shrink-0" />
                <span>concierge@angkorexpeditions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Angkor Expeditions Siem Reap. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <span>Crafted with respect for Khmer cultural heritage</span>
            <span>•</span>
            <span className="text-lime-400/90">5% Community Village Fund</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

