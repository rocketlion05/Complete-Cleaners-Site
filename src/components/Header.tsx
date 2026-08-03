import Link from "next/link";
import { business } from "@/config/business";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { ButtonLink } from "@/components/ui/Button";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-ink"
          aria-label={`${business.name} — home`}
        >
          <Logo size={36} priority />
          <span className="text-lg leading-tight">{business.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-body hover:bg-mist hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink
            href="/quote"
            className="ml-2 !min-h-10 !px-4 !py-2 !text-sm"
          >
            Request a Quote
          </ButtonLink>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
