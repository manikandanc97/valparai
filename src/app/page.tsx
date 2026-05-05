import Hero from "@/components/Hero";
import { getMergedGalleryMedia } from "@/lib/cloudinary";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ScrollHandler from "@/components/shared/scroll-handler";
import FeaturesSection from "@/components/shared/features-section";
const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: true, // Keep SSR for SEO/initial paint but defer execution
});
const ExperienceSection = dynamic(() => import("@/components/home/experience-section"));
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"));
const HomeContactSection = dynamic(() => import("@/components/home/contact-section"));
const CTASection = dynamic(() => import("@/components/home/cta-section"));

const PackagesSectionClient = dynamic(
  () => import("@/components/home/packages-section-client"),
  {
    loading: () => (
      <section id="packages" className="section-padding container-wide" />
    ),
  },
);

export const revalidate = 3600; // Re-fetch Cloudinary data every 1 hour

export default async function Home() {
  const galleryMedia = await getMergedGalleryMedia();

  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <Stats />
      <PackagesSectionClient />
      <ExperienceSection />
      <section id="why-us" className="relative section-padding container-wide">
        <FeaturesSection />
      </section>
      <GalleryPreview media={galleryMedia} />
      <HomeContactSection />
      <CTASection />
    </main>
  );
}
