import type { ReactNode } from "react";

type HeroSectionShellProps = {
  backgroundImage: string;
  /** e.g. `center 20%` — shifts cover crop without changing aspect ratio. */
  backgroundPosition?: string;
  children: ReactNode;
  /** Override default min-heights (e.g. `h-[507px] min-h-[507px]`). */
  sectionClassName?: string;
};

/** Shared hero layout — top-aligned content so brand row sits at the same Y on every page. */
export default function HeroSectionShell({
  backgroundImage,
  backgroundPosition = "center center",
  children,
  sectionClassName = "min-h-[560px] md:min-h-[620px]",
}: HeroSectionShellProps) {
  return (
    <section
      className={`relative flex items-start bg-cover bg-no-repeat px-8 pb-20 pt-[104px] text-white md:pt-[112px] lg:px-16 lg:pb-24 lg:pt-[120px] ${sectionClassName}`}
      style={{ backgroundImage, backgroundPosition }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-xl text-left md:max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
