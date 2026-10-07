"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import Reveal from "./Reveal";

type ContactLocationMapProps = {
  businessName: string;
  googleMapsUrl: string;
  /** Lat,lng for embed — avoids Google’s place name / ratings header on the map. */
  mapCenter: string;
};

/** Hides Google embed’s place header (name, address, rating). */
const EMBED_TOP_CLIP_PX = 118;

const MIN_ZOOM = 10;
const MAX_ZOOM = 21;
const ZOOM_DEBOUNCE_MS = 120;

export default function ContactLocationMap({
  businessName,
  googleMapsUrl,
  mapCenter,
}: ContactLocationMapProps) {
  const [zoom, setZoom] = useState(16);
  const [iframeZoom, setIframeZoom] = useState(16);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pointerOverMapRef = useRef(false);
  const pendingZoomRef = useRef(16);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const embedUrl = useMemo(
    () =>
      `https://www.google.com/maps?q=${encodeURIComponent(mapCenter)}&z=${iframeZoom}&output=embed&hl=en`,
    [iframeZoom, mapCenter],
  );

  useEffect(() => {
    pendingZoomRef.current = zoom;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      setIframeZoom(pendingZoomRef.current);
    }, ZOOM_DEBOUNCE_MS);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [zoom]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey || !pointerOverMapRef.current) {
        return;
      }

      event.preventDefault();
      setZoom((current) => {
        const step = event.deltaY > 0 ? -1 : 1;
        return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + step));
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const focusMap = () => {
    iframeRef.current?.focus();
  };

  return (
    <section className="px-4 pb-12 pt-6 sm:px-6 md:px-8 md:pb-16 md:pt-8" aria-label={`${businessName} map`}>
      <div className="mx-auto max-w-7xl">
        <Reveal variant="zoom">
          <div
            className="relative h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-200/50 overscroll-contain sm:h-[440px] lg:h-[520px]"
            onMouseEnter={() => {
              pointerOverMapRef.current = true;
              focusMap();
            }}
            onMouseLeave={() => {
              pointerOverMapRef.current = false;
            }}
          >
            <iframe
              ref={iframeRef}
              title={`${businessName} location map`}
              src={embedUrl}
              tabIndex={0}
              className="absolute left-0 w-full border-0"
              style={{
                top: -EMBED_TOP_CLIP_PX,
                height: `calc(100% + ${EMBED_TOP_CLIP_PX}px)`,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onMouseEnter={focusMap}
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="mt-4 flex justify-end">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-expanded inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#00A896] px-6 py-3 font-bold text-white transition duration-200 hover:scale-105 hover:bg-teal-600 active:scale-95"
          >
            OPEN IN GOOGLE MAPS <MdOpenInNew size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
