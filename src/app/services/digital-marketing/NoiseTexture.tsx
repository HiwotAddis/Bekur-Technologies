import React from "react";

/**
 * SVG noise texture overlay for card backgrounds.
 * Usage: <NoiseTexture className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
 */
export default function NoiseTexture({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.22" fill="#fff" />
    </svg>
  );
}
