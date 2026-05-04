"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Compass, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import RevealText from "@/components/shared/reveal-text";
import ParallaxImage from "@/components/shared/parallax-image";

const heroImages = [
  "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545429/IMG_0722.JPG_odxq8j.jpg",
  "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545450/IMG_0737.JPG_bfawec.jpg",
  "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545488/8845601C-A17F-4768-B345-29F559EA813B.JPG_zodpel.jpg",
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePackagesJump = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = "/packages";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden lg:min-h-[calc(100vh-8rem)]"
    >
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[currentIdx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ParallaxImage className="h-full w-full" offset={80}>
              <Image
                src={heroImages[currentIdx]}
                alt="Valparai Landscape"
                fill
                priority={currentIdx === 0}
                loading={currentIdx === 0 ? "eager" : "lazy"}
                className="object-cover object-center scale-110"
                sizes="100vw"
              />
            </ParallaxImage>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-10 bg-[#1A3021]/62" />
      </div>

      <div className="container-wide w-full relative z-10 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15, 0.4)}
          className="max-w-2xl space-y-6 pt-10 sm:pt-16"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#F9FBE9] backdrop-blur"
          >
            Explore Valparai Like a Local
          </motion.p>

          <RevealText
            text="Discover Valparai like never before"
            className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            delay={0.6}
          />

          <motion.p
            variants={fadeInUp}
            className="text-sm leading-6 text-white/85 sm:text-lg"
          >
            From misty roads to hidden waterfalls — experience Valparai with
            locals who know it best.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 pt-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-[#D4AF37] px-8 text-base text-[#1A3021] hover:bg-[#c89f2c]"
            >
              <a href="/packages">
                <Compass className="mr-2 h-5 w-5" />
                Plan My Valparai Trip
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/35 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        type="button"
        onClick={handlePackagesJump}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-white/25 bg-black/20 p-2 text-white/80 backdrop-blur-sm transition-all duration-300 hover:text-white"
        aria-label="Go to packages section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
