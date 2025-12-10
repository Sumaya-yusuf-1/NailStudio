"use client";

import type { ShapeId } from "@/app/create/page";
import Image from "next/image";
import { useState } from "react";

const SHAPE_OPTIONS: { id: ShapeId; label: string; img: string }[] = [
  { id: "round", label: "Round", img: "/shapes/Round.png" },
  { id: "oval", label: "Oval", img: "/shapes/Oval.png" },
  { id: "square", label: "Square", img: "/shapes/Square.png" },
  { id: "squoval", label: "Squoval", img: "/shapes/Squoval.png" },
  { id: "almond", label: "Almond", img: "/shapes/Almond.png" },
  { id: "stiletto", label: "Stiletto", img: "/shapes/Stiletto.png" },
];

type Props = {
  value: ShapeId;
  onChange: (shape: ShapeId) => void;
};

export function ShapeSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const activeShape = SHAPE_OPTIONS.find((s) => s.id === value);

  return (
    <div className='relative inline-block min-w-[140px]'>
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className='flex w-full items-center gap-2 rounded-lg border border-[#BA4576]/40 bg-white px-3 py-2 text-[15px] font-light text-gray-800 lg:p-2'
      >
        {/* thumbnail*/}
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFBBBB] lg:h-12 lg:w-12'>
          {activeShape && (
            <Image
              src='/shapes/Stiletto.png'
              alt='Stiletto'
              width={28}
              height={30}
              className='object-contain  mb-1 lg:w-9 lg:mb-1' 
            />
          )}
        </div>

        <span >Shapes</span>

        {/* Chevron */}
        <span className='ml-auto'>
          <svg
            width='16'
            height='17'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </span>
      </button>

      {/* Popup  */}
      {open && (
        <div
          className='
            absolute left-1/2 z-20 mt-2 w-[90vw] max-w-xs -translate-x-1/2
            rounded-2xl bg-[#DFBBBB] p-4 shadow-lg
            md:left-0 md:max-w-none md:w-72 md:translate-x-0
          '
        >
          <div className='mb-3 items-center  text-sm font-light text-white/90 flex justify-end'>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-xs '
            >
              ✕
            </button>
          </div>

          {/* Grid */}
          <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
            {SHAPE_OPTIONS.map((opt) => {
              const isActive = value === opt.id;

              return (
                <button
                  key={opt.id}
                  type='button'
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={`
                    flex flex-col items-center gap-1 rounded-xl bg-white px-2 py-2 text-xs
                    transition
                    ${isActive ? "ring-2 ring-[#BA4576]" : "ring-0"}
                  `}
                >
                  <Image
                    src={opt.img}
                    alt={opt.label}
                    width={40}
                    height={40}
                    className='object-contain'
                  />

                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ShapeId)}
        className='sr-only'
        aria-hidden
      >
        {SHAPE_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
