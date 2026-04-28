import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  /** Override path. Defaults to /hero.mp4 — replace that file to swap globally. */
  src?: string;
  /** Fallback poster image (optional) */
  poster?: string;
  /** Tint strength 0..1 */
  overlayOpacity?: number;
  /** Subtle slow-zoom Ken Burns effect */
  zoom?: boolean;
  className?: string;
}

export default function VideoBackground({
  src = "/hero.mp4",
  poster,
  overlayOpacity = 0.65,
  zoom = true,
  className = "",
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Some browsers block autoplay until explicit play() after metadata loads
    const tryPlay = () => v.play().catch(() => {});
    v.addEventListener("loadedmetadata", tryPlay);
    tryPlay();
    return () => v.removeEventListener("loadedmetadata", tryPlay);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={ref}
        className={`w-full h-full object-cover ${
          zoom ? "animate-[heroZoom_24s_ease-in-out_infinite_alternate]" : ""
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(5,6,10,${overlayOpacity * 0.85}) 0%, rgba(5,6,10,${overlayOpacity * 0.55}) 35%, rgba(5,6,10,${overlayOpacity}) 100%)`,
        }}
      />

      {/* Subtle gold vignette */}
      <div className="absolute inset-0 bg-radial-fade opacity-60 mix-blend-screen pointer-events-none" />

      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.18); }
        }
      `}</style>
    </div>
  );
}
