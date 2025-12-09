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
      "#E6A3A3",
      "#E8B9A0",
      "#ECCA9E",
      "#E9D7B5",
      "#C794B3",
      "#C38ABF",
      "#A77BD8",
      "#866AD9",
    ],
  },
  {
    name: "Cream",
    colors: ["#F6E7DD", "#F3E0E3", "#F2E8F4", "#E7EFE4", "#E4F1F4", "#E5E2F5"],
  },
  {
    name: "Jelly",
    colors: ["#F58FA7", "#F4A3C5", "#F1B0D5", "#E58EC7", "#D878BE"],
  },
  {
    name: "Matte",
    colors: ["#C0644A", "#B97855", "#B68A63", "#A67873", "#8C6270"],
  },
  {
    name: "Metallic",
    colors: ["#A86C3A", "#8B5F3C", "#6D4A33", "#3E3C46", "#262532"],
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
        {/* text + icon + chevron */}
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
              className='h-4 w-4 rounded border border-gray-300'
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
            <div className='mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800'>
              <span className='text-lg font-light'>‹</span>
              <span className='tracking-wide'>COLOR</span>
            </div>

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
                              ? "border-[#BA4576] ring-2 ring-[#BA4576]/40"
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
