import {
  Car,
  Clock3,
  MapPinned,
  ShieldCheck,
  Tag,
  Trees,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactItem {
  title: string;
  value: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const brand = {
  name: "Valparai Wanderer",
  tagline: "Authentic Tours",
  logo: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545346/logo-valparai_pto3kf.png",
  phone: "+91 79041 99605",
  phoneHref: "tel:917904199605",
  whatsappHref:
    "https://wa.me/917904199605?text=Hello%20Valparai%20Wanderer%20Tours%2C%20I%20would%20like%20to%20book%20a%20tour%20package.",
  email: "info@valparaitourpackages.com",
  emailHref: "mailto:info@valparaitourpackages.com",
  address: "Valparai, Coimbatore District, Tamil Nadu",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { label: "Happy Travelers", value: "500+" },
  { label: "Guided Routes", value: "12+" },
  { label: "Avg Rating", value: "4.9/5" },
  { label: "Support", value: "24/7" },
];

export const features: FeatureItem[] = [
  {
    title: "Local Expert Guides",
    description:
      "Native guides with deep terrain knowledge and safe route planning.",
    icon: MapPinned,
  },
  {
    title: "Comfort Transport",
    description:
      "Clean, maintained vehicles optimized for mountain roads and weather.",
    icon: Car,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear package costs with no hidden add-ons or surprise charges.",
    icon: Tag,
  },
  {
    title: "Always-On Support",
    description:
      "Fast WhatsApp and phone support from planning to trip completion.",
    icon: Clock3,
  },
  {
    title: "Nature-First Planning",
    description:
      "Balanced itineraries designed for scenery, wildlife, and comfort.",
    icon: Trees,
  },
  {
    title: "Trusted Operations",
    description:
      "Reliable coordination and guidance built on consistent guest feedback.",
    icon: ShieldCheck,
  },
];

export const contactItems: ContactItem[] = [
  { title: "Call", value: brand.phone, href: brand.phoneHref },
  { title: "WhatsApp", value: brand.phone, href: brand.whatsappHref },
  { title: "Email", value: brand.email, href: brand.emailHref },
];

export const footerQuickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Tour Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
