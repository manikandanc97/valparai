import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { galleryImages } from "@/lib/tour-data";
import { getGalleryMedia } from "@/lib/cloudinary";
import { MapPin, ChevronRight, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import ContactOptions from "@/components/ContactOptions";
import {
  brand,
  features,
  footerQuickLinks,
} from "@/lib/site-content";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const PackagesSectionClient = dynamic(
  () => import("@/components/home/packages-section-client"),
  {
    loading: () => (
      <section id="packages" className="section-padding container-wide" />
    ),
  },
);
const BookingForm = dynamic(() => import("@/components/BookingForm"));

export const revalidate = 3600; // Re-fetch Cloudinary data every 1 hour

export default async function Home() {

  const cloudinaryMedia = await getGalleryMedia();
  const galleryMedia =
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
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <PackagesSectionClient />

      <section
        id="why-us"
        className="section-padding relative overflow-hidden border-y bg-muted/50"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(99,102,241,0.08),transparent_35%)]" />
        <div className="container-wide space-y-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed Like a Premium Service"
            description="Every touchpoint from booking to travel day is streamlined for clarity, trust, and comfort."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => {
              const colorPalettes = [
                {
                  text: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-100/50 dark:bg-emerald-500/10",
                  border:
                    "hover:border-emerald-300/50 dark:hover:border-emerald-500/30",
                },
                {
                  text: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-100/50 dark:bg-blue-500/10",
                  border:
                    "hover:border-blue-300/50 dark:hover:border-blue-500/30",
                },
                {
                  text: "text-amber-600 dark:text-amber-400",
                  bg: "bg-amber-100/50 dark:bg-amber-500/10",
                  border:
                    "hover:border-amber-300/50 dark:hover:border-amber-500/30",
                },
                {
                  text: "text-rose-600 dark:text-rose-400",
                  bg: "bg-rose-100/50 dark:bg-rose-500/10",
                  border:
                    "hover:border-rose-300/50 dark:hover:border-rose-500/30",
                },
                {
                  text: "text-violet-600 dark:text-violet-400",
                  bg: "bg-violet-100/50 dark:bg-violet-500/10",
                  border:
                    "hover:border-violet-300/50 dark:hover:border-violet-500/30",
                },
                {
                  text: "text-cyan-600 dark:text-cyan-400",
                  bg: "bg-cyan-100/50 dark:bg-cyan-500/10",
                  border:
                    "hover:border-cyan-300/50 dark:hover:border-cyan-500/30",
                },
              ];
              const palette = colorPalettes[idx % colorPalettes.length];

              return (
                <Card
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border-border/50 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${palette.border}`}
                >
                  <CardContent className="space-y-5 p-0">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${palette.bg} ${palette.text}`}
                    >
                      <item.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

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
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-white/20"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {galleryMedia.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/15 ${
                  i === 0
                    ? "h-80 sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:h-128"
                    : i === 1 || i === 2
                      ? "h-64 lg:col-span-5 lg:h-62"
                      : "h-56 sm:h-64 lg:col-span-4"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact-section"
        className="section-padding border-t bg-muted/40"
      >
        <div className="container-wide space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Ready to plan your next trip?"
            description="Reach us directly or submit the form. We respond quickly on WhatsApp."
            center={false}
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="order-2 flex flex-col lg:order-1">
              <div className="flex flex-1 flex-col rounded-3xl border border-border/60 bg-background/70 p-4 shadow-sm backdrop-blur sm:p-5">
                <ContactOptions />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1e3328] bg-[#0a1210] text-[#c5d4c8]">
        <div className="container-wide py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-white p-1.5">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">
                    {brand.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8fa698]">
                    {brand.tagline}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#8fa698]">
                Premium local tours exploring Valparai&apos;s untouched natural
                beauty with expert local guidance.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/valparai_wanderer1?igsh=OXZkb3d1MnlwbTN5&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#1e3328] p-2 text-[#8fa698] hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37] transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1Ct6crP7vG/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#1e3328] p-2 text-[#8fa698] hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37] transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@valparai_wanderer1?si=gWd7VHn9CTEjeW7o"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#1e3328] p-2 text-[#8fa698] hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37] transition-all"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">
                Quick Links
              </p>
              <div className="space-y-3">
                {footerQuickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-[#8fa698] hover:text-[#d4af37] transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">
                Contact Us
              </p>
              <div className="space-y-3 text-sm text-[#8fa698]">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4" /> {brand.address}
                </p>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="h-4 w-4" /> {brand.phone}
                </a>
                <a
                  href={brand.emailHref}
                  className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
                >
                  <Mail className="h-4 w-4" /> {brand.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#1e3328] pt-6">
            <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#6b8570] sm:flex-row">
              <p>
                © {new Date().getFullYear()} {brand.name}. All rights reserved.
              </p>
              <p>Crafting Authentic Valparai Experiences</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
