// Exact per-person price for each group size
export const budgetPricing: Record<number, number> = {
  2: 4500,
  3: 3200,
  4: 2500,
  5: 2500,
  6: 2500,
  7: 2000,
  8: 2500,
  9: 2000,
  10: 1800,
  11: 1900,
  12: 1800,
  13: 1800,
  14: 1700,
  15: 1500,
  16: 1500,
  17: 1500,
  18: 1500,
  19: 1500,
  20: 1500,
};

export const package3DayPricing: Record<number, number> = {
  2: 7000,
  3: 5300,
  4: 4000,
  5: 4000,
  6: 4000,
  7: 3500,
  8: 3500,
  9: 3200,
  10: 3000,
  11: 3000,
  12: 2800,
  13: 2600,
  14: 2500,
  15: 2700,
  16: 2500,
  17: 2500,
  18: 2500,
  19: 2500,
  20: 2400,
};

export const package2DayAthirapalliPricing: Record<number, number> = {
  2: 5250,
  3: 3700,
  4: 3000,
  5: 2800,
  6: 2700,
  7: 2400,
  8: 2500,
  9: 2250,
  10: 2000,
  11: 2000,
  12: 1800,
  13: 1700,
  14: 1700,
  15: 1900,
  16: 1700,
  17: 1700,
  18: 1700,
  19: 1700,
  20: 1700,
};

/** Look up price per person for a given count, falling back to the last key */
export function getPricePerPersonExact(
  map: Record<number, number>,
  count: number,
): number {
  if (map[count] !== undefined) return map[count];
  const keys = Object.keys(map)
    .map(Number)
    .sort((a, b) => a - b);
  return map[keys[keys.length - 1]] ?? 0;
}

export interface ItineraryDay {
  day: string;
  title: string;
  places: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  priceText: string;
  badge?: string;
  featured?: boolean;
  inclusions?: string[];
  exclusions?: string[];
  itinerary: ItineraryDay[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "package-3day",
    title: "Ultimate 3 Days Valparai & Athirapalli Experience",
    subtitle: "Tea estates • Wildlife • Majestic waterfalls",
    duration: "3 Days / 2 Nights",
    priceText: "₹4,500/person",
    badge: "Most Booked",
    featured: true,
    image: "",
    inclusions: [
      "3 Days Sightseeing",
      "2 Nights Stay",
      "Private Vehicle for Entire Trip",
      "Pick-up & Drop (Pollachi)",
      "Driver Beta, Toll & Parking",
    ],
    exclusions: [
      "Food (Breakfast, Lunch, Dinner)",
      "Entry Tickets (Falls, Dams, Parks)",
      "Forest Checkpost Charges",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Valparai Entry",
        places: [
          "Pick up from Pollachi",
          "Aaliyar Dam & River",
          "Butterfly park",
          "Monkey falls",
          "Loam’s View Point",
          "Hornbill viewpoint",
          "Waterfalls Photo Spot",
          "Kavarkal View Point",
          "Thalanar View Point",
        ],
      },
      {
        day: "Day 2",
        title: "Athirapalli Waterfalls Route",
        places: [
          "Sholayar dam",
          "Charpa Waterfalls",
          "Vazhachal Waterfalls",
          "Athirapalli Waterfalls",
          "Hanging bridge",
        ],
      },
      {
        day: "Day 3",
        title: "Local Sightseeing & Departure",
        places: [
          "Balaji Temple",
          "Vellamalai River",
          "Sirukundra Photo Point",
          "Karumalai Falls & Church",
          "Koolangal River",
          "Chinnakallar river",
          "Drop at Pollachi Station",
        ],
      },
    ],
  },
  {
    id: "package-2day-budget",
    title: "2 Days Valparai Scenic Escape",
    subtitle: "Perfect weekend getaway into the hills",
    duration: "2 Days / 1 Night",
    priceText: "₹2,500/person",
    badge: "Best Value",
    image: "",
    inclusions: [
      "2 Days Sightseeing",
      "1 Night Stay",
      "Private Travels Pick-up & Drop (Pollachi)",
    ],
    exclusions: ["Food", "Entry Tickets & Checkpost Cost", "Extra Places"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Sightseeing",
        places: [
          "Pickup from Pollachi",
          "Aliyar Dam & River",
          "Monkey falls",
          "Butterfly Park",
          "Loam’s View Point",
          "Hornbill viewpoint",
          "Jacaranda Flower Spot",
          "Waterfalls Photo Spot",
          "Kavarkal View Point",
          "Thalanar View Point",
        ],
      },
      {
        day: "Day 2",
        title: "Hidden Gems & Waterfalls",
        places: [
          "Nadumalai River",
          "Balaji Temple",
          "Vellamalai River",
          "Sirukundra Photo Point",
          "Karumalai Falls & Church",
          "Koolangal River",
          "Chinnakallar Falls",
          "Drop at Pollachi Station",
        ],
      },
    ],
  },
  {
    id: "package-2day-athirapalli",
    title: "2 Days Valparai & Athirapalli Waterfall Escape",
    subtitle: "Hills + Falls in one unforgettable trip",
    duration: "2 Days / 1 Night",
    priceText: "₹3,500/person",
    image: "",
    inclusions: [
      "2 Days Sightseeing",
      "1 Night Stay",
      "Private Vehicle for Entire Trip",
      "Pick-up & Drop (Pollachi)",
      "Driver Beta, Toll & Parking",
    ],
    exclusions: [
      "Food (Breakfast, Lunch, Dinner)",
      "Entry Tickets (Falls, Dams, Parks)",
      "Forest Checkpost Charges",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Valparai Entry",
        places: [
          "Pick up from Pollachi",
          "Aaliyar Dam & River",
          "Butterfly park",
          "Monkey Falls",
          "Loam’s View Point",
          "Attakatti Hornbill View Point",
          "Waterfalls Photo Spot",
          "Kavarkal View Point",
          "Thalanar View Point",
          "Koolangal river",
        ],
      },
      {
        day: "Day 2",
        title: "Athirapalli Waterfalls Route",
        places: [
          "Sholayar dam",
          "Charpa Waterfalls",
          "Vazhachal Waterfalls",
          "Athirapalli Waterfalls",
          "Hanging bridge",
          "Drop at Pollachi Station",
        ],
      },
    ],
  },
  {
    id: "package-1day",
    title: "1 Day Valparai Explorer",
    subtitle: "Quick Sightseeing Tour",
    duration: "1 Day",
    priceText: "₹1,500/person",
    image: "",
    inclusions: [
      "1 Day Full Sightseeing",
      "Private Vehicle",
      "Pick-up & Drop (Pollachi)",
      "Driver Beta, Toll & Parking",
    ],
    exclusions: [
      "Food (Breakfast, Lunch, Dinner)",
      "Entry Tickets (Falls, Dams, Parks)",
      "Forest Checkpost Charges",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Full Day Sightseeing",
        places: [
          "Aliyar Dam",
          "Monkey Falls",
          "Loam’s View Point",
          "Tea Estate Walk",
          "Koolangal River",
          "Balaji Temple",
        ],
      },
    ],
  },
  {
    id: "package-custom",
    title: "Custom Private Tours",
    subtitle: "Tailored to your needs",
    duration: "Flexible",
    priceText: "Contact for Pricing",
    badge: "Personalized",
    image: "",
    inclusions: [
      "Tailored Sightseeing Itinerary",
      "Choice of Private Vehicle",
      "Optional Accommodation Booking",
      "Expert Local Guidance",
    ],
    exclusions: [
      "Food (unless pre-booked)",
      "Entry Tickets & Forest Fees",
      "Anything not mentioned in final quote",
    ],
    itinerary: [
      {
        day: "Custom",
        title: "Your Choice",
        places: ["Pick your places", "Set your budget", "Choose your dates"],
      },
    ],
  },
];

