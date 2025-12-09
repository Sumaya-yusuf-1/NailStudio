"use client";

type Props = {
  value: boolean;
  onChange: (val: boolean) => void;
};

export function GlitterToggle({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1 min-w-[120px]">
      

      <button
        type="button"
        onClick={() => onChange(!value)}
        className="flex w-full items-center justify-between rounded-lg border border-[#BA4576]/30 bg-white px-3 py-3 text-[15px] font-light text-gray-800 hover:bg-pink-50"
      >
        <span className="text-l">Glitter</span>
        <span
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            value ? "bg-[#BA4576]" : "bg-gray-300"
          }`}
        >
          <span
            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
              value ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
      </button>
    </div>
  );
}