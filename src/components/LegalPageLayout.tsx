import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type LegalPageLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, updated, children }: LegalPageLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumbs items={[{ label: title }]} />
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-faint">Last updated: {updated}</p>
      <div className="prose-legal mt-8 flex flex-col gap-6 text-body [&_h2]:mt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
