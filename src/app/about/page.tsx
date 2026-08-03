import type { Metadata } from "next";
import { business } from "@/config/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ValueCard } from "@/components/ValueCard";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Complete Cleaners was created to give Fayetteville businesses dependable commercial cleaning with clear expectations and responsive communication.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${business.name}`,
    description:
      "Complete Cleaners was created to give Fayetteville businesses dependable commercial cleaning with clear expectations and responsive communication.",
    url: "/about",
    siteName: business.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `About | ${business.name}`,
    description:
      "Dependable commercial cleaning with clear expectations and responsive communication in Fayetteville, Arkansas.",
  },
};

const beliefs = [
  {
    title: "Reliability matters",
    body: "Showing up as scheduled, every time, is the baseline — not the goal.",
  },
  {
    title: "Details matter",
    body: "The corners, edges, and touch points are where cleaning is won or lost.",
  },
  {
    title: "Communication prevents problems",
    body: "Most service failures start as small, unspoken issues. We make it easy to raise them early.",
  },
  {
    title: "Clear systems support consistent service",
    body: "Written checklists and building-specific procedures mean quality does not depend on memory.",
  },
  {
    title: "Trust must be earned repeatedly",
    body: "Access to your building is a responsibility. We treat every visit as a chance to keep earning it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ label: "About" }]} />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          About {business.name}
        </h1>

        <div className="mt-8 max-w-2xl space-y-5 text-lg text-body">
          <p>
            {business.name} was created to provide Fayetteville businesses with
            something simple but often difficult to find: dependable cleaning,
            clear expectations, and responsive communication.
          </p>
          <p>
            Too many offices deal with cleaning service that drifts — visits
            that get shorter over time, tasks that quietly disappear, and
            concerns that go unanswered. Our answer is structure: every property
            gets a written scope of work, and every visit follows it.
          </p>
          <p>
            The company is locally operated and focused on {business.primaryCity}{" "}
            and {business.region}, which keeps accountability close to home.
          </p>
        </div>

        <section aria-labelledby="focus" className="mt-14">
          <h2 id="focus" className="text-3xl font-bold tracking-tight text-ink">
            What we focus on
          </h2>
          <ul className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Written expectations",
              "Building-specific cleaning plans",
              "Accountability",
              "Long-term customer relationships",
              "Systems that support consistent service",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-paper px-4 py-3 font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="beliefs" className="mt-14">
          <h2 id="beliefs" className="text-3xl font-bold tracking-tight text-ink">
            What We Believe
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief) => (
              <ValueCard key={belief.title} title={belief.title}>
                {belief.body}
              </ValueCard>
            ))}
          </div>
        </section>
      </div>

      <CtaSection
        title="See if we’re a fit for your building"
        text="A walkthrough takes about twenty minutes and comes with no obligation."
        buttonLabel="Request a Free Walkthrough"
        buttonHref="/quote"
      />
    </>
  );
}
