"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

function navLinkClassName(isActive: boolean) {
  return isActive
    ? "inline-block border-b-2 border-[#5eead4] pb-0.5 text-[#5eead4] transition"
    : "text-slate-300 transition hover:text-[#5eead4]";
}

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#0A4D7C] py-16 pl-12 pr-8 text-sm text-slate-300 lg:pr-12">
      <div className="grid max-w-7xl gap-12 lg:grid-cols-[1.35fr_0.75fr_1fr] lg:gap-16">
        <div>
          <Image
            src="/footer-logo.png"
            alt="Lita Finemesh — Fencing Your Property"
            width={280}
            height={72}
            className="mb-6 max-w-[280px] object-contain object-left mix-blend-screen"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="mb-10 max-w-md leading-relaxed text-slate-400">
            High-specification industrial wire mesh and
            <br />
            architectural boundary solutions engineered for
            <br />
            lasting perimeter security.
          </p>
          <div>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5eead4]">
              Headquarters &amp; Manufacturing Facility
            </h4>
            <p className="leading-relaxed text-slate-300">
              Lot 111, Jalan PKNK 2, Kawasan Perusahaan Sg. Petani,
              <br />
              08000 Sungai Petani, Kedah, Malaysia
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Company Navigation
          </h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={navLinkClassName(isActive)}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Business Hours
          </h4>
          <div className="mb-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-slate-300">
            <span>Mon - Fri:</span>
            <span>8:30 AM - 5:30 PM</span>
            <span>Sat:</span>
            <span>8:30 AM - 1:00 PM</span>
            <span>Sun &amp; PH:</span>
            <span>Closed</span>
          </div>
          <div className="rounded-md border border-[#0d5a8f] bg-[#083d66] px-5 py-4">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-200">
              Direct Sales HP
            </p>
            <p className="text-2xl font-bold tracking-wide text-white">019-444 7178</p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex max-w-7xl flex-col items-start justify-between gap-4 font-jetbrains text-[11px] text-slate-400 md:flex-row md:items-center">
        <p>
          &copy; 2026 Lita Finemesh Industries Sdn Bhd. All Rights Reserved. ISO 9001:2015
          Certified.
        </p>
        <p className="uppercase tracking-[0.18em] text-slate-300">
          TCH Group Affiliate &nbsp;&bull;&nbsp; SIRIM Accredited Testing
        </p>
      </div>
    </footer>
  );
}
