"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PillBadge from "@/components/shared/pill-badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Car,
  MapPinned,
  Users,
  Tag,
  Map,
  ArrowRight,
  Bed,
  Camera,
} from "lucide-react";
import {
  budgetPricing,
  package3DayPricing,
  package2DayAthirapalliPricing,
  type TourPackage,
} from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

interface PackageCardProps {
  pkg: TourPackage;
  onViewPlan: (pkg: TourPackage) => void;
  onBook: (title: string) => void;
}

const PackageCard = ({ pkg, onViewPlan, onBook }: PackageCardProps) => {
  const [members, setMembers] = useState("4");
  const isBudgetPkg = pkg.id === "package-2day-budget";
  const is3DayPkg = pkg.id === "package-3day";
  const is2DayAthirapalliPkg = pkg.id === "package-2day-athirapalli";
  const isDynamicPricing = isBudgetPkg || is3DayPkg || is2DayAthirapalliPkg;

  const pricingMap = isBudgetPkg
    ? budgetPricing
    : is3DayPkg
      ? package3DayPricing
      : is2DayAthirapalliPkg
        ? package2DayAthirapalliPricing
        : null;

  // Extract base price from priceText (e.g. "₹3,500/person" -> 3500)
  const basePrice = parseInt(pkg.priceText.replace(/[^\d]/g, ""), 10) || 4500;
  const currentPrice = pricingMap
    ? (pricingMap[parseInt(members)] ?? basePrice)
    : basePrice;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative h-full"
    >
      <Card
        className={cn(
          "group relative flex h-full flex-col gap-0 overflow-hidden rounded-3xl border-border/60 bg-background py-0 shadow-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl",
          pkg.featured &&
            "ring-2 ring-[#D4AF37]/40 ring-offset-4 ring-offset-background dark:ring-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5",
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-white/10 to-transparent dark:from-white/5" />
        <div className="relative h-60 overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            quality={75}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 to-transparent" />

          <div className="absolute left-3 top-3 z-20 flex gap-2 sm:left-4 sm:top-4">
            <PillBadge color="blue" className="shadow-sm backdrop-blur-md">
              {pkg.duration}
            </PillBadge>
          </div>

          {pkg.badge && (
            <PillBadge
              color="gold"
              className="absolute right-3 top-3 z-20 bg-[#D4AF37] text-[#1A3021] font-extrabold border-none shadow-lg backdrop-blur-none dark:bg-[#D4AF37] dark:text-[#1A3021] sm:right-4 sm:top-4"
            >
              {pkg.badge}
            </PillBadge>
          )}
        </div>

        <CardHeader className="space-y-2 px-6 pb-0 pt-6">
          <CardTitle className="text-[1.45rem] font-bold leading-tight tracking-tight text-foreground text-balance">
            {pkg.title}
          </CardTitle>
          <p className="line-clamp-2 text-sm font-medium text-muted-foreground">
            {pkg.subtitle}
          </p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col px-6 pb-5 pt-4">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2.5">
            <div className="flex items-center text-[12px] font-medium text-muted-foreground">
              <MapPinned className="mr-2 h-4 w-4 text-emerald-500" />
              Local Expert Guide
            </div>
            <div className="flex items-center text-[12px] font-medium text-muted-foreground">
              <Car className="mr-2 h-4 w-4 text-violet-500" />
              Private Vehicle
            </div>
            <div className="flex items-center text-[12px] font-medium text-muted-foreground">
              <Camera className="mr-2 h-4 w-4 text-amber-500" />
              Photo Spots Covered
            </div>
            <div className="flex items-center text-[12px] font-medium text-muted-foreground">
              <Bed className="mr-2 h-4 w-4 text-blue-500" />
              Comfortable Stay
            </div>
          </div>
          <div
            className={cn(
              "relative mt-5 flex h-[108px] flex-col justify-between overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300",
              pkg.featured
                ? "border-[#D4AF37]/50 bg-gradient-to-br from-[#1A3021]/15 via-[#1A3021]/5 to-[#D4AF37]/25 shadow-md dark:border-[#D4AF37]/40 dark:from-[#1A3021]/50 dark:via-[#1A3021]/30 dark:to-[#D4AF37]/30"
                : "border-border/40 bg-muted/20",
            )}
          >
            {pkg.featured && (
              <div className="pointer-events-none absolute -right-6 -top-6 z-0 h-24 w-24 rounded-full bg-[#D4AF37]/20 blur-2xl dark:bg-[#D4AF37]/10" />
            )}

            <div className="relative z-10 flex h-8 items-center justify-between">
              <div className="flex items-center gap-1.5 opacity-90">
                {isDynamicPricing ? (
                  <Users className="h-4 w-4 text-[#1A3021] dark:text-[#D4AF37]" />
                ) : (
                  <Tag className="h-4 w-4 text-primary/70" />
                )}
                <p
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-widest",
                    isDynamicPricing
                      ? "text-[#1A3021] dark:text-[#D4AF37]"
                      : "text-primary/70",
                  )}
                >
                  {isDynamicPricing
                    ? "Group Size"
                    : pkg.featured
                      ? "Recommended"
                      : "Starting from"}
                </p>
              </div>

              {isDynamicPricing && pricingMap && (
                <Select
                  value={members}
                  onValueChange={(val) => setMembers(val || "4")}
                >
                  <SelectTrigger className="h-7 w-auto min-w-[108px] rounded-xl border-[#D4AF37]/40 bg-white/70 px-2.5 py-0 text-xs font-bold text-[#1A3021] shadow-none backdrop-blur-md transition-all hover:bg-white focus:ring-1 focus:ring-[#D4AF37]/60 dark:border-[#D4AF37]/30 dark:bg-black/40 dark:text-white dark:hover:bg-black/60">
                    <SelectValue placeholder="Members" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-[#D4AF37]/20 bg-background/95 shadow-xl backdrop-blur-xl">
                    {Object.keys(pricingMap)
                      .map(Number)
                      .sort((a, b) => a - b)
                      .map((num) => (
                        <SelectItem
                          key={num}
                          value={String(num)}
                          className="cursor-pointer rounded-lg text-xs font-bold"
                        >
                          {num} {num === 1 ? "Person" : "People"}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="relative z-10 flex items-baseline gap-1.5">
              <p
                className={cn(
                  "text-3xl font-black tracking-tight sm:text-4xl",
                  isDynamicPricing
                    ? "text-[#1A3021] dark:text-white"
                    : "text-foreground",
                )}
              >
                ₹{currentPrice.toLocaleString()}
              </p>
              <span className="text-xs font-semibold tracking-normal text-muted-foreground/80 sm:text-sm">
                /person
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="mt-auto grid grid-cols-2 gap-3 border-t border-border/40 bg-transparent px-6 pb-6 pt-4">
          <Button
            variant="outline"
            onClick={() => onViewPlan(pkg)}
            className="group h-12 rounded-xl border-border/80 bg-background font-semibold hover:bg-muted/40"
          >
            <Map className="mr-2 h-4 w-4 text-muted-foreground transition-transform group-hover:-rotate-6 group-hover:scale-110" />
            Itinerary
          </Button>
          <Button
            onClick={() => onBook(pkg.title)}
            className="group h-12 rounded-xl bg-linear-to-r from-primary to-primary/85 font-semibold text-primary-foreground hover:from-primary/95 hover:to-primary"
          >
            Book Tour
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PackageCard;
