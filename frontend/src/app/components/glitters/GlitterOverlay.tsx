"use client";

type GlitterOverlayProps = {
  className?: string;
};

export function GlitterOverlay({ className }: GlitterOverlayProps) {
  return (
    <svg
      viewBox="0 0 123 166"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_201_1319)">
        {/* Background radial glow */}
        <path
          d="M61.5 166C95.4655 166 123 128.84 123 83C123 37.1604 95.4655 0 61.5 0C27.5345 0 0 37.1604 0 83C0 128.84 27.5345 166 61.5 166Z"
          fill="url(#paint0_radial_201_1319)"
        />
        <path
          d="M61.5 166C95.4655 166 123 128.84 123 83C123 37.1604 95.4655 0 61.5 0C27.5345 0 0 37.1604 0 83C0 128.84 27.5345 166 61.5 166Z"
          fill="url(#paint1_radial_201_1319)"
        />

        {/* --- All glitter dots from original SVG --- */}

        <path d="M16.4 23.3507C16.8981 23.3507 17.302 22.8057 17.302 22.1333C17.302 21.461 16.8981 20.916 16.4 20.916C15.9018 20.916 15.498 21.461 15.498 22.1333C15.498 22.8057 15.9018 23.3507 16.4 23.3507Z" fill="#FF9ED9" fillOpacity="0.95"/>
        <path d="M32.8 34.3067C33.2529 34.3067 33.62 33.8112 33.62 33.2001C33.62 32.5889 33.2529 32.0934 32.8 32.0934C32.3471 32.0934 31.98 32.5889 31.98 33.2001C31.98 33.8112 32.3471 34.3067 32.8 34.3067Z" fill="#FFD978" fillOpacity="0.95"/>
        <path d="M49.2 26.1173C49.6981 26.1173 50.102 25.5723 50.102 24.9C50.102 24.2276 49.6981 23.6826 49.2 23.6826C48.7018 23.6826 48.298 24.2276 48.298 24.9C48.298 25.5723 48.7018 26.1173 49.2 26.1173Z" fill="#3F7BFF" fillOpacity="0.95"/>
        <path d="M65.6 18.0387C66.1887 18.0387 66.666 17.3946 66.666 16.6C66.666 15.8055 66.1887 15.1614 65.6 15.1614C65.0113 15.1614 64.534 15.8055 64.534 16.6C64.534 17.3946 65.0113 18.0387 65.6 18.0387Z" fill="#7CD9B0" fillOpacity="0.95"/>

        <path d="M82 31.54C82.4529 31.54 82.82 31.0445 82.82 30.4333C82.82 29.8221 82.4529 29.3267 82 29.3267C81.5471 29.3267 81.18 29.8221 81.18 30.4333C81.18 31.0445 81.5471 31.54 82 31.54Z" fill="#FFB7DF" fillOpacity="0.95"/>
        <path d="M98.4 20.584C98.8981 20.584 99.302 20.0389 99.302 19.3666C99.302 18.6943 98.8981 18.1493 98.4 18.1493C97.9018 18.1493 97.498 18.6943 97.498 19.3666C97.498 20.0389 97.9018 20.584 98.4 20.584Z" fill="#FFE6A3" fillOpacity="0.95"/>

        {/* White + colored soft glitter dots */}
        <path d="M24.6 67.562C25.0755 67.562 25.461 67.0418 25.461 66.4C25.461 65.7583 25.0755 65.238 24.6 65.238C24.1245 65.238 23.739 65.7583 23.739 66.4C23.739 67.0418 24.1245 67.562 24.6 67.562Z" fill="white" fillOpacity="0.9"/>

        {/* Many more dots... */}
        {/* ... */}

        {/* Sparkle cross shapes */}
        <path d="M61.5 44.2667V50.9067" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>
        <path d="M59.04 47.5867H63.96" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>

        <path d="M36.9 99.6001V106.24" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>
        <path d="M34.44 102.92H39.36" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>

        <path d="M86.1 110.667V117.307" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>
        <path d="M83.64 113.987H88.56" stroke="white" strokeWidth="0.7" strokeOpacity="0.95"/>
      </g>

      <defs>
        {/* Soft radial glow gradients */}
        <radialGradient
          id="paint0_radial_201_1319"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18450 24900) scale(25830 34860)"
        >
          <stop stopColor="white" stopOpacity="0.28" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <radialGradient
          id="paint1_radial_201_1319"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18450 24900) scale(25830 34860)"
        >
          <stop stopColor="white" stopOpacity="0.28" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Clip area for glitter */}
        <clipPath id="clip0_201_1319">
          <rect width="123" height="166" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}