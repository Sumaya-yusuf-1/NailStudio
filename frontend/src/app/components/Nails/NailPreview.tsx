"use client";

import type { LengthId, ShapeId } from "@/app/create/page";
import Image from "next/image";
import { GlitterOverlay } from "../glitters/GlitterOverlay";
import { NailShape } from "./NailShape";

type Props = {
  shape: ShapeId;
  length: LengthId;
  color: string;          
  glitterOn: boolean;
  sticker: string | null;
};

export function NailPreview({
  shape,
  length,
  color,
  glitterOn,
  sticker,
}: Props) {
  const lengthScale =
    length === "short"
      ? "scale-90"
      : length === "medium"
        ? "scale-100"
        : "scale-110";

  const hasBaseColor = color !== "transparent";

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='relative flex items-center justify-center overflow-hidden rounded-3xl bg-[#D7C0C3] h-[400px] w-[420px]     md:h-[420px] md:w-[440px] lg:h-[460px] lg:w-[500px]           '>
        <div className='relative -mt-23 h-[450px] w-[430px]   md:h-[470px] md:w-[450px] lg:h-[450px] lg:w-[400px] lg:-mt-39'>
          {/* Main finger only */}
          <Image
            src='/fingerRorate.png'
            alt='Finger'
            fill
            className='object-contain'
            priority
          />

          {/* Nail + effects – only if something is selected */}
          <div
            className={`absolute left-1/2 top-[170px] md:top-[225px] -translate-x-1/2 lg:top-[170px]  ${lengthScale}`}
          >
            <div className='relative mt-22 flex items-center justify-center h-[170px] w-[120px] '>
              {/* Show nail only when there is a real base color */}
              <NailShape shape={shape} color={color} length={length} />

              {/* Glitter only makes sense when nail is visible */}
              {hasBaseColor && glitterOn && (
                <GlitterOverlay className='pointer-events-none absolute inset-0 opacity-80' />
              )}

              {/* Sticker also only when nail exists */}
              {hasBaseColor && sticker && (
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                  <span className='text-2xl text-white'>{sticker}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}