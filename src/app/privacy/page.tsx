import type { Metadata } from "next";
import { business } from "@/config/business";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses, and protects information submitted through this website.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="August 4, 2026">
      <p>
        This policy explains, in plain language, what information{" "}
        {business.legalName} (&ldquo;{business.name},&rdquo; &ldquo;we,&rdquo;
        or &ldquo;us&rdquo;) collects through this website and how it is used.
        We run a commercial cleaning business. We collect only what we need to
        respond to quote requests and communicate with customers.
      </p>

      <section>
        <h2>Information you provide</h2>
        <p>
          When you submit the quote-request form, we collect what you enter:
          your name, business name, email address, phone number, the property
          address and city, approximate square footage, property type, desired
          cleaning frequency, preferred service days, approximate closing
          time, number of restrooms, flooring types, current cleaning
          arrangement, requested start date, your cleaning concerns, any
          additional details you include, and your preferred contact method.
        </p>
        <p>
          If you call, text, or email us directly, we keep the contact details
          and correspondence needed to respond to you and manage any resulting
          service relationship.
        </p>
      </section>

      <section>
        <h2>Information collected automatically</h2>
        <p>
          Our hosting provider keeps standard server logs when you visit the
          site, which can include your IP address, browser type, and the pages
          requested. These logs exist for security and reliability. We do not
          use analytics tools, advertising pixels, or visitor tracking on this
          website. If we add analytics in the future, we will update this
          policy first.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This website does not set tracking or advertising cookies. If that
          ever changes, this policy will be updated to say what is set and
          why.
        </p>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To contact you about your quote request</li>
          <li>To schedule and conduct a walkthrough</li>
          <li>To prepare and deliver a service proposal</li>
          <li>To maintain records of our communication with you</li>
        </ul>
        <p>
          We do not sell personal information, and we do not share it with
          third parties for their marketing purposes. Submitting the quote
          form does not create a service agreement; see our{" "}
          <a
            href="/terms"
            className="font-semibold text-ink underline underline-offset-4"
          >
            Terms of Use
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>
          We use a small number of service providers to operate this website,
          and each one handles your information only as needed to provide its
          service:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> hosts the website and processes web
            requests, including the server logs described above.
          </li>
          <li>
            <strong>Resend</strong> delivers quote-form submissions to our
            business email and sends you a confirmation email.
          </li>
          <li>
            <strong>Google Workspace</strong> provides our business email,
            where quote requests and correspondence are received and stored.
          </li>
        </ul>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          Quote requests are delivered to us by email and are not stored in a
          separate website database. We keep quote requests and related
          correspondence in our business email for as long as reasonably
          needed to respond to inquiries, provide services, and meet ordinary
          business and legal record-keeping needs. You may ask us to delete
          your information at any time using the contact email below.
        </p>
      </section>

      <section>
        <h2>Data security</h2>
        <p>
          This website is served over an encrypted connection (HTTPS), and
          form submissions are transmitted to us through the providers listed
          above. We take reasonable steps to protect your information, but no
          website or email system can be guaranteed to be completely secure.
          Please do not submit sensitive personal information through this
          website. The quote form does not need it, and we do not ask for it.
          We do not collect payment information through this website.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You may email us at any time to ask what information we have about
          you, to correct it, or to have it deleted. We will honor reasonable
          requests promptly, except where we need to keep a record for
          legitimate business or legal reasons.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          This website is for businesses and is not directed to children
          under 13. We do not knowingly collect personal information from
          children. If you believe a child has submitted information through
          this site, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If our practices change, we will update this policy and revise the
          date at the top of this page.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy or your information can be sent to{" "}
          <a
            href={`mailto:${business.email}`}
            className="font-semibold text-ink underline underline-offset-4"
          >
            {business.email}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
