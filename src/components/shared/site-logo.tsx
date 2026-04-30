"use client";

import Image from "next/image";
import { brand } from "@/lib/site-content";

export default function SiteLogo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-xl bg-white p-1 ring-1 ring-border">
        <Image src={brand.logo} alt={brand.name} width={44} height={44} className="h-full w-full object-contain" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-foreground">{brand.name}</p>
        <p className="text-xs text-muted-foreground">{brand.tagline}</p>
      </div>
    </a>
  );
}

