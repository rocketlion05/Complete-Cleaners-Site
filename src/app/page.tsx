import type { Metadata } from "next";
import { business } from "@/config/business";
import { Logo } from "@/components/Logo";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ValueCard } from "@/components/ValueCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaSection } from "@/components/CtaSection";
import { ButtonLink } from "@/components/ui/Button";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Commercial Cleaning in Fayetteville, AR | ${business.name}`,
  description:
    "Complete Cleaners provides dependable after-hours commercial cleaning for offices and professional properties in Fayetteville and Northwest Arkansas. Request a free walkthrough.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Commercial Cleaning in Fayetteville, AR | ${business.name}`,
    description:
      "Dependable after-hours commercial cleaning for offices and professional properties in Fayetteville and Northwest Arkansas.",
    url: "/",
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Commercial Cleaning in Fayetteville, AR | ${business.name}`,
    description:
      "Dependable after-hours commercial cleaning for offices and professional properties in Fayetteville and Northwest Arkansas.",
  },
};

const audiences = [
  "Professional offices",
  "Law and accounting firms",
  "Insurance agencies",
  "Real-estate and property-management offices",
  "Counseling and therapy practices",
  "Churches and community facilities",
  "Small corporate offices",
  "Showrooms and selected commercial properties",
];

const coreServices = [
  {
    title: "Trash removal and liner replacement",
    text: "Waste baskets emptied and relined on every visit.",
  },
  {
    title: "Vacuuming and carpet care",
    text: "Routine vacuuming of carpeted areas, entries, and mats.",
  },
  {
    title: "Hard-floor mopping",
    text: "Dust mopping and damp mopping for tile, vinyl, and similar floors.",
  },
  {
    title: "Restroom cleaning",
    text: "Fixtures, mirrors, partitions, and floors cleaned and disinfected.",
  },
  {
    title: "Breakroom cleaning",
    text: "Counters, sinks, tables, and appliance exteriors wiped down.",
  },
  {
    title: "Dusting and surface wiping",
    text: "Desks, ledges, and common surfaces dusted on a set rotation.",
  },
  {
    title: "Interior entry-glass cleaning",
    text: "Entry doors and interior glass kept free of smudges.",
  },
  {
    title: "Restroom-product restocking",
    text: "Customer-supplied paper products and soap restocked as needed.",
  },
  {
    title: "Recurring after-hours service",
    text: "Cleaning scheduled around your closing time, not during it.",
  },
  {
    title: "Customized building checklists",
    text: "A written scope of work specific to your property.",
  },
];

const steps = [
  {
    title: "Request a walkthrough",
    description:
      "Tell us about your property using the quote form or a quick phone call.",
  },
  {
    title: "We review your property and priorities",
    description:
      "A short visit to see the space, understand access, and hear what matters most.",
  },
  {
    title: "You receive a fixed recurring-service proposal",
    description:
      "A written proposal with a clear checklist and a fixed recurring price.",
  },
  {
    title: "Cleaning begins on schedule",
    description:
      "Service starts according to the agreed checklist and schedule.",
  },
];

export default function HomePage() {
  const activeFlags = [
    business.flags.insured ? "Insured" : null,
    business.flags.bonded ? "Bonded" : null,
    business.flags.licensed ? "Licensed" : null,
  ].filter(Boolean);

  return (
    <>
      <LocalBusinessJsonLd />
      {/* Hero */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Dependable Commercial Cleaning in Fayetteville
            </h1>
            <p className="mt-5 text-lg text-body sm:text-xl">
              {business.name} provides consistent after-hours cleaning for
              offices and professional spaces throughout Fayetteville and
              Northwest Arkansas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Request a Free Walkthrough</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Our Services
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-semibold text-faint">
              Clear checklists. Reliable communication. Consistent results.
            </p>
            {activeFlags.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {activeFlags.map((flag) => (
                  <li
                    key={flag}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-semibold text-ink"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="hidden justify-center lg:flex">
            <Logo size={220} priority className="drop-shadow-sm" />
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section aria-labelledby="who-we-serve" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="who-we-serve"
          eyebrow="Who we serve"
          title="Built for professional spaces"
        >
          <p>
            We focus on small and medium-sized professional properties where a
            clean, orderly space is part of doing business.
          </p>
        </SectionHeading>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="rounded-lg border border-line bg-paper px-4 py-3 font-semibold text-ink"
            >
              {audience}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-body">
          Service availability depends on each property&apos;s needs, access
          requirements, and location.
        </p>
      </section>

      {/* Core services */}
      <section aria-labelledby="core-services" className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="core-services"
            eyebrow="Core services"
            title="Routine cleaning, done on a checklist"
          >
            <p>
              Every visit follows a written scope of work, so nothing depends on
              memory or guesswork.
            </p>
          </SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <ServiceCard key={service.title} title={service.title}>
                {service.text}
              </ServiceCard>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/services"
              className="font-semibold text-ink underline underline-offset-4"
            >
              See the full Services page
            </Link>
          </p>
        </div>
      </section>

      {/* Why Complete Cleaners */}
      <section aria-labelledby="why-us" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="why-us"
          eyebrow="Why Complete Cleaners"
          title="What working with us looks like"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ValueCard title="Documented Cleaning Checklists">
            Each property receives a clear, customized scope of work.
          </ValueCard>
          <ValueCard title="Dependable Communication">
            Questions and service concerns receive timely attention.
          </ValueCard>
          <ValueCard title="Consistent Quality">
            Building-specific procedures are designed to produce repeatable
            results, visit after visit.
          </ValueCard>
          <ValueCard title="Local Accountability">
            The company is locally operated and focused on Fayetteville and
            Northwest Arkansas.
          </ValueCard>
        </div>
      </section>

      {/* Testimonials — hidden until real quotes exist and the flag is on */}
      {business.flags.showTestimonials && business.testimonials.length > 0 ? (
        <section aria-labelledby="testimonials" className="border-y border-line bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 id="testimonials" className="text-3xl font-bold text-ink">
              What customers say
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {business.testimonials.map((t) => (
                <figure key={t.author} className="rounded-xl border border-line bg-paper p-6">
                  <blockquote className="text-body">“{t.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-ink">
                    {t.author}, {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* How it works */}
      <section aria-labelledby="how-it-works" className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="how-it-works"
            eyebrow="How it works"
            title="From walkthrough to first clean"
          />
          <div className="mt-8">
            <ProcessSteps steps={steps} />
          </div>
          <p className="mt-8 max-w-2xl text-body">
            Quotes are based on factors such as property size, service
            frequency, flooring, restroom count, access, and requested tasks —
            so your price reflects your building, not a one-size-fits-all rate.
          </p>
        </div>
      </section>

      {/* Service guarantee */}
      <section aria-labelledby="guarantee" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-xl border border-line bg-paper p-8 sm:p-10">
          <h2 id="guarantee" className="text-2xl font-bold text-ink sm:text-3xl">
            Our service guarantee
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-body">
            If a checklist item is missed, report it within 24 hours and{" "}
            {business.name} will arrange to correct the missed item at no
            additional service charge.
          </p>
          <ul className="mt-6 max-w-2xl list-disc space-y-1 pl-6 text-body">
            <li>Applies to tasks included in the written scope of service</li>
            <li>Subject to reasonable access to the property</li>
            <li>Does not cover new requests or excluded services</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection
        title="Let’s Build a Cleaning Plan for Your Property"
        text="Schedule a free walkthrough and receive a customized recurring-service proposal."
        buttonLabel="Request a Free Walkthrough"
        buttonHref="/quote"
      />
    </>
  );
}
