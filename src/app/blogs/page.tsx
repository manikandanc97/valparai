"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "@/components/shared/reveal-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function BlogsPage() {
  return (
    <main className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.2, 0.1)}
        className="container-wide relative z-10 flex flex-col items-center text-center"
      >
        <motion.div 
          variants={fadeInUp}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-inner"
        >
          <Newspaper className="h-12 w-12" />
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          <Construction className="h-4 w-4" />
          <span>Coming Soon</span>
        </motion.div>

        <RevealText 
          text="Our Travel Blog is Under Development"
          className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl justify-center"
        />

        <motion.p 
          variants={fadeInUp}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          We&apos;re busy writing stories about the mist-covered mountains, tea
          estates, and hidden waterfalls of Valparai. Stay tuned for travel
          guides, tips, and authentic local experiences.
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="h-12 rounded-xl px-8 bg-primary hover:bg-primary/90 transition-all duration-300">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-xl px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
          >
            <Link href="/packages">Explore Packages</Link>
          </Button>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.6)}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { title: "Travel Guides", icon: "🗺️" },
            { title: "Local Stories", icon: "📖" },
            { title: "Photography", icon: "📸" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-foreground">
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
