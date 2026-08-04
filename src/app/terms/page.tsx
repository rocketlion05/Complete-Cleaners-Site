import type { Metadata } from "next";
import { business } from "@/config/business";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${business.name} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" updated="August 4, 2026">
      <p>
        These terms govern your use of this website, operated by{" "}
        {business.legalName} (&ldquo;{business.name},&rdquo; &ldquo;we,&rdquo;
        or &ldquo;us&rdquo;). By using the website, you accept these terms.
      </p>

      <section>
        <h2>Informational purpose</h2>
        <p>
          The content on this website is provided for general information
          about our services. While we work to keep it accurate, content may
          change at any time without notice, and we do not guarantee that
          every detail is current or error-free.
        </p>
      </section>

      <section>
        <h2>Quote requests are not contracts</h2>
        <p>
          Submitting a quote request, receiving a proposal, or corresponding
          with us does not create a service agreement. Service begins only
          after a separate written agreement is signed by both parties. We may
          decline any request, and we do not guarantee that every property is
          within our service area.
        </p>
      </section>

      <section>
        <h2>Customer reviews</h2>
        <p>
          Nothing in these terms restricts you from posting or sharing an
          honest review of our services, positive or negative, on any
          platform.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The website&apos;s content, including text, graphics, and the{" "}
          {business.name} name and logo, belongs to {business.legalName} or
          its licensors. You may not reuse it for commercial purposes without
          written permission.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {business.legalName} is not
          liable for damages arising from your use of this website or
          reliance on its content. The website is provided &ldquo;as
          is&rdquo; without warranties of any kind. These terms apply to the
          website only; any cleaning services we provide are governed by the
          separate written service agreement for those services.
        </p>
      </section>

      <section>
        <h2>Governing law and venue</h2>
        <p>
          These terms are governed by the laws of the State of Arkansas,
          without regard to conflict-of-law principles. Any dispute arising
          from use of this website will be brought in the state or federal
          courts located in Washington County, Arkansas.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Changes take effect
          when posted on this page, and the date at the top of this page
          shows the most recent revision.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a
            href={`mailto:${business.email}`}
            className="font-semibold text-ink underline underline-offset-4"
          >
            {business.email}
          </a>{" "}
          or{" "}
          <a
            href={`tel:${business.phoneHref}`}
            className="font-semibold text-ink underline underline-offset-4"
          >
            {business.phone}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
