import { MdArrowForward } from "react-icons/md";

export default function CallToAction() {
  return (
    <section className="flex justify-center bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="relative mx-auto min-h-[320px] w-full max-w-[1372px] overflow-hidden rounded-2xl bg-[#004e8c] py-10 md:h-[377px] md:py-0">
        <div
          className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 opacity-20"
          aria-hidden
        />
        <div
          className="absolute right-32 bottom-0 h-48 w-48 translate-y-1/4 rounded-full bg-teal-400 opacity-10"
          aria-hidden
        />
        <div
          className="absolute right-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-400 opacity-20"
          aria-hidden
        />

        <div className="relative z-10 flex h-full items-center px-6 py-6 sm:px-8 md:px-12 lg:px-16">
          <div className="relative text-center text-white md:-left-[15px] md:-top-[5px] md:text-left">
            <h2 className="font-title mb-4 text-[clamp(24px,6vw,40px)] font-bold uppercase leading-tight text-white">
              LOOKING FOR A RELIABLE
              <br />
              FENCING PARTNER?
            </h2>
            <p className="text-base text-blue-100 sm:text-lg">Get in touch with us today.</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95">
                CONTACT US <MdArrowForward size={18} aria-hidden />
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-[#004e8c] transition duration-200 hover:scale-105 hover:bg-slate-100 active:scale-95">
                VIEW BROCHURE <MdArrowForward size={18} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}