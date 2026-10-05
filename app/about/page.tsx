import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import HeroBrandRow from "../components/HeroBrandRow";
import HeroSectionShell from "../components/HeroSectionShell";
import {
  MdWorkspacePremium,
  MdVerifiedUser,
  MdDescription,
  MdPhone,
  MdFileDownload,
  MdPrecisionManufacturing,
} from "react-icons/md";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSectionShell
          sectionClassName="h-[507px] min-h-[507px]"
          backgroundImage="linear-gradient(rgba(10, 77, 124, 0.82), rgba(10, 77, 124, 0.82)), url('https://images.unsplash.com/photo-1581092918484-831bc410fe84?q=80&w=2070&auto=format&fit=crop')"
        >
          <HeroBrandRow />
          <h1 className="font-moderniz mb-6 text-[70px] font-normal uppercase leading-[1.05] tracking-tight text-white">
            About Us
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            Safeguarding territories. Protecting What Matters.
          </p>
        </HeroSectionShell>

        {/* A Decade of Engineering Excellence */}
        <section className="py-20 pl-[65px] pr-[85px]">
          <div className="flex w-full flex-col items-center gap-16 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0 flex-1 text-left">
              <div className="mb-4 text-xs font-bold tracking-widest text-teal-500 uppercase">Our Story</div>
              <h2 className="font-moderniz mb-8 text-[40px] font-normal uppercase leading-tight text-[#00365A]">
                A DECADE OF
                <br />
                <span className="whitespace-nowrap">ENGINEERING EXCELLENCE</span>
              </h2>
              <div className="relative mb-8 space-y-4 pl-6 text-slate-600">
                <span
                  className="absolute bottom-[-20px] left-0 top-0 w-1 bg-[#00365A]"
                  aria-hidden
                />
                <p>
                  Founded in 2012 in Sungai Petani, Kedah, Lita Finemesh has grown into a leading
                  <br />
                  manufacturer of fencing profiles. As an affiliate of Yetta Steel Industries, we deliver
                  <br />
                  cost-effective production and on-time service nationwide.
                </p>
                <p>
                  <span className="font-mona block text-[20px] font-bold leading-snug text-slate-600">
                    We are also Malaysia&apos;s first fencing manufacturer with in-house polyester powder coating
                  </span>
                  <span className="mt-4 flex w-full items-center gap-[27px]">
                    <span
                      className="h-[2.5px] w-[41px] shrink-0 bg-[#41484B]"
                      aria-hidden
                    />
                    offering complete quality control and direct factory turnaround under one roof.
                  </span>
                </p>
              </div>

              <div className="min-w-0 max-w-full pr-2">
                <p className="font-jetbrains mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  CORE MANUFACTURING RANGE
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#006B5F] bg-[#E6F4F1] px-4 py-2.5 font-jetbrains text-[13px] font-semibold text-[#006B5F]">
                      <MdPrecisionManufacturing size={18} className="shrink-0" aria-hidden />
                      In-House Powder Coating
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-4 py-2.5 font-jetbrains text-[13px] font-semibold text-[#00365A]">
                      Roll Top Fence
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-4 py-2.5 font-jetbrains text-[13px] font-semibold text-[#00365A]">
                      V-Fence
                    </span>
                  </div>
                  <div className="-mr-2 flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-0.5 sm:mr-0 lg:overflow-visible">
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-jetbrains text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Flat Fence
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#006B5F] bg-[#F2F6F9] px-3 py-2 font-jetbrains text-[12px] font-semibold text-[#006B5F] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      358 Anti-Climb
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-jetbrains text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Security Netting
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-jetbrains text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Gabions
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-jetbrains text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Wire Accessories
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 justify-center md:justify-end">
              <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full overflow-hidden border-8 border-slate-50 shadow-xl">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Engineering Excellence" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-50 py-16 pl-[65px] pr-[85px]">
          <div className="mx-auto flex h-[210px] w-[1308px] max-w-full items-center rounded-2xl bg-white px-8 md:px-10">
            <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-[100px]">
              {[
                {
                  value: "12",
                  suffix: "+",
                  title: "Years in Business",
                  description: "Pioneering in Kedah since 2012",
                },
                {
                  value: "8",
                  suffix: "+",
                  title: "Core Fencing Profiles",
                  description: "Custom wire gauge integrations",
                },
                {
                  value: "100",
                  suffix: "%",
                  title: "Nationwide Coverage",
                  description: "Full on-site contractor support",
                },
                {
                  value: "1,500",
                  suffix: "+",
                  title: "Corrosion Resistance",
                  description: "Hours Salt-Spray test certified",
                },
              ].map((stat, index) => (
                <div key={stat.title} className="min-w-0 shrink-0 text-left">
                  <div className="mb-2 text-[44px] font-black leading-none tabular-nums md:text-[52px]">
                    <span className="text-[#2d6a9f]">{stat.value}</span>
                    <span className="text-[#00AB94]">{stat.suffix}</span>
                  </div>
                  <div className="mb-2 text-lg font-bold text-[#4a8fc7]">{stat.title}</div>
                  <p className="font-jetbrains text-[13px] leading-snug text-slate-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-8 py-20 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-2 font-jetbrains text-[12px] font-bold tracking-widest text-teal-500 uppercase">
              Guiding Principles
            </div>
            <h2 className="font-moderniz mb-12 text-[40px] font-normal uppercase leading-tight text-[#00365A]">
              STRATEGIC VISION &amp; MISSION
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#004e8c]">OUR VISION</h3>
                  <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <MdVerifiedUser size={20} />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden mb-6 h-56">
                  <img src="https://images.unsplash.com/photo-1541888081691-5a02d844280b?q=80&w=2070&auto=format&fit=crop" alt="Our Vision" className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-600 text-lg">
                  To be the world's most reliable and innovative provider in the fencing industry.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#004e8c]">OUR MISSION</h3>
                  <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <MdWorkspacePremium size={20} />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden mb-6 h-56">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Our Mission" className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-600 text-lg">
                  To deliver total customer satisfaction through one-stop fencing solutions while building lasting value for our people and partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Portfolio */}
        <section className="px-8 py-20 bg-white">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-12">
              <h2 className="font-moderniz mb-2 text-[40px] font-normal uppercase leading-tight text-[#00365A]">
                CASE PORTFOLIO
              </h2>
              <div className="mx-auto h-1 w-[200px] bg-teal-500" aria-hidden />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="md:col-span-2 group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-auto h-[350px]">
                <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop" alt="Industrial Hub" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003b6b]/90 via-[#003b6b]/40 to-transparent flex flex-col justify-end p-8">
                  <div className="text-teal-400 text-sm font-bold mb-2">FEATURED PROJECT</div>
                  <h3 className="text-3xl font-bold text-white mb-2">NORTHERN INDUSTRIAL HUB, KEDAH</h3>
                  <p className="text-slate-200">Full perimeter security fencing implementation</p>
                </div>
              </div>
              
              <div className="md:col-span-1 border-2 border-dashed border-slate-300 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-teal-600 hover:border-teal-300 transition cursor-pointer min-h-[350px]">
                <MdDescription size={40} className="mb-4" />
                <h4 className="font-bold text-lg mb-1">More Projects</h4>
                <p className="text-sm">Click to view full portfolio</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="flex justify-center bg-white px-8 py-16">
          <div className="relative mx-auto h-[377px] w-[1372px] max-w-full overflow-hidden rounded-2xl bg-[#004e8c]">
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 opacity-20" />
            <div className="absolute bottom-0 right-32 h-48 w-48 translate-y-1/4 rounded-full bg-teal-400 opacity-10" />
            <div className="absolute top-1/2 right-1/4 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-400 opacity-20" />

            <div className="relative z-10 flex h-full items-center px-8 md:px-12 lg:px-16">
              <div className="relative -left-[15px] -top-[5px] text-center text-white md:text-left">
                <h2 className="font-moderniz mb-4 text-[40px] font-normal uppercase leading-tight text-white">
                  <span className="whitespace-nowrap">LOOKING FOR A RELIABLE</span>
                  <br />
                  FENCING PARTNER?
                </h2>
                <p className="text-lg text-blue-100">Get in touch with us today.</p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                  <button className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600">
                    <MdPhone size={18} /> CONTACT US
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-[#004e8c] transition hover:bg-slate-100">
                    <MdFileDownload size={18} /> VIEW BROCHURE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
