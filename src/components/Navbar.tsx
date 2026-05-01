"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { brand, navItems } from "@/lib/site-content";
import SiteLogo from "@/components/shared/site-logo";

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

const TopBar = () => {
  return (
    <div className="hidden bg-[#0a1210] py-2 lg:block">
      <div className="container-wide flex items-center justify-between text-[12px] font-semibold tracking-wide text-[#c5d4c8]">
        <div className="flex items-center gap-6">
          <a
            href={brand.emailHref}
            className="flex items-center gap-2 transition-all duration-300 hover:text-[#d4af37]"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1e3328] text-[#d4af37]">
              <Mail className="h-3 w-3" />
            </div>
            {brand.email}
          </a>
          <a
            href={brand.phoneHref}
            className="flex items-center gap-2 transition-all duration-300 hover:text-[#d4af37]"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1e3328] text-[#d4af37]">
              <Phone className="h-3 w-3" />
            </div>
            {brand.phone}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]/70 font-bold">Connect with us:</span>
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
                  className="group relative flex h-7 w-7 items-center justify-center rounded-lg bg-[#1e3328] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0a1210] hover:scale-110"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="h-3.5 w-3.5 transition-colors group-hover:text-[#0a1210]" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70 border-b shadow-sm"
          : "bg-background border-b",
      )}
    >
      {!scrolled && <TopBar />}
      <div className={cn(
        "container-wide flex items-center justify-between transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}>
        <SiteLogo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((link) => {
            const isActive = link.href === pathname;

            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "group relative py-1 text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 h-[3px] bg-primary rounded-full transition-all duration-300 ease-out origin-left",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} 
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border bg-card p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <Button 
            asChild 
            variant="outline" 
            className="h-10 border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a1210] hover:border-[#d4af37] transition-all duration-300"
          >
            <a href={brand.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {brand.phone}
            </a>
          </Button>
          <Button asChild className="h-10 rounded-md px-5 bg-[#1e3328] hover:bg-[#2a4538] text-white">
            <a href="/contact">Book Tour</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border bg-card p-2 text-muted-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border bg-card p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-background transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[420px] py-6" : "max-h-0 py-0",
        )}
      >
        <nav className="container-wide flex flex-col gap-4">
          {navItems.map((link) => {
            const isActive = link.href === pathname;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            );
          })}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button asChild variant="outline" className="h-10 border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a1210]">
              <a href={brand.phoneHref}>Call Now</a>
            </Button>
            <Button asChild className="h-10 bg-[#1e3328] text-white">
              <a href="/contact">Book Now</a>
            </Button>
          </div>
          <div className="mt-6 border-t pt-6">
            <div className="flex flex-col gap-4">
              <a
                href={brand.emailHref}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {brand.email}
              </a>
              <div className="flex items-center gap-4 pt-2">
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
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
