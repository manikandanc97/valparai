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
    <section className="bg-muted/20 py-12 sm:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <Card 
              key={idx} 
              className={`group overflow-hidden rounded-2xl border-border/50 bg-background py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${stat.borderColor}`}
            >
              <CardContent className="flex items-center gap-4 p-5 sm:p-6">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${stat.bgColor} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
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
