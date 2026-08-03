import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { Sparkle } from "@/components/decor";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_auto]">
      <div className="flex flex-col items-start">
        <p className="text-sm font-bold uppercase tracking-wide text-faint">
          404 — Page not found
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Well, this page got swept away
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
      <div className="relative hidden justify-center lg:flex" aria-hidden="true">
        <Sparkle className="absolute -left-6 top-4 size-6 text-sage" />
        <Sparkle className="absolute -right-4 bottom-10 size-4 text-ink/30" />
        <Logo size={200} />
      </div>
    </div>
  );
}
