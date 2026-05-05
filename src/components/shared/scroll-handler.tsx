"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const book = searchParams.get("book");
    if (book === "true") {
      // Small delay to ensure the page is fully loaded and hydrated
      const timer = setTimeout(() => {
        const element = document.getElementById("booking");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Clean the URL without adding to history
          router.replace("/", { scroll: false });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return null;
}
