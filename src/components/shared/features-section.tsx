"use client";

import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import { features } from "@/lib/site-content";
import Image from "next/image";

interface FeaturesSectionProps {
  className?: string;
  showHeading?: boolean;
}

export default function FeaturesSection({ className = "", showHeading = true }: FeaturesSectionProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="space-y-12">
        {showHeading && (
          <SectionHeading
            eyebrow="The Difference"
            title="What Makes Us Different"
            description="From the moment you book to the final drop-off — every detail is handled with care, trust, and local expertise."
          />
        )}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {features.map((item, idx) => {
            return (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border-border/50 bg-card p-0 gap-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <item.icon className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                </div>
                <CardContent className="space-y-2 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
                  <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
