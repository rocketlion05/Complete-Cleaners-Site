import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
};

export function ServiceCard({ title, children, icon }: ServiceCardProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-ink/25 hover:shadow-md">
      {icon ? (
        <div
          aria-hidden="true"
          className="flex size-13 items-center justify-center rounded-xl bg-mist text-ink transition-colors group-hover:bg-sage-light group-hover:text-sage"
        >
          {icon}
        </div>
      ) : null}
      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
        {title}
      </h3>
      <p className="text-body">{children}</p>
    </div>
  );
}
