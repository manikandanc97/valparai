export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: {
    type: "paragraph" | "heading" | "image" | "quote";
    text?: string;
    src?: string;
    alt?: string;
  }[];
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
    title: "Top 10 Tourist Places in Valparai (Hidden Gems & Must-Visit Spots)",
    slug: "top-10-tourist-places-in-valparai",
    excerpt:
      "Explore the best tourist places in Valparai including waterfalls, viewpoints, dams, and hidden gems surrounded by misty hills and tea estates.",
    content: [
      {
        type: "paragraph",
        text: "Nestled in the heart of the Western Ghats, Valparai is a paradise of misty hills, tea estates, waterfalls, and untouched nature. Whether you’re a weekend traveler or a nature lover, Valparai offers a peaceful escape filled with scenic beauty and hidden gems waiting to be explored.",
      },

      { type: "heading", text: "1. 🌊 Aliyar Dam" },

      {
        type: "paragraph",
        text: "Located at the foothills of Valparai, Aliyar Dam is the perfect starting point for your hill station journey. Surrounded by mountains and calm waters, the place offers breathtaking views and a peaceful atmosphere.",
      },

      {
        type: "quote",
        text: "Why visit: Stunning reservoir views and peaceful vibes — ideal for photos and quick travel breaks.",
      },

      { type: "heading", text: "2. 💧 Monkey Falls" },

      {
        type: "paragraph",
        text: "Monkey Falls is one of the most popular waterfalls near Valparai. Easily accessible from the roadside, this refreshing waterfall attracts travelers looking for a quick dip and relaxing stop.",
      },

      {
        type: "paragraph",
        text: "Tip: Be cautious of monkeys around the area while enjoying the waterfall experience.",
      },

      { type: "heading", text: "3. 🐦 Hornbill Viewpoint" },

      {
        type: "paragraph",
        text: "Surrounded by dense forest, Hornbill Viewpoint is known for its peaceful atmosphere and birdwatching opportunities. Nature lovers often visit early in the morning to spot hornbills and enjoy the fresh mountain air.",
      },

      {
        type: "quote",
        text: "Best time to visit: Early morning for bird sightings and misty forest views.",
      },

      { type: "heading", text: "4. 🌄 Thalanar Viewpoint" },

      {
        type: "paragraph",
        text: "Thalanar Viewpoint is a lesser-known gem in Valparai offering panoramic valley views, cool breeze, and raw natural beauty away from the tourist crowds.",
      },

      {
        type: "paragraph",
        text: "Perfect for relaxing moments, scenic photography, and peaceful travel experiences.",
      },

      { type: "heading", text: "5. 🌊 Koolangal River" },

      {
        type: "paragraph",
        text: "Koolangal River is a hidden paradise featuring crystal-clear flowing water surrounded by lush greenery. It’s an ideal destination for travelers looking for calm and offbeat locations.",
      },

      {
        type: "quote",
        text: "Why visit: Peaceful nature vibes and a perfect spot for slow travel moments.",
      },

      { type: "heading", text: "6. 🌉 Sholayar Dam" },

      {
        type: "paragraph",
        text: "Sholayar Dam, one of the largest dams in Asia, offers mesmerizing views of vast water bodies surrounded by hills and forests. The scenic drive to the dam itself is an unforgettable experience.",
      },

      {
        type: "paragraph",
        text: "Best time to visit is after the monsoon season when the reservoir is full and the surroundings turn vibrant green.",
      },

      { type: "heading", text: "7. 🌧️ Chinnakallar Falls" },

      {
        type: "paragraph",
        text: "Located in one of the wettest regions of South India, Chinnakallar Falls feels like stepping into a rainforest. Misty weather, continuous drizzle, and dense forest surroundings make this place magical.",
      },

      {
        type: "quote",
        text: "Best for: Monsoon lovers and travelers who enjoy cool rainforest vibes.",
      },

      { type: "heading", text: "8. 🌄 Nallamudi Viewpoint" },

      {
        type: "paragraph",
        text: "Nallamudi Viewpoint is one of the most iconic tourist spots in Valparai, offering breathtaking panoramic views of tea estates, valleys, and mountains stretching endlessly into the horizon.",
      },

      {
        type: "paragraph",
        text: "It’s one of the best places in Valparai for photography, sunrise views, and peaceful sunset moments.",
      },

      { type: "heading", text: "9. ⛪ Karumalai Church and Falls" },

      {
        type: "paragraph",
        text: "Karumalai Church is a serene and beautiful church located amidst tea estates. Nearby hidden waterfalls and scenic surroundings make this place a unique spiritual and natural destination.",
      },

      {
        type: "paragraph",
        text: "Note: Entry permissions may be required depending on estate regulations.",
      },

      { type: "heading", text: "10. 🛕 Balaji Temple (Karumalai)" },

      {
        type: "paragraph",
        text: "Balaji Temple is a beautifully maintained temple situated inside a private estate area. Known for its cleanliness and peaceful atmosphere, the temple offers a calm spiritual experience surrounded by nature.",
      },

      {
        type: "quote",
        text: "Tip: Follow all entry guidelines and estate rules while visiting.",
      },

      { type: "heading", text: "✨ Final Thoughts" },

      {
        type: "paragraph",
        text: "Valparai is not just about tourist destinations — it’s about the entire journey through misty roads, endless tea estates, waterfalls, and peaceful silence. Every location in Valparai offers a unique experience that creates unforgettable travel memories.",
      },

      { type: "heading", text: "🚗 Plan Your Trip with Valparai Wanderer" },

      {
        type: "paragraph",
        text: "Make your Valparai trip smooth and memorable with local travel experts offering guided tours, private vehicles, comfortable stays, and the best scenic photo stops across the hills.",
      },

      {
        type: "quote",
        text: "Book your Valparai trip now and explore the hidden gems of the Western Ghats.",
      },
    ],

    image:
      "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1778143150/Top_10_Tourist_Places_in_Valparai_mekpwe.png",
    date: "May 7, 2026",
    readTime: "6 min read",
    category: "Travel Guide",
    author: "Valparai Wanderer",
    featured: true,
  },
];
