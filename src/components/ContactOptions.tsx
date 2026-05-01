import { Card, CardContent } from "@/components/ui/card";
import { contactItems } from "@/lib/site-content";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactOptions() {
  const contactIcons = [Phone, MessageCircle, Mail];

  return (
    <div className="grid grid-cols-1 gap-4">
      {contactItems.map((item, idx) => {
        const Icon = contactIcons[idx];
        const palettes = [
          {
            text: "text-indigo-600 dark:text-indigo-400",
            bg: "bg-indigo-100 dark:bg-indigo-500/10",
            border: "hover:border-indigo-500/20",
          },
          {
            text: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-100 dark:bg-emerald-500/10",
            border: "hover:border-emerald-500/20",
          },
          {
            text: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-100 dark:bg-amber-500/10",
            border: "hover:border-amber-500/20",
          },
        ];
        const palette = palettes[idx % palettes.length];

        return (
          <Card
            key={item.title}
            className={`group overflow-hidden rounded-2xl border-border/50 bg-background/50 shadow-sm transition-all duration-300 hover:shadow-md ${palette.border}`}
          >
            <CardContent className="flex items-center justify-between p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${palette.bg} ${palette.text}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 items-center justify-center rounded-xl bg-muted/60 px-5 text-xs font-bold text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                Open
              </a>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
