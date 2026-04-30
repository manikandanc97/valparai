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
};

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
  inclusions?: string[];
  exclusions?: string[];
  itinerary: ItineraryDay[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "package-3day",
    title: "3 Days Valparai & Athirapalli",
    subtitle: "Complete Nature & Wildlife Experience",
    duration: "3 Days / 2 Nights",
    priceText: "₹4,500/person",
    badge: "Premium Choice",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545429/IMG_0722.JPG_odxq8j.jpg",
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
    title: "2 Days Valparai Budget Trip",
    subtitle: "Best Value Nature Escape",
    duration: "2 Days / 1 Night",
    priceText: "₹2,500/person",
    badge: "Best Value",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545450/IMG_0737.JPG_bfawec.jpg",
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
    title: "2 Days Valparai & Athirapalli",
    subtitle: "Quick Getaway to the Falls",
    duration: "2 Days / 1 Night",
    priceText: "₹3,500/person",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545488/8845601C-A17F-4768-B345-29F559EA813B.JPG_zodpel.jpg",
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
];


export const galleryImages = [
  { url: "/C4DEA17B-5B4C-4432-BBC2-27314F8B3BCD.MOV", alt: "Valparai Video Highlight" },
  { url: "/IMG_0722.JPG.jpeg", alt: "Valparai Scenic Road" },
  { url: "/IMG_0723.JPG.jpeg", alt: "Tea Estate Landscape" },
  { url: "/IMG_0737.JPG.jpeg", alt: "Hill Viewpoint" },
  { url: "/IMG_2031.JPG.jpeg", alt: "Nature Trail" },
  { url: "/8845601C-A17F-4768-B345-29F559EA813B.JPG.jpeg", alt: "Valparai Mountain Mist" },
  { url: "/2C9D2794-EDB5-4AE0-AAE5-B721A88CC4F4.JPG.jpeg", alt: "Waterfall Route" },
  { url: "/64CAC251-0654-4C28-9621-3A640EEB6C9C.JPG.jpeg", alt: "Valparai Trip" },
  { url: "/8E14CFCC-CFD1-4105-852E-ECEE2860B2E1.JPG.jpeg", alt: "Lush Greenery" },
  { url: "/DA39F41C-E456-4192-BDCB-2E368B38E6B1.JPG.jpeg", alt: "Scenic Views" },
  { url: "/F2B9F06B-BA06-4B5B-94D5-3BCC629C15E1.JPG.jpeg", alt: "Valparai Views" },
  { url: "/03805462-90D6-41EF-AFAE-82B620AFCF91.HEIC", alt: "Valparai Nature" },
  { url: "/22755CC5-96C0-4D6A-B36D-B021DD90E278.HEIC", alt: "Mountain Views" },
  { url: "/AAA3A8EC-1313-4322-84A2-1E39186CED3A.HEIC", alt: "Valparai Scenery" },
];
