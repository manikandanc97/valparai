"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, MapPinned, Users, Tag, Map, ArrowRight } from "lucide-react";
import { budgetPricing, TourPackage } from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface PackageCardProps {
  pkg: TourPackage;
  onViewPlan: (pkg: TourPackage) => void;
  onBook: (title: string) => void;
}

const PackageCard = ({ pkg, onViewPlan, onBook }: PackageCardProps) => {
  const [members, setMembers] = useState("4");
  const isBudgetPkg = pkg.id === "package-2day-budget";
  
  // Extract base price from priceText (e.g. "₹3,500/person" -> 3500)
  const basePrice = parseInt(pkg.priceText.replace(/[^\d]/g, ""), 10) || 4500;
  
  const currentPrice = isBudgetPkg
    ? budgetPricing[parseInt(members)] || 2500
    : basePrice;

  return (
    <div className="h-full">
      <Card
        className={cn(
          "group relative flex h-full flex-col gap-0 overflow-hidden rounded-3xl border-border/60 bg-background py-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl",
          isBudgetPkg &&
            "ring-2 ring-[#D4AF37]/50 ring-offset-2 ring-offset-background",
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
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 to-transparent" />

          <div className="absolute left-3 top-3 flex gap-2 sm:left-4 sm:top-4">
            <Badge className="rounded-full border border-sky-200/70 bg-sky-100/90 px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm hover:bg-sky-100/90 dark:border-sky-400/40 dark:bg-sky-500/20 dark:text-sky-100">
              {pkg.duration}
            </Badge>
          </div>

          {pkg.badge && (
            <Badge className="absolute right-3 top-3 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-[#1A3021] shadow-lg hover:bg-[#D4AF37] sm:right-4 sm:top-4">
              {pkg.badge}
            </Badge>
          )}
        </div>

        <CardHeader className="space-y-2 px-6 pb-0 pt-6">
          <CardTitle className="line-clamp-1 text-[1.45rem] font-bold leading-tight tracking-tight text-foreground">
            {pkg.title}
          </CardTitle>
          <p className="line-clamp-2 text-sm font-medium text-muted-foreground">
            {pkg.subtitle}
          </p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col px-6 pb-5 pt-4">
          <div className="flex min-h-7 flex-wrap items-center gap-2">
            <Badge className="rounded-full border border-emerald-200/90 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-200">
              <MapPinned className="mr-1.5 h-3.5 w-3.5" />
              Local Guide
            </Badge>
            <Badge className="rounded-full border border-violet-200/90 bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800 shadow-sm hover:bg-violet-100 dark:border-violet-500/40 dark:bg-violet-500/15 dark:text-violet-200">
              <Car className="mr-1.5 h-3.5 w-3.5" />
              Private Vehicle
            </Badge>
          </div>
          <div
            className={cn(
              "relative mt-5 flex h-[108px] flex-col justify-between overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300",
              isBudgetPkg
                ? "border-[#D4AF37]/50 bg-gradient-to-br from-[#1A3021]/10 via-[#1A3021]/5 to-[#D4AF37]/15 shadow-sm hover:shadow-md dark:border-[#D4AF37]/30 dark:from-[#1A3021]/40 dark:via-[#1A3021]/20 dark:to-[#D4AF37]/20"
                : "border-primary/15 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:from-primary/15"
            )}
          >
            {isBudgetPkg && (
              <div className="pointer-events-none absolute -right-6 -top-6 z-0 h-24 w-24 rounded-full bg-[#D4AF37]/20 blur-2xl dark:bg-[#D4AF37]/10" />
            )}

            <div className="relative z-10 flex h-8 items-center justify-between">
              <div className="flex items-center gap-1.5 opacity-90">
                {isBudgetPkg ? (
                  <Users className="h-4 w-4 text-[#1A3021] dark:text-[#D4AF37]" />
                ) : (
                  <Tag className="h-4 w-4 text-primary/70" />
                )}
                <p
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-widest",
                    isBudgetPkg
                      ? "text-[#1A3021] dark:text-[#D4AF37]"
                      : "text-primary/70"
                  )}
                >
                  {isBudgetPkg ? "Group Size" : "Starting from"}
                </p>
              </div>

              {isBudgetPkg && (
                <Select
                  value={members}
                  onValueChange={(val) => setMembers(val || "4")}
                >
                  <SelectTrigger className="h-7 w-auto min-w-[90px] rounded-full border-[#D4AF37]/40 bg-white/70 px-2.5 py-0 text-xs font-bold text-[#1A3021] shadow-none backdrop-blur-md transition-all hover:bg-white focus:ring-1 focus:ring-[#D4AF37]/60 dark:border-[#D4AF37]/30 dark:bg-black/40 dark:text-white dark:hover:bg-black/60">
                    <SelectValue placeholder="Members" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-[#D4AF37]/20 bg-background/95 shadow-xl backdrop-blur-xl">
                    {Object.keys(budgetPricing).map((num) => (
                      <SelectItem key={num} value={num} className="cursor-pointer rounded-lg text-xs font-bold">
                        {num} People
                      </SelectItem>
                    ))}
                    <SelectItem value="15" className="cursor-pointer rounded-lg text-xs font-bold">
                      15+ People
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="relative z-10 flex items-baseline gap-1.5">
              <p
                className={cn(
                  "text-3xl font-black tracking-tight sm:text-4xl",
                  isBudgetPkg ? "text-[#1A3021] dark:text-white" : "text-foreground"
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
            className="group h-12 rounded-xl border-border/80 bg-background font-semibold transition-all hover:-translate-y-0.5 hover:bg-muted/40"
          >
            <Map className="mr-2 h-4 w-4 text-muted-foreground transition-transform group-hover:-rotate-6 group-hover:scale-110" />
            Itinerary
          </Button>
          <Button
            onClick={() => onBook(pkg.title)}
            className="group h-12 rounded-xl bg-linear-to-r from-primary to-primary/85 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:from-primary/95 hover:to-primary"
          >
            Book Tour
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PackageCard;
