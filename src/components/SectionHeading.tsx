import type { ReactNode } from "react";

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
        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-sage">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-lg text-body">{children}</div> : null}
    </div>
  );
}
