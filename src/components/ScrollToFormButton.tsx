"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ScrollToFormButton() {
  return (
    <Button
      variant="outline"
      className="group rounded-xl border-border/60 bg-background/50 px-6 py-6 text-sm font-bold shadow-sm backdrop-blur hover:bg-foreground hover:text-background"
      onClick={() =>
        document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Scroll to Booking Form
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
