import type { Metadata } from "next";
import { business } from "@/config/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Complete Cleaners serves Fayetteville, Arkansas, with selected nearby Northwest Arkansas communities considered depending on route availability.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: `Service Area | ${business.name}`,
    description:
      "Complete Cleaners serves Fayetteville, Arkansas, with selected nearby Northwest Arkansas communities considered depending on route availability.",
    url: "/service-area",
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Service Area | ${business.name}`,
    description:
      "Serving Fayetteville, Arkansas, with nearby Northwest Arkansas communities considered by route.",
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ label: "Service Area" }]} />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Where We Work
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <section aria-labelledby="primary-area">
              <h2 id="primary-area" className="text-2xl font-bold text-ink">
                Primary service area
              </h2>
              <p className="mt-3 text-lg text-body">
                {business.name} is based in and focused on{" "}
                <strong className="text-ink">
                  {business.primaryCity}, {business.stateFull}
                </strong>
                . Keeping our routes concentrated is part of how we deliver
                consistent, dependable service.
              </p>
            </section>

            <section aria-labelledby="nearby-areas">
              <h2 id="nearby-areas" className="text-2xl font-bold text-ink">
                Nearby communities
              </h2>
              <p className="mt-3 text-body">
                Selected nearby {business.region} communities may be considered
                depending on route availability and property requirements,
                including:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {[...business.nearbyAreas, `Other nearby ${business.region} locations`].map(
                  (area) => (
                    <li
                      key={area}
                      className="rounded-full border border-line bg-mist px-4 py-1.5 text-sm font-semibold text-ink"
                    >
                      {area}
                    </li>
                  )
                )}
              </ul>
              <p className="mt-4 text-body">
                Being listed here is not a guarantee of service — availability
                for properties outside Fayetteville is confirmed during the
                quote process.
              </p>
            </section>
          </div>

          <ServiceAreaMap />
        </div>
      </div>

      <CtaSection
        title="Wondering if your property qualifies?"
        text="Send a quote request with your property's city and we'll confirm availability right away."
        buttonLabel="Request a Free Walkthrough"
        buttonHref="/quote"
      />
    </>
  );
}
