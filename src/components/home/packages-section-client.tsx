"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/shared/section-heading";
import { tourPackages, TourPackage } from "@/lib/tour-data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Packages"
          title="Flexible Tour Plans"
          description="Well-structured plans with clear itinerary details, transparent pricing, and local support."
          center={false}
        />
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          View All Packages
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
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
