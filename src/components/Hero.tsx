"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
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
              className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110"
              style={{ backgroundImage: `url(${heroImages[currentIdx]})` }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 z-10" />
      </div>

      <div className="relative z-20 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-dark border border-white/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Exploring Valparai's Hidden Gems
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter">
            Experience the <br />
            <span className="text-gradient-gold">Wild Soul</span> of <br />
            South India.
          </h1>

          <p className="max-w-2xl text-slate-200 text-lg sm:text-2xl font-medium leading-relaxed opacity-90">
            From misty tea plantations to exotic wildlife safaris. Discover Valparai with the locals who know every secret trail.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button
              asChild
              size="lg"
              className="h-16 px-12 rounded-2xl bg-primary hover:bg-primary-dark text-white font-black text-xl btn-premium shadow-premium border border-white/10"
            >
              <a href="#packages">
                <Compass className="mr-3 h-7 w-7" />
                Explore Packages
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-12 rounded-2xl glass-dark border-white/20 hover:bg-white/10 text-white font-black text-xl transition-all hover:scale-105"
            >
              <a href="https://wa.me/917904199605" target="_blank">
                <MessageSquare className="mr-3 h-7 w-7 text-accent" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements for Premium Feel */}
      <div className="absolute bottom-20 right-20 z-10 hidden xl:block animate-float">
        <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-2">
          <p className="text-accent font-black text-3xl">4.9/5</p>
          <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Customer Rating</p>
        </div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
