"use client";

import Image from "next/image";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { brand, footerQuickLinks } from "@/lib/site-content";
import Link from "next/link";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-[#1e3328] bg-[#0a1210] text-[#c5d4c8]">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div>
                <p className="text-base font-bold text-white tracking-tight">
                  {brand.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-bold">
                  {brand.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#8fa698] max-w-xs">
              Premium local tours exploring Valparai&apos;s untouched natural
              beauty with expert local guidance and comfort.
            </p>
            <div className="flex items-center gap-3">
              {brand.socials.map((social) => {
                const Icon = 
                  social.name === "Instagram" ? InstagramIcon :
                  social.name === "Facebook" ? FacebookIcon :
                  social.name === "YouTube" ? YoutubeIcon : null;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-[#1e3328] bg-[#142019] text-[#8fa698] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37] hover:scale-110"
                    aria-label={social.name}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="mb-6 text-base font-bold text-white tracking-tight">
              Quick Links
            </p>
            <div className="grid grid-cols-1 gap-y-3">
              {footerQuickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-[#8fa698] transition-colors hover:text-[#d4af37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="mb-6 text-base font-bold text-white tracking-tight">
              Contact Details
            </p>
            <div className="space-y-4 text-sm text-[#8fa698]">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1e3328] text-[#d4af37]">
                  <MapPin className="h-3 w-3" />
                </div>
                <p className="leading-relaxed">{brand.address}</p>
              </div>
              <a
                href={brand.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[#d4af37]"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1e3328] text-[#d4af37]">
                  <Phone className="h-3 w-3" />
                </div>
                {brand.phone}
              </a>
              <a
                href={brand.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-[#d4af37]"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1e3328] text-[#d4af37]">
                  <Mail className="h-3 w-3" />
                </div>
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#1e3328] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs font-medium text-[#6b8570] sm:flex-row">
            <p>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-[#d4af37]/70 italic">
                Crafting Authentic Valparai Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
