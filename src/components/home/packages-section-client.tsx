"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/shared/section-heading";
import { TourPackage } from "@/lib/tour-data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ItineraryModal = dynamic(() => import("@/components/ItineraryModal"), {
  ssr: false,
});

export default function PackagesSectionClient({ packages }: { packages: TourPackage[] }) {
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
    <section id="packages" className="relative section-padding container-wide space-y-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Packages"
          title="Choose Your Valparai Trip"
          description="Whether it’s a quick escape or a relaxed getaway, we’ve got the perfect plan for you."
          center={false}
        />
        <Link
          href="/packages"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 hover:shadow-md"
        >
          View All Packages
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer(0.15, 0)}
        className="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {packages.map((pkg) => (
          <motion.div key={pkg.id} variants={fadeInUp}>
            <PackageCard pkg={pkg} onViewPlan={openModal} onBook={handleBook} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex sm:hidden justify-center mt-4">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          View All Packages
          <ChevronRight className="h-4 w-4" />
        </Link>
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
