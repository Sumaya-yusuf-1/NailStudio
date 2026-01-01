"use client";

import { LengthId } from "@/app/create/page";
import { useEffect, useRef } from "react";
import { Button } from "../ui/Button";

const LENGTH_OPTIONS: { id: LengthId; label: string }[] = [
  { id: "short", label: "Short" },
  { id: "medium", label: "Medium" },
  { id: "long", label: "Long" },
];

type Props = {
  value: LengthId;
  onChange: (length: LengthId) => void;
  disabled?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LengthSelect({ value, onChange,
  open,
  onOpenChange }: Props) {
  
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
    <div ref={ref} className='flex flex-col gap-1 min-w-[140px]'>
      <div className='inline-block w-full'>
        <Button
          type='button'
          variant='outline'
          onClick={() => onOpenChange(!open)}
          className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-light text-gray-800 lg:p-3'
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
        </Button>

        {/* Short / Medium / Long buttons */}

        {open && (
          <div
            className='mt-4 -ml-2 flex gap-4 bg-[#D7C0C3] p-2 rounded-lg w-78  h-15   justify-center items-center 
             lg:max-w-[330px] lg:mx-auto lg:-ml-6.5 '
          >
            {LENGTH_OPTIONS.map((opt) => {
              const isActive = value === opt.id;
              return (
                <Button
                  key={opt.id}
                  type='button'
                  size='sm'
                  variant={isActive ? "primary" : "outline"}
                  onClick={() => {
                    onChange(opt.id);
                    onOpenChange(false);
                  }}
                  className='px-6 py-2 text-sm rounded-lg'
                >
                  {opt.label}
                </Button>
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
