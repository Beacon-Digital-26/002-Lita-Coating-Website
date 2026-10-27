"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import ProjectGalleryOverlay from "@/components/ProjectGalleryOverlay";
import {
  portfolioProjects,
  type PortfolioProject,
} from "@/components/portfolio-projects";

export default function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateControls = () => {
      setIsAtStart(track.scrollLeft <= 1);
      setIsAtEnd(track.scrollWidth - track.clientWidth - track.scrollLeft <= 1);
    };

    updateControls();
    track.addEventListener("scroll", updateControls);
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-portfolio-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * ((card?.offsetWidth ?? track.clientWidth) + gap),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Case portfolio projects"
      >
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            data-portfolio-card
            className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <button
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`View ${project.title} gallery (${project.images.length} photo${
                project.images.length === 1 ? "" : "s"
              })`}
              className="group relative block h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-100 text-left shadow-xl shadow-slate-200/50 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/20 sm:h-[380px]"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />

              <span className="font-mona absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-navy/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                <Images size={14} aria-hidden="true" />
                {project.images.length}
              </span>

              <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent p-6 transition duration-500 group-hover:from-brand-navy group-hover:via-brand-navy/40 sm:p-8">
                <span className="font-title mb-3 block text-xl font-bold uppercase leading-tight text-white transition duration-500 group-hover:-translate-y-1 sm:text-2xl">
                  {project.title}
                </span>
                <span className="font-mona block max-w-lg text-[15px] font-normal leading-snug text-white/90">
                  {project.description}
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous portfolio projects"
          disabled={isAtStart}
          onClick={() => scroll(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition hover:border-brand-teal hover:bg-brand-teal/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next portfolio projects"
          disabled={isAtEnd}
          onClick={() => scroll(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition hover:border-brand-teal hover:bg-brand-teal/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {activeProject && (
        <ProjectGalleryOverlay
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}