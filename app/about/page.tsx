import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import HeroSectionShell from "@/components/HeroSectionShell";
import CallToAction from "@/components/CallToAction";
import AnimatedStatNumber from "@/components/AnimatedStatNumber";
import ImageCard from "@/components/ImageCard";
import PortfolioCarousel from "@/components/PortfolioCarousel";

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
          <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Safeguarding territories. Protecting What Matters.
          </p>
        </HeroSectionShell>

        {/* A Decade of Engineering Excellence */}
        <section className="px-4 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
            <div className="self-start text-left md:w-1/2">
              <div className="inline-flex w-full max-w-full flex-col items-start">
                <h2 className="font-title mb-4 w-full text-left text-[clamp(28px,6vw,48px)] font-bold uppercase leading-tight text-[#00365A]">
                  Our Story
                </h2>
                <div className="mb-8 h-1 w-[144px] bg-[#00A896]" aria-hidden />
                <div className="w-full space-y-6 text-left font-mona text-[20px] font-normal leading-[24px] text-slate-600">
                  <p>
                    Founded in 2012 in Sungai Petani, Kedah, Lita Finemesh has grown into a leading
                    manufacturer of fencing profiles. As an affiliate of Yetta Steel Industries, we deliver
                    cost-effective production and on-time service nationwide.
                  </p>
                  <p>
                    We are also Malaysia&apos;s first fencing manufacturer with in-house polyester powder coating,
                    offering complete quality control and direct factory turnaround under one roof.
                  </p>
                </div>
              </div>

              <div className="mt-8 min-w-0">
                <p className="font-mona mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Core Manufacturing Range
                </p>
                <div className="flex flex-wrap gap-2 uppercase">
                  <span className="font-expanded inline-flex cursor-pointer items-center gap-2 rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    In-House Powder Coating
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    Roll Top Fence
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    V-Fence
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    Flat Fence
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    358 Anti-Climb
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    Security Netting
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    Gabions
                  </span>
                  <span className="font-expanded inline-flex cursor-pointer items-center rounded-full bg-teal-500 px-4 py-2 font-mona text-[12px] font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 sm:text-[13px]">
                    Wire Accessories
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:relative md:left-[60px] md:top-[30px] md:w-1/2">
              <div className="relative aspect-square w-full max-w-[370px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                  alt="Lita Finemesh engineering team at work"
                  className="h-full w-full object-cover object-center"
                />
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
                  value: 12,
                  suffix: "+",
                  title: "Years in Business",
                },
                {
                  value: 8,
                  suffix: "+",
                  title: "Core Fencing Profiles",
                },
                {
                  value: 100,
                  suffix: "%",
                  title: "Nationwide Coverage",
                },
                {
                  value: 1500,
                  suffix: "+",
                  title: "Corrosion Resistance",
                },
              ].map((stat, index) => (
                <div key={stat.title} className="min-w-0 shrink-0 text-center">
                  <div className="mb-2 text-[clamp(32px,8vw,52px)] font-black leading-none tabular-nums text-[#00AB94]">
                    <AnimatedStatNumber value={stat.value} />{stat.suffix}
                  </div>
                  <div className="font-expanded mb-2 text-center text-lg font-bold text-[#00365A] uppercase">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-4 py-16 sm:px-6 md:px-8 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-title mb-12 text-[clamp(26px,6vw,40px)] font-bold uppercase leading-tight text-[#00365A]">
              Guiding Principles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Vision Card */}
              <ImageCard
                src="https://images.unsplash.com/photo-1541888081691-5a02d844280b?q=80&w=2070&auto=format&fit=crop"
                alt="Construction project representing our vision for the fencing industry"
                title="Our Vision"
                description="To be the world&apos;s most reliable and innovative provider in the fencing industry."
                className="aspect-[4/3] rounded-lg shadow-lg shadow-slate-900/10"
              />

              {/* Mission Card */}
              <ImageCard
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaborating to deliver customer-focused fencing solutions"
                title="Our Mission"
                description="To deliver total customer satisfaction through one-stop fencing solutions while building lasting value for our people and partners."
                className="aspect-[4/3] rounded-lg shadow-lg shadow-slate-900/10"
              />
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

            <PortfolioCarousel />
          </div>
        </section>

        <CallToAction />
      </main>

      <SiteFooter />
    </div>
  );
}
