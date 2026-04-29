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
    image: "https://images.pexels.com/photos/247041/pexels-photo-247041.jpeg",
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
    image: "https://images.pexels.com/photos/34485105/pexels-photo-34485105.jpeg",
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
    image: "https://images.pexels.com/photos/34437465/pexels-photo-34437465.jpeg",
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

export const reviews = [
  {
    name: "Rajesh Kumar",
    package: "Monkey Falls Trek",
    text: "Absolutely fantastic experience! Our guide was knowledgeable, the waterfall was breathtaking, and the entire trip was perfectly organized.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rajesh",
  },
  {
    name: "Priya Sharma",
    package: "Family Package",
    text: "Our family had an incredible weekend! The Tea Estate Safari was thrilling, guides were super friendly, and everything was safe.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
  {
    name: "Ananya & Arjun",
    package: "Honeymoon Package",
    text: "Best honeymoon trip ever! The sunset viewpoints were romantic, and every detail was taken care of beautifully.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ananya",
  },
];

export const galleryImages = [
  { url: "https://images.pexels.com/photos/34485105/pexels-photo-34485105.jpeg", alt: "Tea Estates" },
  { url: "https://images.pexels.com/photos/247041/pexels-photo-247041.jpeg", alt: "Waterfalls" },
  { url: "https://images.pexels.com/photos/20459277/pexels-photo-20459277.jpeg", alt: "Wildlife" },
  { url: "https://images.pexels.com/photos/34130875/pexels-photo-34130875.jpeg", alt: "Mist" },
  { url: "https://images.pexels.com/photos/20231601/pexels-photo-20231601.jpeg", alt: "River" },
  { url: "https://images.pexels.com/photos/34437465/pexels-photo-34437465.jpeg", alt: "Forest" },
];
