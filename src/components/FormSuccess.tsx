import Link from "next/link";
import { business } from "@/config/business";

export function FormSuccess() {
  return (
    <div
      role="status"
      className="rounded-xl border border-line bg-mist p-8 sm:p-10"
    >
      <div
        aria-hidden="true"
        className="mb-4 flex size-12 items-center justify-center rounded-full bg-sage-light text-sage"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-ink">Request received</h2>
      <p className="mt-3 max-w-prose text-body">
        Thanks — your walkthrough request is on its way. We will follow up to
        confirm a time to visit your property. If you would rather talk now,
        call{" "}
        <a
          href={`tel:${business.phoneHref}`}
          className="font-semibold text-ink underline underline-offset-4"
        >
          {business.phone}
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${business.email}`}
          className="font-semibold text-ink underline underline-offset-4"
        >
          {business.email}
        </a>
        .
      </p>
      <p className="mt-6">
        <Link
          href="/"
          className="font-semibold text-ink underline underline-offset-4"
        >
          Back to the homepage
        </Link>
      </p>
    </div>
  );
}
