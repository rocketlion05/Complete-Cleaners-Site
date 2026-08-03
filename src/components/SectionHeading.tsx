import type { ReactNode } from "react";
import { Sparkle } from "@/components/decor";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  /** Optional id for the h2, so sections can reference it via aria-labelledby. */
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-2 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-sage">
          <Sparkle className="size-3.5" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {children ? <div className="mt-4 text-lg text-body">{children}</div> : null}
    </div>
  );
}
