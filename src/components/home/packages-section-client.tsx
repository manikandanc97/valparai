"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/shared/section-heading";
import { tourPackages, TourPackage } from "@/lib/tour-data";

const ItineraryModal = dynamic(() => import("@/components/ItineraryModal"), {
  ssr: false,
});

export default function PackagesSectionClient() {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const handleBook = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="section-padding container-wide space-y-12">
      <SectionHeading
        eyebrow="Packages"
        title="Flexible Tour Plans"
        description="Well-structured plans with clear itinerary details, transparent pricing, and local support."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tourPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} onViewPlan={openModal} onBook={handleBook} />
        ))}
      </div>

      <ItineraryModal
        pkg={selectedPkg}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </section>
  );
}

