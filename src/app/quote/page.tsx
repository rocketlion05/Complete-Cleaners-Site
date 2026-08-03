import type { Metadata } from "next";
import { business } from "@/config/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Walkthrough",
  description:
    "Request a free commercial cleaning walkthrough in Fayetteville, Arkansas. Receive a customized recurring-service proposal with a clear checklist and fixed pricing.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: `Request a Free Walkthrough | ${business.name}`,
    description:
      "Request a free commercial cleaning walkthrough in Fayetteville, Arkansas. Receive a customized recurring-service proposal.",
    url: "/quote",
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Request a Free Walkthrough | ${business.name}`,
    description:
      "Request a free commercial cleaning walkthrough in Fayetteville, Arkansas.",
  },
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumbs items={[{ label: "Request a Quote" }]} />
      <div className="mt-4 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Request a Free Commercial Cleaning Walkthrough
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-body">
            Tell us about your property and we&apos;ll follow up to schedule a
            walkthrough. After the visit, you&apos;ll receive a written proposal
            with a customized checklist and a fixed recurring price.
          </p>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>

        <aside className="lg:pt-24" aria-label="Contact information">
          <div className="rounded-xl border border-line bg-mist p-6">
            <h2 className="text-lg font-bold text-ink">Prefer to reach out directly?</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-faint">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${business.phoneHref}`}
                    className="text-base font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-faint">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${business.email}`}
                    className="text-base font-semibold text-ink underline-offset-4 hover:underline break-all"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-faint">
                  Hours
                </dt>
                <dd className="mt-1 text-body">{business.hoursStatement}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
