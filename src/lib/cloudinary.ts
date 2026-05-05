import { v2 as cloudinary } from "cloudinary";
import { galleryImages } from "./tour-data";

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

// Cloudinary sample/default files to exclude from the gallery
const EXCLUDED_PREFIXES = [
  "samples/",
  "sample",
  "cld-sample",
  "main-sample",
  "logo-valparai",
  "valparai/features/",
  "valparai/experiences/",
];

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
    cloudName && !cloudName.startsWith("your_") &&
    apiKey && !apiKey.startsWith("your_") &&
    apiSecret && !apiSecret.startsWith("your_");

  if (!configured) {
    return [];
  }

  try {
    // Fetch images (from root — no prefix filter)
    const imageRes = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 100,
    });

    // Fetch videos
    const videoRes = await cloudinary.api.resources({
      type: "upload",
      resource_type: "video",
      max_results: 20,
    });

    const isExcluded = (publicId: string) =>
      EXCLUDED_PREFIXES.some((prefix) => publicId.startsWith(prefix));

    // The global loader handles f_auto, q_auto, and resizing
    const optimizeUrl = (url: string) => url;

    const toAlt = (publicId: string) =>
      publicId
        .replace(/^valparai\//, "")     // strip folder prefix if present
        .replace(/\.[A-Z]+$/i, "")       // strip file extension like .JPG
        .replace(/_[a-z0-9]{6}$/i, "")   // strip Cloudinary random suffix
        .replace(/[-_]/g, " ")           // convert dashes/underscores to spaces
        .replace(/^[A-F0-9]{8}-.*$/i, "Valparai Gallery") // UUID-style names get a clean label
        .trim() || "Valparai Gallery";

    const images: GalleryMedia[] = (imageRes.resources || [])
      .filter((r: { public_id: string }) => !isExcluded(r.public_id))
      .map((r: { secure_url: string; public_id: string }) => ({
        url: optimizeUrl(r.secure_url),
        alt: toAlt(r.public_id),
        type: "image" as const,
        publicId: r.public_id,
      }));

    const videos: GalleryMedia[] = (videoRes.resources || [])
      .filter((r: { public_id: string }) => !isExcluded(r.public_id))
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
