"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

type RevealProps = {
  children: ReactNode;
  /** Intrinsic tag to render so wrappers keep valid/semantic markup. */
  as?: "div" | "section" | "article" | "header" | "li" | "span";
  variant?: RevealVariant;
  /** Stagger offset in ms. */
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setRevealed(true);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Cast keeps the union of tags while giving JSX a single concrete prop type.
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={variant}
      data-revealed={revealed ? "true" : undefined}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
