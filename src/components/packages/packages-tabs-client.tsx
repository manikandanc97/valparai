"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PackageCard from "@/components/PackageCard";
import { tourPackages, TourPackage } from "@/lib/tour-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Crown, Gem, Sparkles } from "lucide-react";

const ItineraryModal = dynamic(() => import("@/components/ItineraryModal"), {
  ssr: false,
});

export default function PackagesTabsClient() {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const handleBook = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/?book=true";
    }
  };

  return (
    <>
      <Tabs defaultValue="budget" className="w-full">
        <TabsList className="mx-auto mb-10 flex h-auto w-fit gap-2 rounded-2xl border border-border/60 bg-muted/60 p-1.5 backdrop-blur-sm">
          <TabsTrigger
            value="budget"
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all data-active:bg-primary data-active:text-primary-foreground data-active:shadow-md"
          >
            <Wallet className="h-4 w-4" />
            Budget
          </TabsTrigger>
          <TabsTrigger
            value="premium"
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all data-active:bg-accent data-active:text-accent-foreground data-active:shadow-md"
          >
            <Crown className="h-4 w-4" />
            Premium
          </TabsTrigger>
          <TabsTrigger
            value="luxury"
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all data-active:bg-gradient-to-r data-active:from-violet-600 data-active:to-indigo-600 data-active:text-white data-active:shadow-md"
          >
            <Gem className="h-4 w-4" />
            Luxury
          </TabsTrigger>
        </TabsList>

        <TabsContent value="budget" className="mt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tourPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onViewPlan={openModal}
                onBook={handleBook}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="premium" className="mt-0">
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#D4AF37]/30 bg-[#D4AF37]/5 px-8 py-20 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/15">
              <Crown className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#D4AF37]" />
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                Coming Soon
              </p>
              <Sparkles className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Premium Packages
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Curated premium experiences with upgraded stays, exclusive viewpoints, 
              and personalized itineraries. We&apos;re crafting something special for you.
            </p>
            <div className="mt-6 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-xs font-semibold text-[#D4AF37]">
              Expected Launch: Summer 2026
            </div>
          </div>
        </TabsContent>

        <TabsContent value="luxury" className="mt-0">
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-violet-400/30 bg-violet-500/5 px-8 py-20 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/15">
              <Gem className="h-10 w-10 text-violet-500" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-500" />
              <p className="text-sm font-bold uppercase tracking-widest text-violet-500">
                Coming Soon
              </p>
              <Sparkles className="h-5 w-5 text-violet-500" />
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Luxury Packages
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ultra-premium experiences featuring luxury resorts, private safaris, 
              gourmet dining, and helicopter viewpoints. The ultimate Valparai escape.
            </p>
            <div className="mt-6 rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-2 text-xs font-semibold text-violet-500">
              Expected Launch: Winter 2026
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ItineraryModal
        pkg={selectedPkg}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </>
  );
}
