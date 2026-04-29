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
          "h-full overflow-hidden rounded-2xl border-border/70 bg-card py-0 transition-shadow duration-200 hover:shadow-md",
          isBudgetPkg && "ring-2 ring-[#D4AF37]/35"
        )}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <Badge className="absolute left-4 top-4 bg-background/90 text-foreground">
            {pkg.duration}
          </Badge>
          {pkg.badge ? (
            <Badge className="absolute right-4 top-4 bg-[#D4AF37] text-[#1A3021]">
              {pkg.badge}
            </Badge>
          ) : null}
        </div>

        <CardHeader className="space-y-2 px-5 pt-5">
          <CardTitle className="text-xl font-semibold text-foreground">{pkg.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col space-y-4 px-5">
          {isBudgetPkg ? (
            <div className="flex h-10 items-center gap-3">
              <label className="shrink-0 text-xs font-medium text-muted-foreground">Group Size</label>
              <Select value={members} onValueChange={(val) => setMembers(val || "4")}>
                <SelectTrigger className="h-9 w-full rounded-md border-border bg-background">
                  <SelectValue placeholder="Members" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(budgetPricing).map((num) => (
                    <SelectItem key={num} value={num}>
                      {num} People
                    </SelectItem>
                  ))}
                  <SelectItem value="15">15+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="h-10" />
          )}

          <div className="rounded-lg border bg-muted/40 p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {isBudgetPkg ? "Price per person" : "Starting from"}
            </p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              ₹{(currentPrice || 4500).toLocaleString()}
              {!isBudgetPkg ? <span className="text-sm text-muted-foreground"> /person</span> : null}
            </p>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-3 border-t bg-transparent p-5">
          <Button variant="outline" onClick={() => onViewPlan(pkg)} className="h-10 rounded-md">
            Itinerary
          </Button>
          <Button onClick={() => onBook(pkg.title)} className="h-10 rounded-md bg-[#1A3021] hover:bg-[#132619]">
            Book Tour
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PackageCard;
