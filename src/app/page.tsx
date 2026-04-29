"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PackageCard from "@/components/PackageCard";
import ItineraryModal from "@/components/ItineraryModal";
import BookingForm from "@/components/BookingForm";
import { tourPackages, reviews, galleryImages, TourPackage } from "@/lib/tour-data";
import { motion } from "framer-motion";
import { Star, Mail, MessageCircle, Phone, Camera, Users, PlayCircle, MapPin, ChevronRight, CircleHelp, FileText, Shield, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import { brand, contactItems, features, footerQuickLinks, footerSupportLinks } from "@/lib/site-content";

export default function Home() {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const handleBook = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactIcons = [Phone, MessageCircle, Mail];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      <section id="packages" className="section-padding container-wide space-y-12">
        <SectionHeading
          eyebrow="Packages"
          title="Flexible Tour Plans"
          description="Well-structured plans with clear itinerary details, transparent pricing, and local support."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tourPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onViewPlan={openModal} onBook={handleBook} />
          ))}
        </div>
      </section>

      <section id="why-us" className="section-padding border-y bg-background">
        <div className="container-wide space-y-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed Like a Premium Service"
            description="Every touchpoint from booking to travel day is streamlined for clarity, trust, and comfort."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title} className="rounded-xl border-border/70 py-0">
                <CardContent className="space-y-3 p-5">
                  <div className="w-fit rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-padding container-wide space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Travelers Say"
          description="Real experiences from families and couples who explored Valparai with us."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-5 rounded-xl border bg-card p-6"
            >
              <div className="flex gap-1.5 text-[#D4AF37]">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-6 text-muted-foreground sm:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.package}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section-padding bg-[#1A3021]">
        <div className="container-wide space-y-12">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the Route"
            description="A quick look at the landscapes and highlights from recent trips."
            inverted
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative h-64 overflow-hidden rounded-xl border border-white/10 sm:h-80"
              >
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
                  {img.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="section-padding container-wide">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to plan your next trip?"
              description="Reach us directly or submit the form. We respond quickly on WhatsApp."
              center={false}
            />
            <div className="grid gap-3">
              {contactItems.map((item, idx) => {
                const Icon = contactIcons[idx];
                return (
                  <Card key={item.title} className="rounded-xl border-border/70 py-0">
                    <CardContent className="flex items-center justify-between gap-4 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline">
                        Open
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-[#11203b] bg-[#020817] text-[#d6deec]">
        <div className="container-wide py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-white p-1.5">
                  <img src={brand.logo} alt={brand.name} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{brand.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9fb0cb]">{brand.tagline}</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#9fb0cb]">
                Premium local tours exploring Valparai&apos;s untouched natural beauty with expert local guidance.
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:text-white"><Camera className="h-4 w-4" /></a>
                <a href="#" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:text-white"><Users className="h-4 w-4" /></a>
                <a href="#" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:text-white"><PlayCircle className="h-4 w-4" /></a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">Quick Links</p>
              <div className="space-y-3">
                {footerQuickLinks.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-2 text-sm text-[#9fb0cb] hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">Support</p>
              <div className="space-y-3">
                {footerSupportLinks.map((item, idx) => {
                  const icons = [CircleHelp, FileText, Shield, PhoneCall];
                  const Icon = icons[idx];
                  return (
                    <a key={item.label} href={item.href} className="flex items-center gap-2 text-sm text-[#9fb0cb] hover:text-white">
                      <Icon className="h-3.5 w-3.5" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-white">Contact Us</p>
              <div className="space-y-3 text-sm text-[#9fb0cb]">
                <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {brand.address}</p>
                <a href={brand.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> {brand.phone}</a>
                <a href={brand.emailHref} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> {brand.email}</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#11203b] pt-6">
            <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#7f92b2] sm:flex-row">
              <p>© 2026 {brand.name}. All rights reserved.</p>
              <p>Designed for Adventure - Certified Local Operator</p>
            </div>
          </div>
        </div>
      </footer>

      <ItineraryModal
        pkg={selectedPkg}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </main>
  );
}
