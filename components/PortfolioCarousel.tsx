"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "@/components/ImageCard";

const mockProjects = Array.from({ length: 3 }, (_, index) => ({
  id: `mock-project-${index + 1}`,
  src: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop",
  alt: "Northern Industrial Hub in Kedah",
  title: "Northern Industrial Hub, Kedah",
  description: "Full perimeter security fencing implementation",
}));

export default function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

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
        {mockProjects.map((project) => (
          <div
            key={project.id}
            data-portfolio-card
            className="w-full shrink-0 snap-start"
          >
            <ImageCard
              src={project.src}
              alt={project.alt}
              title={project.title}
              description={project.description}
              className="h-[320px] rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 sm:h-[380px]"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous portfolio projects"
          disabled={isAtStart}
          onClick={() => scroll(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#00365A] transition hover:border-teal-500 hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next portfolio projects"
          disabled={isAtEnd}
          onClick={() => scroll(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#00365A] transition hover:border-teal-500 hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}