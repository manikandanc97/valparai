interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  inverted?: boolean;
}

const palettes = [
  "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
  "bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
  "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
  "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
  "bg-violet-500/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-400",
  "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400",
];

const getBadgeColor = (text: string) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palettes[Math.abs(hash) % palettes.length];
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  inverted = false,
}: SectionHeadingProps) {
  const badgeColor = eyebrow ? getBadgeColor(eyebrow) : "";

  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${inverted ? "bg-white/10 text-white/80" : badgeColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-foreground"}`}>{title}</h2>
      {description ? (
        <p className={`mt-3 text-sm leading-6 sm:text-base ${inverted ? "text-white/80" : "text-muted-foreground"}`}>{description}</p>
      ) : null}
      <div className={`mt-5 h-1 w-20 rounded-full ${center ? "mx-auto" : ""} ${inverted ? "bg-white/30" : "bg-primary/40"}`} />
    </div>
  );
}

