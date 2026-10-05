import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import HeroBrandRow from "../components/HeroBrandRow";
import HeroSectionShell from "../components/HeroSectionShell";
import ColourSwatchFan from "../components/ColourSwatchFan";
import {
  MdArrowForward,
  MdCheck,
  MdHandyman,
  MdLocationOn,
  MdPhone,
  MdVerifiedUser,
} from "react-icons/md";

type ProtectionFeatureProps = {
  label: ReactNode;
  subtext?: string;
  subtextClassName?: string;
};

type InstallationHighlightProps = {
  icon: IconType;
  title: string;
  subtitle: string;
};

function InstallationHighlight({ icon: Icon, title, subtitle }: InstallationHighlightProps) {
  return (
    <div className="flex flex-1 flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#00365A] text-white">
        <Icon size={22} aria-hidden />
      </div>
      <h3 className="font-mona text-[15px] font-semibold leading-snug text-[#00365A]">{title}</h3>
      <p className="mt-1 font-mona text-xs leading-snug text-slate-500">{subtitle}</p>
    </div>
  );
}

function ProtectionFeature({ label, subtext, subtextClassName }: ProtectionFeatureProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DDF3EF] text-[#2E9C8E]">
          <MdCheck size={16} aria-hidden />
        </div>
        <span className="font-mona text-[24px] font-bold uppercase leading-tight tracking-[0.02em] text-[#0B4F82]">
          {label}
        </span>
      </div>
      {subtext ? (
        <p className={`pl-10 font-mona text-xs leading-snug text-slate-500 ${subtextClassName ?? ""}`}>
          {subtext}
        </p>
      ) : null}
    </div>
  );
}

