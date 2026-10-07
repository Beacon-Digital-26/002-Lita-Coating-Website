import SiteHeader from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import HeroSectionShell from "@/components/HeroSectionShell";
import ContactLocationMap from "@/components/ContactLocationMap";
import Reveal from "@/components/Reveal";
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
          <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Connect with our team for your next fencing project.
          </p>
        </HeroSectionShell>

        {/* Contact Info & Form */}
        <section className="px-4 py-14 sm:px-6 md:px-8 md:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <Reveal variant="left">
              <h2 className="font-expanded mt-[20px] mb-4 text-[clamp(22px,5vw,30px)] font-bold uppercase text-[#0A4D7C]">GET IN TOUCH</h2>
              <p className="font-mona mb-10 text-[20px] font-normal leading-[24px] text-slate-600">
                Our engineering team is ready to assist you. Reach out via any of the channels below.
              </p>
            </Reveal>

            <div className="space-y-8 mb-10">
              <Reveal variant="left" delay={100}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00A896] text-white">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <h3 className="font-expanded mb-1 text-[18px] font-bold text-[#004e8c]">OFFICE &amp; FACTORY</h3>
                    <p className="font-mona text-[18px] font-normal leading-[24px] text-slate-600">
                      Lot 111, Jalan PKNK 2, 
                      <br />
                      Kawasan Perusahaan Sg. Petani (LPK1), 
                      <br />
                      08000 Sungai Petani, Kedah, 
                      <br />
                      Malaysia
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="left" delay={200}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00A896] text-white">
                    <MdPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-expanded mb-1 text-[18px] font-bold text-[#004e8c]">PHONE SERVICES</h3>
                    <div className="font-mona grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-[18px] font-normal leading-[24px] text-slate-600">
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
              </Reveal>

              <Reveal variant="left" delay={300}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00A896] text-white">
                    <MdEmail size={24} />
                  </div>
                  <div>
                    <h3 className="font-expanded mb-1 text-[18px] font-bold text-[#004e8c]">EMAIL CORRESPONDENCE</h3>
                    <p className="font-mona text-[18px] font-normal leading-[24px] text-teal-600">enquiry@litafinemesh.com</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal variant="left" delay={400} className="mb-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00A896] text-white">
                  <MdAccessTime size={24} />
                </div>
                <div>
                  <h3 className="font-expanded mb-1 text-[18px] font-bold uppercase text-[#004e8c]">BUSINESS OPERATING HOURS</h3>
                  <div className="font-mona grid grid-cols-[auto_auto_1fr] gap-x-1 text-[18px] font-normal leading-[24px] text-slate-600">
                    <span>Monday - Friday</span>
                    <span>:</span>
                    <span>8:30 AM - 5:30 PM</span>
                    <span>Saturday</span>
                    <span>:</span>
                    <span>8:30 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <Reveal variant="right" delay={120}>
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-expanded text-[clamp(22px,5vw,30px)] font-bold uppercase text-[#0A4D7C]">SEND US AN ENQUIRY</h2>
            </div>
            <p className="font-mona mb-8 text-[20px] font-normal leading-[24px] text-slate-600">
              Fill out the specification details below and our team will respond within 24 business hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="font-expanded mb-2 block text-xs font-bold text-[#004e8c] uppercase">FULL NAME <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Ir. Ahmad Razak" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
              </div>
              
              <div>
                <label className="font-expanded mb-2 block text-xs font-bold text-[#004e8c] uppercase">COMPANY NAME <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Pembinaan Mega Sdn. Bhd." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-expanded mb-2 block text-xs font-bold text-[#004e8c] uppercase">PHONE NUMBER <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="+60 12-345 6789" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
                </div>
                <div>
                  <label className="font-expanded mb-2 block text-xs font-bold text-[#004e8c] uppercase">WORK EMAIL <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition" />
                </div>
              </div>

              <div>
                <label className="font-expanded mb-2 block text-xs font-bold text-[#004e8c] uppercase">YOUR MESSAGE</label>
                <textarea rows={4} placeholder="Provide estimated linear meters, project location, or specification requirements..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none"></textarea>
              </div>

              <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00A896] px-6 py-4 font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95">
                SUBMIT ENQUIRY / REQUEST TENDER QUOTE <MdArrowForward size={18} aria-hidden />
              </button>
              
            </form>
            </div>
          </Reveal>
        </section>

        <ContactLocationMap
          businessName={LITA_FINEMESH_BUSINESS}
          googleMapsUrl={GOOGLE_MAPS_URL}
          mapCenter={LITA_FINEMESH_MAP_CENTER}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
