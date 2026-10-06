import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HeroBrandRow from "./components/HeroBrandRow";
import HeroSectionShell from "./components/HeroSectionShell";
import {
  MdWorkspacePremium,
  MdArrowForward,
  MdFactory,
  MdWbSunny,
  MdPalette,
  MdCategory,
  MdLocalShipping,
  MdAttachMoney,
  MdSchedule,
} from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSectionShell
          backgroundImage="url('/lita-finemesh-hero.png')"
          backgroundPosition="center 22%"
        >
          <HeroBrandRow />
          <h1 className="font-moderniz mb-6 text-[42px] font-normal uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="block whitespace-nowrap">Polyester Powder</span>
            <span className="block whitespace-nowrap">Coating Finishing</span>
          </h1>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            Malaysia&apos;s first self-owned fencing fabricator with an in-house automated
            polyester powder coating finishing lines.
          </p>
          <Link
            href="/service"
            className="inline-flex items-center gap-2 rounded-full bg-[#00A896] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-600"
          >
            Explore Services
            <MdArrowForward size={20} />
          </Link>
        </HeroSectionShell>

        {/* Feature Section */}
        <section className="relative overflow-hidden bg-white px-8 py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <Image
              src="/powder-splash.png"
              alt=""
              width={520}
              height={520}
              className="absolute -left-8 -top-8 w-[min(42vw,320px)] max-w-none mix-blend-screen opacity-95 md:w-[380px] md:-left-4 md:-top-4"
            />
            <Image
              src="/powder-splash.png"
              alt=""
              width={520}
              height={520}
              className="absolute -bottom-8 -right-8 w-[min(42vw,320px)] max-w-none rotate-180 mix-blend-screen opacity-95 md:w-[380px] md:-bottom-4 md:-right-4"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-50/80 px-5 py-2 text-xs font-bold tracking-[0.2em] text-teal-600 uppercase">
              <span className="flex h-5 w-5 items-center justify-center rounded-full text-teal-600">
                <MdWorkspacePremium size={16} />
              </span>
              1ST IN MALAYSIA
            </div>
            <h2 className="font-moderniz mx-auto mb-16 max-w-5xl text-center text-[68px] font-normal uppercase leading-[72px] tracking-normal text-[#004578]">
              <span className="block whitespace-nowrap">Malaysia&apos;s First In-</span>
              <span className="block">House Polyester</span>
              <span className="block">Powder Coating</span>
            </h2>
            <div className="grid gap-12 text-left md:grid-cols-3 md:gap-10 lg:gap-16">
              <div>
                <div className="mb-4 text-[#0a3d6b]">
                  <MdFactory size={28} />
                </div>
                <p className="font-jetbrains mb-2 text-[12px] font-semibold tracking-wide text-teal-600">
                  Full Quality Control
                </p>
                <h3 className="font-mona mb-4 text-[16px] font-semibold uppercase leading-snug text-[#0a3d6b]">
                  1ST IN MALAYSIA INTEGRATION
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Zero third-party transit delays or finish variances. Complete end-to-end oversight conducted under one roof.
                </p>
              </div>
              <div>
                <div className="mb-4 text-[#0a3d6b]">
                  <MdWbSunny size={28} />
                </div>
                <p className="font-jetbrains mb-2 text-[12px] font-semibold tracking-wide text-teal-600">
                  Weather Resistance
                </p>
                <h3 className="font-mona mb-4 text-[16px] font-semibold uppercase leading-snug text-[#0a3d6b]">
                  MARINE &amp; TROPICAL DEFENSE
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Specially engineered to resist intense UV exposure, monsoon moisture, and coastal corrosion.
                </p>
              </div>
              <div>
                <div className="mb-4 text-[#0a3d6b]">
                  <MdPalette size={28} />
                </div>
                <p className="font-jetbrains mb-2 text-[12px] font-semibold tracking-wide text-teal-600">
                  Architectural Finishes
                </p>
                <h3 className="font-mona mb-4 text-[16px] font-semibold uppercase leading-snug text-[#0a3d6b]">
                  CUSTOM RAL SPECIFICATIONS
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  High-precision automated electrostatic application across all RAL classic palettes, architect textures, and bespoke project specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-slate-50 px-8 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-moderniz mb-4 text-[40px] font-normal uppercase text-[#004e8c]">Applications</h2>
            <div
              className="mx-auto mb-12 h-[5px] w-[200px] rounded-full bg-[#00A896]"
              aria-hidden
            />
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div className="group relative overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=800&auto=format&fit=crop" alt="Fencing" className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Fencing</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop" alt="Pipe Valves" className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Pipe Valves</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=800&auto=format&fit=crop" alt="Aluminium Profile" className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Aluminium Profile</h3>
                </div>
              </div>
            </div>
            <button className="rounded-full bg-teal-500 px-8 py-2 font-bold text-white transition hover:bg-teal-600">
              VIEW MORE
            </button>
          </div>
        </section>

        {/* Colour & Finish Options */}
        <section className="overflow-hidden py-20 pl-[35px] pr-8">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
            <div className="w-full shrink-0 text-left lg:w-[38%] lg:max-w-[380px] lg:self-center">
              <h2 className="font-moderniz mb-5 text-left text-[50px] font-normal uppercase leading-[59px] tracking-[-0.75px] text-[#004e8c]">
                Colour
                <br />
                &amp; Finish
                <br />
                Options
              </h2>
              <p className="-mt-[20px] mb-8 max-w-xs text-sm leading-relaxed text-slate-500">
                Wide range of RAL colors &amp; custom finishes available.
              </p>
              <button className="-mt-[20px] rounded-full bg-[#00A896] px-10 py-2.5 text-sm font-bold tracking-wide text-white transition hover:bg-teal-600">
                VIEW MORE
              </button>
            </div>
            <div className="flex w-full flex-1 justify-start gap-5 sm:justify-center sm:gap-7 md:gap-9 lg:justify-end">
              {[
                {
                  offsetClass: "pt-16 sm:pt-20 md:pt-28",
                  swatches: [
                    { name: "MATTE BLACK", code: "RAL 9005", color: "#111111" },
                    { name: "BROWN", code: "RAL 8011", color: "#5c4033" },
                  ],
                },
                {
                  offsetClass: "pt-0",
                  swatches: [
                    { name: "GREEN", code: "RAL 6005", color: "#32a852" },
                    { name: "NAVY BLUE", code: "RAL 5003", color: "#2b3b6b" },
                  ],
                },
                {
                  offsetClass: "pt-8 sm:pt-10 md:pt-14",
                  swatches: [
                    { name: "INDUSTRIAL GRAY", code: "RAL 7004", color: "#8a8d91" },
                    { name: "RED", code: "RAL 3020", color: "#d11111" },
                  ],
                },
              ].map((column) => (
                <div
                  key={column.swatches.map((s) => s.name).join("-")}
                  className={`flex flex-col gap-8 sm:gap-10 ${column.offsetClass}`}
                >
                  {column.swatches.map((item) => (
                    <div
                      key={item.name}
                      className="flex h-[342px] w-[286px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(0,78,140,0.14)]"
                    >
                      <div
                        className="h-[242px] w-[286px] shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex flex-1 flex-col justify-start px-4 pt-0 text-left">
                        <div className="-ml-[5px] flex flex-col items-start">
                          <h4 className="font-mona -mt-[10px] text-[24px] font-bold uppercase leading-[59px] tracking-[-0.75px] text-[#004e8c]">
                            {item.name}
                          </h4>
                          <p className="font-mona -mt-[10px] text-[16px] font-normal leading-none text-[#00786C]">
                            {item.code}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 px-8 py-20 text-center">
          <div className="mx-auto w-full max-w-[1336px]">
            <div className="font-jetbrains mb-2 text-[12px] font-bold uppercase tracking-widest text-[#006B5F]">
              Engineering Strengths
            </div>
            <h2 className="font-moderniz mb-12 text-[40px] font-normal uppercase text-[#00365A]">
              Why Choose Us?
            </h2>
            <div className="overflow-x-hidden">
              <div className="mx-auto flex w-[1336px] max-w-none flex-nowrap items-stretch justify-center gap-[24px] text-left">
              {[
                {
                  icon: MdCategory,
                  title: "Wide Product Range",
                  desc: "Comprehensive specifications covering anti-climb, residential, commercial, and industrial high-security perimeters.",
                  tag: "01 / SPECS",
                },
                {
                  icon: MdLocalShipping,
                  title: "Nationwide Reach",
                  desc: "Agile logistics network ensuring secure site delivery to projects across Malaysia.",
                  tag: "02 / LOGISTICS",
                },
                {
                  icon: MdAttachMoney,
                  title: "Cost-Effective Production",
                  desc: "Group synergies with Yetta Steel Industries enable optimized manufacturing economics.",
                  tag: "03 / EFFICIENCY",
                },
                {
                  icon: MdSchedule,
                  title: "On-Time Delivery",
                  desc: "Manufacturing dispatch scheduling backed by strict contractual lead-time and completion guarantees.",
                  tag: "04 / TIMELINE",
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                <div
                  key={feature.tag}
                  className="flex h-[301px] w-[319px] shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#006B5F]">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-mona mb-4 text-[20px] font-semibold text-[#00365A]">
                    {feature.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{feature.desc}</p>
                  <div className="mt-auto pt-4">
                    <p className="font-jetbrains text-xs font-normal uppercase tracking-wide text-slate-400">
                      {feature.tag}
                    </p>
                  </div>
                </div>
              );
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats / CTA Section */}
        <section
          className="relative bg-cover bg-center px-8 py-20 text-white lg:px-16 lg:py-24"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 54, 90, 0.92) 0%, rgba(0, 54, 90, 0.88) 55%, rgba(0, 54, 90, 0.75) 100%), url('https://images.unsplash.com/photo-1581092918484-831bc410fe84?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="-ml-[15px] text-left">
              <h2 className="font-moderniz mb-6 text-[40px] font-normal uppercase leading-[48px] tracking-[-1.2px]">
                <span className="block">Built To Last.</span>
                <span className="block whitespace-nowrap">Coated To Perfection.</span>
              </h2>
              <p className="mb-10 max-w-xl text-[16px] leading-relaxed text-white/90">
                <span className="whitespace-nowrap">
                  Since 2012, Lita Finemesh has built Malaysia&apos;s fencing industry from Sungai Petani, Kedah.
                </span>
                <br />
                As the first fencing fabricator with an in-house powder coating line, we deliver superior
                finishes, faster turnaround, and consistent quality – backed by our affiliation with Yetta
                Steel.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="relative inline-flex h-[42px] w-[204px] items-center justify-center rounded-full bg-[#00AB94] font-mona text-[13px] font-bold uppercase leading-none tracking-[0.6px] text-white transition hover:bg-[#009882]"
                >
                  About Us
                  <MdArrowForward
                    size={18}
                    className="absolute right-[15px] top-1/2 shrink-0 -translate-y-1/2"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/contact"
                  className="relative inline-flex h-[42px] w-[204px] items-center justify-center rounded-full bg-white font-mona text-[13px] font-bold uppercase leading-none tracking-[0.6px] text-[#00365A] transition hover:bg-slate-100"
                >
                  Contact Us
                  <MdArrowForward
                    size={18}
                    className="absolute right-[15px] top-1/2 shrink-0 -translate-y-1/2 text-[#00365A]"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
            <div className="-mt-[10px] ml-[15px] grid grid-cols-2 gap-x-10 gap-y-12 text-left md:gap-x-12">
              {[
                { value: "12+", label: "YEARS IN INDUSTRY" },
                { value: "100%", label: "IN-HOUSE COATING LINE" },
                { value: "1,500+", label: "HOURS SALT SPRAY TESTED" },
                { value: "500+", label: "PROJECTS DELIVERED" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`flex w-fit flex-col items-start ${
                    stat.value === "100%" || stat.value === "500+" ? "ml-[60px]" : ""
                  }`}
                >
                  <div className="text-[52px] font-black leading-none text-[#00A896] tabular-nums">
                    {stat.value}
                  </div>
                  <div
                    className={`font-mona mt-2 text-left text-[12px] font-bold uppercase leading-snug tracking-[0.6px] text-white/95 ${
                      stat.label === "IN-HOUSE COATING LINE" ? "whitespace-nowrap" : ""
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex h-[350px] w-full items-start justify-center bg-white px-8 pt-12">
          <h2 className="font-moderniz mt-[25px] text-center text-[32px] font-normal uppercase leading-tight tracking-tight text-[#0A4D7C]">
            Trusted Brand We Distribute
          </h2>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
