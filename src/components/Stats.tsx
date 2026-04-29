import { Users, Map as MapIcon, Star, ShieldCheck, UserCheck, Clock } from "lucide-react";

const stats = [
  { label: "Happy Travelers", value: "500+", icon: Users },
  { label: "Destinations", value: "12+", icon: MapIcon },
  { label: "Avg Rating", value: "4.9", icon: Star, iconClass: "text-accent" },
  { label: "Safe & Secure", value: "100%", icon: ShieldCheck },
  { label: "Experience", value: "10yr", icon: UserCheck },
  { label: "Support", value: "24/7", icon: Clock },
];

const Stats = () => {
  return (
    <section className="bg-background py-12 sm:py-20 border-b border-slate-100 dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary-subtle text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-premium-hover group-hover:-translate-y-2">
                <stat.icon className={`h-8 w-8 ${stat.iconClass || ""}`} />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-primary-dark mb-1 tracking-tighter">{stat.value}</p>
              <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Stats;
