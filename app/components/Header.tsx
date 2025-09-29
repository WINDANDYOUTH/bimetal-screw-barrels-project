"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy text-white shadow-md backdrop-blur">
      <div className="max-container flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold">
              SB
            </span>
            <div className="hidden flex-col text-left sm:flex">
              <span className="text-sm font-semibold tracking-wide uppercase">
                Screw Barrel Group
              </span>
              <span className="text-xs text-blue-100">
                Precision Bimetal Components
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition hover:text-orange-200 ${
                isActive(item.href) ? "text-orange-300" : "text-white/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-full bg-[rgba(249,115,22,0.95)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-400"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 lg:hidden"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-brand-navy-dark lg:hidden">
          <div className="max-container flex flex-col gap-4 py-6">
            <nav className="flex flex-col gap-1 text-base">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-full px-4 py-2 transition hover:bg-white/10 ${
                    isActive(item.href) ? "bg-white/10 text-orange-200" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

