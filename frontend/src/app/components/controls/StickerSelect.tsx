"use client";

import { useState } from "react";

const STICKER_OPTIONS: { id: string; label: string; icon: string }[] = [
  { id: "flower", label: "Flower", icon: "❀" },
  { id: "bow", label: "Bow", icon: "⌘" },
  { id: "moon", label: "Moon", icon: "☾" },
  { id: "eye", label: "Eye", icon: "◉" },
  { id: "smile", label: "Smile", icon: "෴" },

  { id: "sparkle2", label: "Sparkle 2", icon: "✺" },
  { id: "heart", label: "Heart", icon: "❤" },
  { id: "heart-outline", label: "Heart Outline", icon: "♡" },
  { id: "heart-black", label: "Black Heart", icon: "♥" },

  { id: "sparkle", label: "Sparkle", icon: "✧" },
  { id: "sparkle-bold", label: "Bold Sparkle", icon: "✦" },

  { id: "flower-outline", label: "Flower Outline", icon: "✿" },
  { id: "leaf", label: "Leaf", icon: "❦" },

  { id: "star", label: "Star", icon: "★" },
  { id: "star-outline", label: "Star Outline", icon: "☆" },

  { id: "dot", label: "Dot", icon: "•" },
];

type Props = {
  value: string | null;
  onChange: (sticker: string | null) => void;
  disabled?: boolean;
};

export function StickerSelect({ value, onChange, disabled }: Props) {
  const [open, setOpen] = useState(false);
 

  return (
    <div className='relative inline-block min-w-[140px]'>
      <button
        type='button'
        onClick={() => {
          if (disabled) {
            return;
          }
          setOpen((prev) => !prev);
        }}
        className='flex w-full items-center gap-2 rounded-lg border border-[#BA4576]/40 bg-white px-3 py-3 text-[15px] font-light text-gray-800'
      >
        <span>Stickers</span>

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
     {disabled && (
     <p className="text-xs text-gray-500">
      Choose a base color to enable stickers.
     </p>
     )}

      {/* Dropdown */}
      {open && (
        <div className='absolute left-0 z-10 mt-2 w-[304px] rounded-3xl bg-[#DFBBBB] p-6 shadow-lg'>
          <div className='mb-4 flex items-center justify-between text-sm font-light text-white/90'>
            <span>Stickers</span>
            <button
              type='button'
              onClick={() => {
                onChange(null);
                setOpen(false);
              }}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-xs ${
                value === null ? "bg-white/20" : "bg-transparent"
              }`}
            >
              ✕
            </button>
          </div>

          <div className='grid grid-cols-5 gap-5 justify-items-center'>
            {STICKER_OPTIONS.map((opt) => {
              const isActive = value === opt.id;

              return (
                <button
                  key={opt.id}
                  type='button'
                  onClick={() => {
                    onChange(opt.icon);
                    setOpen(false);
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white transition 
                    ${isActive ? "bg-transparent ring-2 ring-white" : "bg-transparent"}
                  `}
                  aria-label={opt.label}
                >
                  <span>{opt.icon}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
