"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const ROTATE_MS = 2000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// One gradient per phrase, moving warm → cool → on-brand emerald/gold as the
// message travels from "hurt" toward "is possible".
const GRADIENTS = [
  "linear-gradient(90deg, #f59e0b, #ef4444)", // amber → red
  "linear-gradient(90deg, #ec4899, #8b5cf6)", // pink → violet
  "linear-gradient(90deg, #06b6d4, #3b82f6)", // cyan → blue
  "linear-gradient(90deg, #10b981, #c8a44d)", // emerald → brand gold
];

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
 * Hero headline: "Intimacy" sits on its own line; the completing phrase sits on
 * the line below and advances once through `phrases` (2s each), each with its
 * own color gradient, then rests on the final phrase. No looping. Reduced-motion
 * users jump straight to the resting phrase.
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

  const displayIndex = reducedMotion ? lastIndex : index;
  const gradient = GRADIENTS[displayIndex % GRADIENTS.length];

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
      <span className="block">Intimacy</span>
      {/* key forces a remount per phrase so the enter animation replays */}
      <span
        key={displayIndex}
        className="animate-phrase-in block bg-clip-text pb-2 text-transparent"
        style={{ backgroundImage: gradient }}
      >
        {phrases[displayIndex]}.
      </span>
    </h1>
  );
}
