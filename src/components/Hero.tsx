"use client";

import { useState, useEffect } from "react";
import { Compass, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-content";

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
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentIdx === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[#1A3021]/62" />
      </div>

      <div className="container-wide w-full relative z-10 py-16 sm:py-24">
        <div className="max-w-2xl space-y-6 pt-10 sm:pt-16">
          <p className="inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#F9FBE9] backdrop-blur">
            Premium Valparai Tours
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Escape to the misty hills of Valparai.
          </h1>
          <p className="text-sm leading-6 text-white/85 sm:text-lg">
            Explore misty viewpoints, tea estates, and waterfalls through polished itineraries designed by local experts.
          </p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md bg-[#D4AF37] px-8 text-base text-[#1A3021] transition-all hover:scale-105 hover:bg-[#c89f2c]">
              <a href="/packages">
                <Compass className="mr-2 h-5 w-5" />
                Explore Packages
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-md border-white/35 bg-white/5 px-8 text-base text-white transition-all hover:scale-105 hover:bg-white/10 hover:text-white">
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePackagesJump}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/25 bg-black/20 p-2 text-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-white animate-bounce"
        aria-label="Go to packages section"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
