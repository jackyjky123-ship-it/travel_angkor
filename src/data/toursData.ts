import { TourPackage, Testimonial, FAQItem } from '../types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'classic-sunrise',
    name: 'Classic Sunrise Circuit',
    subtitle: 'The essential dawn spectacle and core Angkor monuments',
    duration: '1 Day (Early 4:30 AM start)',
    startTime: '4:30 AM – 1:30 PM (or full day with sunset option)',
    highlights: [
      'Angkor Wat dawn',
      'Bayon stone faces',
      'Ta Prohm jungle temple',
    ],
    perfectFor: 'First-time visitors, tight schedules',
    tukTukPricePerPerson: 42,
    acCarPricePerPerson: 68,
    inclusions: [
      'Chilled bottled water',
      'Complimentary iced towels',
      'Dedicated private transport',
      'Official licensed guide',
    ],
    crowdStrategy:
      'We enter Bayon and Ta Prohm via the quiet outer perimeter gateways before the major tourist tour buses arrive at 9:30 AM.',
    itinerary: [
      {
        time: '04:30 AM',
        title: 'Hotel Pickup & Pre-Dawn Transfer',
        description:
          'Your guide and driver meet you at your Siem Reap hotel lobby. Enjoy the peaceful morning breeze as we cruise into the ancient forest.',
        photoTip: 'Have your camera mounted on a compact tripod before arriving at the pond.',
      },
      {
        time: '05:15 AM',
        title: 'Angkor Wat Dawn & Lotus Pond Reflection',
        description:
          'Arrive at our curated vantage point by the left reflection pond as the sky transitions from violet to fiery amber behind the five lotus towers.',
        photoTip: 'Low shutter speed capturing the purple hues 20 minutes before sunrise.',
      },
      {
        time: '07:15 AM',
        title: 'Inner Sanctum & Churning of the Ocean of Milk',
        description:
          'Explore the intricate 12th-century bas-relief galleries and ascend to the sacred Bakan level as morning light casts golden highlights on 1,800 Apsara carvings.',
      },
      {
        time: '09:30 AM',
        title: 'Angkor Thom & The 216 Faces of Bayon',
        description:
          'Pass through the South Gate guarded by 54 gods and 54 demons to reach King Jayavarman VII’s enigmatic state temple.',
      },
      {
        time: '11:15 AM',
        title: 'Ta Prohm — Ancient Stone & Giant Banyan Roots',
        description:
          'Enter through the secluded Eastern gate to experience the raw magic of nature overtaking stone sanctuaries, free from megaphone tour crowds.',
      },
      {
        time: '01:00 PM',
        title: 'Terrace of the Elephants & Relaxed Return',
        description:
          'Admire the 300-meter viewing terrace before enjoying chilled jasmine towels and relaxing transfer back to your hotel for an afternoon swim.',
      },
    ],
  },
  {
    id: 'grand-circuit',
    name: 'Grand Circuit & Hidden Gems',
    subtitle: 'Deep cultural immersion through jewel sanctuaries & forest monasteries',
    duration: '2 Days',
    startTime: 'Day 1: 04:30 AM Sunrise | Day 2: 07:30 AM Departure',
    highlights: [
      'Preah Khan',
      'Banteay Srei pink sandstone',
      'Sunset at Phnom Bakheng',
    ],
    perfectFor: 'Culture and photography enthusiasts',
    tukTukPricePerPerson: 78,
    acCarPricePerPerson: 125,
    inclusions: [
      'Chilled bottled water',
      'Complimentary iced towels',
      'Dedicated private transport',
      'Official licensed guide',
    ],
    crowdStrategy:
      'Visiting Banteay Srei during early midday or late afternoon when light illuminates the pink sandstone and bus crowds have returned to town for lunch.',
    itinerary: [
      {
        time: 'Day 1 (Full Day)',
        title: 'Angkor Wat Sunrise & Angkor Thom Highlights',
        description:
          'Experience the core masterpiece monuments with our trademark reverse-crowd timing and in-depth historical context.',
      },
      {
        time: 'Day 2 — 07:30 AM',
        title: 'Banteay Srei (The Pink Sandstone Jewel)',
        description:
          'Drive 35 km through scenic Cambodian countryside villages to inspect the most intricate 10th-century carvings in Khmer art history.',
        photoTip: 'Morning sunlight brings out warm coral and magenta tones in the carvings.',
      },
      {
        time: 'Day 2 — 10:30 AM',
        title: 'Preah Khan — Monastic Labyrinth',
        description:
          'Wander the enormous Buddhist university city shaded by giant ficus trees, visiting the unique two-story Greco-Roman styled pavilion.',
      },
      {
        time: 'Day 2 — 01:30 PM',
        title: 'Neak Pean & Ta Som Temple',
        description:
          'Stroll across the wooden causeway over Jayatataka lake to the circular island shrine of Neak Pean, followed by the iconic tree-wrapped eastern gopura of Ta Som.',
      },
      {
        time: 'Day 2 — 04:45 PM',
        title: 'Sunset over the Rice Terraces at Pre Rup',
        description:
          'Climb the warm laterite tiers of Pre Rup to witness dusk settle across the Cambodian jungle canopy without the long lines of Bakheng.',
      },
    ],
  },
  {
    id: 'custom-vip',
    name: 'Custom VIP / Private Chauffeur',
    subtitle: 'Bespoke pacing, tailored itineraries & luxury door-to-door flexibility',
    duration: 'Flexible (1–3 Days)',
    startTime: 'Your preferred schedule (Dawn, Morning, or Twilight)',
    highlights: [
      'Private A/C vehicle or tuk-tuk',
      'Tailored pace',
      'East Gate crowd evasion',
    ],
    perfectFor: 'Families, luxury travelers, private groups',
    tukTukPricePerPerson: 55,
    acCarPricePerPerson: 95,
    inclusions: [
      'Chilled bottled water',
      'Complimentary iced towels',
      'Dedicated private transport',
      'Official licensed guide',
    ],
    crowdStrategy:
      'Dynamically monitored entry routes: your guide checks live crowd movements at each checkpoint to divert to tranquil courtyards instantly.',
    itinerary: [
      {
        time: 'Flexible Custom Hours',
        title: 'Curated Itinerary Built Around Your Needs',
        description:
          'Prioritize photography at golden hour, deep architectural history, or a relaxed family pace with shaded breaks and air-conditioned respites.',
      },
      {
        time: 'Off-the-Beaten-Path Options',
        title: 'Optional Excursions to Beng Mealea or Kulen Waterfall',
        description:
          'Venture deeper to the jungle-swallowed ruins of Beng Mealea or the sacred River of a Thousand Lingas on Phnom Kulen.',
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Sarah & Mark L.',
    country: 'United Kingdom',
    guideName: 'Dara',
    rating: 5,
    date: 'Verified TripAdvisor Review',
    tourTaken: 'Classic Sunrise Circuit',
    quote:
      'Our guide Dara knew exactly where to stand for the best sunrise photo without anyone in frame. While 500 tourists crowded one spot, he led us 40 yards down the pond where the reflection was crystal calm. His deep knowledge of the bas-reliefs was mind-blowing!',
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    country: 'Australia',
    guideName: 'Sophea',
    rating: 5,
    date: 'Verified TripAdvisor Review',
    tourTaken: 'Grand Circuit & Hidden Gems',
    quote:
      'Sophea navigated the East Gate route at Ta Prohm so we literally had the jungle roots to ourselves for 25 golden minutes before any tour bus appeared. The iced jasmine towels after each temple were pure heaven in the Siem Reap humidity!',
  },
  {
    id: 'rev-3',
    author: 'The Henderson Family',
    country: 'Canada',
    guideName: 'Vanna & Chauffeur Bunthoeun',
    rating: 5,
    date: 'Verified TripAdvisor Review',
    tourTaken: 'Custom VIP / Private Chauffeur',
    quote:
      'Traveling with a 6-year-old and grandparents in Siem Reap heat can feel daunting, but Vanna paced everything perfectly. Chilled bottled water, cold towels waiting in the A/C van, and brilliant storytelling kept our daughter spellbound all day.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-pass',
    category: 'pass',
    question: 'Angkor Pass Rules: How & where do we get the tickets?',
    shortAnswer: 'Official rates: 1-Day ($37 USD), 3-Day ($62 USD), 7-Day ($72 USD).',
    detailedPoints: [
      'Tickets can be purchased online through the official Angkor Enterprise portal or in person at the central Angkor Ticket Center on the way to the park.',
      'We stop at the ticket center seamlessly with our vehicle before sunrise (doors open at 4:30 AM), where digital photos are taken on-site in under 5 minutes.',
      'Kids under 12 enter 100% free with their passport.',
      'Note: The ticket fee goes directly to the Apsara National Authority for temple restoration and Kantha Bopha Children’s Hospital.',
    ],
  },
  {
    id: 'faq-dress',
    category: 'dress',
    question: 'Temple Dress Code: What should we wear to enter the sacred shrines?',
    shortAnswer: 'Shoulders and knees must be covered to enter Angkor temples.',
    detailedPoints: [
      'Angkor Wat, Bayon, and especially the top Bakan sanctuary terrace are sacred active religious sites.',
      'Wear lightweight, breathable linen or cotton shirts that cover shoulders (short sleeves are fine; tank tops/singlets are not permitted).',
      'Pants, skirts, or shorts must fall below the knee. Wrapping a scarf over bare shoulders is often rejected by Apsara guards at the top tier of Angkor Wat, so actual sleeved tops are required.',
      'Wear slip-on walking shoes or supportive sandals with grip for centuries-old uneven stone steps.',
    ],
  },
  {
    id: 'faq-season',
    category: 'season',
    question: 'Best Time to Visit: Dry season vs. Green season differences?',
    shortAnswer: 'Dry season brings vivid sunrises; green season offers lush emerald moats and fewer crowds.',
    detailedPoints: [
      'Dry Season (November – April): Clear skies, golden dawn light, and dry walking paths. December to February offers the coolest temperatures (22°C–30°C).',
      'Green Season (May – October): Spectacular emerald vegetation, full reflection moats, mystical cloud formations over the spires, and dramatically fewer tourists.',
      'Both seasons are magical—our guides adjust routes according to sunlight angles and weather.',
    ],
  },
  {
    id: 'faq-cancel',
    category: 'cancellation',
    question: 'Cancellation Policy: What if our flight changes or plans shift?',
    shortAnswer: '100% Free cancellation up to 24–48 hours in advance for total peace of mind.',
    detailedPoints: [
      'No stress booking: Cancel or reschedule up to 24 hours prior to departure for day tours with zero penalty.',
      'For private multi-day VIP bookings, free cancellation applies up to 48 hours prior.',
      'If your flight is delayed or you fall unwell, simply WhatsApp us directly to adjust your start time or shift dates at no extra fee.',
    ],
  },
];
