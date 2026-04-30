import Navbar from "@/components/Navbar";
import { getGalleryMedia } from "@/lib/cloudinary";
import { galleryImages } from "@/lib/tour-data";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const revalidate = 3600; // Re-fetch Cloudinary data every 1 hour

export default async function GalleryPage() {
  const cloudinaryMedia = await getGalleryMedia();

  // Use Cloudinary media if available, otherwise fall back to static list
  const media =
    cloudinaryMedia.length > 0
      ? cloudinaryMedia
      : galleryImages.map((img) => ({
          url: img.url,
          alt: img.alt,
          type: (img.url.endsWith(".mov") || img.url.endsWith(".mp4")
            ? "video"
            : "image") as "image" | "video",
          publicId: img.url,
        }));

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="container-wide section-padding space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">All Valparai Moments</h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Full collection of travel highlights from routes, waterfalls, tea estates, and viewpoints.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {media.map((item, i) => (
            <div key={i} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border bg-card">
              {item.type === "video" ? (
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
