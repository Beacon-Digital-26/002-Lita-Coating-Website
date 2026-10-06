"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MdAccessTime, MdEmail, MdOpenInNew, MdPhone } from "react-icons/md";

type ContactLocationMapProps = {
  businessName: string;
  address: string;
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
  address,
  googleMapsUrl,
  mapCenter,
}: ContactLocationMapProps) {
  const [zoom, setZoom] = useState(16);
  const [iframeZoom, setIframeZoom] = useState(16);
  const cardRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pointerOverMapRef = useRef(false);
  const pointerOverCardRef = useRef(false);
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
      if (!event.ctrlKey || !pointerOverMapRef.current || pointerOverCardRef.current) {
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
    <section
      className="relative h-[600px] w-full overscroll-contain bg-slate-200"
      aria-label={`${businessName} map`}
      onMouseEnter={() => {
        pointerOverMapRef.current = true;
        focusMap();
      }}
      onMouseLeave={() => {
        pointerOverMapRef.current = false;
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      <div
        ref={cardRef}
        className="absolute left-4 top-1/2 z-10 w-[calc(100%-2rem)] max-w-md -translate-y-1/2 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:left-8 sm:w-[calc(100%-4rem)] sm:p-8"
        onMouseEnter={() => {
          pointerOverCardRef.current = true;
        }}
        onMouseLeave={() => {
          pointerOverCardRef.current = false;
        }}
      >
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600">
          <div className="h-2 w-2 rounded-full bg-teal-500" />
          OUR LOCATION
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#004e8c]">Kawasan Perusahaan Sg. Petani</h3>
        <p className="mb-6 text-sm text-slate-500">{address}</p>

        <div className="mb-8 space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <MdPhone size={16} className="text-teal-500" />
            <span>+604 4426 442 (HQ)</span>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail size={16} className="text-teal-500" />
            <span>enquiry@litafinemesh.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MdAccessTime size={16} className="text-teal-500" />
            <span>Mon-Fri: 8:30am - 5:30pm</span>
          </div>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-expanded flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#004e8c] px-6 py-3 font-bold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#003b6b] active:scale-95"
        >
          OPEN IN GOOGLE MAPS <MdOpenInNew size={16} />
        </a>
      </div>
    </section>
  );
}
