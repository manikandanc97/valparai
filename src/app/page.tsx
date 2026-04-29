import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { reviews, galleryImages } from "@/lib/tour-data";
import { Star, Mail, MessageCircle, Phone, Camera, Users, PlayCircle, MapPin, ChevronRight, CircleHelp, FileText, Shield, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import { brand, contactItems, features, footerQuickLinks, footerSupportLinks } from "@/lib/site-content";
import Image from "next/image";
import dynamic from "next/dynamic";

const PackagesSectionClient = dynamic(
  () => import("@/components/home/packages-section-client"),
  { loading: () => <section id="packages" className="section-padding container-wide" /> }
);
const BookingForm = dynamic(() => import("@/components/BookingForm"));

export default function Home() {
  const contactIcons = [Phone, MessageCircle, Mail];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <PackagesSectionClient />

      <section id="why-us" className="section-padding border-y bg-muted/50">
        <div className="container-wide space-y-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed Like a Premium Service"
            description="Every touchpoint from booking to travel day is streamlined for clarity, trust, and comfort."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title} className="rounded-xl border-border/70 bg-background py-0 shadow-sm">
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
            <div key={i} className="flex flex-col space-y-5 rounded-xl border bg-card p-6 transition-shadow hover:shadow-sm">
              <div className="flex gap-1.5 text-[#D4AF37]">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-6 text-muted-foreground sm:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <Image src={review.avatar} alt={review.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.package}</p>
                </div>
              </div>
            </div>
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
              <div key={i} className="group relative h-64 overflow-hidden rounded-xl border border-white/10 sm:h-80">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="section-padding border-t bg-muted/40">
        <div className="container-wide">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Ready to plan your next trip?"
                description="Reach us directly or submit the form. We respond quickly on WhatsApp."
                center={false}
              />
              <div className="flex flex-col gap-4 sm:gap-5">
                {contactItems.map((item, idx) => {
                  const Icon = contactIcons[idx];
                  return (
                    <Card 
                      key={item.title} 
                      className="group rounded-2xl border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                    >
                      <CardContent className="flex items-center justify-between gap-4 p-5 sm:p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                          </div>
                        </div>
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex h-9 items-center justify-center rounded-full bg-muted/50 px-4 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
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
        </div>
      </section>

      <footer className="border-t border-[#11203b] bg-[#020817] text-[#d6deec]">
        <div className="container-wide py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-white p-1.5">
                  <Image src={brand.logo} alt={brand.name} width={56} height={56} className="h-full w-full object-contain" />
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
                <a href="https://www.instagram.com/valparai_wanderer1?igsh=OXZkb3d1MnlwbTN5&utm_source=qr" target="_blank" rel="noreferrer" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:border-primary hover:bg-primary/10 hover:text-primary transition-all" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.facebook.com/share/1Ct6crP7vG/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:border-primary hover:bg-primary/10 hover:text-primary transition-all" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://youtube.com/@valparai_wanderer1?si=gWd7VHn9CTEjeW7o" target="_blank" rel="noreferrer" className="rounded-md border border-[#1f2d45] p-2 text-[#9fb0cb] hover:border-primary hover:bg-primary/10 hover:text-primary transition-all" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
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
              <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
              <p>Crafting Authentic Valparai Experiences</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
