import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { getMergedGalleryMedia } from "@/lib/cloudinary";
import dynamic from "next/dynamic";
import FeaturesSection from "@/components/shared/features-section";
import GalleryPreview from "@/components/home/gallery-preview";
import HomeContactSection from "@/components/home/contact-section";
import ExperienceSection from "@/components/home/experience-section";
import CTASection from "@/components/home/cta-section";

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
      <Hero />
      <Stats />
      <PackagesSectionClient />
      <ExperienceSection />
      <section id="why-us" className="section-padding container-wide">
        <FeaturesSection />
      </section>
      <GalleryPreview media={galleryMedia} />
      <HomeContactSection />
      <CTASection />
    </main>
  );
}
