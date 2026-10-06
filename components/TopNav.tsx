"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";

const NAV_ITEMS = [
  { href: "/", label: "HOME", match: (path: string) => path === "/" },
  { href: "/about", label: "ABOUT US", match: (path: string) => path.startsWith("/about") },
  { href: "/service", label: "SERVICES", match: (path: string) => path.startsWith("/service") },
  { href: "/contact", label: "CONTACT US", match: (path: string) => path.startsWith("/contact") },
] as const;

function navLinkClassName(isActive: boolean) {
  return isActive
    ? "relative flex h-full items-center justify-center px-3 text-[#0A4D7C] after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-100 after:bg-[#00A896] after:transition-transform after:duration-300 after:content-['']"
    : "relative flex h-full items-center justify-center px-3 text-[#0A4D7C] after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#00A896] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100";
}

function mobileNavLinkClassName(isActive: boolean) {
  return isActive
    ? "relative inline-flex w-fit px-4 py-3 text-sm font-bold text-[#0A4D7C] after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-100 after:bg-[#00A896] after:transition-transform after:duration-300 after:content-['']"
    : "relative inline-flex w-fit px-4 py-3 text-sm font-bold text-[#0A4D7C] after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#00A896] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 md:px-8 md:py-4">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Lita Finemesh Logo"
            width={180}
            height={60}
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
            priority
          />
        </Link>
        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <nav className="hidden h-10 items-center gap-4 text-xs font-bold lg:text-sm md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClassName(item.match(pathname))}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#0A4D7C] transition hover:bg-slate-100 md:hidden"
          >
            {isMenuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 sm:px-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClassName(item.match(pathname))}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
