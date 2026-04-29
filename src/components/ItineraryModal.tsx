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
                  <Card className="rounded-xl border-primary/20 bg-primary/5 py-0">
                    <CardContent className="space-y-3 p-4">
                      <h4 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary" /> Inclusions
                      </h4>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                {pkg.exclusions && (
                  <Card className="rounded-xl border-destructive/20 bg-destructive/5 py-0">
                    <CardContent className="space-y-3 p-4">
                      <h4 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <XCircle className="h-5 w-5 text-destructive" /> Exclusions
                      </h4>
                      <ul className="space-y-2">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
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
                <div key={idx} className="relative rounded-xl border bg-card p-4 pl-9 sm:p-5 sm:pl-10">
                  {idx !== pkg.itinerary.length - 1 && (
                    <div className="absolute -bottom-5 left-4 top-10 w-0.5 bg-border sm:-bottom-6 sm:top-11" />
                  )}
                  <div className="absolute left-2 top-5 z-10 h-4 w-4 rounded-full bg-primary" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="border-none bg-primary/10 text-primary">
                        {day.day}
                      </Badge>
                      <h4 className="text-sm font-semibold text-foreground sm:text-base">{day.title}</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {day.places.map((place, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
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
