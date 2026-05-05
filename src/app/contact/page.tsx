import HomeContactSection from "@/components/home/contact-section";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeContactSection />

      {/* Map Section */}
      <section className="section-padding border-b bg-background">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:bg-primary/20 dark:text-primary">
              Location
            </p>
            <h2 className="text-3xl font-bold text-foreground">Visit Our Office</h2>
            <p className="mt-2 text-muted-foreground">
              We are based in Pollachi. Drop by or find us on the map below.
            </p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10866907577!2d76.93608778684617!3d10.662493098730456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba836b8e3a241e3%3A0x6b9d6a36214ec042!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709230559648!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale transition-all duration-500 hover:grayscale-0"
            ></iframe>
            <div className="flex items-center gap-5 bg-card p-6 sm:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground">Pollachi Base Office</p>
                <p className="text-sm font-medium text-muted-foreground sm:text-base">
                  Pollachi, Coimbatore District, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
