"use client";

import { motion } from "framer-motion";
import PillBadge, { BadgeColor } from "@/components/shared/pill-badge";
import { fadeInUp } from "@/lib/animations";
import RevealText from "@/components/shared/reveal-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  inverted?: boolean;
}

const getBadgeColor = (text: string): BadgeColor => {
  const lower = text.toLowerCase();
  if (lower.includes("why") || lower.includes("choose")) return "emerald";
  if (lower.includes("package")) return "violet";
  if (lower.includes("gallery")) return "rose";
  if (lower.includes("contact")) return "blue";
  if (lower.includes("about")) return "amber";
  return "cyan";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  inverted = false,
}: SectionHeadingProps) {
  const color = eyebrow ? getBadgeColor(eyebrow) : "cyan";

  return (
    <div className={cn("relative", center ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 15 }}
          className={`mb-4 ${center ? "flex justify-center" : ""}`}
        >
          <PillBadge color={color} className={inverted ? "bg-white/10 text-white/90 shadow-none" : ""}>
            {eyebrow}
          </PillBadge>
        </motion.div>
      ) : null}
      
      <RevealText 
        text={title}
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${center ? "justify-center" : ""} ${inverted ? "text-white" : "text-foreground"}`}
      />

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`mt-3 text-sm leading-6 sm:text-base ${inverted ? "text-white/80" : "text-muted-foreground"}`}
        >
          {description}
        </motion.p>
      ) : null}
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
        className={`mt-5 h-1 rounded-full ${center ? "mx-auto" : ""} ${inverted ? "bg-white/30" : "bg-primary/40"}`}
      />
    </div>
  );
}
