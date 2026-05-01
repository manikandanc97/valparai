"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock3, MapPinned, ShieldCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { 
    label: "Avg Rating", 
    value: 4.9,
    suffix: "/5",
    icon: Star, 
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-100/50 dark:bg-amber-500/10",
    borderColor: "hover:border-amber-300/50 dark:hover:border-amber-500/30"
  },
  { 
    label: "Routes Covered", 
    value: 12,
    suffix: "+",
    icon: MapPinned, 
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-100/50 dark:bg-emerald-500/10",
    borderColor: "hover:border-emerald-300/50 dark:hover:border-emerald-500/30"
  },
  { 
    label: "Support", 
    value: 24,
    suffix: "/7",
    icon: Clock3, 
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100/50 dark:bg-blue-500/10",
    borderColor: "hover:border-blue-300/50 dark:hover:border-blue-500/30"
  },
  { 
    label: "Reliable Service", 
    value: 100,
    suffix: "%",
    icon: ShieldCheck, 
    color: "text-rose-500 dark:text-rose-400",
    bgColor: "bg-rose-100/50 dark:bg-rose-500/10",
    borderColor: "hover:border-rose-300/50 dark:hover:border-rose-500/30"
  },
];

const Counter = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(value),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.span ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-8 sm:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.10),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.10),transparent_28%)]" />
      <div className="container-wide relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center justify-center"
        >
          <p className="rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            Trusted by Travelers
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0)}
          className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card 
                className={`group h-full overflow-hidden rounded-2xl border-border/60 bg-background/85 py-0 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stat.borderColor}`}
              >
                <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-6">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14 ${stat.bgColor} ${stat.color}`}>
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      <Counter 
                        value={stat.value} 
                        suffix={stat.suffix} 
                        decimals={stat.value % 1 !== 0 ? 1 : 0} 
                      />
                    </p>
                    <p className="text-[10px] font-medium text-muted-foreground sm:text-sm">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
