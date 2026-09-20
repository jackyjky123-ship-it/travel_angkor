import React from 'react';
import { PackagesSection } from '../components/PackagesSection';
import { TOUR_PACKAGES } from '../data/toursData';
import { TourPackage } from '../types';

interface TourPageProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onBookTour: (pkg: TourPackage) => void;
}

export const TourPage: React.FC<TourPageProps> = ({ onSelectPackage, onBookTour }) => {
  return (
    <div id="tours">
      <PackagesSection
        packages={TOUR_PACKAGES}
        onSelectPackage={onSelectPackage}
        onBookTour={onBookTour}
      />
    </div>
  );
};
