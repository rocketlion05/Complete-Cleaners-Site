import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-sm font-bold uppercase tracking-wide text-faint">
        404 — Page not found
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-xl text-lg text-body">
        The page you&apos;re looking for may have moved or never existed. Try
        one of these instead:
      </p>
      <ul className="mt-6 flex flex-wrap gap-4 text-body">
        <li>
          <Link href="/services" className="font-semibold text-ink underline underline-offset-4">
            Services
          </Link>
        </li>
        <li>
          <Link href="/service-area" className="font-semibold text-ink underline underline-offset-4">
            Service Area
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-semibold text-ink underline underline-offset-4">
            About
          </Link>
        </li>
      </ul>
      <div className="mt-8">
        <ButtonLink href="/">Back to the homepage</ButtonLink>
      </div>
    </div>
  );
}
