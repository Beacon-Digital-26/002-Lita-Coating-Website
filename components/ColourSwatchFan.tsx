"use client";

import { useState, type CSSProperties } from "react";

/** Tweak arc / fit — card width is derived from viewport (see --card-w). */
const FAN = {
  cardDivisor: 5.4,
  maxCardWidthPx: 340,
  /** Horizontal overlap as a fraction of --card-w (raise by 0.02 if wedge gaps remain). */
  overlap: 0.26,
  overlapMobile: 0.28,
  rotStepDeg: 7,
  rotStepDegMobile: 3.5,
  dropFactor: 0.08,
  hoverLiftFactor: 0.08,
  sideInsetPx: 40,
} as const;

const SWATCHES = [
  { name: "MATTE BLACK", code: "RAL 9005", color: "#111111" },
  { name: "MATTE BLACK", code: "RAL 9005", color: "#453211" },
  { name: "GREEN", code: "RAL 6005", color: "#32a852" },
  { name: "INDUSTRIAL GRAY", code: "RAL 7004", color: "#8a8d91" },
  { name: "NAVY BLUE", code: "RAL 5003", color: "#2b3b6b" },
] as const;

export default function ColourSwatchFan() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const inset = FAN.sideInsetPx;
  const insetTotal = inset * 2;

  return (
    <>
      <style>{`
        .colour-swatch-fan-root {
          --card-w: min(calc((100vw - ${insetTotal}px) / ${FAN.cardDivisor}), ${FAN.maxCardWidthPx}px);
          --overlap: ${FAN.overlapMobile};
          --fan-drop-factor: ${FAN.dropFactor};
          --fan-hover-lift: calc(var(--card-w) * ${FAN.hoverLiftFactor});
          --fan-rot-step: ${FAN.rotStepDegMobile}deg;
          --label-edge-pad: calc(var(--card-w) * var(--overlap) + 8px);
          width: calc(100vw - ${insetTotal}px);
          margin-inline: auto;
          overflow: visible;
        }
        @media (min-width: 768px) {
          .colour-swatch-fan-root {
            --overlap: ${FAN.overlap};
            --fan-rot-step: ${FAN.rotStepDeg}deg;
          }
        }
        .colour-swatch-fan-row {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 0;
          width: 100%;
          max-width: 100%;
          padding: 0;
          overflow: visible;
        }
        .colour-swatch-card {
          width: var(--card-w);
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          transform-origin: bottom center;
          background: #ffffff;
          isolation: isolate;
          transform: translateY(calc(var(--i) * var(--i) * var(--card-w) * var(--fan-drop-factor)))
            rotate(calc(var(--i) * var(--fan-rot-step)));
        }
        .colour-swatch-card + .colour-swatch-card {
          margin-left: calc(var(--card-w) * var(--overlap) * -1);
        }
        .colour-swatch-card[data-i="-2"],
        .colour-swatch-card[data-i="2"] {
          z-index: 10;
        }
        .colour-swatch-card[data-i="-1"],
        .colour-swatch-card[data-i="1"] {
          z-index: 20;
        }
        .colour-swatch-card[data-i="0"] {
          z-index: 30;
        }
        .colour-swatch-card:hover,
        .colour-swatch-card.is-active {
          transform: translateY(
              calc(
                var(--i) * var(--i) * var(--card-w) * var(--fan-drop-factor) - var(--fan-hover-lift)
              )
            )
            rotate(0deg);
          z-index: 50 !important;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }
        .swatch-label-name {
          font-size: calc(var(--card-w) * 0.07);
          line-height: 1.15;
        }
        .swatch-label-code {
          font-size: calc(var(--card-w) * 0.055);
          line-height: 1.2;
        }
        .swatch-label-strip {
          padding-top: calc(var(--card-w) * 0.045);
          padding-bottom: calc(var(--card-w) * 0.045);
          padding-left: calc(var(--card-w) * 0.05);
          padding-right: calc(var(--card-w) * 0.05);
          background: #ffffff;
        }
        .swatch-label-strip--from-left {
          padding-right: var(--label-edge-pad);
        }
        .swatch-label-strip--from-right {
          padding-left: var(--label-edge-pad);
        }
      `}</style>

      <div className="colour-swatch-fan-root relative left-1/2 mb-20 min-h-[calc(var(--card-w)*1.333+var(--card-w)*0.32+var(--fan-hover-lift))] -translate-x-1/2 pb-10 pt-14">
        <div className="colour-swatch-fan-row">
          {SWATCHES.map((item, index) => {
            const i = index - 2;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setActiveIndex(isActive ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(isActive ? null : index);
                  }
                }}
                data-i={i}
                style={{ "--i": i } as CSSProperties}
                className={`colour-swatch-card cursor-pointer overflow-hidden rounded-t-2xl border border-slate-100 shadow-xl shadow-slate-200/50 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive ? "is-active" : ""}`}
              >
                <div className="flex h-full w-full flex-col bg-white">
                  <div
                    className="min-h-0 flex-1 w-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div
                    className={`swatch-label-strip shrink-0 text-left ${i < 0 ? "swatch-label-strip--from-left" : ""} ${i > 0 ? "swatch-label-strip--from-right" : ""}`}
                  >
                    <h4 className="swatch-label-name font-bold uppercase text-[#004e8c]">{item.name}</h4>
                    <p className="swatch-label-code text-teal-600">{item.code}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
