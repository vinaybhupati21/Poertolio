export function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20 Q 50 50, 100 45 T 190 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M180 35 L 190 40 L 185 48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function WavyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function CircleHighlight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
        fill="none"
      />
    </svg>
  );
}

export function SmileyFace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="20" cy="24" r="3" fill="currentColor" />
      <circle cx="40" cy="24" r="3" fill="currentColor" />
      <path
        d="M 18 38 Q 30 45, 42 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50 10 Q 48 40, 50 70 Q 52 90, 50 110"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 35 95 L 50 110 L 65 95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ThunderIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 5 L15 40 H30 L25 75 L50 35 H35 L35 5 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 8 20 L 16 28 L 32 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DatabaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="30" cy="12" rx="22" ry="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M 8 12 L 8 28 M 52 12 L 52 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="30" cy="28" rx="22" ry="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M 8 28 L 8 44 M 52 28 L 52 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="30" cy="44" rx="22" ry="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M 8 44 L 8 58 M 52 44 L 52 58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="30" cy="58" rx="22" ry="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="35" width="10" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <rect x="25" y="20" width="10" height="35" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <rect x="42" y="10" width="10" height="45" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function MonitorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 70 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="60" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M 25 45 L 25 50 L 45 50 L 45 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 15 15 L 25 25 M 25 15 L 15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M 42 20 L 44 22 L 48 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}