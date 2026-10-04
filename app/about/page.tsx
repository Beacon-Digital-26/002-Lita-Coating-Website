import Image from "next/image";
import Link from "next/link";
import { MdWorkspacePremium, MdCheckCircle, MdVerifiedUser, MdDescription, MdPhone, MdFileDownload } from "react-icons/md";

export default function About() {
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
            <Link href="/" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">HOME</Link>
            <Link href="/about" className="flex-1 flex items-center justify-center text-teal-300 border-b-2 border-teal-300 h-full">ABOUT US</Link>
            <Link href="/service" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">SERVICES</Link>
            <Link href="/contact" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">CONTACT US</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[400px] items-center justify-center bg-slate-900 bg-cover bg-center px-8 py-20 text-white text-center" style={{ backgroundImage: "linear-gradient(rgba(0, 78, 140, 0.8), rgba(0, 78, 140, 0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="z-10 max-w-4xl flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#004e8c]"><MdWorkspacePremium size={14} /></span>
              Lita Finemesh Industries Sdn. Bhd.
            </div>
            <h1 className="mb-4 text-5xl font-black uppercase leading-tight md:text-7xl">
              ABOUT US
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Safeguarding territories, Protecting What Matters.
            </p>
          </div>
        </section>

        {/* A Decade of Engineering Excellence */}
        <section className="px-8 py-20">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 text-left">
              <div className="mb-4 text-xs font-bold tracking-widest text-teal-500 uppercase">Our Story</div>
              <h2 className="mb-8 text-4xl font-black uppercase text-[#004e8c] leading-tight">
                A DECADE OF<br />ENGINEERING EXCELLENCE
              </h2>
              <div className="space-y-4 text-slate-600 mb-8 border-l-4 border-teal-500 pl-6">
                <p>
                  Founded a decade ago, Lita Finemesh has grown into a leading manufacturer of fencing profiles, known for our commitment to quality, innovative production, and continuous excellence.
                </p>
                <p className="font-bold text-[#004e8c]">
                  We are also Malaysia's first fencing manufacturer with in-house polyester powder coating.
                </p>
                <p className="text-sm">
                  This gives us full control over product finishing, ensuring top-notch quality and faster turnaround times.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-100">
                  <MdCheckCircle size={14} /> In-house Facility
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                  <MdCheckCircle size={14} /> R&amp;D Support
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  CIDB
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  SIRIM QAS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  Quality Assurance
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  Eco Sustainability
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full overflow-hidden border-8 border-slate-50 shadow-xl">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Engineering Excellence" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-50 py-16 px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-[#004e8c] mb-2">12+</div>
              <div className="text-sm font-bold text-teal-600 mb-1">Years in Business</div>
              <div className="text-xs text-slate-500">Delivering excellence since 2012</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-[#004e8c] mb-2">8+</div>
              <div className="text-sm font-bold text-teal-600 mb-1">Core Fencing Profiles</div>
              <div className="text-xs text-slate-500">Comprehensive range of products</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-[#004e8c] mb-2">100%</div>
              <div className="text-sm font-bold text-teal-600 mb-1">Nationwide Coverage</div>
              <div className="text-xs text-slate-500">Full Malaysia footprint and support</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-[#004e8c] mb-2">1,500+</div>
              <div className="text-sm font-bold text-teal-600 mb-1">Completed Projects</div>
              <div className="text-xs text-slate-500">Trusted by major developers</div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-8 py-20 bg-slate-50">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-2 text-xs font-bold tracking-widest text-teal-500 uppercase">Guiding Principles</div>
            <h2 className="mb-12 text-4xl font-black uppercase text-[#004e8c]">STRATEGIC VISION &amp; MISSION</h2>
            
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
            <h2 className="mb-12 inline-block border-b-4 border-teal-500 pb-2 text-4xl font-black uppercase text-[#004e8c]">CASE PORTFOLIO</h2>
            
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
        <section className="bg-[#004e8c] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 right-32 w-48 h-48 bg-teal-400 rounded-full opacity-10 translate-y-1/4"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-20 -translate-y-1/2"></div>
          
          <div className="mx-auto max-w-6xl px-8 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight">
                LOOKING FOR A RELIABLE<br />FENCING PARTNER?
              </h2>
              <p className="text-blue-100 text-lg">Get in touch with us today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600">
                <MdPhone size={18} /> CONTACT US
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-[#004e8c] transition hover:bg-slate-100">
                <MdFileDownload size={18} /> VIEW BROCHURE
              </button>
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