export const galleryImages = [
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/video/upload/f_auto,q_auto/v1777545381/C4DEA17B-5B4C-4432-BBC2-27314F8B3BCD_v90ezy.mov",
    alt: "Valparai Video Highlight",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545487/IMG_0723.JPG_yyamxw.jpg",
    alt: "Tea Estate Landscape",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545483/8845601C-A17F-4768-B345-29F559EA813B.JPG_zodpel.jpg",
    alt: "Valparai Mountain Mist",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545470/IMG_7141.JPG_r6zqkm.jpg",
    alt: "Valparai Nature",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545450/IMG_0737.JPG_bfawec.jpg",
    alt: "Hill Viewpoint",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545429/IMG_2031.JPG_mcz3us.jpg",
    alt: "Nature Trail",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545422/IMG_0722.JPG_odxq8j.jpg",
    alt: "Valparai Scenic Road",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545412/IMG_7134.JPG_qewhvs.jpg",
    alt: "Valparai Trip",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545386/F2B9F06B-BA06-4B5B-94D5-3BCC629C15E1.JPG_l3qrj3.jpg",
    alt: "Valparai Views",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545372/22755CC5-96C0-4D6A-B36D-B021DD90E278_v3l63e.heic",
    alt: "Mountain Views",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545372/AAA3A8EC-1313-4322-84A2-1E39186CED3A_wkdg5a.heic",
    alt: "Valparai Scenery",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545372/DA39F41C-E456-4192-BDCB-2E368B38E6B1.JPG_fvnoou.jpg",
    alt: "Scenic Views",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545371/64CAC251-0654-4C28-9621-3A640EEB6C9C.JPG_vpj6kp.jpg",
    alt: "Lush Greenery",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545346/03805462-90D6-41EF-AFAE-82B620AFCF91_tddyfq.heic",
    alt: "Waterfall Route",
  },
  {
    url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/f_auto,q_auto/v1777545344/8E14CFCC-CFD1-4105-852E-ECEE2860B2E1.JPG_snk0iq.jpg",
    alt: "Tea Estate Landscape",
  },
];
