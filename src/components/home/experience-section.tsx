"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Trees, Cloud, Droplets, PawPrint, Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
    <section className="relative bg-[#f1f3f1] section-padding overflow-hidden">
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="The Experience"
          title="What You’ll Experience"
          description="Every moment in Valparai is a new story waiting to be told."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.2)}
          className="relative mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-5"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={cn(
                "h-full",
                idx === experiences.length - 1 && "col-span-2 sm:col-span-1",
              )}
            >
              <Card
                className="group relative h-full overflow-hidden rounded-3xl border-none bg-background transition-colors duration-300 hover:bg-muted/50 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center justify-center p-5 text-center sm:p-8">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl ${exp.color}`}
                  >
                    <exp.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-[11px] font-bold leading-tight tracking-tight text-foreground sm:text-sm">
                    {exp.title} {exp.emoji}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium italic text-muted-foreground">
            &quot;Every trip is different. Every trip is memorable.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
