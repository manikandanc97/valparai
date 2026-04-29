"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, MapPin, Info } from "lucide-react";
import { TourPackage } from "@/lib/tour-data";

interface ItineraryModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (title: string) => void;
}

const ItineraryModal = ({ pkg, isOpen, onClose, onBook }: ItineraryModalProps) => {
  if (!pkg) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl bg-card">
        <DialogHeader className="relative h-48 sm:h-56 p-8 flex flex-col justify-end text-left overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="relative z-10 space-y-1">
            <DialogTitle className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {pkg.title}
            </DialogTitle>
            <p className="text-accent font-black uppercase tracking-widest text-[10px] sm:text-xs drop-shadow-md">
              {pkg.subtitle}
            </p>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] p-8">
          <div className="space-y-8">
            {/* Inclusions & Exclusions */}
            {(pkg.inclusions || pkg.exclusions) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.inclusions && (
                  <div className="bg-primary-subtle p-6 rounded-3xl border border-primary/10">
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" /> Inclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {pkg.exclusions && (
                  <div className="bg-destructive/10 p-6 rounded-3xl border border-destructive/20">
                    <h4 className="font-bold text-destructive mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5" /> Exclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Timeline Itinerary */}
            <div className="space-y-6">
              {pkg.itinerary.map((day, idx) => (
                <div key={idx} className="relative pl-8 pb-8 last:pb-0">
                  {idx !== pkg.itinerary.length - 1 && (
                    <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-slate-100 dark:bg-white/5" />
                  )}
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-card bg-primary shadow-md z-10" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-black text-[10px] uppercase px-2 py-1">
                        {day.day}
                      </Badge>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-lg leading-tight">
                        {day.title}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {day.places.map((place, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                          <MapPin className="h-3.5 w-3.5 text-primary-light dark:text-accent shrink-0" />
                          {place}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <div className="p-6 sm:p-8 bg-secondary-subtle dark:bg-primary-subtle border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
            <Info className="h-4 w-4" /> Confirm via WhatsApp
          </div>
          <Button
            onClick={() => onBook(pkg.title)}
            className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-primary hover:bg-primary-dark font-bold text-white shadow-lg text-base"
          >
            Book This Tour
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;
