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
import { Star, MapPin, Car, Tag, ShieldCheck, Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const WhyUsCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-card p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm card-premium space-y-6"
  >
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary-subtle text-primary shrink-0 shadow-sm">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-black text-primary-dark text-2xl leading-tight">{title}</h3>
    </div>
    <p className="text-slate-500 text-base font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

const ContactInfoCard = ({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-card p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm card-premium space-y-4 group"
  >
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-subtle text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-black text-primary-dark text-xl">{title}</h3>
    </div>
    <a href={href} target="_blank" className="block font-black text-primary hover:text-accent-dark text-xl sm:text-2xl transition-colors tracking-tight">
      {value}
    </a>
  </motion.div>
);

export default function Home() {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const handleBook = (title: string) => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      {/* Packages Section */}
      <section id="packages" className="section-padding container-wide">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-black text-primary-dark tracking-tighter">
            Valparai <span className="text-gradient-gold">Tour Packages</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Hand-crafted itineraries showcasing Valparai's stunning landscapes, wildlife, and local culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewPlan={openModal}
              onBook={handleBook}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding bg-secondary-subtle/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-primary-dark tracking-tighter">Why Choose <span className="text-primary">Us</span></h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">Dedicated to providing the most authentic experience of Valparai since 2014.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <WhyUsCard
              icon={MapPin}
              title="Local Expert Guides"
              desc="Born and raised in Valparai with 10+ years of deep territory knowledge."
            />
            <WhyUsCard
              icon={Car}
              title="Comfortable Transport"
              desc="Well-maintained 4x4 vehicles for safe and comfortable mountain journeys."
            />
            <WhyUsCard
              icon={Tag}
              title="Best Price Guarantee"
              desc="Competitive pricing with absolutely no hidden charges or surprise costs."
            />
            <WhyUsCard
              icon={ShieldCheck}
              title="24/7 Support"
              desc="Always available to help with bookings, changes, and any travel emergencies."
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding container-wide">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-primary-dark tracking-tighter">What <span className="text-gradient-gold">Travelers</span> Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 card-premium space-y-8 flex flex-col"
            >
              <div className="flex gap-1.5 text-accent">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-lg sm:text-xl font-medium italic leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                <div className="relative">
                  <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm" />
                  <img src={review.avatar} alt={review.name} className="relative h-14 w-14 rounded-full object-cover border-2 border-white shadow-md" />
                </div>
                <div>
                  <p className="font-black text-primary-dark text-lg leading-none mb-1">{review.name}</p>
                  <p className="font-bold text-accent-dark text-xs uppercase tracking-widest">{review.package}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-primary dark:bg-primary-dark/10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10" />
        <div className="container-wide">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">Photo <span className="text-accent">Gallery</span></h2>
            <p className="text-slate-300 text-xl font-medium">Stunning moments captured during our tours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-72 sm:h-96 overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white/5 group relative"
              >
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="section-padding container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-5xl lg:text-7xl font-black text-primary-dark leading-[1.1] tracking-tighter">Ready for Your <br /><span className="text-gradient">Next Trip?</span></h2>
              <p className="text-slate-500 text-xl font-medium max-w-lg mx-auto lg:mx-0">
                Have questions or want a custom package? Reach out to us through any of these channels.
              </p>
            </div>
            <div className="grid gap-6">
              <ContactInfoCard
                icon={Phone}
                title="Call Us Directly"
                value="+91 79041 99605"
                href="tel:917904199605"
              />
              <ContactInfoCard
                icon={MessageCircle}
                title="WhatsApp Chat"
                value="+91 79041 99605"
                href="https://wa.me/917904199605"
              />
              <ContactInfoCard
                icon={Mail}
                title="Email Inquiry"
                value="info@valparaitourpackages.com"
                href="mailto:info@valparaitourpackages.com"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-3xl -z-10" />
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark py-24 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-wide relative z-10 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-lg">
                   <img src="https://images.pexels.com/photos/9766221/pexels-photo-9766221.jpeg" className="rounded-xl object-cover h-full w-full" alt="Logo" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tight leading-none mb-1">Valparai</span>
                  <span className="font-bold text-accent text-xs uppercase tracking-[0.4em]">Wanderer</span>
                </div>
              </div>
              <p className="text-slate-400 text-base font-medium leading-relaxed">
                Experience the magic of Valparai with authentic, local-led tours that connect you with nature and wildlife.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 tracking-tight">Quick Links</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#packages" className="hover:text-accent transition-colors">Packages</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 tracking-tight">Our Services</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Sightseeing Tours</li>
                <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Wildlife Safaris</li>
                <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Estate Stays</li>
                <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Honeymoon Packages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 tracking-tight">Business Hours</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                <li className="flex justify-between items-center pb-4 border-b border-white/5"><span>Mon - Sat</span> <span className="text-white">9:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between items-center pt-2"><span>Sunday</span> <span className="text-white">10:00 AM - 4:00 PM</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-bold">© 2024 Valparai Wanderer Tours. All rights reserved.</p>
            <div className="flex gap-8 text-slate-500 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
