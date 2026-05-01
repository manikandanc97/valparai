"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export default function ParallaxImage({ children, className, offset = 50 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, height: `calc(100% + ${offset * 2}px)`, top: -offset }} className="absolute inset-0 w-full">
        {children}
      </motion.div>
    </div>
  );
}
