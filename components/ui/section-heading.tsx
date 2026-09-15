type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div
        className={`mb-5 flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-[var(--accent)]" aria-hidden />
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
          {eyebrow}
        </p>
        <span className="h-px w-10 bg-[var(--line-strong)]" aria-hidden />
      </div>
      <h2 className="text-balance text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
