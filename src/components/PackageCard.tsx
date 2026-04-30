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
import { budgetPricing, TourPackage } from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface PackageCardProps {
  pkg: TourPackage;
  onViewPlan: (pkg: TourPackage) => void;
  onBook: (title: string) => void;
}

const PackageCard = ({ pkg, onViewPlan, onBook }: PackageCardProps) => {
  const [members, setMembers] = useState("4");
  const isBudgetPkg = pkg.id === "package-2day-budget";
  const currentPrice = isBudgetPkg ? budgetPricing[parseInt(members)] || 2500 : null;

  return (
    <div className="h-full">
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border-border/50 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl",
          isBudgetPkg && "ring-2 ring-[#D4AF37]/50 ring-offset-2 ring-offset-background"
        )}
      >
        <div className="relative h-60 overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md hover:bg-black/40">
              {pkg.duration}
            </Badge>
          </div>
          
          {pkg.badge && (
            <Badge className="absolute right-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-[#1A3021] shadow-lg hover:bg-[#D4AF37]">
              {pkg.badge}
            </Badge>
          )}
        </div>

        <CardHeader className="space-y-2.5 px-6 pt-6">
          <CardTitle className="text-2xl font-bold tracking-tight text-foreground line-clamp-2">
            {pkg.title}
          </CardTitle>
          <p className="text-sm font-medium text-muted-foreground">{pkg.subtitle}</p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col space-y-5 px-6">
          {isBudgetPkg ? (
            <div className="flex h-11 items-center gap-3">
              <label className="shrink-0 text-sm font-semibold text-muted-foreground">Group Size</label>
              <Select value={members} onValueChange={(val) => setMembers(val || "4")}>
                <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-muted/30 font-medium">
                  <SelectValue placeholder="Members" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {Object.keys(budgetPricing).map((num) => (
                    <SelectItem key={num} value={num} className="rounded-lg">
                      {num} People
                    </SelectItem>
                  ))}
                  <SelectItem value="15" className="rounded-lg">15+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="h-11" />
          )}

          <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition-colors duration-300 group-hover:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
              {isBudgetPkg ? "Price per person" : "Starting from"}
            </p>
            <p className="mt-1 flex items-baseline gap-1 text-3xl font-bold text-foreground">
              ₹{(currentPrice || 4500).toLocaleString()}
              {!isBudgetPkg && <span className="text-sm font-medium text-muted-foreground">/person</span>}
            </p>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 gap-3 border-t-0 px-6 pb-6 pt-2">
          <Button 
            variant="outline" 
            onClick={() => onViewPlan(pkg)} 
            className="h-12 rounded-xl border-border/80 font-semibold transition-all hover:bg-muted/50"
          >
            Itinerary
          </Button>
          <Button 
            onClick={() => onBook(pkg.title)} 
            className="h-12 rounded-xl font-semibold transition-all hover:scale-[1.02]"
          >
            Book Tour
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PackageCard;
