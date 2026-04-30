import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/shared/section-heading";
import ContactOptions from "@/components/ContactOptions";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding border-b bg-muted/30">
        <div className="container-wide space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Plan Your Valparai Trip"
            description="Reach us directly by phone, WhatsApp, or email. Share your travel plan and we will help you finalize the best route."
            center={false}
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="order-2 flex flex-col lg:order-1">
              <div className="flex flex-1 flex-col rounded-3xl border border-border/60 bg-background/70 p-4 shadow-sm backdrop-blur sm:p-5">
                <ContactOptions />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Location"
            title="Visit Our Office"
            description="We are based in Pollachi. You can drop by or use the map below to find us."
            center={true}
          />
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10866907577!2d76.93608778684617!3d10.662493098730456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba836b8e3a241e3%3A0x6b9d6a36214ec042!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709230559648!5m2!1sen!2sin"
              width="100%"
              height="450"
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
                <p className="text-lg font-bold text-foreground">
                  Pollachi Base Office
                </p>
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
