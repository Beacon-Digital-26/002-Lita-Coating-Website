import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { MdWorkspacePremium, MdImage, MdCheckCircle, MdCategory, MdSettings, MdAttachMoney, MdAccessTime, MdVerifiedUser, MdFileDownload } from "react-icons/md";

export default function Service() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[400px] items-center justify-center bg-slate-900 bg-cover bg-center px-8 py-20 text-white text-center" style={{ backgroundImage: "linear-gradient(rgba(0, 78, 140, 0.8), rgba(0, 78, 140, 0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="z-10 max-w-4xl flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#004e8c]"><MdWorkspacePremium size={14} /></span>
              Lita Finemesh Industries Sdn. Bhd.
            </div>
            <h1 className="mb-4 text-5xl font-black uppercase leading-tight md:text-7xl">
              POLYESTER POWDER<br />COATING
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Connect with our team for your next fencing project.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 text-left">
              <div className="mb-4 text-xs font-bold tracking-widest text-teal-500 uppercase">PREMIUM SURFACE FINISHING</div>
              <h2 className="mb-8 text-4xl font-black uppercase text-[#004e8c] leading-tight">
                POLYESTER<br />POWDER<br />COATING FINISHING
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  Lita Finemesh is proud to be the only fencing manufacturer in Malaysia with in-house polyester powder coating finishing plant. This allows us full control over the finishing quality and turnaround times.
                </p>
                <p>
                  Our surface treatments are specifically formulated to withstand severe environmental standards, offering unparalleled defense against extreme weather conditions, UV rays, and corrosion. Ideal for industrial and commercial applications.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="h-[400px] w-full max-w-[400px] rounded-2xl bg-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-400 shadow-lg">
                <MdImage size={64} />
              </div>
            </div>
          </div>
        </section>

        {/* Protection That Lasts */}
        <section className="px-8 py-20 overflow-hidden relative">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              <div className="md:w-1/2 relative min-h-[400px] w-full mb-12 md:mb-0">
                {/* Visual representation of powder coating spray */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#004e8c]/10 to-[#004e8c]/20 blur-3xl transform -rotate-12 scale-150 rounded-full"></div>
                <div className="relative z-10 w-full h-full flex flex-col justify-center pl-8 gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><MdCheckCircle size={18} /></div>
                    <span className="font-bold text-[#004e8c] uppercase tracking-wide">WEATHERPROOF</span>
                  </div>
                  <div className="flex items-center gap-3 ml-12">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><MdCheckCircle size={18} /></div>
                    <span className="font-bold text-[#004e8c] uppercase tracking-wide">UV RESISTANT</span>
                  </div>
                  <div className="flex items-center gap-3 ml-24">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><MdCheckCircle size={18} /></div>
                    <span className="font-bold text-[#004e8c] uppercase tracking-wide">LONG LASTING COLOUR</span>
                  </div>
                  <div className="flex items-center gap-3 ml-12">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><MdCheckCircle size={18} /></div>
                    <span className="font-bold text-[#004e8c] uppercase tracking-wide">SCRATCH RESISTANT</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 text-right z-10">
                <h2 className="text-5xl md:text-7xl font-black uppercase text-[#004e8c] leading-none">
                  PROTECTION<br />THAT<br />LASTS.
                </h2>
              </div>
              
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 px-8 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 text-xs font-bold tracking-widest text-teal-500 uppercase">Advantages</div>
            <h2 className="mb-12 text-4xl font-black uppercase text-[#004e8c]">WHY CHOOSE US?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
              {[
                { icon: <MdCategory size={24} />, title: "Wide Product Range", desc: "We offer an extensive selection of coating options suitable for multiple industries and commercial applications." },
                { icon: <MdSettings size={24} />, title: "Automatic Touch", desc: "Fully automated finishing line ensures consistency and highest quality finish." },
                { icon: <MdAttachMoney size={24} />, title: "Cost-Effective Production", desc: "Our automated systems lead to reduced labor costs and waste, savings we pass to you." },
                { icon: <MdAccessTime size={24} />, title: "On-Time Delivery", desc: "Streamlined supply chain and automated processes guarantee your products are ready on time." }
              ].map((feature, i) => (
                <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#004e8c]">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colour & Finish Options */}
        <section className="px-8 py-20 bg-white">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-4 text-4xl font-black uppercase text-[#004e8c]">COLOUR &amp; FINISH OPTIONS</h2>
            <p className="mb-16 text-slate-500 text-sm">Choose from a wide array of premium colors and finishes.</p>
            
            {/* Fan layout of color cards */}
            <div className="relative h-64 md:h-80 flex justify-center items-end mb-16">
              {[
                { name: "MATTE BLACK", code: "RAL 9005", color: "#111111", rotate: "-rotate-12", z: "z-10", translate: "-translate-x-1/2" },
                { name: "MATTE BLACK", code: "RAL 9005", color: "#453211", rotate: "-rotate-6", z: "z-20", translate: "-translate-x-1/4" }, // Using a brownish tint based on image
                { name: "GREEN", code: "RAL 6005", color: "#32a852", rotate: "rotate-0", z: "z-30", translate: "translate-x-0", scale: "scale-110" },
                { name: "INDUSTRIAL GRAY", code: "RAL 7004", color: "#8a8d91", rotate: "rotate-6", z: "z-20", translate: "translate-x-1/4" },
                { name: "NAVY BLUE", code: "RAL 5003", color: "#2b3b6b", rotate: "rotate-12", z: "z-10", translate: "translate-x-1/2" }
              ].map((item, index) => (
                <div key={index} className={`absolute bottom-0 w-40 md:w-48 bg-white rounded-t-2xl shadow-xl border border-slate-200 overflow-hidden transform origin-bottom transition-transform duration-300 hover:z-40 hover:-translate-y-4 hover:rotate-0 ${item.rotate} ${item.z} ${item.translate} ${item.scale || ''}`}>
                  <div className="h-32 md:h-48 w-full" style={{ backgroundColor: item.color }}></div>
                  <div className="p-4 text-left bg-white">
                    <h4 className="font-bold text-[#004e8c] text-xs uppercase">{item.name}</h4>
                    <p className="text-[10px] text-teal-600">{item.code}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600 shadow-lg">
              GET A QUOTE
            </button>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="px-8 py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex-shrink-0 w-24 h-24 rounded-full border-4 border-[#004e8c] text-[#004e8c] flex items-center justify-center">
              <MdVerifiedUser size={48} />
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#004e8c] mb-2">1-2 YEAR PROCESS<br />WARRANTY</h2>
              <p className="text-slate-500 text-sm">We provide an aggregate 1 to 2 years process warranty backing up the specification stated above.</p>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <button className="flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:border-slate-400">
                <MdFileDownload size={14} /> DOWNLOAD PDF
              </button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#004e8c] mx-8 my-16 rounded-3xl relative overflow-hidden max-w-6xl lg:mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 rounded-full opacity-10 translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="px-8 py-16 relative z-10 flex flex-col items-center justify-center text-center">
            <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">Partner With The Best</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight text-white">
              LOOKING FOR A RELIABLE<br />FENCING PARTNER?
            </h2>
            <p className="text-blue-100 text-sm max-w-2xl mb-10">
              Get in touch with us today for a free quote or to learn more about how we can help you secure your perimeter.
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
