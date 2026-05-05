import {
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
  image: string;
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
  email: "valparaiwanderer@gmail.com",
  emailHref: "mailto:valparaiwanderer@gmail.com",
  address: "Valparai, Coimbatore District, Tamil Nadu",
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/valparai_wanderer1?igsh=OXZkb3d1MnlwbTN5&utm_source=qr",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Ct6crP7vG/?mibextid=wwXIfr",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@valparai_wanderer1?si=gWd7VHn9CTEjeW7o",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
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
    title: "Local Experts",
    description: "We know every hidden spot, not just tourist places.",
    icon: MapPinned,
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967161/valparai/features/local-experts.jpg",
  },
  {
    title: "Real Experiences",
    description: "No rush. No crowd. Just pure Valparai vibes.",
    icon: Trees,
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967165/valparai/features/real-experiences.jpg",
  },
  {
    title: "Flexible Plans",
    description: "Trips designed based on your time & budget.",
    icon: Tag,
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967159/valparai/features/flexible-plans.jpg",
  },
  {
    title: "Trusted by Travelers",
    description: "Hundreds of happy guests & repeat visitors.",
    icon: ShieldCheck,
    image: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777967167/valparai/features/trusted.jpg",
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
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];
