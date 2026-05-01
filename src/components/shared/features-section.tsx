"use client";

import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import { features } from "@/lib/site-content";

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
            eyebrow="The Experience"
            title="What Makes Us Different"
            description="From the moment you book to the final drop-off — every detail is handled with care, trust, and local expertise."
          />
        )}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {features.map((item, idx) => {
            const colorPalettes = [
              {
                text: "text-emerald-600 dark:text-emerald-400",
                bg: "bg-emerald-100 dark:bg-emerald-500/10",
                border: "hover:border-emerald-500/50",
              },
              {
                text: "text-amber-600 dark:text-amber-400",
                bg: "bg-amber-100 dark:bg-amber-500/10",
                border: "hover:border-amber-500/50",
              },
              {
                text: "text-violet-600 dark:text-violet-400",
                bg: "bg-violet-100 dark:bg-violet-500/10",
                border: "hover:border-violet-500/50",
              },
              {
                text: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-100 dark:bg-blue-500/10",
                border: "hover:border-blue-500/50",
              },
              {
                text: "text-teal-600 dark:text-teal-400",
                bg: "bg-teal-100 dark:bg-teal-500/10",
                border: "hover:border-teal-500/50",
              },
              {
                text: "text-rose-600 dark:text-rose-400",
                bg: "bg-rose-100 dark:bg-rose-500/10",
                border: "hover:border-rose-500/50",
              },
            ];
            const palette = colorPalettes[idx % colorPalettes.length];

            return (
              <Card
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border-border/50 bg-card p-5 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${palette.border}`}
              >
                <CardContent className="space-y-5 p-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14 ${palette.bg} ${palette.text}`}
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold tracking-tight text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
