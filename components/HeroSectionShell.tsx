import type { ReactNode } from "react";

type HeroSectionShellProps = {
  backgroundImage: string;
  /** e.g. `center 20%` — shifts cover crop without changing aspect ratio. */
  backgroundPosition?: string;
  children: ReactNode;
};

/** Shared hero layout for consistent sizing and content alignment across pages. */
export default function HeroSectionShell({
  backgroundImage,
  backgroundPosition = "center center",
  children,
}: HeroSectionShellProps) {
  return (
    <section
      className="relative flex min-h-[clamp(280px,40svh,460px)] items-start bg-cover bg-no-repeat px-4 pb-16 pt-[88px] text-white sm:px-6 sm:pb-20 md:px-8 md:pt-[112px] lg:px-16 lg:pb-24 lg:pt-[120px]"
      style={{ backgroundImage, backgroundPosition }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-full text-left sm:max-w-2xl md:max-w-7xl">{children}</div>
      </div>
    </section>
  );
}
