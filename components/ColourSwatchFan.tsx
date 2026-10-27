"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

/** Tweak arc / fit — card width is derived from viewport (see --card-w). */
const FAN = {
  cardDivisor: 4.6,
  maxCardWidthPx: 260,
  /** Horizontal overlap as a fraction of --card-w (raise by 0.02 if wedge gaps remain). */
  overlap: 0.26,
  overlapMobile: 0.22,
  rotStepDeg: 14,
  rotStepDegMobile: 11,
  /** How far from the centre a card may tilt before its angle/drop is clamped. */
  maxTilt: 2.5,
  dropFactor: 0.135,
  hoverLiftFactor: 0.08,
  /** Margin kept clear on each side of the wheel, so the scroll area stays narrower. */
  sideInsetPx: 140,
  maxRootWidthPx: 1040,
} as const;

const SWATCHES = [
  { name: "MATTE BLACK", code: "RAL 9005", color: "#111111" },
  { name: "BROWN", code: "RAL 8011", color: "#5c4033" },
  { name: "GREEN", code: "RAL 6005", color: "#32a852" },
  { name: "NAVY BLUE", code: "RAL 5003", color: "#2b3b6b" },
  { name: "INDUSTRIAL GRAY", code: "RAL 7004", color: "#8a8d91" },
  { name: "RED", code: "RAL 3020", color: "#d11111" },
] as const;

const MAX_DROP = FAN.dropFactor * FAN.maxTilt * FAN.maxTilt;

