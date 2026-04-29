"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, stats } from "@/lib/site-content";

const heroImages = [
  "https://images.pexels.com/photos/9766221/pexels-photo-9766221.jpeg",
  "https://images.pexels.com/photos/34485198/pexels-photo-34485198.jpeg",
  "https://images.pexels.com/photos/247041/pexels-photo-247041.jpeg",
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="h-full w-full scale-110 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms]"
              style={{ backgroundImage: `url(${heroImages[currentIdx]})` }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#1A3021]/62" />
      </div>

      <div className="container-wide relative z-10 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#F9FBE9] backdrop-blur">
              Premium Valparai Tours
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Curated hill station journeys with a modern local travel experience.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base">
              Explore misty viewpoints, tea estates, and waterfalls through polished itineraries designed by local experts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 rounded-md bg-[#D4AF37] px-6 text-[#1A3021] hover:bg-[#c89f2c]">
                <a href="#packages">
                  <Compass className="mr-2 h-4 w-4" />
                  Explore Packages
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 rounded-md border-white/35 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Talk on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-black/25 p-6 backdrop-blur-md">
            <p className="text-sm font-medium text-white/80">Trusted by travelers since 2014</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/15 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-[#D4AF37]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/75">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 opacity-60"
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
