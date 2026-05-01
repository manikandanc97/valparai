"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryMedia } from "@/lib/cloudinary";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface GalleryGridProps {
  initialMedia: GalleryMedia[];
}

export default function GalleryGrid({ initialMedia }: GalleryGridProps) {
  const [displayCount, setDisplayCount] = useState(10);
  
  const displayedMedia = initialMedia.slice(0, displayCount);
  const hasMore = displayCount < initialMedia.length;

  const loadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  return (
    <div className="space-y-12">
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {displayedMedia.map((item, i) => (
          <div 
            key={`${item.publicId}-${i}`} 
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
          >
            {item.type === "video" ? (
              <video
                src={item.url}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <Image
                src={item.url}
                alt={item.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 4}
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold text-white/90 uppercase tracking-widest">{item.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex flex-col items-center justify-center pt-4 pb-10">
          <Button 
            onClick={loadMore}
            size="lg"
            className="group h-14 rounded-2xl px-10 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <PlusCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
            Load More Images
          </Button>
          <p className="mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Showing {displayedMedia.length} of {initialMedia.length} moments
          </p>
        </div>
      )}
    </div>
  );
}
