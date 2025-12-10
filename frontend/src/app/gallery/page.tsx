"use client";

import {
  SavedDesign,
  deleteSavedDesign,
  saveCurrentDesign,
} from "@/lib/designStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch("http://localhost:4000/api/designs");
        if (!res.ok) {
          console.error("Failed to load designs", await res.text());
          return;
        }

        const json = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapped: SavedDesign[] = json.map((d: any) => ({
          id: d._id,
          shape: d.shape,
          length: d.length,
          colorHex: d.colorHex,
          glitterOn: d.glitterOn,
          sticker: d.sticker ?? null,
          savedAt: d.savedAt,
        }));

        if (!ignore) setDesigns(mapped);
      } catch (e) {
        console.error("Error loading designs", e);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  function handleDelete(id: string) {
    setDesigns((prev) => prev.filter((d) => d.id !== id));
    deleteSavedDesign(id); // just localStorage för nu
  }

  function capitalise(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  if (isLoading) {
    return (
      <div className='space-y-6'>
        <h1 className='text-xl font-semibold p-3 mt-3 ml-4 text-slate-900 lg:mt-10 lg:ml-65'>
         All saved by you
        </h1>
        <p className='text-sm text-slate-600 p-3 ml-4'>Loading…</p>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <h1 className='text-xl font-semibold p-3 mt-3 ml-4 text-slate-900 lg:mt-10 lg:ml-65  '>
         All saved by you
      </h1>

      {designs.length === 0 ? (
        <p className='text-sm text-slate-600'>
          You haven&apos;t saved any designs yet. Go to the Create page and tap
          <span className='font-semibold'> Save</span>.
        </p>
      ) : (
        <ul className='space-y-4 w-[450px] ml-6 lg:space-y-7 lg:max-w-5xl lg:p-6 lg:mx-auto'>
          {designs.map((d) => {
            const shapeLabel = capitalise(d.shape);
            const lengthLabel = capitalise(d.length);
            const name = `${shapeLabel} • ${lengthLabel} • ${
              d.glitterOn ? "Glitter" : "No glitter"
            }`;

            return (
              <li
                key={d.id}
                className='flex items-center justify-between gap-4 rounded-2xl border border-pink-100 bg-white px-3 py-3 text-sm shadow-sm lg:p-5 '
              >
                <div className='flex items-center gap-4'>
                  <div className='flex h-20 w-16 items-end justify-center rounded-2xl bg-[#E9CED1]'>
                    <div
                      className='mb-3 h-10 w-6 rounded-[999px]'
                      style={{ backgroundColor: d.colorHex }}
                    />
                  </div>

                  <div>
                    <p className='font-medium text-slate-900'>{name}</p>
                    <p className='text-xs text-slate-500'>
                      Shape: {shapeLabel} • Length: {lengthLabel}
                    </p>
                    <p className='text-[11px] text-slate-400'>
                      Saved {new Date(d.savedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => {
                      saveCurrentDesign({
                        shape: d.shape,
                        length: d.length,
                        color: d.colorHex,
                        glitterOn: d.glitterOn,
                        sticker: d.sticker,
                      });
                      router.push("/create");
                    }}
                    className='rounded-full border border-pink-200 px-3 py-1 text-xs text-pink-700 hover:bg-pink-50'
                  >
                    Open in Create
                  </button>

                  <button
                    onClick={() => handleDelete(d.id)}
                    className='rounded-full border border-pink-200 p-1.5 hover:bg-pink-50'
                  >
                    <svg width='20' height='20' viewBox='0 0 37 34'>
                      <path
                        d='M10.7915 29.75C9.94359 29.75 9.21772 29.4726 8.6139 28.9177C8.01008 28.3628 7.70817 27.6958 7.70817 26.9167V8.5H6.1665V5.66667H13.8748V4.25H23.1248V5.66667H30.8332V8.5H29.2915V26.9167C29.2915 27.6958 28.9896 28.3628 28.3858 28.9177C27.782 29.4726 27.0561 29.75 26.2082 29.75H10.7915ZM26.2082 8.5H10.7915V26.9167H26.2082V8.5ZM13.8748 24.0833H16.9582V11.3333H13.8748V24.0833ZM20.0415 24.0833H23.1248V11.3333H20.0415V24.0833Z'
                        fill='#1D1B20'
                      />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
