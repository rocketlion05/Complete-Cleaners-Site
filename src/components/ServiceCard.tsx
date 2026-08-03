import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
};

export function ServiceCard({ title, children, icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6">
      {icon ? (
        <div aria-hidden="true" className="text-ink">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="text-body">{children}</p>
    </div>
  );
}
