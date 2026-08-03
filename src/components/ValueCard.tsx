import type { ReactNode } from "react";
import { Sparkle } from "@/components/decor";

type ValueCardProps = {
  title: string;
  children: ReactNode;
};

export function ValueCard({ title, children }: ValueCardProps) {
  return (
    <div className="rounded-2xl bg-mist p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <Sparkle className="mb-3 size-5 text-sage" />
      <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
        {title}
      </h3>
      <p className="text-body">{children}</p>
    </div>
  );
}