export default function Service() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSectionShell
          sectionClassName="h-[507px] min-h-[507px]"
          backgroundImage="linear-gradient(rgba(10, 77, 124, 0.82), rgba(10, 77, 124, 0.82)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')"
        >
          <HeroBrandRow />
          <div className="inline-flex w-fit max-w-full flex-col items-start">
            <h1 className="font-moderniz mb-6 w-full text-left text-[70px] font-normal uppercase leading-[1.05] tracking-tight text-white">
              <span className="whitespace-nowrap">Polyester Powder</span>
              <br />
              Coating
            </h1>
            <p className="w-full text-left text-base leading-relaxed text-white/90 md:text-lg">
              Connect with our team for your next fencing project.
            </p>
          </div>
        </HeroSectionShell>

        {/* Intro Section */}
        <section className="px-8 py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:items-start">
            <div className="md:w-1/2 self-start text-left">
              <div className="inline-flex w-fit max-w-full flex-col items-start">
                <div className="relative -top-[13px] mb-4 w-full text-left font-inter text-[12px] font-bold uppercase tracking-[2.16px] text-teal-500">
                  PRECISION SURFACE TECHNOLOGY
                </div>
                <h2 className="font-moderniz mb-4 w-full text-left text-[48px] font-normal uppercase leading-[51px] text-[#00365A]">
                  POLYESTER
                  <br />
                  POWDER
                  <br />
                  <span className="whitespace-nowrap">COATING FINISHING</span>
                </h2>
                <div className="mb-8 h-1 w-[144px] bg-[#00A896]" aria-hidden />
                <div className="w-full space-y-6 text-left font-mona text-[20px] font-normal leading-[24px] text-slate-600">
                  <p>
                    Lita Finemesh is proud to be the only fencing manufacturer in Malaysia with in-house polyester powder coating finishing plant. This allows us full control over the finishing quality and turnaround times.
                  </p>
                  <p>
                    Our surface treatments are specifically formulated to withstand severe environmental standards, offering unparalleled defense against extreme weather conditions, UV rays, and corrosion. Ideal for industrial and commercial applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative left-[60px] top-[30px] flex justify-center md:w-1/2">
              <div className="relative h-[370px] w-[370px] max-w-[370px] overflow-hidden rounded-2xl border-2 border-slate-300 shadow-lg">
                <Image
                  src="/service-polyester-coating.jpg"
                  alt="Technician powder coating green mesh fencing in the finishing plant"
                  width={692}
                  height={1024}
                  className="h-full w-full object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 370px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Protection That Lasts */}
        <section className="w-full bg-[#FFFFFF]">
          <div className="relative w-full bg-[#FFFFFF]">
            <div className="absolute inset-0 z-0 bg-[#FFFFFF]" aria-hidden />
            <Image
              src="/spray-gun-hq.jpg"
              alt="Powder coating spray gun applying blue powder"
              width={2874}
              height={1640}
              priority
              quality={90}
              unoptimized
              className="pointer-events-none relative z-0 block h-auto w-full"
            />

            <div className="pointer-events-none absolute inset-0 z-10">
              <h2 className="font-moderniz absolute right-[7.96%] top-[11.7%] text-right text-[clamp(32px,3.38vw,51px)] font-normal uppercase leading-[1.14] text-[#00365A]">
                PROTECTION
                <br />
                THAT
                <br />
                LASTS.
              </h2>

              <div className="absolute left-[16.05%] top-[48.97%]">
                <ProtectionFeature label="WEATHERPROOF" />
              </div>

              <div className="absolute left-[5.64%] top-[62.39%]">
                <ProtectionFeature label="UV RESISTANT" subtext="Non-chalking under equatorial sun" />
              </div>

              <div className="absolute left-[30.77%] top-[61.81%]">
                <ProtectionFeature
                  label={
                    <>
                      LONG-LASTING
                      <br />
                      COLOUR
                    </>
                  }
                  subtext="Architectural grade 10-year gloss hold"
                />
              </div>

              <div className="absolute left-[14.72%] top-[77.29%]">
                <ProtectionFeature label="SCRATCH RESISTANT" />
              </div>
            </div>
          </div>
        </section>

        {/* Colour & Finish Options */}
        <section className="overflow-visible bg-white px-8 py-24">
          <div className="mx-auto w-full text-center">
            <h2 className="font-moderniz mb-4 mt-[50px] text-[40px] font-normal uppercase text-[#00365A]">
              COLOUR &amp; FINISH OPTIONS
            </h2>
            <p className="mb-16 text-slate-500 text-sm">
              Every product is available in a wide range of colours, including custom-made options
            </p>

            <ColourSwatchFan />

            <button className="rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600 shadow-lg">
              CUSTOMIZATIONS
            </button>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="px-8 py-16 bg-slate-50">
          <div className="mx-auto flex h-[286px] w-[1294px] max-w-full flex-row items-center gap-8 rounded-3xl border border-slate-200 bg-white px-10 shadow-sm text-left">
            <div className="relative left-[85px] flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-[#004e8c] text-[#004e8c]">
              <MdVerifiedUser size={48} />
            </div>
            <div className="relative left-[110px] flex-grow">
              <h2 className="font-moderniz mb-2 text-[48px] font-normal uppercase leading-[50px] text-[#004e8c]">
                <span className="whitespace-nowrap">1-2 YEAR PROCESS</span>
                <br />
                WARRANTY
              </h2>
              <p className="text-slate-500 text-sm">
                Our powder coating process is covered by a warranty of 1 to 2 years, depending on the
                <br />
                type of powder material used.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-xs font-bold text-slate-600 transition hover:border-slate-400 hover:bg-slate-100">
                REQUEST CERTIFICATE
              </button>
            </div>
          </div>
        </section>

        {/* One-stop Installation Service */}
        <section className="bg-white px-8 py-16">
          <div className="relative -left-[50px] mx-auto w-[min(1394px,calc(100vw-2rem))] max-w-full rounded-3xl bg-slate-50 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
              <div className="flex flex-col text-left lg:w-[58%] lg:shrink-0">
                <div className="mb-5 flex items-center gap-2 font-inter text-[11px] font-bold uppercase tracking-[0.18em] text-[#00A896]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#00A896]" aria-hidden />
                  Nationwide Contracting Capability
                </div>
                <h2 className="font-moderniz text-[40px] font-normal leading-tight text-[#00365A]">
                  <span className="block whitespace-nowrap">One-stop Installation</span>
                  <span className="inline-block border-b-[5px] border-[#00365A] pb-1">Service</span>
                </h2>
                <div className="mt-8 space-y-5 font-mona text-[15px] leading-relaxed text-slate-600 md:text-base">
                  <p>
                    Lita FINEmesh also provides nationwide fencing installation service. Our staff and
                    contractors are carefully selected, with experience in this field. We assure our
                    customers of our installation quality, and we are committed to ensuring customer
                    satisfaction and after-sales service.
                  </p>
                  <p>
                    We have been working with many main contractors, developers, local councils, and
                    factory owners throughout Peninsular Malaysia, regardless of whether the project is
                    large or small. If you have special requirements, we are also ready to serve you.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3">
                  <InstallationHighlight
                    icon={MdHandyman}
                    title="Experienced Installers"
                    subtitle="Certified CIDB & Site-Trained Crews"
                  />
                  <InstallationHighlight
                    icon={MdLocationOn}
                    title="Nationwide Coverage"
                    subtitle="All States & Industrial Hubs"
                  />
                  <InstallationHighlight
                    icon={MdVerifiedUser}
                    title="After-sales Service"
                    subtitle="Dedicated Maintenance & Inspections"
                  />
                </div>
                <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#00365A] px-6 py-3.5 font-mona text-sm font-bold text-white transition hover:bg-[#004e8c]"
                  >
                    Contact Us for a Quotation
                    <MdArrowForward size={18} aria-hidden />
                  </Link>
                  <div className="flex items-center gap-3 text-[#00365A]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#00365A]">
                      <MdPhone size={20} aria-hidden />
                    </span>
                    <p className="font-mona text-sm text-slate-600">
                      Direct Line:{" "}
                      <a href="tel:+6044412888" className="font-bold text-[#00365A] hover:underline">
                        +604-441 2888
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full shrink-0 lg:left-[100px] lg:w-[42%]">
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:mx-0 lg:ml-auto lg:max-w-none">
                  <Image
                    src="/service-installation.png"
                    alt="Installer tightening hardware on green mesh fencing on site"
                    width={1024}
                    height={682}
                    className="block h-auto w-full max-w-full"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={90}
                  />
                  <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 rounded-xl border border-slate-100 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="flex items-start gap-2.5 sm:min-w-0 sm:flex-1">
                      <span
                        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00A896]"
                        aria-hidden
                      />
                      <p className="font-mona text-[11px] font-semibold leading-snug text-[#00365A] sm:text-xs">
                        CIDB Registered Contractor / Turnkey On-Site Erection &amp; Alignment
                      </p>
                    </div>
                    <div className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block" aria-hidden />
                    <p className="shrink-0 font-inter text-[10px] font-bold uppercase tracking-[0.14em] text-[#004e8c] sm:text-right">
                      Peninsular MY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#004e8c] mx-8 my-16 rounded-3xl relative overflow-hidden max-w-6xl lg:mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 rounded-full opacity-10 translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="px-8 py-16 relative z-10 flex flex-col items-center justify-center text-center">
            <div className="mb-4 font-inter text-[12px] font-bold uppercase tracking-widest text-[#00A896]">
              Tender &amp; Specification Enquiry
            </div>
            <h2 className="font-unbounded mb-6 text-[36px] font-black uppercase leading-tight tracking-[-1px] text-white">
              LOOKING FOR A RELIABLE<br />FENCING PARTNER?
            </h2>
            <p className="mb-10 max-w-2xl text-sm text-blue-100">
              Direct factory pricing, custom CAD detailing, and rapid BOQ estimation from our Sungai
              Petani manufacturing works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600">
                REQUEST A QUOTE
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-3 font-bold text-white transition hover:bg-white/10 hover:border-white">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
