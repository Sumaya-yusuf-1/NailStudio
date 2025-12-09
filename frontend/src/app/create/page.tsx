"use client";

import { useState } from "react";
import { ColorSelect } from "../components/controls/ColorSelect";
import { GlitterToggle } from "../components/controls/GlitterToggle";
import { LengthSelect } from "../components/controls/LengthSelect";
import { ShapeSelect } from "../components/controls/ShapeSelect";
import { StickerSelect } from "../components/controls/StickerSelect";
import { NailPreview } from "../components/Nails/NailPreview";

export type ShapeId =
  | "round"
  | "oval"
  | "square"
  | "squoval"
  | "almond"
  | "stiletto";

export type LengthId = "short" | "medium" | "long";

export default function CreatePage() {
  const [shape, setShape] = useState<ShapeId>("round");
  const [length, setLength] = useState<LengthId>("short");
  const [color, setColor] = useState<string>("#F7B5C8");
  const [glitterOn, setGlitterOn] = useState(false);
  const [sticker, setSticker] = useState<string | null>(null);

  return (
    <main className='min-h-[calc(100vh-120px)] bg-[#FFF6F4] px-4 py-10 flex items-center justify-center'>
      <div className='w-full max-w-7xl rounded-4xl bg-[#FCEFED] px-6 py-10 md:px-16 md:py-14 shadow-sm'>
        {/* GRID */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-[260px_320px_220px] md:items-center'>
          {/*  controlls */}
          <section className='flex flex-col gap-4'>
            <ShapeSelect value={shape} onChange={setShape} />
            <LengthSelect value={length} onChange={setLength} />
            <ColorSelect value={color} onChange={setColor} />
            <GlitterToggle value={glitterOn} onChange={setGlitterOn} />
            <StickerSelect value={sticker} onChange={setSticker} />
          </section>

          {/* Nailpreview */}
          <section className='flex justify-center items-center'>
            <NailPreview
              shape={shape}
              length={length}
              color={color}
              glitterOn={glitterOn}
              sticker={sticker}
            />
          </section>

          {/*  BaseColor / Pattern / Sticker */}
          <section className='flex flex-col gap-4 md:pl-4'>
            <div className='border border-[#BA4576]/35 rounded-xl px-4 py-3 text-sm flex justify-between items-center bg-white/60'>
              <span>BaseColor</span>
              <button aria-label='Remove base color'>🗑</button>
            </div>
            <div className='border border-[#BA4576]/35 rounded-xl px-4 py-3 text-sm flex justify-between items-center bg-white/60'>
              <span>Pattern</span>
              <button aria-label='Remove pattern'>🗑</button>
            </div>
            <div className='border border-[#BA4576]/35 rounded-xl px-4 py-3 text-sm flex justify-between items-center bg-white/60'>
              <span>Sticker</span>
              <button aria-label='Remove sticker'>🗑</button>
            </div>
          </section>
        </div>

        {/* Bottom-buttons */}
        <div className='mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-end'>
          <button className='px-5 py-2 rounded-full border border-[#BA4576]/35 bg-white text-sm'>
            Undo
          </button>
          <button className='px-5 py-2 rounded-full border border-[#BA4576]/35 bg-white text-sm'>
            Start over
          </button>
          <button className='px-6 py-2 rounded-full bg-[#BA4576] text-white text-sm font-semibold'>
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
