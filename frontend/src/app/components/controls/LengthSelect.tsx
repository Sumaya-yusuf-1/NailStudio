"use client";

import { LengthId } from "@/app/create/page";
import { useState } from "react";

const LENGTH_OPTIONS: { id: LengthId; label: string }[] = [
  { id: "short", label: "Short" },
  { id: "medium", label: "Medium" },
  { id: "long", label: "Long" },
];

type Props = {
  value: LengthId;
  onChange: (length: LengthId) => void;
};

export function LengthSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col gap-1 min-w-[140px]'>
      <div className='inline-block w-full'>
        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          className='flex w-full items-center gap-2 rounded-lg border border-[#BA4576]/40 bg-white px-3 py-2 text-[15px] font-light text-gray-800'
        >
          <svg
            width='36'
            height='36'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect x='3' y='6' width='18' height='12' rx='2' />
            <line x1='7' y1='6' x2='7' y2='4' />
            <line x1='11' y1='6' x2='11' y2='4' />
            <line x1='15' y1='6' x2='15' y2='4' />
            <line x1='19' y1='6' x2='19' y2='4' />
          </svg>
          <span>Length</span>

          <span className='ml-auto'>
            <svg
              width='16'
              height='17'
              viewBox='0 0 24 24'
              fill='#DFBBBB'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='6 9 12 15 18 9' />
            </svg>
          </span>
        </button>

        {/* Short / Medium / Long buttons */}
        {open && (
          <div className='mt-2 flex gap-2'>
            {LENGTH_OPTIONS.map((opt) => {
              const isActive = value === opt.id;
              return (
                <button
                  key={opt.id}
                  type='button'
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={`rounded-full px-4 py-1 text-xs font-medium ${
                    isActive
                      ? "bg-[#BA4576] text-white"
                      : "bg-white text-gray-800 border border-[#BA4576]/30"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}
        
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as LengthId)}
          className='sr-only'
          aria-hidden
        >
          {LENGTH_OPTIONS.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
