"use client";

import { useEffect, useRef } from "react";

export const STICKER_OPTIONS = [
  // 🌸 Florala & Natur
  { id: "flower", label: "Flower", icon: "❀" },
  { id: "flower-outline", label: "Flower Outline", icon: "✿" },
  { id: "flower-simple", label: "Flower Simple", icon: "✾" },
  { id: "rose", label: "Rose", icon: "⚘" },
  { id: "lotus", label: "Lotus", icon: "❁" },
  { id: "petal", label: "Petal", icon: "❃" },
  { id: "leaf-outline", label: "Leaf Outline", icon: "❧" },
  { id: "clover", label: "Clover", icon: "☘" },

  // ✨ Sparkles & Dekoration
  { id: "sparkle", label: "Sparkle", icon: "✧" },
  { id: "sparkle-bold", label: "Bold Sparkle", icon: "✦" },
  { id: "sparkle2", label: "Sparkle 2", icon: "✺" },
  { id: "sparkle-cross", label: "Sparkle Cross", icon: "✣" },
  { id: "sparkle-round", label: "Sparkle Round", icon: "✤" },
  { id: "sparkle-star", label: "Sparkle Star", icon: "✥" },
  { id: "sparkle-mini", label: "Mini Sparkle", icon: "⋆" },
  { id: "sparkle-dot", label: "Sparkle Dot", icon: "⭑" },
  { id: "sparkle-4", label: "Sparkle 4", icon: "❇" },
  { id: "sparkle-5", label: "Sparkle 5", icon: "❈" },
  { id: "ornament", label: "Ornament", icon: "❂" },

  // ♥ Hearts

  { id: "heart-outline", label: "Heart Outline", icon: "♡" },
  { id: "heart-small", label: "Small Heart", icon: "♥︎" },
  { id: "tiny-heart", label: "Tiny Heart", icon: "❥" },
  { id: "double-heart", label: "Double Heart", icon: "💕" },

  // ☾ Celestial
  { id: "moon", label: "Moon", icon: "☾" },
  { id: "moon-full", label: "Full Moon", icon: "●" },
  { id: "sun", label: "Sun", icon: "☼" },
  { id: "star", label: "Star", icon: "★" },
  { id: "star-outline", label: "Star Outline", icon: "☆" },
  { id: "star-small", label: "Small Star", icon: "⋆" },
  { id: "star-spark", label: "Spark Star", icon: "✶" },

  // ◦ Minimal / Line art
  { id: "dot", label: "Dot", icon: "•" },
  { id: "dot-small", label: "Small Dot", icon: "·" },
  { id: "dot-ring", label: "Dot Ring", icon: "◌" },
  { id: "circle", label: "Circle", icon: "○" },
  { id: "triangle", label: "Triangle", icon: "△" },
  { id: "diamond", label: "Diamond", icon: "♦" },
  { id: "diamond-outline", label: "Diamond Outline", icon: "◇" },
  { id: "wave", label: "Wave", icon: "〰" },
  

  // ♕ Elegant / Accent
  { id: "bow", label: "Bow", icon: "⌘" },
  { id: "crown", label: "Crown", icon: "♕" },
  { id: "infinity", label: "Infinity", icon: "∞" },
  { id: "lace", label: "Lace", icon: "❈" },

  // 🎵 Fun & Extra
  { id: "eye", label: "Eye", icon: "◉" },
  { id: "smile", label: "Smile", icon: "෴" },
  { id: "music", label: "Music Note", icon: "♪" },
  { id: "music-2", label: "Music Notes", icon: "♫" },
  { id: "butterfly", label: "Butterfly", icon: "🦋" },
  { id: "cherry", label: "Cherry", icon: "🍒" },

  // ✔ Symbols
  { id: "asterisk", label: "Asterisk", icon: "✱" },
  
];

type Props = {
  value: string | null;
  onChange: (sticker: string | null) => void;
  disabled?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function StickerSelect({
  value,
  onChange,
  disabled,
  open,
  onOpenChange,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    }

    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onOpenChange]);

  
  return (
    <div ref={ref} className='relative inline-block min-w-[140px]'>
      <button
        type='button'
        onClick={() => {
          if (disabled) {
            return;
          }
          onOpenChange(!open);
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
        <p className='text-xs text-gray-500'>
          Choose a base color to enable stickers.
        </p>
      )}

      {/* Dropdown */}
      {open && (
        <div className='absolute left-0 z-10 mt-2 w-[320px] rounded-3xl bg-[#DFBBBB] p-6 shadow-lg'>
          <div className='mb-4 flex items-center justify-between text-sm font-light text-white/90'>
            <span>Stickers</span>
            <button
              type='button'
              onClick={() => {
                onChange(null);
                onOpenChange(false);
              }}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-xs ${
                value === null ? "bg-white/20" : "bg-transparent"
              }`}
            >
              ✕
            </button>
          </div>

           <div
            className=' grid grid-cols-5 gap-5 justify-items-center max-h-60 overflow-y-auto overscroll-contain touch-pan-y pr-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent'
          >
            {STICKER_OPTIONS.map((opt) => {
              const isActive = value === opt.icon;

              return (
                <button
                  key={opt.id}
                  type='button'
                  onClick={() => {
                    onChange(opt.icon);
                    onOpenChange(false);
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white transition 
                    ${isActive ? "bg-transparent ring-2 ring-[#BA4576]" : "bg-transparent"}
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
