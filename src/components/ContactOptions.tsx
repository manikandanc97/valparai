import { Card, CardContent } from "@/components/ui/card";
import { contactItems } from "@/lib/site-content";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactOptions() {
  const contactIcons = [Phone, MessageCircle, Mail];

  return (
    <div className="flex flex-1 flex-col gap-3 sm:gap-4">
      {contactItems.map((item, idx) => {
        const Icon = contactIcons[idx];
        const colorPalettes = [
          {
            text: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-100/50 dark:bg-blue-500/10",
            border: "hover:border-blue-300/50 dark:hover:border-blue-500/30",
          },
          {
            text: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-100/50 dark:bg-emerald-500/10",
            border:
              "hover:border-emerald-300/50 dark:hover:border-emerald-500/30",
          },
          {
            text: "text-rose-600 dark:text-rose-400",
            bg: "bg-rose-100/50 dark:bg-rose-500/10",
            border: "hover:border-rose-300/50 dark:hover:border-rose-500/30",
          },
        ];
        const palette = colorPalettes[idx % colorPalettes.length];

        return (
          <Card
            key={item.title}
            className={`group relative flex-1 overflow-hidden rounded-2xl border-border/50 bg-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${palette.border}`}
          >
            <CardContent className="flex h-full items-center justify-between gap-4 p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${palette.bg} ${palette.text}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {item.value}
                  </p>
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 items-center justify-center rounded-full bg-muted/80 px-4 text-xs font-semibold tracking-wide text-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-background sm:text-sm"
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
