"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", Icon: FaFacebookF },
  { href: "mailto:enquiry@litafinemesh.com", label: "Email", Icon: MdEmail },
] as const;

function navLinkClassName(isActive: boolean) {
  return isActive
    ? "inline-block border-b-2 border-brand-teal pb-0.5 text-brand-teal transition"
    : "inline-block text-slate-300 transition-colors duration-300 hover:text-brand-teal";
}

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-brand-navy px-5 pt-8 pb-4 text-sm text-slate-300 sm:px-6 sm:pt-10 sm:pb-5 lg:pt-12 lg:pb-6 lg:pl-10 lg:pr-10">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.35fr_0.65fr_1.2fr_1fr] lg:gap-8 xl:gap-12">
        <Reveal>
          <Image
            src="/footer-logo.png"
            alt="Lita Finemesh — Fencing Your Property"
            width={267}
            height={47}
            className="mb-6 h-auto w-full max-w-[267px] object-contain object-left mix-blend-screen"
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-brand-teal hover:text-brand-navy"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
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
        </Reveal>

        <Reveal delay={240}>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Working Hours
          </h4>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-slate-300">
            <span>Mon - Fri:</span>
            <span>8:30 AM - 5:30 PM</span>
            <span>Sat:</span>
            <span>8:30 AM - 1:00 PM</span>
            <span>Sun &amp; PH:</span>
            <span>Closed</span>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Contact Numbers
          </h4>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-slate-300">
            <span>Tel:</span>
            <div className="flex flex-col items-start gap-1">
              <a href="tel:+6044426442" className={navLinkClassName(false)}>+604-4426 442 (HQ)</a>
              <a href="tel:+6044425262" className={navLinkClassName(false)}>+604-442 5262</a>
              <a href="tel:+6044425161" className={navLinkClassName(false)}>+604-442 5161</a>
              <a href="tel:+6044425268" className={navLinkClassName(false)}>+604-442 5268</a>
            </div>
            <span>Fax:</span>
            <a href="tel:+6044425442" className={`w-fit ${navLinkClassName(false)}`}>+604-442 5442</a>
          </div>
        </Reveal>
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
