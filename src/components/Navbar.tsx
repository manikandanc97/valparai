"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass py-3 shadow-premium border-b border-primary/5"
          : "bg-white dark:bg-background py-4 border-b border-slate-100 dark:border-white/5"
      )}
    >
      <div className="container-wide flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm p-1">
              <img
                src="https://images.pexels.com/photos/9766221/pexels-photo-9766221.jpeg"
                alt="Valparai Wanderer"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black text-xl tracking-tight transition-colors duration-300",
              "text-primary dark:text-accent"
            )}>
              Valparai <span className={cn(scrolled ? "text-accent-dark" : "text-accent-dark dark:text-white")}>Wanderer</span>
            </span>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.4em] opacity-70",
              "text-primary-light dark:text-slate-300"
            )}>
              Authentic Tours
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold text-sm tracking-wide transition-all hover:text-accent-dark relative group",
                "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-accent hover:bg-accent/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>

          <a
            href="tel:917904199605"
            className={cn(
              "flex items-center gap-2 font-bold text-sm transition-colors",
              "text-primary dark:text-slate-300"
            )}
          >
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent-dark dark:text-accent" />
            </div>
            +91 79041 99605
          </a>
          <Button
            asChild
            className="bg-primary dark:bg-accent dark:text-primary-dark hover:bg-primary-dark dark:hover:bg-accent-dark rounded-2xl font-bold text-white btn-premium px-8 h-12 shadow-premium"
          >
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-accent"
          >
            {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-xl transition-colors",
              "text-primary bg-primary/5 dark:text-accent dark:bg-white/5"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 overflow-hidden transition-all duration-500",
          isOpen ? "max-h-[500px] opacity-100 py-10 shadow-2xl" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-8 px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-2xl text-primary hover:text-accent transition-colors flex items-center justify-between group"
            >
              {link.name}
              <div className="h-1 w-0 bg-accent transition-all duration-300 group-hover:w-12 rounded-full" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-2xl font-bold text-primary border-primary/10 hover:bg-primary/5"
            >
              <a href="tel:917904199605">
                <Phone className="w-5 h-5 mr-2" />
                Call
              </a>
            </Button>
            <Button
              asChild
              className="h-14 rounded-2xl font-bold text-white bg-primary shadow-premium"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Book Now
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;
