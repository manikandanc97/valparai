import { cn } from "@/lib/utils";

export type BadgeColor = "emerald" | "blue" | "violet" | "amber" | "rose" | "cyan" | "indigo" | "slate" | "orange" | "gold";

interface PillBadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const palettes: Record<BadgeColor, string> = {
  emerald: "bg-emerald-50/90 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
  blue: "bg-blue-50/90 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30",
  violet: "bg-violet-50/90 text-violet-700 border-violet-200 dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/30",
  amber: "bg-amber-50/90 text-amber-700 border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  rose: "bg-rose-50/90 text-rose-700 border-rose-200 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30",
  cyan: "bg-cyan-50/90 text-cyan-700 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/30",
  indigo: "bg-indigo-50/90 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30",
  slate: "bg-slate-50/90 text-slate-700 border-slate-200 dark:bg-slate-500/20 dark:text-slate-300 dark:border-slate-500/30",
  orange: "bg-orange-50/90 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/30",
  gold: "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30 dark:bg-[#D4AF37]/25 dark:text-[#D4AF37] dark:border-[#D4AF37]/40",
};

export default function PillBadge({ children, color = "cyan", className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300",
        palettes[color],
        className
      )}
    >
      {children}
    </span>
  );
}
