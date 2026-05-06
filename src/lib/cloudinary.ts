import { v2 as cloudinary } from "cloudinary";
import { galleryImages, tourPackages, TourPackage } from "./tour-data";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface GalleryMedia {
  url: string;
  alt: string;
  type: "image" | "video";
  publicId: string;
}



// Simple in-memory cache to avoid hammering Cloudinary API
let cachedMedia: GalleryMedia[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Fetches all images and videos from Cloudinary.
 * Excludes Cloudinary sample files automatically.
 * Results are cached in memory for 5 minutes.
 * Returns an empty array if env vars are not configured.
 */
export async function getGalleryMedia(): Promise<GalleryMedia[]> {
  // Return cached data if still fresh
  if (cachedMedia && Date.now() - cacheTimestamp < CACHE_TTL) {
    return cachedMedia;
  }
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  // Ignore placeholder values from .env.local
  const configured =
    cloudName &&
    !cloudName.startsWith("your_") &&
    apiKey &&
    !apiKey.startsWith("your_") &&
    apiSecret &&
    !apiSecret.startsWith("your_");

  if (!configured) {
    return [];
  }

  try {
    // Fetch images (only from valparai/gallery)
    const imageRes = await cloudinary.search
      .expression('folder="valparai/gallery" AND resource_type="image"')
      .max_results(100)
      .execute();

    const videoRes = await cloudinary.search
      .expression('folder="valparai/gallery" AND resource_type="video"')
      .max_results(20)
      .execute();

    const optimizeUrl = (url: string) => url;

    const toAlt = (publicId: string) =>
      publicId
        .replace(/^valparai\/gallery\//, "") // strip gallery prefix
        .replace(/^valparai\//, "") // strip folder prefix if present
        .replace(/\.[A-Z]+$/i, "") // strip file extension like .JPG
        .replace(/_[a-z0-9]{6}$/i, "") // strip Cloudinary random suffix
        .replace(/[-_]/g, " ") // convert dashes/underscores to spaces
        .replace(/^[A-F0-9]{8}-.*$/i, "Valparai Gallery") // UUID-style names get a clean label
        .trim() || "Valparai Gallery";

    const images: GalleryMedia[] = (imageRes.resources || [])
      .map((r: { secure_url: string; public_id: string }) => ({
        url: optimizeUrl(r.secure_url),
        alt: toAlt(r.public_id),
        type: "image" as const,
        publicId: r.public_id,
      }));

    const videos: GalleryMedia[] = (videoRes.resources || [])
      .map((r: { secure_url: string; public_id: string }) => ({
        url: optimizeUrl(r.secure_url),
        alt: toAlt(r.public_id),
        type: "video" as const,
        publicId: r.public_id,
      }));

    // Videos first, then images
    const result = [...videos, ...images];
    cachedMedia = result;
    cacheTimestamp = Date.now();
    return result;
  } catch (err) {
    console.error("[Cloudinary] Failed to fetch gallery media:", err);
    return [];
  }
}

/**
 * Returns Cloudinary media if available, otherwise falls back to static gallery images.
 * This ensures consistency across components that display gallery media.
 */
export async function getMergedGalleryMedia(): Promise<GalleryMedia[]> {
  const cloudinaryMedia = await getGalleryMedia();

  let allMedia: GalleryMedia[] = [];
  if (cloudinaryMedia.length > 0) {
    allMedia = cloudinaryMedia;
  } else {
    allMedia = galleryImages.map((img) => ({
      url: img.url,
      alt: img.alt,
      type: (img.url.endsWith(".mov") || img.url.endsWith(".mp4")
        ? "video"
        : "image") as "image" | "video",
      publicId: img.url,
    }));
  }

  // Deduplicate by publicId (or url if publicId is same as url)
  const uniqueMedia: GalleryMedia[] = [];
  const seen = new Set<string>();

  for (const item of allMedia) {
    if (!seen.has(item.publicId)) {
      seen.add(item.publicId);
      uniqueMedia.push(item);
    }
  }

  return uniqueMedia;
}

let cachedHeroImages: string[] | null = null;
let cacheHeroTimestamp = 0;

export async function getHeroImages(): Promise<string[]> {
  if (cachedHeroImages && Date.now() - cacheHeroTimestamp < CACHE_TTL) {
    return cachedHeroImages;
  }

  const defaultHeroImages = [
    "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545429/IMG_0722.JPG_odxq8j.jpg",
    "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545450/IMG_0737.JPG_bfawec.jpg",
    "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545488/8845601C-A17F-4768-B345-29F559EA813B.JPG_zodpel.jpg",
  ];

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const configured =
    cloudName &&
    !cloudName.startsWith("your_") &&
    apiKey &&
    !apiKey.startsWith("your_") &&
    apiSecret &&
    !apiSecret.startsWith("your_");

  if (!configured) {
    return defaultHeroImages;
  }

  try {
    const searchRes = await cloudinary.search
      .expression('folder="valparai/hero"')
      .max_results(10)
      .execute();

    if (!searchRes.resources || searchRes.resources.length === 0) {
      return defaultHeroImages;
    }

    const images = searchRes.resources.map(
      (r: { secure_url: string }) => r.secure_url,
    );
    cachedHeroImages = images;
    cacheHeroTimestamp = Date.now();
    return images;
  } catch (err) {
    console.error("[Cloudinary] Failed to fetch hero images:", err);
    return defaultHeroImages;
  }
}

let cachedPackageImages: Array<{ url: string; publicId: string }> | null = null;
let cachePackageTimestamp = 0;

export async function getPackageImages(): Promise<Array<{ url: string; publicId: string }>> {
  if (cachedPackageImages && Date.now() - cachePackageTimestamp < CACHE_TTL) {
    return cachedPackageImages;
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const configured =
    cloudName &&
    !cloudName.startsWith("your_") &&
    apiKey &&
    !apiKey.startsWith("your_") &&
    apiSecret &&
    !apiSecret.startsWith("your_");

  if (!configured) {
    return [];
  }

  try {
    const searchRes = await cloudinary.search
      .expression('folder="valparai/packages"')
      .max_results(20)
      .execute();

    if (!searchRes.resources || searchRes.resources.length === 0) {
      return [];
    }

    const images = searchRes.resources.map((r: { secure_url: string; public_id: string }) => ({
      url: r.secure_url,
      publicId: r.public_id,
    }));
    cachedPackageImages = images;
    cachePackageTimestamp = Date.now();
    return images;
  } catch (err) {
    console.error("[Cloudinary] Failed to fetch package images:", err);
    return [];
  }
}

export async function getMergedPackages(): Promise<TourPackage[]> {
  const cloudinaryImages = await getPackageImages();
  
  // Clone the tour packages so we don't mutate the static array
  let packages = [...tourPackages].map(pkg => ({ ...pkg }));

  // Helper to calculate match score
  const getMatchScore = (title: string, publicId: string) => {
    // Split title into words, keeping alphanumeric
    const words = title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    const normalizedId = publicId.toLowerCase();
    
    let score = 0;
    for (const word of words) {
      if (normalizedId.includes(word)) {
        score++;
      }
    }
    return score;
  };

  packages = packages.map((pkg) => {
    let bestMatch = null;
    let highestScore = 0;

    for (const img of cloudinaryImages) {
      const score = getMatchScore(pkg.title, img.publicId);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = img;
      }
    }

    if (bestMatch && highestScore > 0) {
      pkg.image = bestMatch.url;
    }
    
    return pkg;
  });

  // Only return packages that successfully matched with an image from Cloudinary
  return packages.filter(pkg => pkg.image !== "");
}

let cachedProfileImage: string | null = null;
let cacheProfileTimestamp = 0;

export async function getProfileImage(): Promise<string | null> {
  if (cachedProfileImage && Date.now() - cacheProfileTimestamp < CACHE_TTL) {
    return cachedProfileImage;
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const configured =
    cloudName &&
    !cloudName.startsWith("your_") &&
    apiKey &&
    !apiKey.startsWith("your_") &&
    apiSecret &&
    !apiSecret.startsWith("your_");

  if (!configured) {
    return null;
  }

  try {
    const searchRes = await cloudinary.search
      .expression('folder="valparai/profile"')
      .max_results(1)
      .execute();

    if (!searchRes.resources || searchRes.resources.length === 0) {
      return null;
    }

    const imageUrl = searchRes.resources[0].secure_url;
    cachedProfileImage = imageUrl;
    cacheProfileTimestamp = Date.now();
    return imageUrl;
  } catch (err) {
    console.error("[Cloudinary] Failed to fetch profile image:", err);
    return null;
  }
}
