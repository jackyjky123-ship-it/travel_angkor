export interface TourPackage {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  startTime: string;
  highlights: string[];
  perfectFor: string;
  tukTukPricePerPerson: number;
  acCarPricePerPerson: number;
  inclusions: string[];
  crowdStrategy: string;
  itinerary: {
    time: string;
    title: string;
    description: string;
    photoTip?: string;
  }[];
}

export interface BookingFormState {
  packageId: string;
  date: string;
  guests: number;
  transport: 'tuk-tuk' | 'suv';
  fullName: string;
  email: string;
  hotelPickup: string;
  specialRequests: string;
}

export interface Testimonial {
  id: string;
  author: string;
  country: string;
  guideName: string;
  rating: number;
  date: string;
  tourTaken: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  category: 'pass' | 'dress' | 'season' | 'cancellation';
  question: string;
  shortAnswer: string;
  detailedPoints: string[];
}
