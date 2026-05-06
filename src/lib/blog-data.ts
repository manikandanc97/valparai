export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: { type: "paragraph" | "heading" | "image" | "quote"; text?: string; src?: string; alt?: string }[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Exploring Valparai's Tea Estates",
    slug: "ultimate-guide-valparai-tea-estates",
    excerpt: "Discover the lush green landscapes of Valparai, where endless tea plantations offer a serene escape from city life. Here is our complete guide to planning your estate visit.",
    content: [
      { type: "paragraph", text: "Valparai, a hidden gem nestled in the Anamalai Hills of the Western Ghats, is synonymous with sprawling tea estates that carpet the rolling hills in a vibrant hue of green. Unlike commercial hill stations, Valparai retains its pristine charm, offering a tranquil retreat for nature lovers and peace seekers alike." },
      { type: "heading", text: "A Journey Through Emerald Carpets" },
      { type: "paragraph", text: "The drive to Valparai itself is an experience, featuring 40 hairpin bends that wind through dense forests and eventually open up to breathtaking vistas of tea plantations. These estates, many established during the British era, have meticulously maintained their heritage and natural beauty." },
      { type: "quote", text: "The misty mornings in Valparai, with the sun gently piercing through the tea leaves, create a canvas of light and shadow that words fail to describe." },
      { type: "heading", text: "What to Expect on an Estate Tour" },
      { type: "paragraph", text: "Visiting a tea estate is not just about the scenic views. It's an immersive educational experience. You can witness the intricate process of tea making, from the careful plucking of the two leaves and a bud by skilled workers to the withering, rolling, oxidation, and drying processes in the factories." },
      { type: "paragraph", text: "Many estates offer guided tours where you can sample different grades of tea, learning to distinguish the subtle flavor profiles that make high-altitude teas so sought after globally." }
    ],
    image: "/images/blogs/tea_estates_valparai.png",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Travel Guide",
    author: "Valparai Explorer",
    featured: true,
  },
  {
    id: 2,
    title: "Top 5 Wildlife Encounters in the Anamalai Hills",
    slug: "top-5-wildlife-encounters-anamalai-hills",
    excerpt: "From majestic elephants to the elusive Lion-tailed Macaque, the Anamalai Tiger Reserve is a haven for wildlife enthusiasts. Learn about the best spots for spotting native fauna.",
    content: [
      { type: "paragraph", text: "The Anamalai Hills, part of the Western Ghats biodiversity hotspot, are teeming with exotic wildlife. The dense forests provide sanctuary to numerous species, making it a paradise for wildlife photographers and nature enthusiasts." },
      { type: "heading", text: "1. The Lion-Tailed Macaque" },
      { type: "paragraph", text: "Endemic to the Western Ghats, the Lion-tailed Macaque is a star attraction in Valparai. Often seen in the rainforest canopies, these majestic primates are easily identifiable by their silver-white manes and tufted tails. Puthuthottam is a well-known spot for sightings." },
      { type: "heading", text: "2. The Great Indian Hornbill" },
      { type: "paragraph", text: "With its massive beak and striking colors, the Great Indian Hornbill is a sight to behold. Their loud, resonant calls often echo through the valleys, signaling their presence high in the towering trees." },
      { type: "heading", text: "3. Elephants in their Natural Habitat" },
      { type: "paragraph", text: "Valparai is known for its elephant corridors. Watching a herd of gentle giants gracefully moving through the tea estates or bathing in the streams is a humbling experience. Always remember to maintain a safe distance and respect their space." }
    ],
    image: "/images/blogs/wildlife_anamalai.png",
    date: "April 28, 2026",
    readTime: "7 min read",
    category: "Wildlife",
    author: "Nature Lens",
    featured: false,
  },
  {
    id: 3,
    title: "Chasing Waterfalls: Athirapally and Beyond",
    slug: "chasing-waterfalls-athirapally-and-beyond",
    excerpt: "Experience the sheer power and beauty of the 'Niagara of India'. A deep dive into planning your perfect waterfall sightseeing itinerary.",
    content: [
      { type: "paragraph", text: "A scenic drive from Valparai leads you to some of the most spectacular waterfalls in the region. The journey through the dense Sholayar forests is as mesmerizing as the destination itself." },
      { type: "heading", text: "Athirapally Waterfalls" },
      { type: "paragraph", text: "Often referred to as the 'Niagara of India', Athirapally is a majestic 80-foot waterfall cascading down the Chalakudy River. The roaring sound of the water and the misty spray create an awe-inspiring atmosphere. It's a popular spot for both tourists and filmmakers." },
      { type: "quote", text: "Standing before Athirapally, one truly grasps the raw, unbridled power of nature." },
      { type: "heading", text: "Vazhachal and Charpa Falls" },
      { type: "paragraph", text: "Just a short drive from Athirapally are the Vazhachal and Charpa falls. Vazhachal offers a beautiful view of the river rushing over rocky terrain, while Charpa, situated right next to the road, is at its most dramatic during the monsoon season." }
    ],
    image: "/images/blogs/waterfall_athirapally.png",
    date: "April 15, 2026",
    readTime: "4 min read",
    category: "Sightseeing",
    author: "Aqua Adventures",
    featured: false,
  },
  {
    id: 4,
    title: "A Foodie's Guide to Authentic Kerala & Kongu Cuisine",
    slug: "foodies-guide-authentic-kerala-kongu-cuisine",
    excerpt: "Savor the unique blend of culinary traditions found in this border region. We review the must-try dishes and local eateries.",
    content: [
      { type: "paragraph", text: "Located near the border of Tamil Nadu and Kerala, Valparai boasts a unique culinary landscape that blends the spicy, robust flavors of Kongu Nadu with the coconut-rich, coastal influences of Kerala." },
      { type: "heading", text: "Must-Try Kongu Delicacies" },
      { type: "paragraph", text: "Start your culinary journey with authentic Kongu dishes. The fiery Pallipalayam Chicken, flavored with abundant shallots and dried red chilies, is a crowd favorite. Vegetarians must try the Arisi Paruppu Sadham, a comforting lentil and rice dish unique to the region." },
      { type: "heading", text: "Kerala's Coastal Influence" },
      { type: "paragraph", text: "As you move closer to the border, the aroma of coconut oil and curry leaves fills the air. Indulge in classic Kerala meals featuring red rice, spicy fish curries (Meen Curry), and the indispensable appams paired with aromatic vegetable stew." }
    ],
    image: "/images/blogs/kerala_food.png",
    date: "March 30, 2026",
    readTime: "6 min read",
    category: "Food & Culture",
    author: "Spicy Bites",
    featured: false,
  },
  {
    id: 5,
    title: "Monsoon Magic: Why You Should Visit Valparai in the Rain",
    slug: "monsoon-magic-visit-valparai-in-rain",
    excerpt: "Don't let the rain stop you. Discover how the monsoon transforms Valparai into a magical, misty paradise with roaring waterfalls and vibrant greenery.",
    content: [
      { type: "paragraph", text: "While many shy away from hill stations during the rainy season, monsoon in Valparai is an entirely different, magical experience. The rain breathes life into the hills, painting them in the most vibrant shades of green imaginable." },
      { type: "heading", text: "The Misty Landscapes" },
      { type: "paragraph", text: "The low-hanging clouds and dense mist that roll over the tea estates create an ethereal, dreamlike setting. It's the perfect weather for cozying up with a hot cup of locally brewed tea while watching the rain patter against the window." },
      { type: "heading", text: "Roaring Rivers and Waterfalls" },
      { type: "paragraph", text: "The monsoon rejuvenates the region's water bodies. Streams that are mere trickles in the summer turn into roaring rivers, and hidden waterfalls emerge from the dense foliage, offering spectacular views for adventurous souls willing to brave the rain." }
    ],
    image: "/images/blogs/monsoon_hills.png",
    date: "March 10, 2026",
    readTime: "5 min read",
    category: "Seasonal Travel",
    author: "Monsoon Diaries",
    featured: false,
  },
  {
    id: 6,
    title: "Packing Essentials for a 3-Day Hill Station Retreat",
    slug: "packing-essentials-3-day-hill-station-retreat",
    excerpt: "Not sure what to bring? Our comprehensive packing list ensures you have everything you need for a comfortable and prepared stay in the mountains.",
    content: [
      { type: "paragraph", text: "Packing for a hill station like Valparai requires a bit of planning, given the unpredictable weather and the outdoor activities you're likely to engage in. Here is a definitive guide to what you should carry." },
      { type: "heading", text: "Layering is Key" },
      { type: "paragraph", text: "The temperatures can fluctuate significantly. Bring light, breathable clothing for the daytime when the sun is out, but pack warm layers—sweaters, a light jacket, and perhaps a thermal inner—for the chilly evenings and early mornings." },
      { type: "heading", text: "Footwear for Exploration" },
      { type: "paragraph", text: "Leave the heels at home. A sturdy, comfortable pair of walking shoes or trekking boots is essential for exploring the uneven terrains, tea estates, and forest trails safely." },
      { type: "heading", text: "Other Essentials" },
      { type: "paragraph", text: "Don't forget insect repellent, especially if you plan on visiting the forests. A compact umbrella or a raincoat is a must-have, as sudden showers are common. Lastly, bring a good quality camera to capture the breathtaking scenery." }
    ],
    image: "/images/blogs/packing_essentials.png",
    date: "February 22, 2026",
    readTime: "3 min read",
    category: "Tips & Tricks",
    author: "Travel Smart",
    featured: false,
  }
];
