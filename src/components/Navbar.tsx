import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Calendar, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onBookNowClick: () => void;
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick, onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // Wait 200ms after scrolling stops to show navbar
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navLinks = [
    { label: 'Tours', href: '#tours' },
    { label: 'About', href: '#why-us' },
    { label: 'Guide', href: '#prep' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const isHidden = isScrolling && scrolled;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none bg-transparent ${
        scrolled
          ? 'py-3.5'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#"
          id="brand-logo"
          className="flex items-center space-x-3 group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="text-white font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase group-hover:text-lime-200 transition-colors">
                ANGKOR TRAVEL
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
              Siem Reap 
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-medium tracking-[0.16em] text-neutral-300/90 hover:text-lime-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <motion.div 
          className="hidden sm:flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-mono tracking-wider text-lime-400 hover:text-lime-300 border border-lime-400/30 hover:border-lime-400/60 rounded-full bg-lime-950/20 backdrop-blur-md transition-all cursor-pointer"
          >
            <MessageCircle size={13} />
            <span>WhatsApp </span>
          </a>

          <button
            onClick={onBookNowClick}
            id="nav-book-btn"
            className="flex items-center space-x-2 px-5 py-2 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs tracking-[0.16em] uppercase rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar size={13} />
            <span>Book </span>
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onBookNowClick}
            className="px-3 py-1.5 bg-lime-400 text-black font-bold text-[11px] tracking-wider uppercase rounded-full shadow-md"
          >
            Book
          </button>
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-lime-300 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#061418]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase font-semibold tracking-[0.18em] text-neutral-200 hover:text-lime-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full py-3 bg-lime-400 text-black font-extrabold text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_4px_20px_rgba(163,230,53,0.3)]"
            >
              Book Sunrise Tour
            </button>

            <a
              href="https://wa.me/85512345678?text=Hello%20Angkor%20Expeditions!%20I%20would%20like%20to%20inquire%20about%20your%20sunrise%20tours."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center space-x-2 text-lime-400 border border-lime-400/30 rounded-full text-xs font-mono tracking-wider uppercase bg-lime-950/20"
            >
              <MessageCircle size={15} />
              <span>Chat with us</span>
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

