"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "HOME", match: (path: string) => path === "/" },
  { href: "/about", label: "ABOUT US", match: (path: string) => path.startsWith("/about") },
  { href: "/service", label: "SERVICES", match: (path: string) => path.startsWith("/service") },
  { href: "/contact", label: "CONTACT US", match: (path: string) => path.startsWith("/contact") },
] as const;

function navLinkClassName(isActive: boolean) {
  return isActive
    ? "flex h-full flex-1 items-center justify-center border-b-2 border-teal-300 text-teal-300"
    : "flex h-full flex-1 items-center justify-center transition hover:text-teal-300";
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex flex-col bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Lita Finemesh Logo"
            width={180}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>
        <button
          type="button"
          className="rounded-full bg-teal-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-teal-600"
        >
          REQUEST QUOTE -&gt;
        </button>
      </div>
      <div className="h-[30px] w-full bg-[#0A4D7C]">
        <nav className="hidden h-full w-full text-sm font-bold text-white md:flex">
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
      </div>
    </header>
  );
}
