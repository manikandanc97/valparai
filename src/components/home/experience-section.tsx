"use client";

import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Trees, Cloud, Droplets, PawPrint, Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Tea estate views",
    emoji: "🌿",
    icon: Trees,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Mist-covered hairpin bends",
    emoji: "☁️",
    icon: Cloud,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Hidden waterfalls",
    emoji: "💧",
    icon: Droplets,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Wildlife spotting",
    emoji: "🐘",
    icon: PawPrint,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Sunrise & sunset points",
    emoji: "🌄",
    icon: Sunrise,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding container-wide overflow-hidden">
      <SectionHeading
        eyebrow="The Experience"
        title="What You’ll Experience"
        description="Every moment in Valparai is a new story waiting to be told."
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-5">
        {experiences.map((exp, idx) => (
          <Card 
            key={idx} 
            className={cn(
              "group relative overflow-hidden rounded-3xl border-none bg-muted/30 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg",
              idx === experiences.length - 1 && "col-span-2 sm:col-span-1"
            )}
          >
            <CardContent className="flex flex-col items-center justify-center p-5 text-center sm:p-8">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl ${exp.color}`}>
                <exp.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-[11px] font-bold leading-tight tracking-tight text-foreground sm:text-sm">
                {exp.title} {exp.emoji}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium italic text-muted-foreground">
          "Every trip is different. Every trip is memorable."
        </p>
      </div>
    </section>
  );
}
