import { getMergedGalleryMedia } from "@/lib/cloudinary";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import GalleryGrid from "@/components/gallery/gallery-grid";

export const revalidate = 3600; // Re-fetch Cloudinary data every 1 hour

export default async function GalleryPage() {
  const media = await getMergedGalleryMedia();

  return (
    <main className="min-h-screen bg-background">
      <section className="container-wide section-padding space-y-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Gallery
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              All Valparai <span className="text-primary">Moments</span>
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed sm:text-base">
              Explore our full collection of travel highlights—from mist-covered hairpin bends 
              to hidden waterfalls and lush tea estates.
            </p>
          </div>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-muted hover:-translate-x-1"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <GalleryGrid initialMedia={media} />
      </section>
    </main>
  );
}
