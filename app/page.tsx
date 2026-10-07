import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import AnimatedStatNumber from "@/components/AnimatedStatNumber";
import ImageCard from "@/components/ImageCard";
import {
  MdWorkspacePremium,
  MdArrowForward,
  MdFactory,
  MdWbSunny,
  MdPalette,
} from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative -mt-16 flex min-h-svh items-center bg-cover bg-no-repeat px-4 pb-16 pt-[88px] text-white sm:-mt-[72px] sm:px-6 sm:pb-20 md:-mt-[88px] md:px-8 md:pt-[142px] lg:px-16 lg:pb-24 lg:pt-[142px]"
          style={{
            backgroundImage: "url('/lita-finemesh-hero.png')",
            backgroundPosition: "center 22%",
          }}
        >
          <div className="relative z-10 left-[calc(50%-50vw)] w-screen">
            <div className="w-fit max-w-[90vw] rounded-r-2xl bg-[#00365A]/60 py-6 pl-6 pr-6 text-left backdrop-blur-sm sm:max-w-2xl sm:py-8 sm:pl-8 sm:pr-12 md:max-w-4xl md:py-10 md:pl-10 md:pr-16 lg:max-w-5xl lg:pl-16 lg:pr-20">
              <p className="font-mona mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#00A896] sm:text-sm">
                1st in Malaysia
              </p>
              <h1 className="font-title mb-6 text-[clamp(32px,9vw,72px)] font-bold uppercase leading-[1.05] tracking-tight text-white">
                <span className="block">Polyester Powder</span>
                <span className="block">Coating Finishing</span>
              </h1>
              <Link
                href="/service"
                className="font-expanded inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#00A896] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95"
              >
                Explore Services
                <MdArrowForward size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-8 md:py-28">
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
            <h2 className="font-title mx-auto mb-16 max-w-5xl text-center text-[clamp(26px,5.5vw,56px)] font-bold uppercase leading-[1.15] tracking-normal text-[#004578] md:leading-[1.1]">
              <span className="md:hidden">
                <span className="block">
                  Malaysia&apos;s{" "}
                  <span className="underline decoration-[#00A896] decoration-[4px] underline-offset-1 sm:underline-offset-2">
                    First
                  </span>
                </span>
                <span className="block">In-House Polyester</span>
                <span className="block">Powder Coating</span>
              </span>
              <span className="hidden md:block">
                <span className="block">
                  Malaysia&apos;s{" "}
                  <span className="underline decoration-[#00A896] decoration-[4px] underline-offset-[8px]">
                    First
                  </span>{" "}
                  In-House
                </span>
                <span className="block">Polyester Powder Coating</span>
              </span>
            </h2>
            <div className="grid gap-8 text-center md:grid-cols-3 md:gap-10 lg:gap-16">
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00A896] text-white">
                  <MdFactory size={28} />
                </div>
                <h3 className="font-title mb-4 text-[16px] font-bold uppercase leading-snug text-[#0a3d6b]">
                  Full Quality Control
                </h3>
                <p className="font-mona text-[20px] font-normal leading-[24px] text-slate-600">
                  Zero third-party transit delays or finish variances. Complete end-to-end oversight conducted under one roof.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00A896] text-white">
                  <MdWbSunny size={28} />
                </div>
                <h3 className="font-title mb-4 text-[16px] font-bold uppercase leading-snug text-[#0a3d6b]">
                  Weather Resistance
                </h3>
                <p className="font-mona text-[20px] font-normal leading-[24px] text-slate-600">
                  Specially engineered to resist intense UV exposure, monsoon moisture, and coastal corrosion.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00A896] text-white">
                  <MdPalette size={28} />
                </div>
                <h3 className="font-title mb-4 text-[16px] font-bold uppercase leading-snug text-[#0a3d6b]">
                  Architectural Finishes
                </h3>
                <p className="font-mona text-[20px] font-normal leading-[24px] text-slate-600">
                  High-precision automated electrostatic application across all RAL classic palettes, architect textures, and bespoke project specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-slate-50 px-4 py-16 text-center sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title mb-4 text-[clamp(28px,6vw,40px)] font-bold uppercase text-[#004e8c]">Applications</h2>
            <div
              className="mx-auto mb-12 h-[5px] w-[200px] rounded-full bg-[#00A896]"
              aria-hidden
            />
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <ImageCard
                src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=800&auto=format&fit=crop"
                alt="Fencing"
                title="Fencing"
                className="h-64 rounded-2xl"
                contentClassName="px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop"
                alt="Pipe valves"
                title="Pipe Valves"
                className="h-64 rounded-2xl"
                contentClassName="px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=800&auto=format&fit=crop"
                alt="Aluminium profile"
                title="Aluminium Profile"
                className="h-64 rounded-2xl"
                contentClassName="px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0"
              />
            </div>
            <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-2 font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95">
              VIEW MORE
              <MdArrowForward size={18} aria-hidden />
            </button>
          </div>
        </section>

        {/* Colour & Finish Options */}
        <section className="overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto grid w-full max-w-[1376px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,32%)_minmax(0,1fr)] lg:items-center lg:gap-8 xl:gap-16">
            <div className="w-full text-center lg:col-start-1 lg:row-start-1 lg:max-w-[380px] lg:self-center lg:text-left">
              <h2 className="font-title mb-3 text-center text-[clamp(32px,8vw,50px)] font-bold uppercase leading-tight tracking-[-0.75px] text-[#004e8c] lg:text-left">
                Colour &amp;
                <br />
                Finish Options
              </h2>
              <p className="mx-auto max-w-xs text-center font-mona text-[20px] font-normal leading-[24px] text-slate-600 lg:mx-0 lg:text-left">
                Wide range of RAL colors &amp; custom finishes available.
              </p>
            </div>
            <div className="min-w-0 w-full overflow-x-auto pb-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-visible lg:pb-0">
              <div className="flex w-max flex-nowrap justify-start gap-5 sm:gap-7 md:gap-9 lg:justify-center lg:gap-4 xl:gap-6">
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
                  className={`flex shrink-0 flex-col gap-8 sm:gap-10 ${column.offsetClass}`}
                >
                  {column.swatches.map((item) => (
                    <div
                      key={item.name}
                      className="flex h-[195px] w-[150px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 sm:h-[260px] sm:w-[200px] lg:h-[342px] lg:w-[clamp(180px,17vw,266px)]"
                    >
                      <div
                        className="h-[70%] w-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex flex-1 flex-col justify-center gap-0.5 px-3 text-left lg:px-4">
                        <h4 className="font-mona text-[13px] font-bold uppercase leading-tight tracking-[-0.25px] text-[#004e8c] sm:text-[17px] lg:text-[24px] lg:tracking-[-0.75px]">
                          {item.name}
                        </h4>
                        <p className="font-mona text-[10px] font-normal leading-tight text-[#00786C] sm:text-[12px] lg:text-[16px]">
                          {item.code}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              </div>
            </div>
            <button className="inline-flex cursor-pointer items-center justify-center gap-2 justify-self-center rounded-full bg-[#00A896] px-10 py-2.5 text-sm font-bold tracking-wide text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95 lg:col-start-1 lg:row-start-2 lg:justify-self-start">
              VIEW MORE
              <MdArrowForward size={18} aria-hidden />
            </button>
          </div>
        </section>

        {/* Stats / CTA Section */}
        <section
          className="relative bg-cover bg-center px-4 py-16 text-white sm:px-6 md:px-8 lg:px-16 lg:py-24"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 54, 90, 0.92) 0%, rgba(0, 54, 90, 0.88) 55%, rgba(0, 54, 90, 0.75) 100%), url('https://images.unsplash.com/photo-1581092918484-831bc410fe84?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="text-left lg:-ml-[15px]">
              <h2 className="font-title mb-6 text-[clamp(28px,6vw,40px)] font-bold uppercase leading-tight tracking-[-1.2px]">
                <span className="block">Built To Last.</span>
                <span className="block">Coated To Perfection.</span>
              </h2>
              <p className="mb-10 max-w-xl font-mona text-[20px] font-normal leading-[24px] text-white/90">
                Since 2012, Lita Finemesh has built Malaysia&apos;s fencing industry from Sungai Petani, Kedah.
                As the first fencing fabricator with an in-house powder coating line, we deliver superior
                finishes, faster turnaround, and consistent quality – backed by our affiliation with Yetta
                Steel.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="font-expanded inline-flex h-[42px] w-[204px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00AB94] font-mona text-[13px] font-bold uppercase leading-none tracking-[0.6px] text-white transition duration-200 hover:scale-105 hover:bg-[#009882] active:scale-95"
                >
                  About Us
                  <MdArrowForward size={18} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="font-expanded inline-flex h-[42px] w-[204px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white font-mona text-[13px] font-bold uppercase leading-none tracking-[0.6px] text-[#00365A] transition duration-200 hover:scale-105 hover:bg-slate-100 active:scale-95"
                >
                  Contact Us
                  <MdArrowForward size={18} className="shrink-0 text-[#00365A]" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-left sm:gap-x-10 sm:gap-y-12 md:gap-x-12 lg:-mt-[10px] lg:ml-[15px]">
              {[
                { value: 12, suffix: "+", label: "YEARS IN INDUSTRY" },
                { value: 100, suffix: "%", label: "IN-HOUSE COATING LINE" },
                { value: 1500, suffix: "+", label: "HOURS SALT SPRAY TESTED" },
                { value: 500, suffix: "+", label: "PROJECTS DELIVERED" },
              ].map((stat) => (
                <div key={stat.label} className="flex w-fit flex-col items-start">
                  <div className="text-[clamp(28px,7vw,52px)] font-black leading-none text-[#00A896] tabular-nums">
                    <AnimatedStatNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mona mt-2 text-left text-[11px] font-bold uppercase leading-snug tracking-[0.6px] text-white/95 sm:text-[12px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex h-[260px] w-full items-start justify-center bg-white px-4 pt-12 sm:h-[300px] sm:px-6 md:h-[350px] md:px-8">
          <h2 className="font-title mt-[25px] text-center text-[clamp(22px,5vw,32px)] font-bold uppercase leading-tight tracking-tight text-[#0A4D7C]">
            Trusted Brands We Distribute
          </h2>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
