"use client";

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
} from "lucide-react";
import { brand } from "@/lib/site-content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const BookingForm = dynamic(() => import("@/components/BookingForm"));

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const contactCards = [
  {
    title: "Call",
    value: brand.phone,
    href: brand.phoneHref,
    icon: Phone,
    color:
      "text-blue-600 bg-blue-100/80 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    title: "WhatsApp",
    value: brand.phone,
    href: brand.whatsappHref,
    icon: MessageCircle,
    color:
      "text-emerald-600 bg-emerald-100/80 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    title: "Email",
    value: brand.email,
    href: brand.emailHref,
    icon: Mail,
    color:
      "text-amber-600 bg-amber-100/80 dark:bg-amber-500/10 dark:text-amber-400",
  },
  {
    title: "Instagram",
    value: "@valparai_wanderer1",
    href: brand.socials[0].href,
    icon: InstagramIcon,
    color:
      "text-pink-600 bg-pink-100/80 dark:bg-pink-500/10 dark:text-pink-400",
  },
  {
    title: "Facebook",
    value: "Valparai Wanderer",
    href: brand.socials[1].href,
    icon: FacebookIcon,
    color:
      "text-blue-700 bg-blue-100/80 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    title: "YouTube",
    value: "Valparai Wanderer",
    href: brand.socials[2].href,
    icon: YoutubeIcon,
    color: "text-red-600 bg-red-100/80 dark:bg-red-500/10 dark:text-red-400",
  },
];

const infoCards = [
  {
    title: "Location",
    value: "Pollachi, Coimbatore, Tamil Nadu",
    icon: MapPin,
    color:
      "text-slate-600 bg-slate-100/80 dark:bg-slate-500/10 dark:text-slate-400",
  },
  {
    title: "Office Hours",
    value: "08:00 AM - 08:00 PM",
    icon: Clock,
    color:
      "text-rose-600 bg-rose-100/80 dark:bg-rose-500/10 dark:text-rose-400",
  },
  {
    title: "Safe & Verified",
    value: "Locally trained guides",
    icon: ShieldCheck,
    color:
      "text-indigo-600 bg-indigo-100/80 dark:bg-indigo-500/10 dark:text-indigo-400",
  },
  {
    title: "Local Knowledge",
    value: "Born & raised in Valparai",
    icon: Star,
    color:
      "text-violet-600 bg-violet-100/80 dark:bg-violet-500/10 dark:text-violet-400",
  },
];

export default function HomeContactSection() {
  return (
    <section
      id="contact-section"
      className="section-padding relative border-t bg-muted/40 overflow-hidden"
    >
      <div className="container-wide space-y-8 relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to plan your next trip?"
          description="Reach us directly or submit the form. We respond quickly on WhatsApp."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Side: Cards Grid (Appears second on mobile) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.2)}
            className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:gap-6"
          >
            {/* Contact & Social Cards */}
            {contactCards.map((card, idx) => (
              <motion.a
                key={`contact-${idx}`}
                variants={fadeInUp}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col items-center text-center gap-2 rounded-2xl border border-border/50 bg-background/50 p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl ${card.color}`}
                >
                  <card.icon
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="space-y-0.5 min-w-0 flex-1 w-full">
                  <h3 className="text-[11px] font-bold text-foreground leading-tight sm:text-sm">
                    {card.title}
                  </h3>
                  <p className="text-[10px] font-medium text-muted-foreground break-all leading-tight sm:text-xs sm:break-normal">
                    {card.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Info & Trust Cards */}
            {infoCards.map((card, idx) => (
              <motion.div
                key={`info-${idx}`}
                variants={fadeInUp}
                className="group relative flex flex-col items-center text-center gap-2 rounded-2xl border border-border/50 bg-background/50 p-3 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl ${card.color}`}
                >
                  <card.icon
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="space-y-0.5 min-w-0 flex-1 w-full">
                  <h3 className="text-[11px] font-bold text-foreground leading-tight sm:text-sm">
                    {card.title}
                  </h3>
                  <p className="text-[10px] font-medium text-muted-foreground break-all leading-tight sm:text-xs sm:break-normal">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Booking Form (Appears first on mobile) */}
          <motion.div
            id="booking"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-1 relative lg:order-2"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/5 to-accent/5 blur-2xl" />
            <div className="relative">
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
