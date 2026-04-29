import { Clock3, MapPinned, ShieldCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Avg Rating", value: "4.9/5", icon: Star },
  { label: "Routes Covered", value: "12+", icon: MapPinned },
  { label: "Support", value: "24/7", icon: Clock3 },
  { label: "Reliable Service", value: "100%", icon: ShieldCheck },
];

const Stats = () => {
  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <Card key={idx} className="rounded-xl border-border/70 bg-background/80 py-0">
              <CardContent className="flex items-center gap-3 p-4 sm:p-5">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <stat.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground sm:text-xl">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
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
