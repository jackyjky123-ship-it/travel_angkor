import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hi! I would like to check guide availability for an Angkor sunrise tour.');

  const handleSend = () => {
    const encoded = encodeURIComponent(customMsg);
    window.open(`https://wa.me/85512345678?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-6 right-6 z-40 select-none">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          className="mb-3 w-80 sm:w-96 bg-[#061418]/95 border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/30 flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-wider">
                  Siem Reap Dispatch Team
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] text-lime-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  <span>Online (ICT Local Dispatch)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 cursor-pointer"
              aria-label="Close chat popup"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-neutral-300/90 text-xs leading-relaxed mb-3 font-light">
            Traveling soon? Our team can instantly verify sunrise historian availability, weather predictions, or customize private circuits.
          </p>

          {/* Quick Prompt Suggestions */}
          <div className="space-y-1.5 mb-3">
            <button
              type="button"
              onClick={() => setCustomMsg('Do you have a licensed guide available for tomorrow 4:30 AM sunrise?')}
              className="w-full text-left p-2.5 border border-white/10 bg-white/[0.03] hover:border-lime-400/40 text-[11px] text-neutral-300 rounded-xl transition-colors cursor-pointer"
            >
              "Do you have a guide available for tomorrow 4:30 AM?"
            </button>
            <button
              type="button"
              onClick={() => setCustomMsg('Can we book a private A/C SUV tour for a family of 4?')}
              className="w-full text-left p-2.5 border border-white/10 bg-white/[0.03] hover:border-lime-400/40 text-[11px] text-neutral-300 rounded-xl transition-colors cursor-pointer"
            >
              "Can we book a private SUV for a family of 4?"
            </button>
          </div>

          {/* Input & Send */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 bg-white/[0.05] border border-white/15 text-white rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-lime-400"
            />
            <button
              onClick={handleSend}
              className="p-2.5 bg-lime-400 hover:bg-lime-300 text-black rounded-xl transition-all cursor-pointer shrink-0 font-bold"
              aria-label="Send WhatsApp message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="btn-whatsapp-float"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2.5 px-5 py-3 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs uppercase tracking-wider rounded-full shadow-[0_10px_30px_rgba(163,230,53,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Chat directly with our Siem Reap team"
      >
        <MessageCircle size={18} className="fill-black text-black" />
        <span className="hidden sm:inline">Chat directly with us</span>
        <span className="sm:hidden">Chat with us</span>
      </button>
    </div>
  );
};