export default function ColourSwatchFan() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const inset = FAN.sideInsetPx;
  const insetTotal = inset * 2;

  /** Position each card on the wheel from its distance to the scroller's centre. */
  const updateWheel = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const centre = scroller.scrollLeft + scroller.clientWidth / 2;

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const width = card.offsetWidth || 1;
      const distance = (card.offsetLeft + width / 2 - centre) / width;
      const tilt = Math.max(-FAN.maxTilt, Math.min(FAN.maxTilt, distance));

      card.style.setProperty("--i", tilt.toFixed(3));
      card.style.zIndex = String(Math.max(1, Math.round(100 - Math.abs(tilt) * 10)));
      card.dataset.side = distance < -0.25 ? "left" : distance > 0.25 ? "right" : "centre";
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateWheel);
    };

    const centreOnMount = requestAnimationFrame(() => {
      scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
      updateWheel();
    });
    schedule();
    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const observer = new ResizeObserver(schedule);
    observer.observe(scroller);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(centreOnMount);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [updateWheel]);

  const step = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const width = cardRefs.current[0]?.offsetWidth ?? 200;
    scroller.scrollBy({ left: direction * width * (1 - FAN.overlap), behavior: "smooth" });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: scroller.scrollLeft,
      moved: 0,
    };
    scroller.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const scroller = scrollerRef.current;
    if (!drag.active || !scroller) return;
    const delta = event.clientX - drag.startX;
    drag.moved = Math.max(drag.moved, Math.abs(delta));
    scroller.scrollLeft = drag.startScroll - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
    dragRef.current.active = false;
  };

  const toggleCard = (index: number) => {
    if (dragRef.current.moved > 6) return;
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <style>{`
        .colour-swatch-fan-root {
          --card-w: min(calc((100vw - ${insetTotal}px) / ${FAN.cardDivisor}), ${FAN.maxCardWidthPx}px);
          --overlap: ${FAN.overlapMobile};
          --fan-drop-factor: ${FAN.dropFactor};
          --fan-hover-lift: calc(var(--card-w) * ${FAN.hoverLiftFactor});
          --fan-rot-step: ${FAN.rotStepDegMobile}deg;
          --fan-max-drop: calc(var(--card-w) * ${MAX_DROP});
          --label-edge-pad: calc(var(--card-w) * var(--overlap) + 8px);
          width: min(calc(100vw - ${insetTotal}px), ${FAN.maxRootWidthPx}px);
          margin-inline: auto;
          overflow: visible;
        }
        @media (min-width: 768px) {
          .colour-swatch-fan-root {
            --overlap: ${FAN.overlap};
            --fan-rot-step: ${FAN.rotStepDeg}deg;
          }
        }
        /* Horizontal wheel: cards keep the fanned arc while the row scrolls through every colour. */
        .colour-swatch-fan-row {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x proximity;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          touch-action: pan-x;
          padding-top: var(--fan-hover-lift);
          padding-bottom: var(--fan-max-drop);
          padding-inline: max(calc(50% - var(--card-w) / 2), 0px);
        }
        .colour-swatch-fan-row::-webkit-scrollbar {
          display: none;
        }
        .colour-swatch-card {
          --i: 0;
          width: var(--card-w);
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          scroll-snap-align: center;
          transform-origin: bottom center;
          background: #ffffff;
          isolation: isolate;
          transform: translateY(calc(var(--i) * var(--i) * var(--card-w) * var(--fan-drop-factor)))
            rotate(calc(var(--i) * var(--fan-rot-step)));
        }
        .colour-swatch-card + .colour-swatch-card {
          margin-left: calc(var(--card-w) * var(--overlap) * -1);
        }
        .colour-swatch-card.is-active {
          transform: translateY(
              calc(
                var(--i) * var(--i) * var(--card-w) * var(--fan-drop-factor) - var(--fan-hover-lift)
              )
            )
            rotate(0deg);
          z-index: 200 !important;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }
        @media (hover: hover) and (pointer: fine) {
          .colour-swatch-card:hover {
            transform: translateY(
                calc(
                  var(--i) * var(--i) * var(--card-w) * var(--fan-drop-factor) - var(--fan-hover-lift)
                )
              )
              rotate(0deg);
            z-index: 200 !important;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          }
        }
        .swatch-label-name {
          font-size: calc(var(--card-w) * 0.062);
          line-height: 1.15;
          white-space: nowrap;
        }
        .swatch-label-code {
          font-size: calc(var(--card-w) * 0.05);
          line-height: 1.2;
        }
        .swatch-label-strip {
          padding-top: calc(var(--card-w) * 0.045);
          padding-bottom: calc(var(--card-w) * 0.045);
          padding-left: calc(var(--card-w) * 0.05);
          padding-right: calc(var(--card-w) * 0.05);
          background: #ffffff;
        }
        .colour-swatch-card[data-side="left"] .swatch-label-strip {
          padding-right: var(--label-edge-pad);
        }
        .colour-swatch-card[data-side="right"] .swatch-label-strip {
          padding-left: var(--label-edge-pad);
        }

        .colour-wheel-arrow {
          position: absolute;
          top: calc(50% - var(--fan-max-drop) / 2);
          z-index: 300;
          display: none;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.25);
          transition: transform 200ms ease, background 200ms ease;
        }
        .colour-wheel-arrow--prev {
          left: -4rem;
        }
        .colour-wheel-arrow--next {
          right: -4rem;
        }
        .colour-wheel-arrow:hover {
          transform: scale(1.08);
        }
        .colour-wheel-arrow:active {
          transform: scale(0.95);
        }
        @media (hover: hover) and (pointer: fine) {
          .colour-wheel-arrow {
            display: flex;
          }
        }

        @media (max-width: 767px) {
          .colour-swatch-fan-root {
            --card-w: clamp(170px, 48vw, 220px);
            width: 100%;
            margin-bottom: 2rem;
            padding-top: 1rem;
            padding-bottom: 0;
          }
          .colour-swatch-fan-row {
            padding-top: calc(var(--card-w) * 0.12);
            padding-bottom: calc(var(--fan-max-drop) + var(--card-w) * 0.12);
          }
        }
      `}</style>

      <div className="colour-swatch-fan-root relative mb-20 pb-10 pt-14">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Show previous colours"
          className="colour-wheel-arrow colour-wheel-arrow--prev cursor-pointer"
        >
          <MdChevronLeft size={26} aria-hidden />
        </button>

        <div
          ref={scrollerRef}
          className="colour-swatch-fan-row"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {SWATCHES.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={`${item.name}-${item.code}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                role="button"
                tabIndex={0}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(index);
                  }
                }}
                className={`colour-swatch-card cursor-pointer select-none overflow-hidden rounded-t-2xl border border-slate-100 shadow-xl shadow-slate-200/50 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive ? "is-active" : ""}`}
              >
                <div className="flex h-full w-full flex-col bg-white">
                  <div
                    className="min-h-0 w-full flex-1 shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="swatch-label-strip shrink-0 text-left">
                    <h4 className="swatch-label-name font-bold uppercase text-brand-navy">{item.name}</h4>
                    <p className="swatch-label-code text-brand-teal">{item.code}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Show next colours"
          className="colour-wheel-arrow colour-wheel-arrow--next cursor-pointer"
        >
          <MdChevronRight size={26} aria-hidden />
        </button>
      </div>
    </>
  );
}
