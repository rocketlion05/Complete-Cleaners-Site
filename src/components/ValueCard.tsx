import type { ReactNode } from "react";

type ValueCardProps = {
  title: string;
  children: ReactNode;
};

export function ValueCard({ title, children }: ValueCardProps) {
  return (
    <div className="rounded-xl bg-mist p-6">
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-body">{children}</p>
    </div>
  );
}
