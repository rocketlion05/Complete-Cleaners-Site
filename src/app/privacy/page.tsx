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
    <LegalPageLayout title="Privacy Policy" updated="August 2026">
      <p>
        This policy explains, in plain language, what information{" "}
        {business.legalName} (&ldquo;{business.name},&rdquo; &ldquo;we,&rdquo;
        or &ldquo;us&rdquo;) collects through this website and how it is used.
      </p>

      <section>
        <h2>Information you submit</h2>
        <p>
          When you submit the quote-request form, we collect the information you
          provide: your name, business name, email address, phone number, the
          property address and details, and any notes you include. We use this
          information only to respond to your request, schedule a walkthrough,
          and prepare a service proposal.
        </p>
      </section>

      <section>
        <h2>Contact information</h2>
        <p>
          If you call, text, or email us, we keep the contact details and
          correspondence needed to respond to you and manage any resulting
          service relationship.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          If website analytics are enabled, we may collect basic, aggregated
          usage information such as pages visited, approximate location at the
          city level, browser type, and referring site. Analytics data is used
          only to understand how the website is used and to improve it. We do
          not use analytics to personally identify visitors.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This website does not require cookies for its core function. If
          analytics are enabled, the analytics provider may set cookies or use
          similar technologies as described in its own privacy documentation.
          You can block or delete cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>How quote information is used</h2>
        <ul>
          <li>To contact you about your request</li>
          <li>To schedule and conduct a walkthrough</li>
          <li>To prepare and deliver a service proposal</li>
          <li>To maintain records of our communication with you</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share it with
          third parties for their marketing purposes.
        </p>
      </section>

      <section>
        <h2>Email communication</h2>
        <p>
          Submitting the quote form sends your request to our business email and
          may trigger a confirmation email to the address you provide. We use
          your email address to respond to your inquiry, not to add you to
          marketing lists.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We keep quote requests and related correspondence for as long as
          reasonably needed to respond to inquiries, provide services, and meet
          ordinary business and legal record-keeping needs. You may ask us to
          delete your information by emailing us at the address below.
        </p>
      </section>

      <section>
        <h2>Data security</h2>
        <p>
          We take reasonable steps to protect the information you send us, but
          no website or email system can be guaranteed to be completely secure.
          Please do not submit sensitive personal information through this
          website. The quote form does not need it, and we do not ask for it.
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

      <p className="rounded-lg bg-mist p-4 text-sm">
        Note: This policy is a plain-language starting point prepared before
        launch. It should be reviewed, ideally with legal counsel, before the
        website goes live, and it is not a substitute for legal advice.
      </p>
    </LegalPageLayout>
  );
}
