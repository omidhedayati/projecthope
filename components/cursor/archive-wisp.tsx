import { cn } from "@/lib/utils";

type ArchiveWispProps = {
  mode?: "default" | "artifact";
  tilt?: number;
  isHovering?: boolean;
};

export function ArchiveWisp({
  mode = "default",
  tilt = 0,
  isHovering = false,
}: ArchiveWispProps) {
  const isScanner = mode === "artifact";

  return (
    <div className={cn("relative", isHovering ? "wisp-body-hover" : "wisp-body-idle")}>
      <div className="relative" style={{ transform: `rotate(${tilt}deg)` }}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="wispCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8feff" />
              <stop offset="45%" stopColor="#88f7ff" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
            </radialGradient>
            <filter id="wispGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {isScanner ? (
            <g className="wisp-scanner-spin">
              <circle cx="22" cy="22" r="18" stroke="#88f7ff" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="22" cy="22" r="13" stroke="#f7dca6" strokeOpacity="0.45" strokeWidth="0.75" />
              <line x1="22" y1="4" x2="22" y2="10" stroke="#88f7ff" strokeOpacity="0.6" strokeWidth="1" />
              <line x1="22" y1="34" x2="22" y2="40" stroke="#88f7ff" strokeOpacity="0.6" strokeWidth="1" />
              <line x1="4" y1="22" x2="10" y2="22" stroke="#88f7ff" strokeOpacity="0.6" strokeWidth="1" />
              <line x1="34" y1="22" x2="40" y2="22" stroke="#88f7ff" strokeOpacity="0.6" strokeWidth="1" />
            </g>
          ) : null}

          <g filter="url(#wispGlow)">
            <ellipse cx="22" cy="24" rx="10" ry="4" fill="#88f7ff" fillOpacity="0.18" />
            <path
              d="M12 20 C14 14, 30 14, 32 20 C30 26, 14 26, 12 20 Z"
              fill="url(#wispCore)"
              fillOpacity="0.92"
            />
            <g className="wisp-core-pulse">
              <circle cx="22" cy="20" r="4.5" fill="#05060a" fillOpacity="0.55" />
              <circle cx="22" cy="20" r="2.2" fill="#88f7ff" />
            </g>
            <g className="wisp-wing-left">
              <path d="M8 19 L12 20 L8 21 Z" fill="#a78bfa" fillOpacity="0.85" />
            </g>
            <g className="wisp-wing-right">
              <path d="M36 19 L32 20 L36 21 Z" fill="#a78bfa" fillOpacity="0.85" />
            </g>
            <g className="wisp-antenna">
              <path d="M20 12 L22 8 L24 12 Z" fill="#f7dca6" fillOpacity="0.9" />
            </g>
            <path d="M18 27 L22 31 L26 27 Z" fill="#88f7ff" fillOpacity="0.55" />
          </g>
        </svg>
      </div>
    </div>
  );
}
