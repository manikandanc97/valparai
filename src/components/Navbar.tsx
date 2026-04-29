"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { brand, navItems } from "@/lib/site-content";
import SiteLogo from "@/components/shared/site-logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-background/90 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "bg-background py-3"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <SiteLogo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border bg-card p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href={brand.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {brand.phone}
          </a>
          <Button asChild className="h-10 rounded-md px-5">
            <a href="#contact-section">Book Tour</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border bg-card p-2 text-muted-foreground"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
          "overflow-hidden border-t bg-background transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[420px] py-6" : "max-h-0 py-0"
        )}
      >
        <nav className="container-wide flex flex-col gap-4">
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button asChild variant="outline" className="h-10">
              <a href={brand.phoneHref}>Call</a>
            </Button>
            <Button asChild className="h-10">
              <a href="#contact-section">Book</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
