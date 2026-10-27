"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioProject } from "@/components/portfolio-projects";

type ProjectGalleryOverlayProps = {
  project: PortfolioProject;
  onClose: () => void;
};

export default function ProjectGalleryOverlay({
  project,
  onClose,
}: ProjectGalleryOverlayProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const total = project.images.length;

  const goTo = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        goTo(1);
      } else if (event.key === "ArrowLeft") {
        goTo(-1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goTo, onClose]);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex animate-overlay-fade flex-col bg-brand-navy/95 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 py-5 sm:px-6 sm:py-8"
      >
        <div className="mb-4 flex items-start justify-between gap-4 text-left">
          <div>
            <h3 className="font-title text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
              {project.title}
            </h3>
            <p className="font-mona mt-1 text-sm text-white/70">{project.description}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white/10"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/40">
          <Image
            key={project.images[activeIndex]}
            src={project.images[activeIndex]}
            alt={`${project.title} — photo ${activeIndex + 1} of ${total}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            quality={90}
            priority
            className="animate-overlay-fade object-contain"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-brand-red"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-brand-red"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
              <span className="font-mona absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold tracking-wide text-white">
                {activeIndex + 1} / {total}
              </span>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="mt-4 flex shrink-0 gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-28 ${
                  index === activeIndex
                    ? "border-brand-red opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
