import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import HeroSectionShell from "@/components/HeroSectionShell";
import ColourSwatchFan from "@/components/ColourSwatchFan";
import CallToAction from "@/components/CallToAction";
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
  actionLabel?: string;
};

function InstallationHighlight({ icon: Icon, title, subtitle, actionLabel }: InstallationHighlightProps) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-xl shadow-slate-200/50">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00A896] text-white">
        <Icon size={28} aria-hidden />
      </div>
      <h3 className="font-title mb-4 text-[16px] font-bold uppercase leading-snug text-[#0a3d6b]">{title}</h3>
      <p className="font-mona text-[20px] font-normal leading-[24px] text-slate-600">{subtitle}</p>
      {actionLabel ? (
        <button className="font-expanded mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#00A896] px-5 py-2.5 text-xs font-bold uppercase text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95">
          {actionLabel}
          <MdArrowForward size={16} aria-hidden />
        </button>
      ) : null}
    </div>
  );
}

function ProtectionFeature({ label, subtext, subtextClassName }: ProtectionFeatureProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00A896] text-white">
          <MdCheck size={16} aria-hidden />
        </div>
        <span className="font-expanded font-mona text-[18px] font-bold uppercase leading-tight tracking-[0.02em] text-[#0B4F82] md:text-[24px]">
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
          backgroundImage="linear-gradient(rgba(10, 77, 124, 0.82), rgba(10, 77, 124, 0.82)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')"
        >
          <div className="inline-flex w-fit max-w-full flex-col items-start">
            <h1 className="font-title mb-6 w-full text-left text-[clamp(36px,9vw,70px)] font-bold uppercase leading-[1.05] tracking-tight text-white">
              Polyester Powder Coating
            </h1>
            <p className="w-full text-left text-base leading-relaxed text-white/90 md:text-lg">
              Connect with our team for your next fencing project.
            </p>
          </div>
        </HeroSectionShell>

        {/* Intro Section */}
        <section className="px-4 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:items-start">
            <div className="md:w-1/2 self-start text-left">
              <div className="inline-flex w-fit max-w-full flex-col items-start">
                <h2 className="font-title mb-4 w-full text-left text-[clamp(28px,6vw,48px)] font-bold uppercase leading-tight text-[#00365A]">
                  PRECISION SURFACE TECHNOLOGY
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
            <div className="flex justify-center md:relative md:left-[60px] md:top-[30px] md:w-1/2">
              <div className="relative h-[370px] w-[370px] max-w-[370px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
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
          {/* Mobile: title appears before the background image instead of overlaid on it. */}
          <h2 className="font-title px-4 pt-10 text-right text-[clamp(30px,8vw,40px)] font-bold uppercase leading-[1.14] text-[#00365A] sm:px-6 md:hidden">
            PROTECTION THAT LASTS.
          </h2>

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

            {/* md+ only: title stays overlaid on the background at its original position. */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <h2 className="font-title hidden text-right text-[clamp(32px,3.38vw,51px)] font-bold uppercase leading-[1.14] text-[#00365A] md:absolute md:right-[7.96%] md:top-[11.7%] md:block">
                PROTECTION
                <br />
                THAT
                <br />
                LASTS.
              </h2>

              {/* md+ only: checklist stays overlaid on the background at its original scattered positions. */}
              <div className="hidden md:absolute md:left-[16.05%] md:top-[48.97%] md:block">
                <ProtectionFeature label="WEATHERPROOF" />
              </div>

              <div className="hidden md:absolute md:left-[5.64%] md:top-[62.39%] md:block">
                <ProtectionFeature label="UV RESISTANT" subtext="Non-chalking under equatorial sun" />
              </div>

              <div className="hidden md:absolute md:left-[30.77%] md:top-[61.81%] md:block">
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

              <div className="hidden md:absolute md:left-[14.72%] md:top-[77.29%] md:block">
                <ProtectionFeature label="SCRATCH RESISTANT" />
              </div>
            </div>
          </div>

          {/* Mobile: checklist overlaps the image's lower 30%, then continues below it. */}
          <div className="relative z-20 -mt-[20vw] flex flex-col gap-6 px-4 py-10 text-left sm:px-6 md:hidden">
            <ProtectionFeature label="WEATHERPROOF" />
            <ProtectionFeature label="UV RESISTANT" subtext="Non-chalking under equatorial sun" />
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
            <ProtectionFeature label="SCRATCH RESISTANT" />
          </div>
        </section>

        {/* One-stop Installation Service */}
        <section className="bg-white px-4 pt-14 pb-6 sm:px-6 md:px-8 md:pt-16 md:pb-8">
          <div className="relative mx-auto w-[min(1394px,calc(100vw-2rem))] max-w-full rounded-3xl bg-slate-50 px-6 py-12 sm:px-10 sm:py-14 lg:left-[-50px] lg:px-12 lg:py-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
              <div className="flex flex-col text-left lg:w-[58%] lg:shrink-0">
                <h2 className="font-title mb-4 w-full text-left text-[clamp(28px,6vw,48px)] font-bold uppercase leading-tight text-[#00365A]">
                  ONE-STOP <br />INSTALLATION SERVICE
                </h2>
                <div className="h-1 w-[144px] bg-[#00A896]" aria-hidden />
                <div className="mt-8 w-full space-y-6 text-left font-mona text-[20px] font-normal leading-[24px] text-slate-600">
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
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  <InstallationHighlight
                    icon={MdVerifiedUser}
                    title="1-2 Year Process Warranty"
                    subtitle="Our powder coating process is covered by a warranty of 1 to 2 years, depending on the type of powder material used."
                    actionLabel="Request Certificate"
                  />
                </div>
                
              </div>
              <div className="relative w-full shrink-0 lg:left-[100px] lg:w-[42%]">
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 lg:mx-0 lg:ml-auto lg:max-w-none">
                  <Image
                    src="/service-installation.png"
                    alt="Installer tightening hardware on green mesh fencing on site"
                    width={1024}
                    height={682}
                    className="block h-auto w-full max-w-full"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={90}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colour & Finish Options */}
        <section className="overflow-visible bg-white px-4 pt-6 pb-16 sm:px-6 md:px-8 md:pt-8 md:pb-24">
          <div className="mx-auto w-full text-center">
            <h2 className="font-title mb-4 text-[clamp(26px,6vw,40px)] font-bold uppercase text-[#00365A]">
              COLOUR &amp; FINISH OPTIONS
            </h2>
            <p className="mb-16 w-full space-y-6 font-mona text-[20px] font-normal leading-[24px] text-slate-600">
              Every product is available in a wide range of colours, including custom-made options
            </p>

            <ColourSwatchFan />

            <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 shadow-lg">
              CUSTOMIZATIONS
              <MdArrowForward size={18} aria-hidden />
            </button>
          </div>
        </section>

        <CallToAction />
      </main>

      <SiteFooter />
    </div>
  );
}
