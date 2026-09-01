"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const ROTATE_MS = 2000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false, // server snapshot: assume motion is allowed
  );
}

/**
 * Hero headline where "Intimacy" stays fixed and the completing phrase
 * advances once through `phrases` (2s each), then rests on the final phrase.
 * No looping. Respects prefers-reduced-motion by jumping straight to the end.
 */
export function RotatingHeadline({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const lastIndex = phrases.length - 1;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  // Reduced-motion users skip the rotation and see the final phrase.
  const displayIndex = reducedMotion ? lastIndex : index;

  useEffect(() => {
    if (reducedMotion || index >= lastIndex) return; // Rested / no motion.
    const timer = setTimeout(
      () => setIndex((current) => Math.min(current + 1, lastIndex)),
      ROTATE_MS,
    );
    return () => clearTimeout(timer);
  }, [index, lastIndex, reducedMotion]);

  return (
    <h1 className={className}>
      Intimacy{" "}
      {/* key forces a remount per phrase so the enter animation replays */}
      <span key={displayIndex} className="animate-phrase-in inline-block">
        {phrases[displayIndex]}.
      </span>
    </h1>
  );
}
