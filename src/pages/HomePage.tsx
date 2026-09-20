import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/toursData';
import { TourPackage } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ItineraryModal } from '../components/ItineraryModal';
import { TourPage } from './TourPage';
import { GuidePage } from './GuidePage';
import { ReviewPage } from './ReviewPage';
import { BookingSection } from '../components/BookingSection';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { SunriseVideoModal } from '../components/SunriseVideoModal';
import { Footer } from '../components/Footer';
import { ScrollAnimationCanvas } from '../components/ScrollAnimationCanvas';

export const HomePage: React.FC = () => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<TourPackage | null>(null);
  const [selectedBookingPackageId, setSelectedBookingPackageId] = useState<string>(TOUR_PACKAGES[0].id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const scrollToBooking = (packageId?: string) => {
    if (packageId) {
      setSelectedBookingPackageId(packageId);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-lime-400 selection:text-black">
      {/* Background Scroll Animation */}
      <ScrollAnimationCanvas />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-[#051114]/40 -z-10 pointer-events-none" />

      {/* 1. Sticky Navigation */}
      <Navbar
        onBookNowClick={() => scrollToBooking()}
        onExploreClick={scrollToTours}
      />

      <main>
        {/* Section 1: Hero Banner (Hook & Value Proposition) */}
        <HeroSection
          onExploreClick={scrollToTours}
          onBookNowClick={() => scrollToBooking()}
          onWatchVideoClick={() => setIsVideoModalOpen(true)}
        />

        {/* Section 2: Signature Tour Packages (Product Showcase) */}
        <TourPage
          onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          onBookTour={(pkg) => scrollToBooking(pkg.id)}
        />

        {/* Section 3 & 4: Guide (Local Difference & Traveler Prep) */}
        <GuidePage />

        {/* Section 5: Reviews */}
        <ReviewPage />

        {/* Section 6: Booking CTA */}
        <BookingSection
          packages={TOUR_PACKAGES}
          selectedPackageId={selectedBookingPackageId}
          onSelectPackageId={(id) => setSelectedBookingPackageId(id)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct Assistance: WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Itinerary & Pricing Modal */}
      <ItineraryModal
        pkg={selectedPackageForModal}
        onClose={() => setSelectedPackageForModal(null)}
        onSelectForBooking={(pkg) => {
          setSelectedPackageForModal(null);
          scrollToBooking(pkg.id);
        }}
      />

      {/* High-Resolution Dawn Film Video Preview Modal */}
      <SunriseVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookNow={() => scrollToBooking()}
      />
    </div>
  );
};
