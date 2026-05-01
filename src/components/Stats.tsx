import { Clock3, MapPinned, ShieldCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { 
    label: "Avg Rating", 
    value: "4.9/5", 
    icon: Star, 
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-100/50 dark:bg-amber-500/10",
    borderColor: "hover:border-amber-300/50 dark:hover:border-amber-500/30"
  },
  { 
    label: "Routes Covered", 
    value: "12+", 
    icon: MapPinned, 
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-100/50 dark:bg-emerald-500/10",
    borderColor: "hover:border-emerald-300/50 dark:hover:border-emerald-500/30"
  },
  { 
    label: "Support", 
    value: "24/7", 
    icon: Clock3, 
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100/50 dark:bg-blue-500/10",
    borderColor: "hover:border-blue-300/50 dark:hover:border-blue-500/30"
  },
  { 
    label: "Reliable Service", 
    value: "100%", 
    icon: ShieldCheck, 
    color: "text-rose-500 dark:text-rose-400",
    bgColor: "bg-rose-100/50 dark:bg-rose-500/10",
    borderColor: "hover:border-rose-300/50 dark:hover:border-rose-500/30"
  },
];

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-8 sm:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.10),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.10),transparent_28%)]" />
      <div className="container-wide relative">
        <div className="mb-6 flex items-center justify-center">
          <p className="rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            Trusted by Travelers
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <Card 
              key={idx} 
              className={`group overflow-hidden rounded-2xl border-border/60 bg-background/85 py-0 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stat.borderColor}`}
            >
              <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-6">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14 ${stat.bgColor} ${stat.color}`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{stat.value}</p>
                  <p className="text-[10px] font-medium text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
