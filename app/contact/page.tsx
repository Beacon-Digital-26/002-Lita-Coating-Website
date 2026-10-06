import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import HeroSectionShell from "@/components/HeroSectionShell";
import ContactLocationMap from "@/components/ContactLocationMap";
import { MdAccessTime, MdArrowForward, MdEdit, MdEmail, MdLocationOn, MdLock, MdPhone } from "react-icons/md";

const LITA_FINEMESH_BUSINESS = "Lita Finemesh Industries Sdn Bhd";

const OFFICE_MAP_ADDRESS =
  "Lot 111, Jalan PKNK 2, LPK1, 08000 Sungai Petani, Kedah Darul Aman";

const GOOGLE_MAPS_QUERY = `${LITA_FINEMESH_BUSINESS}, ${OFFICE_MAP_ADDRESS}`;

/** Plant coordinates — embed uses this so Google does not show the place info card. */
const LITA_FINEMESH_MAP_CENTER = "5.650312,100.534129";

/** Resolves to the Lita Finemesh Google Business listing, not a generic address pin. */
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_MAPS_QUERY)}`;

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSectionShell
          backgroundImage="linear-gradient(rgba(10, 77, 124, 0.82), rgba(10, 77, 124, 0.82)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')"
        >
          <h1 className="font-title mb-6 text-[clamp(36px,9vw,70px)] font-bold uppercase leading-[1.05] tracking-tight text-white">
            Contact Us
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            Connect with our team for your next fencing project.
          </p>
        </HeroSectionShell>

        {/* Contact Info & Form */}
        <section className="px-4 py-14 sm:px-6 md:px-8 md:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <h2 className="font-mona mt-[20px] mb-4 text-[clamp(22px,5vw,30px)] font-black uppercase text-[#0A4D7C]">GET IN TOUCH</h2>
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
                <div className="grid grid-cols-[auto_auto_1fr] gap-x-1 text-xs text-slate-500">
                  <span>Monday - Friday</span>
                  <span>:</span>
                  <span>8:30 AM - 5:30 PM</span>
                  <span>Saturday</span>
                  <span>:</span>
                  <span>8:30 AM - 1:00 PM</span>
                </div>
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

              <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-4 font-bold text-white transition duration-200 hover:scale-[1.02] hover:bg-teal-600 active:scale-95">
                SUBMIT ENQUIRY / REQUEST TENDER QUOTE <MdArrowForward size={18} aria-hidden />
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-4">
                <MdLock size={12} />
                <span>We respect your project privacy. NDAs available upon request for high-security infrastructure.</span>
              </div>
            </form>
          </div>
        </section>

        <ContactLocationMap
          businessName={LITA_FINEMESH_BUSINESS}
          address={OFFICE_MAP_ADDRESS}
          googleMapsUrl={GOOGLE_MAPS_URL}
          mapCenter={LITA_FINEMESH_MAP_CENTER}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
