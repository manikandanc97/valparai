"use client";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-content";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import RevealText from "@/components/shared/reveal-text";

export default function CTASection() {
  const handlePlanNow = () => {
    const contactSection = document.getElementById("booking-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#1A3021] py-16 sm:py-24">
      <div className="container-wide relative z-10">
        {/* Background Decorative Elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.2, 0)}
          className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row lg:text-left"
        >
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-sm sm:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Start Your Journey
            </motion.div>

            <div className="space-y-3">
              <RevealText
                text="Ready to Explore Valparai?"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:justify-start justify-center"
              />
              <motion.p
                variants={fadeInUp}
                className="text-sm leading-relaxed text-white/70 sm:text-base"
              >
                Let us plan your perfect trip simple, smooth & memorable.
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 sm:flex-row lg:shrink-0"
          >
            <Button
              onClick={handlePlanNow}
              className="h-12 w-full rounded-xl bg-[#D4AF37] px-8 text-sm font-bold text-[#1A3021] hover:bg-[#b8952b] sm:h-14 sm:w-auto sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              Plan My Trip Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-xl border-white/20 bg-white/5 px-8 text-sm font-bold text-white hover:bg-white/10 sm:h-14 sm:w-auto sm:text-base transition-all duration-300"
            >
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 text-emerald-400 sm:h-5 sm:w-5" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
