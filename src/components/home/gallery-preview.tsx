"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { GalleryMedia } from "@/lib/cloudinary";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ParallaxImage from "@/components/shared/parallax-image";

interface GalleryPreviewProps {
  media: GalleryMedia[];
}

export default function GalleryPreview({ media }: GalleryPreviewProps) {
  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-[#1A3021]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(134,239,172,0.12),transparent_30%)]" />
      <div className="container-wide space-y-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the Route"
            description="A quick look at the landscapes and highlights from recent trips."
            inverted
            center={false}
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 active:scale-95"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.2)}
          className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {media.slice(0, 5).map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl border border-white/15 ${
                i === 0
                  ? "h-72 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:h-[400px]"
                  : "h-48 lg:h-[192px]"
              }`}
            >
              <motion.div
                variants={{
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {i === 0 ? (
                  <ParallaxImage className="h-full w-full" offset={30}>
                    {item.type === "video" ? (
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover scale-110"
                      />
                    ) : (
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                        className="object-cover scale-110"
                      />
                    )}
                  </ParallaxImage>
                ) : item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                    className="object-cover"
                  />
                )}
              </motion.div>
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
