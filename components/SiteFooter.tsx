"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", Icon: FaFacebookF },
  { href: "https://wa.me/60194447178", label: "WhatsApp", Icon: FaWhatsapp },
  { href: "mailto:enquiry@litafinemesh.com", label: "Email", Icon: MdEmail },
] as const;

function navLinkClassName(isActive: boolean) {
  return isActive
    ? "inline-block border-b-2 border-[#5eead4] pb-0.5 text-[#5eead4] transition"
    : "text-slate-300 transition hover:text-[#5eead4]";
}

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#0A4D7C] px-5 pt-8 pb-4 text-sm text-slate-300 sm:px-6 sm:pt-10 sm:pb-5 lg:pt-12 lg:pb-6 lg:pl-10 lg:pr-10">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.35fr_0.75fr_1fr] lg:gap-12">
        <div>
          <Image
            src="/footer-logo.png"
            alt="Lita Finemesh — Fencing Your Property"
            width={280}
            height={72}
            className="mb-6 max-w-[280px] object-contain object-left mix-blend-screen"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="mb-6 leading-relaxed text-slate-300">
            Lot 111, Jalan PKNK 2, Kawasan Perusahaan Sg. Petani,
            <br />
            08000 Sungai Petani, Kedah, Malaysia
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#5eead4] hover:text-[#0A4D7C]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Navigation
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
            Working Hours
          </h4>
          <div className="mb-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-slate-300">
            <span>Mon - Fri:</span>
            <span>8:30 AM - 5:30 PM</span>
            <span>Sat:</span>
            <span>8:30 AM - 1:00 PM</span>
            <span>Sun &amp; PH:</span>
            <span>Closed</span>
          </div>

          <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Direct Sales Line
          </h4>
          <p className="font-bold text-white">04-4426 442 (Hotline)</p>
          <p className="mt-2 font-bold text-white">019-444 7178 (WhatsApp)</p>
        </div>
      </div>

      <div className="mt-3 border-t border-white/10 pt-3 sm:mt-4 sm:pt-4 lg:mt-5 lg:pt-5">
        <div className="flex flex-col items-start justify-between gap-4 font-mona text-[11px] text-slate-400 md:flex-row md:items-center">
          <p>
            &copy; 2026 Lita Finemesh Industries Sdn Bhd. All Rights Reserved.
          </p>
          <p className="uppercase tracking-[0.18em] text-slate-300">
            Powered by Beacon Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
