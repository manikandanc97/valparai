"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Trees, CloudFog, Droplets, PawPrint, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-content";

const experiences = [
  {
    title: "Endless Tea Valley Views",
    description: "Wake up to green carpets stretching beyond the clouds.",
    emoji: "🌿",
    icon: Trees,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967153/valparai/experiences/tea-valley.jpg",
  },
  {
    title: "Foggy Hairpin Drives",
    description: "Drive through 40+ bends wrapped in magical mist.",
    emoji: "🌫️",
    icon: CloudFog,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967146/valparai/experiences/foggy-hairpin.jpg",
  },
  {
    title: "Secret Waterfalls",
    description: "Discover hidden falls that most tourists never find.",
    emoji: "💧",
    icon: Droplets,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967150/valparai/experiences/secret-waterfall.jpg",
  },
  {
    title: "Wild Encounters",
    description: "Spot elephants, gaur & rare wildlife in their natural home.",
    emoji: "🐾",
    icon: PawPrint,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967156/valparai/experiences/wildlife.jpg",
    highlight: true,
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
          className="relative mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border-none bg-background transition-all duration-500 hover:shadow-2xl",
                  exp.highlight && "ring-2 ring-primary/20 lg:scale-[1.02]"
                )}
              >
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover opacity-10 transition-all duration-700 blur-[2px] group-hover:opacity-20 group-hover:scale-110 group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
                </div>

                <CardContent className="relative z-10 flex flex-col items-center justify-center p-5 text-center sm:p-8">
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl",
                      exp.color
                    )}
                  >
                    <exp.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-xs font-bold leading-tight tracking-tight text-foreground sm:text-base">
                    {exp.title} {exp.emoji}
                  </h3>
                  <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 flex flex-col items-center justify-center space-y-8 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Experience the Real Valparai?
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button 
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              size="lg" 
              className="rounded-full px-10 h-14 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
            >
              Plan Your Trip Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-base border-2 transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200">
              <Link href={brand.whatsappHref} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5 text-emerald-500" />
                Chat With Us on WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
