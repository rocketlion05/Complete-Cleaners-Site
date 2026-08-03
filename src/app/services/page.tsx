import type { Metadata } from "next";
import { business } from "@/config/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services",
  description:
    "Recurring office cleaning, restroom care, floor maintenance, breakroom cleaning, trash support, and add-on services for professional properties in Fayetteville, Arkansas.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Commercial Cleaning Services | ${business.name}`,
    description:
      "Recurring office cleaning, restroom care, floor maintenance, and add-on services for professional properties in Fayetteville, Arkansas.",
    url: "/services",
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Commercial Cleaning Services | ${business.name}`,
    description:
      "Recurring office cleaning, restroom care, floor maintenance, and add-on services for professional properties in Fayetteville, Arkansas.",
  },
};

const routineServices = [
  {
    title: "Recurring Office Cleaning",
    body: "The core of what we do: scheduled after-hours visits that follow a written checklist built for your building. Work areas, lobbies, conference rooms, and private offices are cleaned on a consistent rotation so the space is ready before your team arrives.",
  },
  {
    title: "Restroom Cleaning",
    body: "Restrooms are cleaned and disinfected on every visit — toilets, urinals, sinks, mirrors, partitions, and floors. High-touch points such as door handles and dispensers get regular attention.",
  },
  {
    title: "Floor and Carpet Maintenance",
    body: "Routine vacuuming for carpeted areas and entry mats, plus dust mopping and damp mopping for hard floors. Consistent floor care keeps entries presentable and extends the life of your flooring.",
  },
  {
    title: "Breakroom and Common-Area Cleaning",
    body: "Counters, sinks, tables, and appliance exteriors are wiped down, and shared spaces are reset so they are ready for the next workday.",
  },
  {
    title: "Trash and Recycling Support",
    body: "Waste baskets are emptied and relined on every visit, and collected trash is taken to your designated disposal area. Recycling handling follows the arrangement in your service plan.",
  },
  {
    title: "Entry Glass and Detail Cleaning",
    body: "Interior entry doors and reachable interior glass are kept free of fingerprints and smudges, and details such as ledges, baseboard edges, and vents are addressed on rotation.",
  },
  {
    title: "Supply Restocking",
    body: "Customer-supplied restroom and breakroom products — paper towels, tissue, and soap — are restocked as part of routine visits so dispensers never sit empty.",
  },
  {
    title: "Initial Deep Cleaning",
    body: "Buildings that have gone without consistent service often need a one-time reset before recurring visits begin. An initial deep clean brings the property up to the standard the recurring checklist will then maintain. Quoted separately.",
  },
];

const addOns = [
  "Interior window cleaning",
  "Carpet extraction",
  "Detailed appliance cleaning",
  "Floor treatment",
  "Initial deep cleans",
  "Special event cleaning",
  "Additional disinfecting requests",
];

const exclusions = [
  "Biohazard cleanup",
  "Bodily-fluid remediation",
  "Mold remediation",
  "Pest removal",
  "Hazardous-waste removal",
  "Exterior high-rise window cleaning",
  "Heavy construction-debris removal",
  "Specialized healthcare sanitation, unless separately approved",
];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ label: "Services" }]} />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Commercial Cleaning Services
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-body">
          Routine recurring cleaning is the foundation of every service plan.
          Add-on services are quoted separately, so you only pay for what your
          property actually needs.
        </p>

        {/* Routine services */}
        <section aria-labelledby="routine-services" className="mt-14">
          <SectionHeading
            id="routine-services"
            eyebrow="Included in recurring service"
            title="Routine cleaning services"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {routineServices.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-line bg-paper p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-body">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section aria-labelledby="add-ons" className="mt-14">
          <div className="rounded-xl bg-mist p-8 sm:p-10">
            <SectionHeading id="add-ons" eyebrow="Quoted separately" title="Add-on services">
              <p>
                These services fall outside routine recurring visits and are
                quoted separately, either as one-time projects or scheduled
                extras.
              </p>
            </SectionHeading>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {addOns.map((addOn) => (
                <li
                  key={addOn}
                  className="rounded-lg border border-line bg-paper px-4 py-3 font-semibold text-ink"
                >
                  {addOn}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Exclusions */}
        <section aria-labelledby="exclusions" className="mt-14">
          <SectionHeading id="exclusions" title="Services we do not currently advertise">
            <p>
              To keep expectations clear, {business.name} does not currently
              advertise the following services. If your property has a need in
              one of these areas, we are glad to point you toward an appropriate
              specialty provider.
            </p>
          </SectionHeading>
          <ul className="mt-6 grid max-w-3xl gap-2 sm:grid-cols-2">
            {exclusions.map((item) => (
              <li key={item} className="flex items-start gap-2 text-body">
                <span aria-hidden="true" className="mt-1 text-faint">
                  –
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CtaSection
        title="Not sure what your building needs?"
        text="A free walkthrough is the fastest way to get a clear checklist and a fixed recurring price."
        buttonLabel="Request a Free Walkthrough"
        buttonHref="/quote"
      />
    </>
  );
}
