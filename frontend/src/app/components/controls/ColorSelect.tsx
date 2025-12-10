"use client";

import { useState } from "react";

type Props = {
  value: string;
  onChange: (color: string) => void;
};

type ColorGroup = {
  name: string;
  colors: string[];
};

const COLOR_GROUPS: ColorGroup[] = [
  {
    name: "Base Colors",
    colors: [
      "#C43131",
      "#E65A28",
      "#F2C327",
      "#9CCB3C",
      "#4DAE4F",
      "#2D8C8F",
      "#4167D8",
      "#7C48C9",
      "#B55685",
      "#3A3A3A",
    ],
  },
  {
    name: "Cream",
    colors: [
      "#F3D5D5",
      "#F4D7C6",
      "#F6E6B5",
      "#DDF2C4",
      "#C8E8C9",
      "#C3E4E6",
      "#D4DBF6",
      "#E4D8F7",
      "#F3D1E5",
      "#D0D0D0",
    ],
  },
  {
    name: "Jelly",
    colors: [
      "#E8A6A1",
      "#D94A7A",
      "#A83833",
      "#C67354",
      "#9B7A5E",
      "#7CB8C9",
      "#3F57B9",
      "#7CD9B0",
      "#4A6A27",
      "#282828",
    ],
  },
  {
    name: "Matte",
    colors: [
      "#A22B2B",
      "#C94D25",
      "#D1B025",
      "#85B039",
      "#459E48",
      "#2A7A80",
      "#3A59BF",
      "#6E3FB8",
      "#9D4E72",
      "#2B2B2B",
    ],
  },
  {
    name: "Metallic",
    colors: [
      "#C43131",
      "#E65A28",
      "#F2C327",
      "#9CCB3C",
      "#4DAE4F",
      "#2D8C8F",
      "#4167D8",
      "#7C48C9",
      "#B55685",
      "#3A3A3A",
    ],
  },
];

export function ColorSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  function handleSelect(color: string) {
    onChange(color);
    setOpen(false);
  }

  return (
    <div className='flex flex-col gap-1 min-w-[140px]'>
      <div className='relative inline-block w-full'>
       
        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          className='flex w-full items-center gap-2 rounded-lg border border-[#BA4576]/30 bg-white px-3 py-3 text-[15px] font-light text-gray-800'
        >
          {/* icon for colors  */}
          <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[conic-gradient(from_90deg,#E7E040,#EEAA3C,#E8403B,#B33ED5,#694AE8,#3CCAE7,#3CE885,#89E743,#E7E040)]' />

          <span>Colors</span>

          <span className='ml-auto flex items-center gap-2'>
            {/* small color preview*/}
            <span
              className='h-4 w-4 rounded border border-gray-300 '
              style={{ backgroundColor: value || "#FFFFFF" }}
            />
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

        {/* Dropdown color picker */}
        {open && (
          <div className='absolute left-0 z-10 mt-2 w-[340px] rounded-2xl bg-[#DFBBBB] p-4 shadow-lg'>
            <div className='flex max-h-72 flex-col gap-3 overflow-y-auto pr-1'>
              {COLOR_GROUPS.map((group) => (
                <div key={group.name}>
                  <div className='mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-700'>
                    {group.name}
                  </div>
                  <div className='flex flex-wrap gap-1.5'>
                    {group.colors.map((color) => {
                      const isActive = value === color;
                      return (
                        <button
                          key={color}
                          type='button'
                          onClick={() => handleSelect(color)}
                          className={`h-6 w-6 rounded-full border ${
                            isActive
                              ? "border-[#a30a4a] ring-2 ring-[#BA4576]/40"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
