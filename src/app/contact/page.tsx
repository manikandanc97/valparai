import BookingForm from "@/components/BookingForm";
import ContactOptions from "@/components/ContactOptions";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import { MapPin, ShieldCheck, Clock } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Verified Tours",
    desc: "All our guides are locally trained and vetted for safety.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Quick WhatsApp Response",
    desc: "We typically reply within 15 minutes on WhatsApp.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
  },
  {
    icon: MapPin,
    title: "Local Knowledge, Real Experiences",
    desc: "Born and raised in Valparai — we know every trail.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-500/10",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding relative overflow-hidden bg-muted/20">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.05),transparent_25%),radial-gradient(circle_at_90%_90%,rgba(212,175,55,0.05),transparent_25%)]" />

        <div className="container-wide relative">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-8">

              {/* Header */}
              <div className="space-y-5">
                <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:bg-primary/20 dark:text-primary">
                  Contact
                </p>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Ready to plan your <br />
                    <span className="text-primary">next trip?</span>
                  </h1>
                  <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                    Reach us directly or submit the form. We respond quickly on WhatsApp.
                  </p>
                  <div className="h-1.5 w-20 rounded-full bg-muted-foreground/20" />
                </div>

                {/* Mobile Scroll Button */}
                <div className="block lg:hidden">
                  <ScrollToFormButton />
                </div>
              </div>


              {/* Contact Options */}
              <div>
                <ContactOptions />
              </div>

              {/* Trust Points */}
              <div className="grid gap-3 sm:grid-cols-1">
                {trustPoints.map((tp) => {
                  const Icon = tp.icon;
                  return (
                    <div
                      key={tp.title}
                      className="flex items-start gap-4 rounded-2xl border border-border/40 bg-background/40 px-5 py-4 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-md"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tp.bg} ${tp.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-foreground">{tp.title}</p>
                        <p className="text-xs leading-relaxed text-muted-foreground">{tp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Info Row */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex gap-4 rounded-2xl border border-border/40 bg-background/40 p-5 shadow-sm backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-foreground">Location</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Pollachi, Coimbatore District<br />Tamil Nadu - 642001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-border/40 bg-background/40 p-5 shadow-sm backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-foreground">Office Hours</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Available Every Day<br />08:00 AM – 08:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Booking Form ── */}
            <div className="lg:sticky lg:top-32">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

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
