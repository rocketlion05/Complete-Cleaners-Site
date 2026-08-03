import Link from "next/link";
import { business } from "@/config/business";
import { Logo } from "@/components/Logo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/quote", label: "Request a Quote" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <div>
              <p className="font-bold text-ink">{business.name}</p>
              <p className="text-sm text-body">Commercial Cleaning Services</p>
            </div>
          </div>
          <p className="text-sm text-body">
            {business.primaryCity}, {business.stateFull}
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-faint">
            Contact
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href={`tel:${business.phoneHref}`}
                className="font-semibold text-ink underline-offset-4 hover:underline"
              >
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="font-semibold text-ink underline-offset-4 hover:underline"
              >
                {business.email}
              </a>
            </li>
            <li className="max-w-xs text-body">{business.hoursStatement}</li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-faint">
            Pages
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body underline-offset-4 hover:text-ink hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-faint sm:px-6">
          © {year} {business.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
