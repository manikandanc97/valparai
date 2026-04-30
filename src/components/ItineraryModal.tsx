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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
      <DialogContent className="grid max-h-[92vh] w-[min(92vw,920px)] grid-rows-[auto_1fr_auto] gap-0 overflow-hidden rounded-2xl border p-0 sm:max-w-2xl lg:max-w-4xl">
        <DialogHeader className="relative flex h-44 shrink-0 flex-col justify-end overflow-hidden p-6 text-left sm:h-48 sm:p-7 lg:h-52 lg:p-8">
          <div className="absolute inset-0 z-0">
            <Image src={pkg.image} alt={pkg.title} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-[#1A3021]/85" />
          </div>
          <div className="relative z-10 space-y-3">
            <Badge className="w-fit bg-[#D4AF37] text-[#1A3021]">{pkg.duration}</Badge>
            <DialogTitle className="text-2xl font-semibold text-white sm:text-3xl">{pkg.title}</DialogTitle>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base">{pkg.subtitle}</p>
          </div>
        </DialogHeader>

        <div className="thin-scrollbar overflow-y-auto p-4 sm:p-6">
          <div className="space-y-6">
            {(pkg.inclusions || pkg.exclusions) && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {pkg.inclusions && (
                  <Card className="overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-50/50 py-0 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-md dark:bg-emerald-500/10">
                    <CardContent className="space-y-4 p-5">
                      <h4 className="flex items-center gap-2.5 text-base font-semibold text-emerald-700 dark:text-emerald-400">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        Inclusions
                      </h4>
                      <ul className="space-y-3">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-medium text-emerald-900/80 dark:text-emerald-100/70">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                {pkg.exclusions && (
                  <Card className="overflow-hidden rounded-xl border border-rose-500/20 bg-rose-50/50 py-0 shadow-sm transition-all hover:border-rose-500/30 hover:shadow-md dark:bg-rose-500/10">
                    <CardContent className="space-y-4 p-5">
                      <h4 className="flex items-center gap-2.5 text-base font-semibold text-rose-700 dark:text-rose-400">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-500/20">
                          <XCircle className="h-5 w-5" />
                        </div>
                        Exclusions
                      </h4>
                      <ul className="space-y-3">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-medium text-rose-900/80 dark:text-rose-100/70">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
 
            <div className="space-y-4">
              {pkg.itinerary.map((day, idx) => (
                <div key={idx} className="group relative rounded-xl border bg-card p-5 pl-10 transition-all hover:border-primary/40 hover:shadow-sm sm:p-6 sm:pl-12">
                  {idx !== pkg.itinerary.length - 1 && (
                    <div className="absolute -bottom-6 left-[22px] top-12 w-0.5 bg-border transition-colors group-hover:bg-primary/30 sm:-bottom-7 sm:left-[26px] sm:top-14" />
                  )}
                  <div className="absolute left-4 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 ring-4 ring-background sm:left-5 sm:top-7">
                     <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
                        {day.day}
                      </Badge>
                      <h4 className="text-base font-semibold text-foreground sm:text-lg">{day.title}</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {day.places.map((place, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                          <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                          {place}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-between gap-4 border-t bg-muted/30 p-4 sm:flex-row sm:p-5">
          <div className="flex items-center gap-2 whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
            <Info className="h-4 w-4" /> Confirm via WhatsApp
          </div>
          <Button
            onClick={() => onBook(pkg.title)}
            className="h-11 w-full rounded-md px-7 text-base sm:w-auto"
          >
            Book This Tour
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;
