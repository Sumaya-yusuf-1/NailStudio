"use client";
  import { useEffect, useRef } from "react";


type Props = {
  value: string;
  onChange: (color: string) => void;
  disabled?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
      "#F28B82",
      "#FF6F91",
      "#FF9671",
      "#FFC75F",
      "#8ED081",
      "#4D96A9",
      "#6A7FDB",
      "#9B7FD9",
      "#C97FA5",
      "#5C5C5C",
    ],
  },
  {
    name: "Matte",
    colors: [
      "#8B2F2F",
      "#A34A2A",
      "#B49A2E",
      "#6F8F3A",
      "#3E7D4A",
      "#2F6F73",
      "#364A8F",
      "#5E3C8F",
      "#7F4A63",
      "#1F1F1F",
    ],
  },
  {
    name: "Gradient",
    colors: [
      "linear-gradient(135deg, #F6D365, #FDA085)",
      "linear-gradient(135deg, #A1C4FD, #C2E9FB)",
      "linear-gradient(135deg, #FCCB90, #D57EEB)",
      "linear-gradient(135deg, #FBC8D4, #9795F0)",
      "linear-gradient(135deg, #84FAB0, #8FD3F4)",
      "linear-gradient(135deg, #FF9A9E, #FECFEF)",
      "linear-gradient(135deg, #667EEA, #764BA2)",
      "linear-gradient(135deg, #89F7FE, #66A6FF)",
      "linear-gradient(135deg, #FAD0C4, #FFD1FF)",
      "linear-gradient(135deg, #C471F5, #FA71CD)",
      "linear-gradient(135deg, #FFF1EB, #ACE0F9)",
      "linear-gradient(135deg, #FDEBEB, #FAD0C4)",
      "linear-gradient(135deg, #FDFCFB, #E2D1C3)",
      "linear-gradient(135deg, #F6F3FF, #E9D8FD)",
      "linear-gradient(135deg, #FFF7E6, #FFD6A5)",
      "linear-gradient(135deg, #F5EFE6, #E3D5C3)",
      "linear-gradient(135deg, #F9F3F3, #EAD7D7)",
      "linear-gradient(135deg, #F7F0FF, #DCCEFF)",
      "linear-gradient(135deg, #2C3E50, #4CA1AF)",
      "linear-gradient(135deg, #141E30, #243B55)",
      "linear-gradient(135deg, #232526, #414345)",
      "linear-gradient(135deg, #1F1C2C, #928DAB)",
      "linear-gradient(135deg, #0F2027, #2C5364)",
      "linear-gradient(135deg, #3A1C71, #D76D77)",
      "linear-gradient(135deg, #41295A, #2F0743)",
      "linear-gradient(135deg, #434343, #000000)",
    ],
  },

];

export function ColorSelect({ value, onChange, open, onOpenChange }: Props) {
  const isGradient = value?.startsWith("linear-gradient");
  const previewStyle: React.CSSProperties = isGradient
  ? { background: value }
  : { backgroundColor: value || "#FFFFFF" };
  function handleSelect(color: string) {
    onChange(color);
    onOpenChange(false);
  }

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);
 
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
    <div className='flex flex-col gap-1 min-w-[140px]'>
      <div ref={ref} className='relative inline-block w-full'>
       
        <button
          type='button'
          onClick={() => onOpenChange(!open)}
          className='flex w-full items-center gap-2 rounded-lg border border-[#BA4576]/30 bg-white px-3 py-3 text-[15px] font-light text-gray-800'
        >
          {/* icon for colors  */}
          <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[conic-gradient(from_90deg,#E7E040,#EEAA3C,#E8403B,#B33ED5,#694AE8,#3CCAE7,#3CE885,#89E743,#E7E040)]' />

          <span>Colors</span>

          <span className='ml-auto flex items-center gap-2'>
            {/* small color preview*/}
          
            <span
              className="h-4 w-4 rounded border border-gray-300"
              style={previewStyle}
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
          <div className='absolute left-0 z-10 mt-2 w-[320px] rounded-2xl -ml-2 bg-[#DFBBBB] p-4 shadow-lg lg:-ml-10'>
            <div className='flex max-h-72 flex-col gap-3 overflow-y-auto pr-1'>
              {COLOR_GROUPS.map((group) => (
                <div key={group.name}>
                  <div className='mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-700'>
                    {group.name}
                  </div>
                  <div className='flex flex-wrap gap-1.5'>
                    {group.colors.map((color) => {
                      const isActive = value === color;
                      const isGradientColor = color.startsWith("linear-gradient");
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
                        style={{
                          background: isGradientColor ? color : undefined,
                          backgroundColor: !isGradientColor ? color : undefined,
                        }}
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
