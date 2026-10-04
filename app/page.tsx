import Image from "next/image";
import Link from "next/link";
import { MdWorkspacePremium, MdArrowForward, MdAccessTime, MdLocationOn, MdVerifiedUser, MdCategory, MdAttachMoney } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-col bg-white shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Lita Finemesh Logo" width={180} height={60} className="h-14 w-auto object-contain" priority />
          </div>
          <button className="rounded-full bg-teal-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-teal-600">
            REQUEST QUOTE -&gt;
          </button>
        </div>
        <div className="bg-[#0A4D7C] h-[30px] w-full">
          <nav className="hidden md:flex w-full text-sm font-bold text-white h-full">
            <Link href="/" className="flex-1 flex items-center justify-center text-teal-300 border-b-2 border-teal-300 h-full">HOME</Link>
            <Link href="/about" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">ABOUT US</Link>
            <Link href="/service" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">SERVICES</Link>
            <Link href="/contact" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">CONTACT US</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[600px] items-center justify-center bg-slate-900 bg-cover bg-center px-8 py-24 text-white text-center" style={{ backgroundImage: "linear-gradient(rgba(0, 78, 140, 0.7), rgba(0, 78, 140, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="z-10 max-w-4xl flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#004e8c]"><MdWorkspacePremium size={14} /></span>
              Lita Finemesh Industries Sdn Bhd
            </div>
            <h1 className="mb-6 text-5xl font-black uppercase leading-tight md:text-7xl">
              Polyester Powder<br />Coating Finishing
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-slate-200">
              Enhancing the durability and aesthetics of materials with our in-house automated polyester powder coating finishing lines.
            </p>
            <button className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600">
              VIEW BROCHURE <MdArrowForward size={18} />
            </button>
          </div>
        </section>

        {/* Feature Section */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-4 inline-block border-b-2 border-teal-500 pb-1 text-sm font-bold tracking-widest text-teal-600 uppercase">
              About Lita Finemesh
            </div>
            <h2 className="mb-16 text-4xl font-black uppercase text-[#004e8c] md:text-5xl">
              Malaysia's First In-<br />House Polyester<br />Powder Coating
            </h2>
            <div className="grid gap-8 md:grid-cols-3 text-left">
              <div className="border-l-4 border-teal-500 pl-6">
                <div className="mb-4 text-teal-500"><MdAccessTime size={32} /></div>
                <h3 className="mb-2 text-xl font-bold text-[#004e8c]">NO MORE WAITING FOR OUTSOURCING</h3>
                <p className="text-sm text-slate-600">Faster turnaround times with our in-house fully automated polyester powder coating plant.</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-6">
                <div className="mb-4 text-teal-500"><MdLocationOn size={32} /></div>
                <h3 className="mb-2 text-xl font-bold text-[#004e8c]">MARINE &amp; TROPICAL EXPOSURE</h3>
                <p className="text-sm text-slate-600">Specially formulated to withstand extreme tropical weather and marine environments.</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-6">
                <div className="mb-4 text-teal-500"><MdVerifiedUser size={32} /></div>
                <h3 className="mb-2 text-xl font-bold text-[#004e8c]">ARCHITECTURAL GRADE CERTIFIED APPLICATOR</h3>
                <p className="text-sm text-slate-600">Recognized as a certified applicator ensuring top-tier quality that meets global standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-slate-50 px-8 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-4xl font-black uppercase text-[#004e8c]">Applications</h2>
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
        <section className="px-8 py-20">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-left">
              <h2 className="mb-4 text-4xl font-black uppercase text-[#004e8c] leading-tight">Colour<br />&amp; Finish<br />Options</h2>
              <p className="mb-6 text-slate-500 text-sm">Choose from a wide array of premium colors and finishes.</p>
              <button className="rounded-full bg-teal-500 px-8 py-2 font-bold text-white transition hover:bg-teal-600">
                VIEW MORE
              </button>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "MATTE BLACK", code: "RAL 9005", color: "#111111" },
                { name: "GREEN", code: "RAL 6005", color: "#32a852" },
                { name: "INDUSTRIAL GRAY", code: "RAL 7004", color: "#8a8d91" },
                { name: "BROWN", code: "RAL 8011", color: "#5c4033" },
                { name: "NAVY BLUE", code: "RAL 5003", color: "#2b3b6b" },
                { name: "RED", code: "RAL 3020", color: "#d11111" }
              ].map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <div className="h-32 w-full" style={{ backgroundColor: item.color }}></div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#004e8c] text-sm">{item.name}</h4>
                    <p className="text-xs text-teal-600">{item.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 px-8 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 text-xs font-bold tracking-widest text-teal-500 uppercase">Advantages</div>
            <h2 className="mb-12 text-4xl font-black uppercase text-[#004e8c]">Why Choose Us?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
              {[
                { icon: <MdCategory size={24} />, title: "Wide Product Range", desc: "We offer a vast selection of coating options suitable for multiple industries and applications." },
                { icon: <MdVerifiedUser size={24} />, title: "Maintenance Free", desc: "Highly durable finishes that require minimal upkeep, saving you time and money." },
                { icon: <MdAttachMoney size={24} />, title: "Cost-Effective Production", desc: "Automated processes ensure high efficiency and lower production costs." },
                { icon: <MdAccessTime size={24} />, title: "On-Time Delivery", desc: "Streamlined supply chain and automated processes guarantee your products are ready when you need them." }
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

        {/* Stats / CTA Section */}
        <section className="relative px-8 py-24 text-white bg-slate-900 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 78, 140, 0.8), rgba(0, 78, 140, 0.8)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="mb-6 text-4xl font-black uppercase leading-tight md:text-5xl">
                Built To Last.<br />Coated To Perfection.
              </h2>
              <p className="mb-8 text-slate-300">
                Partner with us for your next project and experience the difference of automated, precision powder coating.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600">
                  CONTACT US
                </button>
                <button className="rounded-full bg-white px-8 py-3 font-bold text-[#004e8c] transition hover:bg-slate-100">
                  VIEW BROCHURE
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-teal-400 mb-2">12+</div>
                <div className="text-sm font-bold tracking-wider">YEARS IN MARKET</div>
              </div>
              <div>
                <div className="text-5xl font-black text-teal-400 mb-2">100%</div>
                <div className="text-sm font-bold tracking-wider">QUALITY ASSURANCE</div>
              </div>
              <div>
                <div className="text-5xl font-black text-teal-400 mb-2">1,500+</div>
                <div className="text-sm font-bold tracking-wider">PROJECTS DELIVERED</div>
              </div>
              <div>
                <div className="text-5xl font-black text-teal-400 mb-2">500+</div>
                <div className="text-sm font-bold tracking-wider">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#003b6b] px-8 py-16 text-slate-300 text-sm">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white mb-6">
              <span className="text-teal-500">Lita</span> Finemesh
            </div>
            <p className="mb-4">123 Industrial Park, Block B<br />Selangor, Malaysia</p>
            <p className="mb-1"><strong>Phone:</strong> +60 123 456 789</p>
            <p><strong>Email:</strong> info@litacoating.com</p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-400">About Us</Link></li>
              <li><Link href="/service" className="hover:text-teal-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">SERVICES</h4>
            <ul className="space-y-3">
              <li><Link href="/service" className="hover:text-teal-400">Powder Coating</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Sand Blasting</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Surface Preparation</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Quality Inspection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">NEWSLETTER</h4>
            <p className="mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="w-full bg-[#002a4d] px-4 py-2 outline-none text-white rounded-l-md" />
              <button className="bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600 rounded-r-md">JOIN</button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-12 border-t border-[#004e8c] pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lita Finemesh Industries Sdn Bhd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
