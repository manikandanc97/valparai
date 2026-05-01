"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site-content";

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="h-16 w-16 md:h-20 md:w-20">
        <Image 
          src={brand.logo} 
          alt={brand.name} 
          width={80} 
          height={80} 
          className="h-full w-full object-contain" 
          priority
        />
      </div>
    </Link>
  );
}

