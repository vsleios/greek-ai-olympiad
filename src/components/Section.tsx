import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-border/70 py-20 md:py-28"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl"
          >
            {title}
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}
