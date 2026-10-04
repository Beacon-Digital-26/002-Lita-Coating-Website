import Image from "next/image";

/** Shared hero brand row — keep in sync across page heroes for alignment. */
export default function HeroBrandRow() {
  return (
    <div className="mb-8 flex items-center gap-3">
      <Image
        src="/hero-brand-logo.png"
        alt="Lita Finemesh"
        width={48}
        height={48}
        className="h-11 w-11 shrink-0 object-contain md:h-12 md:w-12"
      />
      <p className="font-mona text-[32px] font-light leading-none text-white/95">
        Lita Finemesh Industries Sdn. Bhd.
      </p>
    </div>
  );
}
