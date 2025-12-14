"use client";

import type { ShapeId, LengthId } from "@/app/create/page";

type BaseProps = {
  color: string;
  className?: string;
};

// Round
const ROUND_BY_LENGTH: Record<LengthId, string> = {
  short:  "scale-x-[1.6] scale-y-[1] -mt-7",
  medium: "scale-x-[1.5] scale-y-[1] -mt-4",
  long:   "scale-x-[1.3] scale-y-[1.1] -mt-0",
};

// Oval
const OVAL_BY_LENGTH: Record<LengthId, string> = {
  short:  "scale-x-[1.95] scale-y-[0.89] -mt-10 translate-y-[6px]",
  medium: "scale-x-[1.65] scale-y-[1.00] -mt-3 translate-y-[1px]",
  long:   "scale-x-[1.5] scale-y-[1.18] mt-1",
};

// Almond
const ALMOND_BY_LENGTH: Record<LengthId, string> = {
  short:  "scale-x-[2.4] scale-y-[1.06] -mt-2 translate-y-[2px]",
  medium: "scale-x-[2.1] scale-y-[1.08] -mt-3 translate-y-[2px]",
  long:   "scale-x-[1.9] scale-y-[1.21] mt-1 translate-y-[0px] mt-2",
};

// Square
const SQUARE_BY_LENGTH: Record<LengthId, string> = {
  short:  " scale-x-[2] scale-y-[1] translate-y-[6px] translate-x-[-2px] -mt-12",
  medium: " scale-x-[1.8] scale-y-[1] translate-y-[6px] -mt-10 translate-x-[-2px]",
  long:   " scale-x-[1.6] scale-y-[1.1] translate-y-[4px] -mt-8 translate-x-[-2px]",
};

// Squoval
const SQUOVAL_BY_LENGTH: Record<LengthId, string> = {
  short:  "scale-x-[2.4] scale-y-[0.94] -mt-8 translate-x-[-1px] ",  
  medium: "scale-x-[2.2] scale-y-[1.00] -mt-4 translate-x-[-1px]", 
  long:   "scale-x-[2] scale-y-[1.1] -mt-0 translate-x-[-1px]", 
};
const STILETTO_BY_LENGTH: Record<LengthId, string> = {
  short:  "w-[150px] h-[170px] translate-y-[6px] translate-x-[2px] scale-y-[1.07] scale-x-[1.0] -ml-3 mt-3",
  medium: "w-[150px] h-[170px] translate-y-[6px] translate-x-[2px] scale-y-[1.07] scale-x-[0.9] -ml-3 mt-3",
  long:   "w-[150px] h-[170px] translate-y-[6px] translate-x-[2px] scale-y-[1.07] scale-x-[0.77] -ml-3 mt-3",
};

/* ========= SVG-forms ========= */

function RoundShape({ color, className }: BaseProps) {
  return (
    <svg
      viewBox="0 0 39 82"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75513 63.3017C1.92509 73.2414 10.1206 81.1613 20.0602 80.9913C29.9999 80.8214 37.9198 72.6259 37.7499 62.6862L36.9976 18.6927C36.8276 8.75298 28.6321 0.833071 18.6925 1.00304C8.75279 1.173 0.832878 9.36849 1.00284 19.3082L1.75513 63.3017Z"
        fill={color}
        stroke="#E39B7A"
        strokeWidth={0.3}
      />
    </svg>
  );
}

function OvalShape({ color, className }: BaseProps) {
  return (
    <svg
      viewBox="0 0 36 94"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5984 92.9841C28.5961 92.7713 34.3819 82.6458 34.0627 67.6492L32.9985 17.6605C32.7857 7.66281 26.6381 0.792088 16.6404 1.00491C6.64262 1.21774 0.792956 8.34385 1.00578 18.3416L2.06991 68.3303C2.38915 83.3269 8.60062 93.1969 18.5984 92.9841Z"
        fill={color}
        stroke="#E39B7A"
       strokeWidth={0.3}
      />
    </svg>
  );
}
const ALMOND_FIX = "translate-x-[-2px]";
function AlmondShape({ color, className }: BaseProps) {
  return (
    <svg
      viewBox="0 0 31 99"
      className={`${ALMOND_FIX} ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3147 96.9635C26.9253 83.673 30.4792 68.5611 29.9461 50.569L28.9983 18.5831C28.7021 8.58744 22.4677 0.768666 14.4712 1.00562C6.47475 1.24258 0.714344 9.41679 1.01054 19.4124L1.95837 51.3984C2.49153 69.3905 6.93407 84.2654 17.3147 96.9635Z"
        fill={color}
        stroke="#E39B7A"
        strokeWidth={0.5}
      />
    </svg>
  );
}

function SquareShape({ color, className }: BaseProps) {
  return (
    <svg
      viewBox="0 0 31 86"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.6509 83.876L1.65194 84.1193L1.00029 9.12209C0.95685 4.12227 6.93056 1.07026 14.9303 1.00075C22.93 0.93124 28.9558 3.87899 28.9992 8.87881L29.6509 83.876Z"
        fill={color}
        stroke="#E39B7A"
         strokeWidth={0.5}
      />
    </svg>
  );
}

function SquovalShape({ color, className }: BaseProps) {
  return (
    <svg
      viewBox="0 0 28 89"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2634 80.761C18.441 90.2437 10.4424 90.3948 2.26763 81.2141L1.00272 14.2261C0.870562 7.2273 5.7564 1.13398 12.7551 1.00182C19.7539 0.869667 24.8663 6.7742 24.9984 13.773L26.2634 80.761Z"
        fill={color}
        stroke="#E39B7A"
        strokeWidth={0.3}
      />
    </svg>
  );
}

function StilettoShape({
  color,
  length,
  className,
}: BaseProps & { length: LengthId }) {
  return (
    <div className={`${STILETTO_BY_LENGTH[length]} ${className ?? ""}`}>
      <svg
        viewBox="0 0 65 107"
        className="block h-full w-full rotate-180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.4337 0C45.4072 26.743 64.8674 53.4861 64.8674 80.2291V93.6007C64.8674 100.286 55.1373 106.972 32.4337 106.972C9.73011 106.972 0 100.286 0 93.6007V80.2291C0 53.4861 19.4602 26.743 32.4337 0Z"
          fill={color}
          stroke="#E39B7A"
          strokeWidth={0.5}
        />
      </svg>
    </div>
  );
}
export function NailShape({
  shape,
  color,
  length,
  className,
}: {
  shape: ShapeId;
  color: string;
  length: LengthId;
  className?: string;
}) {
  switch (shape) {
    case "round":
      return (
        <RoundShape
          color={color}
          className={`w-[200px] h-[140px] ${ROUND_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
    case "oval":
      return (
        <OvalShape
          color={color}
          className={`w-[180px] h-[150px] ${OVAL_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
    case "almond":
      return (
        <AlmondShape
          color={color}
          className={`w-[180px] h-[150px] ${ALMOND_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
    case "square":
      return (
        <SquareShape
          color={color}
          className={`w-[180px] h-[145px] ${SQUARE_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
    case "squoval":
      return (
        <SquovalShape
          color={color}
          className={`w-[180px] h-[145px] ${SQUOVAL_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
   case "stiletto":
  return (
    <StilettoShape
      color={color}
      length={length}
      className={className}
    />
  );
    default:
      return (
        <RoundShape
          color={color}
          className={`w-[200px] h-[140px] ${ROUND_BY_LENGTH[length]} ${
            className ?? ""
          }`}
        />
      );
  }
}