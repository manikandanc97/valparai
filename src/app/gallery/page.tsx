import { getMergedGalleryMedia } from "@/lib/cloudinary";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import GalleryGrid from "@/components/gallery/gallery-grid";

export const revalidate = 3600; // Re-fetch Cloudinary data every 1 hour

export default async function GalleryPage() {
  const media = await getMergedGalleryMedia();

  return (
    <main className="min-h-screen bg-background">
      <section className="container-wide section-padding space-y-12">
        <div className="flex flex-col items-center text-center gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="All Valparai Moments"
            description="Explore our full collection of travel highlights—from mist-covered hairpin bends to hidden waterfalls and lush tea estates."
            center
          />
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:-translate-x-1"
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
