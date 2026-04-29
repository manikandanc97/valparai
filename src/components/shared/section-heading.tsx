interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  inverted?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${inverted ? "text-white/70" : "text-secondary"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-foreground"}`}>{title}</h2>
      {description ? (
        <p className={`mt-3 text-sm leading-6 sm:text-base ${inverted ? "text-white/80" : "text-muted-foreground"}`}>{description}</p>
      ) : null}
    </div>
  );
}

