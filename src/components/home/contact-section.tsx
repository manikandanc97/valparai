import SectionHeading from "@/components/shared/section-heading";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Phone,
  Mail,
  ExternalLink,
  Trees,
} from "lucide-react";
import { brand } from "@/lib/site-content";

const BookingForm = dynamic(() => import("@/components/BookingForm"));

const contactCards = [
  {
    title: "Call",
    value: brand.phone,
    href: brand.phoneHref,
    icon: Phone,
    color:
      "text-blue-600 bg-blue-100/80 dark:bg-blue-500/10 dark:text-blue-400",
    action: "Open",
  },
  {
    title: "WhatsApp",
    value: brand.phone,
    href: brand.whatsappHref,
    icon: MessageCircle,
    color:
      "text-emerald-600 bg-emerald-100/80 dark:bg-emerald-500/10 dark:text-emerald-400",
    action: "Open",
  },
  {
    title: "Email",
    value: brand.email,
    href: brand.emailHref,
    icon: Mail,
    color:
      "text-amber-600 bg-amber-100/80 dark:bg-amber-500/10 dark:text-amber-400",
    action: "Open",
  },
];

const trustFeatures = [
  {
    title: "Safe & Verified Tours",
    description: "All our guides are locally trained and vetted for safety.",
    icon: ShieldCheck,
    color:
      "text-indigo-600 bg-indigo-100/80 dark:bg-indigo-500/10 dark:text-indigo-400",
  },
  {
    title: "Local Knowledge",
    description: "Born and raised in Valparai — we know every trail.",
    icon: Star,
    color:
      "text-violet-600 bg-violet-100/80 dark:bg-violet-500/10 dark:text-violet-400",
  },
  {
    title: "Location",
    description: "Pollachi, Coimbatore, Tamil Nadu - 642001",
    icon: MapPin,
    color:
      "text-slate-600 bg-slate-100/80 dark:bg-slate-500/10 dark:text-slate-400",
  },
  {
    title: "Office Hours",
    description: "Available Every Day: 08:00 AM - 08:00 PM",
    icon: Clock,
    color:
      "text-rose-600 bg-rose-100/80 dark:bg-rose-500/10 dark:text-rose-400",
  },
];

export default function HomeContactSection() {
  return (
    <section
      id="contact-section"
      className="section-padding border-t bg-muted/40"
    >
      <div className="container-wide space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to plan your next trip?"
          description="Reach us directly or submit the form. We respond quickly on WhatsApp."
          center={false}
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Side: Cards Grid (Appears second on mobile) */}
          <div className="order-2 space-y-6 lg:order-1">
            <div className="flex items-center gap-4 rounded-3xl border border-border/50 bg-background/50 p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/80 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Trees className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <p className="text-sm font-bold tracking-tight text-foreground/90">
                Valparai isn’t just a destination… it’s an experience
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Contact Cards with Open Button */}
              {contactCards.map((card, idx) => (
                <div
                  key={`contact-${idx}`}
                  className="group relative flex items-center justify-between rounded-3xl border border-border/50 bg-background/50 p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:col-span-2"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${card.color}`}
                    >
                      <card.icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {card.value}
                      </p>
                    </div>
                  </div>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 items-center justify-center rounded-xl bg-muted/60 px-5 text-xs font-bold text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    {card.action}
                  </a>
                </div>
              ))}

              {/* Trust Features */}
              {trustFeatures.map((feature, idx) => (
                <div
                  key={`trust-${idx}`}
                  className="group rounded-3xl border border-border/50 bg-background/50 p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
                    >
                      <feature.icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[11px] font-medium text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Booking Form (Appears first on mobile) */}
          <div className="order-1 relative lg:order-2">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/5 to-accent/5 blur-2xl" />
            <div className="relative">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
