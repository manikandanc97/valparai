import SectionHeading from "@/components/shared/section-heading";
import { brand } from "@/lib/site-content";
import { User } from "lucide-react";
import FeaturesSection from "@/components/shared/features-section";
import Image from "next/image";
import { getProfileImage } from "@/lib/cloudinary";

export default async function AboutPage() {
  const profileImageUrl = await getProfileImage();

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding relative overflow-hidden border-b bg-muted/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_36%)]" />
        <div className="container-wide relative space-y-12">
          <SectionHeading
            eyebrow="About Us"
            title="Designed for Authentic Valparai Experiences"
            description={`${brand.name} creates polished local trips with trusted support, transparent pricing, and flexible planning for families, couples, and groups.`}
          />

          <div className="w-full overflow-hidden rounded-3xl border border-border/60 bg-background/80 shadow-md backdrop-blur">
            <div className="grid items-stretch md:grid-cols-2">
              {/* Profile Image */}
              <div className="relative flex min-h-[300px] w-full flex-col items-center justify-center bg-muted/60 md:min-h-[400px]">
                {profileImageUrl ? (
                  <Image 
                    src={profileImageUrl}
                    alt="CEO Profile"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <>
                    <User className="mb-3 h-16 w-16 text-muted-foreground/40" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-muted-foreground/60">Profile Photo Placeholder</span>
                  </>
                )}
              </div>
              
              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
                <div className="mb-5 inline-flex w-fit items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
                  2+ Years of Experience
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Your Trusted Guide in Valparai
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    For the past two years, we have been crafting unforgettable travel packages that bring the true, untouched beauty of Valparai to life.
                  </p>
                  <p>
                    We believe in keeping things simple, honest, and completely focused on your comfort. Whether you are planning a relaxing family trip or an adventurous weekend with friends, we take care of all the local details so you can simply arrive and enjoy.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <a href="https://www.instagram.com/valparai_wanderer1?igsh=OXZkb3d1MnlwbTN5&utm_source=qr" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:scale-110 hover:bg-[#E1306C] hover:text-white hover:shadow-md" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/share/1Ct6crP7vG/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:scale-110 hover:bg-[#1877F2] hover:text-white hover:shadow-md" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@valparai_wanderer1?si=gWd7VHn9CTEjeW7o" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:scale-110 hover:bg-[#FF0000] hover:text-white hover:shadow-md" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <FeaturesSection showHeading={false} className="py-0" />
        </div>
      </section>
    </main>
  );
}
