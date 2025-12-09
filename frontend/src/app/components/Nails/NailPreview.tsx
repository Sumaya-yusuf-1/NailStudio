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

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='relative flex items-center justify-center overflow-hidden rounded-3xl bg-[#D7C0C3] h-[400px] w-[420px] md:h-80 md:w-[260px]'>
        <div className='relative -mt-23 h-[450px] w-[430px] md:h-[400px] md:w-[300px]'>
          {/* main finger*/}
          <Image
            src='/fingerRorate.png'
            alt='Finger'
            fill
            className='object-contain'
            priority
          />

          {/* Nail + glitter*/}
          <div
            className={`absolute left-1/2 top-[170px] md:top-[225px] -translate-x-1/2 ${lengthScale}`}
          >
            {/* Stage */}
            <div className='relative mt-22 flex items-center justify-center h-[170px] w-[120px]'>
              <NailShape shape={shape} color={color} length={length} />
              {glitterOn && (
                <GlitterOverlay className='pointer-events-none absolute inset-0 opacity-80' />
              )}

              {sticker && (
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
