import PillBadge, { BadgeColor } from "@/components/shared/pill-badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  inverted?: boolean;
}

const getBadgeColor = (text: string): BadgeColor => {
  const lower = text.toLowerCase();
  if (lower.includes("why") || lower.includes("choose")) return "emerald";
  if (lower.includes("package")) return "violet";
  if (lower.includes("gallery")) return "rose";
  if (lower.includes("contact")) return "blue";
  if (lower.includes("about")) return "amber";
  return "cyan";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  inverted = false,
}: SectionHeadingProps) {
  const color = eyebrow ? getBadgeColor(eyebrow) : "cyan";

  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className={`mb-4 ${center ? "flex justify-center" : ""}`}>
          <PillBadge color={color} className={inverted ? "bg-white/10 text-white/90 shadow-none" : ""}>
            {eyebrow}
          </PillBadge>
        </div>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-sm leading-6 sm:text-base ${inverted ? "text-white/80" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`mt-5 h-1 w-20 rounded-full ${center ? "mx-auto" : ""} ${inverted ? "bg-white/30" : "bg-primary/40"}`}
      />
    </div>
  );
}
