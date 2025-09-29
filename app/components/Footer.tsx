import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

const productLinks = [
  "Bimetallic Screw Barrel",
  "Haitian Injection Machine Screw Barrel",
  "Fully Hardened Screws",
  "Nitride Screw Barrel",
  "Extruder Screw Barrel",
  "Conical Twin Screw Barrel",
  "Parallel Twin Screw Barrel",
  "Single Screw Barrel of Injection Moulding Machine",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-surface text-brand-steel">
      <div className="max-container grid gap-6 py-12 lg:grid-cols-4 lg:items-start lg:gap-12">
        <div className="space-y-4">
          <div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-lg font-semibold text-white">
              SB
            </span>
            <p className="mt-4 text-sm text-brand-gray">
              Precision screw barrels engineered for high wear resistance and long service life across Southeast Asia.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <strong className="font-semibold">Hotline:</strong> +86 755 1234 5678 (CN) | +65 3129 8765 (SEA)
            </p>
            <p>
              <strong className="font-semibold">Email:</strong> sales@screwbarrelpro.com
            </p>
            <p>
              <strong className="font-semibold">WhatsApp / WeChat:</strong> +86 139 0000 0000
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-gray">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Product Families
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-gray">
            {productLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Stay Connected
          </h4>
          <p className="text-sm text-brand-gray">
            Follow our engineering insights, maintenance tips, and SEA logistics updates.
          </p>
          <div className="flex gap-3 text-sm">
            <Link
              href="https://www.linkedin.com"
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-navy hover:text-brand-navy"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.youtube.com"
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-navy hover:text-brand-navy"
            >
              YouTube
            </Link>
          </div>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-100 py-4">
        <div className="max-container flex flex-col gap-2 text-xs text-brand-gray sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Screw Barrel Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="transition hover:text-brand-navy">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-brand-navy">
              Terms
            </Link>
            <Link href="/sitemap" className="transition hover:text-brand-navy">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
