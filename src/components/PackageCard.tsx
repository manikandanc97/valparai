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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative bg-card border rounded-[2.5rem] overflow-hidden card-premium h-full flex flex-col transition-shadow duration-300",
        isBudgetPkg ? "border-primary/20 ring-1 ring-primary/5 shadow-lg" : "border-slate-100 dark:border-white/10 shadow-sm"
      )}
    >
      {/* Badge for Best Value */}
      {pkg.badge === "Best Value" && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Badge className="bg-accent text-primary px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-gold border-4 border-white dark:border-card">
            Recommended
          </Badge>
        </div>
      )}

      {/* Image Header */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 right-6 glass px-4 py-2 rounded-2xl font-black text-primary text-xs uppercase tracking-widest shadow-sm">
          {pkg.duration}
        </div>
        
        {pkg.badge && pkg.badge !== "Best Value" && (
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-card/90 backdrop-blur border-none text-primary px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">
              {pkg.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10 flex flex-col flex-1 space-y-8">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-primary-dark leading-tight group-hover:text-primary transition-colors">
            {pkg.title}
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed line-clamp-2">
            {pkg.subtitle}
          </p>
        </div>

        <div className="space-y-6 flex-1">
          {isBudgetPkg && (
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Select Group Size
              </label>
              <Select value={members} onValueChange={(val) => setMembers(val || "4")}>
                <SelectTrigger className="w-full bg-secondary border-none h-14 rounded-2xl font-black text-primary focus:ring-2 focus:ring-primary shadow-sm">
                  <SelectValue placeholder="Members" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-none shadow-premium p-2">
                  {Object.keys(budgetPricing).map((num) => (
                    <SelectItem key={num} value={num} className="font-bold rounded-xl focus:bg-primary/5">
                      {num} People
                    </SelectItem>
                  ))}
                  <SelectItem value="15" className="font-bold rounded-xl focus:bg-primary/5">15+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="py-6 border-y border-slate-100 dark:border-white/10 flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">
                {isBudgetPkg ? "Price per person" : "Starting from"}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-primary tracking-tighter">
                  ₹{(currentPrice || 4500).toLocaleString()}
                </span>
                {!isBudgetPkg && <span className="text-sm font-bold text-slate-400">/pp</span>}
              </div>
            </div>
            {isBudgetPkg && (
               <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent-dark font-black text-lg">!</span>
               </div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() => onViewPlan(pkg)}
            className="flex-1 h-16 rounded-2xl font-black text-primary hover:bg-secondary transition-all"
          >
            {isBudgetPkg ? "Itinerary" : "Details"}
          </Button>
          <Button
            onClick={() => onBook(pkg.title)}
            className="flex-[1.5] h-16 rounded-2xl bg-primary hover:bg-primary-dark font-black text-white shadow-premium btn-premium text-lg"
          >
            Book Tour
          </Button>
        </div>
      </div>
    </motion.div>

  );
};

export default PackageCard;
