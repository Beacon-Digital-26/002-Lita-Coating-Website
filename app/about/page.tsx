import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import HeroSectionShell from "@/components/HeroSectionShell";
import CallToAction from "@/components/CallToAction";
import {
  MdWorkspacePremium,
  MdVerifiedUser,
  MdDescription,
  MdPrecisionManufacturing,
} from "react-icons/md";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSectionShell
          backgroundImage="linear-gradient(rgba(10, 77, 124, 0.82), rgba(10, 77, 124, 0.82)), url('https://images.unsplash.com/photo-1581092918484-831bc410fe84?q=80&w=2070&auto=format&fit=crop')"
        >
          <h1 className="font-title mb-6 text-[clamp(36px,9vw,70px)] font-bold uppercase leading-[1.05] tracking-tight text-white">
            About Us
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            Safeguarding territories. Protecting What Matters.
          </p>
        </HeroSectionShell>

        {/* A Decade of Engineering Excellence */}
        <section className="px-4 py-14 sm:px-6 md:py-20 lg:pl-[65px] lg:pr-[85px]">
          <div className="flex w-full flex-col items-center gap-16 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0 flex-1 text-left">
              <div className="mb-4 text-xs font-bold tracking-widest text-teal-500 uppercase">Our Story</div>
              <h2 className="font-title mb-8 text-[clamp(26px,6vw,40px)] font-bold uppercase leading-tight text-[#00365A]">
                A DECADE OF
                <br />
                ENGINEERING EXCELLENCE
              </h2>
              <div className="relative mb-8 space-y-4 pl-6 text-slate-600">
                <span
                  className="absolute bottom-[-20px] left-0 top-0 w-1 bg-[#00365A]"
                  aria-hidden
                />
                <p>
                  Founded in 2012 in Sungai Petani, Kedah, Lita Finemesh has grown into a leading
                  manufacturer of fencing profiles. As an affiliate of Yetta Steel Industries, we deliver
                  cost-effective production and on-time service nationwide.
                </p>
                <p>
                  <span className="font-mona block text-[18px] font-bold leading-snug text-slate-600 sm:text-[20px]">
                    We are also Malaysia&apos;s first fencing manufacturer with in-house polyester powder coating
                  </span>
                  <span className="mt-4 flex w-full items-start gap-[16px] sm:items-center sm:gap-[27px]">
                    <span
                      className="mt-1.5 h-[2.5px] w-[30px] shrink-0 bg-[#41484B] sm:mt-0 sm:w-[41px]"
                      aria-hidden
                    />
                    offering complete quality control and direct factory turnaround under one roof.
                  </span>
                </p>
              </div>

              <div className="min-w-0 max-w-full pr-2">
                <p className="font-mona mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  CORE MANUFACTURING RANGE
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#006B5F] bg-[#E6F4F1] px-4 py-2.5 font-mona text-[13px] font-semibold text-[#006B5F]">
                      <MdPrecisionManufacturing size={18} className="shrink-0" aria-hidden />
                      In-House Powder Coating
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-4 py-2.5 font-mona text-[13px] font-semibold text-[#00365A]">
                      Roll Top Fence
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-4 py-2.5 font-mona text-[13px] font-semibold text-[#00365A]">
                      V-Fence
                    </span>
                  </div>
                  <div className="-mr-2 flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-0.5 sm:mr-0 lg:overflow-visible">
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-mona text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Flat Fence
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#006B5F] bg-[#F2F6F9] px-3 py-2 font-mona text-[12px] font-semibold text-[#006B5F] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      358 Anti-Climb
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-mona text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Security Netting
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-mona text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
                      Gabions
                    </span>
                    <span className="inline-flex shrink-0 items-center rounded-md border border-[#C8D6E0] bg-[#F2F6F9] px-3 py-2 font-mona text-[12px] font-semibold text-[#00365A] sm:px-4 sm:py-2.5 sm:text-[13px]">
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
        <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:pl-[65px] lg:pr-[85px]">
          <div className="mx-auto flex w-full max-w-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-8 shadow-xl shadow-slate-200/50 sm:px-8 md:h-[210px] md:w-[1308px] md:flex-row md:py-0 md:px-10">
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
                  <div className="mb-2 text-[clamp(32px,8vw,52px)] font-black leading-none tabular-nums">
                    <span className="text-[#2d6a9f]">{stat.value}</span>
                    <span className="text-[#00AB94]">{stat.suffix}</span>
                  </div>
                  <div className="mb-2 text-lg font-bold text-[#4a8fc7]">{stat.title}</div>
                  <p className="font-mona text-[13px] leading-snug text-slate-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-4 py-16 sm:px-6 md:px-8 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-2 font-mona text-[12px] font-bold tracking-widest text-teal-500 uppercase">
              Guiding Principles
            </div>
            <h2 className="font-title mb-12 text-[clamp(26px,6vw,40px)] font-bold uppercase leading-tight text-[#00365A]">
              STRATEGIC VISION &amp; MISSION
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col">
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
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col">
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
        <section className="px-4 py-16 sm:px-6 md:px-8 bg-white">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-12">
              <h2 className="font-title mb-2 text-[clamp(26px,6vw,40px)] font-bold uppercase leading-tight text-[#00365A]">
                CASE PORTFOLIO
              </h2>
              <div className="mx-auto h-1 w-[200px] bg-teal-500" aria-hidden />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 aspect-[4/5] sm:aspect-[16/9] md:aspect-auto md:h-[350px]">
                <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop" alt="Industrial Hub" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003b6b]/90 via-[#003b6b]/40 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8">
                  <div className="text-teal-400 text-xs sm:text-sm font-bold mb-2">FEATURED PROJECT</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">NORTHERN INDUSTRIAL HUB, KEDAH</h3>
                  <p className="text-sm sm:text-base text-slate-200">Full perimeter security fencing implementation</p>
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

        <CallToAction />
      </main>

      <SiteFooter />
    </div>
  );
}
