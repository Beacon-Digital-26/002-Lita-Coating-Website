import Image from "next/image";
import Link from "next/link";
import { MdWorkspacePremium, MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdEdit, MdLock, MdOpenInNew } from "react-icons/md";

export default function Contact() {
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
            <Link href="/about" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">ABOUT US</Link>
            <Link href="/service" className="flex-1 flex items-center justify-center hover:text-teal-300 transition h-full">SERVICES</Link>
            <Link href="/contact" className="flex-1 flex items-center justify-center text-teal-300 border-b-2 border-teal-300 h-full">CONTACT US</Link>
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
              CONTACT US
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Connect with our team for your next fencing project.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl font-black uppercase text-[#004e8c] mb-4">GET IN TOUCH</h2>
            <p className="text-slate-500 mb-10">Our engineering team is ready to assist you. Reach out via any of the channels below.</p>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <MdLocationOn size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#004e8c] mb-1">OFFICE &amp; FACTORY</h3>
                  <p className="text-sm text-slate-600">Lot 111, Jalan PKNK 2, Kawasan Perusahaan Sg. Petani (LPK1), 08000 Sungai Petani, Kedah, Malaysia</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <MdPhone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#004e8c] mb-1">PHONE SERVICES</h3>
                  <div className="text-sm text-slate-600 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
                    <span className="text-slate-400">TEL:</span>
                    <span>
                      +604 4426 442 (HQ)<br />
                      +604 4426 443<br />
                      +604 4426 444
                    </span>
                    <span className="text-slate-400">FAX:</span>
                    <span>+604 442 5442</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <MdEmail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#004e8c] mb-1">EMAIL CORRESPONDENCE</h3>
                  <p className="text-sm text-teal-600 font-medium">enquiry@litafinemesh.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 flex items-start gap-4 border border-slate-100">
              <div className="text-slate-400 mt-1"><MdAccessTime size={20} /></div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">BUSINESS OPERATING HOURS</h4>
                <p className="text-xs text-slate-500">Monday - Friday: 8:30 AM - 5:30 PM | Saturday: 8:30 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <MdEdit className="text-teal-500" size={28} />
              <h2 className="text-2xl font-black uppercase text-[#004e8c]">SEND US AN ENQUIRY</h2>
            </div>
            <p className="text-sm text-slate-500 mb-8">Fill out the specification details below and our team will respond within 24 business hours.</p>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#004e8c] uppercase mb-2">FULL NAME <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Ir. Ahmad Razak" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#004e8c] uppercase mb-2">COMPANY NAME <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Pembinaan Mega Sdn. Bhd." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#004e8c] uppercase mb-2">PHONE NUMBER <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="+60 12-345 6789" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#004e8c] uppercase mb-2">WORK EMAIL <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#004e8c] uppercase mb-2">YOUR MESSAGE</label>
                <textarea rows={4} placeholder="Provide estimated linear meters, project location, or specification requirements..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none"></textarea>
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-4 font-bold text-white transition hover:bg-teal-600">
                SUBMIT ENQUIRY / REQUEST TENDER QUOTE -&gt;
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-4">
                <MdLock size={12} />
                <span>We respect your project privacy. NDAs available upon request for high-security infrastructure.</span>
              </div>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[600px] w-full bg-slate-200 flex items-center">
          {/* Placeholder for map background, visually similar to a light map */}
          <div className="absolute inset-0 overflow-hidden opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'%23cbd5e1\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\' /%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex justify-start">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-100">
              <div className="flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-wider mb-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                OUR LOCATION
              </div>
              <h3 className="text-xl font-bold text-[#004e8c] mb-2">Kawasan Perusahaan Sg. Petani</h3>
              <p className="text-sm text-slate-500 mb-6">Lot 111, Jalan PKNK 2, LPK1, 08000 Sungai Petani, Kedah Darul Aman</p>

              <div className="space-y-3 mb-8 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MdPhone size={16} className="text-teal-500" />
                  <span>+604 4426 442 (HQ)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdEmail size={16} className="text-teal-500" />
                  <span>enquiry@litafinemesh.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdAccessTime size={16} className="text-teal-500" />
                  <span>Mon-Fri: 8:30am - 5:30pm</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#004e8c] px-6 py-3 font-bold text-white transition hover:bg-[#003b6b]">
                OPEN IN GOOGLE MAPS <MdOpenInNew size={16} />
              </button>
            </div>
          </div>

          {/* Map Pin UI element for visual effect */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center">
            <div className="bg-[#004e8c] text-white text-xs font-bold px-3 py-1 rounded shadow-md mb-2 relative">
              LITA FINEMESH PLANT (LPK1)
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#004e8c] rotate-45"></div>
            </div>
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
              <MdLocationOn size={20} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#003b6b] px-8 py-16 text-slate-300 text-sm border-t-4 border-teal-500">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-2">
              <span className="text-teal-500">Lita</span> Finemesh
            </div>
            <p className="text-xs text-slate-400 mb-6 italic">Fencing Your Property</p>
            <p className="mb-8 text-slate-400 pr-12">
              High-specification industrial wire mesh and architectural boundary solutions engineered for lasting perimeter security.
            </p>
            <div className="text-xs">
              <h4 className="font-bold text-teal-500 uppercase tracking-wider mb-2">HEADQUARTERS &amp; MANUFACTURING FACILITY</h4>
              <p>Lot 111, Jalan PKNK 2, Kawasan Perusahaan Sg. Petani,<br />08000 Sungai Petani, Kedah, Malaysia</p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-xs">COMPANY NAVIGATION</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-teal-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition">About Us</Link></li>
              <li><Link href="/service" className="hover:text-teal-400 transition">Services</Link></li>
              <li><Link href="/contact" className="text-teal-400 transition border-b border-teal-400 pb-1">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-xs">BUSINESS HOURS</h4>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-slate-400 mb-8">
              <span>Mon - Fri:</span>
              <span>8:30 AM - 5:30 PM</span>
              <span>Sat:</span>
              <span>8:30 AM - 1:00 PM</span>
              <span>Sun &amp; PH:</span>
              <span>Closed</span>
            </div>
            
            <div className="bg-[#002a4d] p-4 rounded-lg border border-[#004e8c]">
              <h5 className="text-[10px] font-bold text-teal-500 uppercase tracking-wider mb-1">DIRECT SALES HP</h5>
              <p className="text-xl font-bold text-white tracking-wide">019-444 7178</p>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-[#004e8c]/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2024 Lita Finemesh Industries Sdn Bhd. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>TIM GROUP AFFILIATE</span>
            <span className="text-[#004e8c]">•</span>
            <span>SIRIM ACCREDITED TESTING</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
