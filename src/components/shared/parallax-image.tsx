"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  disabled?: boolean;
}

export default function ParallaxImage({
  children,
  className,
  offset = 50,
  disabled = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {disabled ? (
        <div className="absolute inset-0 h-full w-full">{children}</div>
      ) : (
        <InnerParallax containerRef={containerRef} offset={offset}>
          {children}
        </InnerParallax>
      )}
    </div>
  );
}

function InnerParallax({
  containerRef,
  offset,
  children,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  offset: number;
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div
      style={{
        y,
        height: `calc(100% + ${offset * 2}px)`,
        top: -offset,
        position: "absolute",
      }}
      className="inset-0 w-full"
    >
      {children}
    </motion.div>
  );
}
