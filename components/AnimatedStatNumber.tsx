"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatNumberProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

export default function AnimatedStatNumber({
  value,
  suffix = "",
  duration = 1600,
}: AnimatedStatNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    let frameId = 0;
    let observer: IntersectionObserver | undefined;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }

      const startTime = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / Math.max(duration, 1), 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer?.disconnect();
          startAnimation();
        }
      }, { threshold: 0.2 });
      observer.observe(element);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [duration, value]);

  return (
    <span ref={numberRef}>
      {numberFormatter.format(count)}{suffix}
    </span>
  );
}