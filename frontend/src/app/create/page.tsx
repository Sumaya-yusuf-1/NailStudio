"use client";

import { useDesigns } from "@/hooks/useDesigns";
import { useEffect, useState } from "react";
import { ColorSelect } from "../components/controls/ColorSelect";
import { GlitterToggle } from "../components/controls/GlitterToggle";
import { LengthSelect } from "../components/controls/LengthSelect";
import { ShapeSelect } from "../components/controls/ShapeSelect";
import { StickerSelect } from "../components/controls/StickerSelect";
import { NailPreview } from "../components/Nails/NailPreview";
import { Button } from "../components/ui/Button";
import { ConfirmModal } from "../components/ui/confirmModal";

export type ShapeId =
  | "round"
  | "oval"
  | "square"
  | "squoval"
  | "almond"
  | "stiletto";

export type LengthId = "short" | "medium" | "long";

export default function CreatePage() {
  const {
    design,
    prevDesign,
    updateDesign,
    clearColor,
    clearSticker,
    undo,
    resetAll,
  } = useDesigns();

  const [isHydrated, setIsHydrated] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    message: "",
    showGalleryAction: false,
  });

  type OpenId = "shape" | "length" | "color" | "sticker" | null;
  const [openId, setOpenId] = useState<OpenId>(null);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <main className='min-h-[calc(100vh-120px)] flex items-center justify-center bg-[#FFF6F4]'>
        <p className='text-sm text-gray-500'>Loading…</p>
      </main>
    );
  }
  const { shape, length, color, glitterOn, sticker } = design;
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  // ----- SAVE handler -----
  async function handleSave() {
    if (!canSave) {
      setModal({
        open: true,
        message: "Please choose Shape, Length and a Base Color before saving.",
        showGalleryAction: false,
      });
      return;
    }
    const newDesign = {
      shape,
      length,
      colorHex: color,
      glitterOn,
      sticker,
    };
    try {
      const res = await fetch(`${API_BASE_URL}/api/designs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDesign),
      });

      if (!res.ok) {
        throw new Error("Failed to save design");
      }
      setModal({
        open: true,
        message: "Design saved successfully ✨",
        showGalleryAction: true,
      });
    } catch (err) {
      console.error(err);
      setModal({
        open: true,
        message: "Could not save design 😢",
        showGalleryAction: false,
      });
    }
  }

  const hasShape = !!shape;
  const hasLength = !!length;
  const hasColor = !!color && color !== "transparent";
  const hasSticker = !!sticker;

  const canPickLength = hasShape;
  const canPickColor = hasShape && hasLength;
  const canUseExtras = hasColor;
  const canSave = hasShape && hasLength && hasColor;
function handleClearBaseColor() {
  updateDesign({
    color: "transparent",
    glitterOn: false,
    sticker: null,
  });
  setOpenId(null); 
}
function handleClearSticker() {
  updateDesign({
    sticker: null,
  });
  setOpenId(null);
}
  return (
    <>
      <main className='min-h-[calc(100vh-120px)] bg-[#FFF6F4] px-4 py-10 flex items-center justify-center'>
        <div className='w-full max-w-7xl rounded-4xl bg-[#FCEFED] px-6 py-10 md:px-16 md:py-14 shadow-sm'>
          {/* GRID */}
          <div
            className='grid grid-cols-1 gap-8  md:grid-cols-[260px_minmax(340px,1fr)]         
       lg:grid-cols-[260px_minmax(380px,1fr)_240px]     
       md:items-center'
          >
            {/* Controls */}
            <section className='flex flex-col gap-4 lg:gap-8'>
              <ShapeSelect
                value={shape}
                 open={openId === "shape"}
                 onOpenChange={(v) => setOpenId(v ? "shape" : null)}
                onChange={(newShape) =>
                  updateDesign({
                    shape: newShape,
                    color: "transparent",
                    glitterOn: false,
                    sticker: null,
                  })
                }
              />

              <LengthSelect
                value={length}
                open={openId === "length"}
                onOpenChange={(v) => setOpenId(v ? "length" : null)}
                disabled={!canPickLength}
                onChange={(newLength) => updateDesign({ length: newLength })}
              />

              <ColorSelect
                value={color}
                  open={openId === "color"}
                  onOpenChange={(v) => setOpenId(v ? "color" : null)}
                disabled={!canPickColor}
                onChange={(newColor) => updateDesign({ color: newColor })}
              />

              <GlitterToggle
                value={glitterOn}
                disabled={!canUseExtras}
                onChange={(on) => updateDesign({ glitterOn: on })}
              />

              <StickerSelect
                value={sticker}
                 open={openId === "sticker"}
                onOpenChange={(v) => setOpenId(v ? "sticker" : null)}
                disabled={!canUseExtras}
                onChange={(newSticker) => updateDesign({ sticker: newSticker })}
              />
            </section>

            {/* Nail preview */}
            <section className='flex justify-center items-center'>
              <NailPreview
                shape={shape}
                length={length}
                color={color}
                glitterOn={glitterOn}
                sticker={sticker}
              />
            </section>

            {/*  BaseColor / Sticker */}
            <section className='flex flex-col gap-4 lg:self-start lg:mt-9 d:pl-4  '>
              {/* Base color row */}
              <div className='border border-[#BA4576]/35 rounded-xl px-4 py-3 text-sm flex justify-between items-center bg-white/60 lg:p-3 '>
                <span>BaseColor</span>
                <Button
                  onClick={handleClearBaseColor}
                  disabled={!hasColor}
                  aria-label='Remove base color'
                  variant='ghost'
                  size='icon'
                  shape='pill'
                  className='py-1 hover:opacity-80 '
                >
                  <svg width='20' height='20' viewBox='0 0 37 34'>
                    <path
                      d='M10.7915 29.75C9.94359 29.75 9.21772 29.4726 8.6139 28.9177C8.01008 28.3628 7.70817 27.6958 7.70817 26.9167V8.5H6.1665V5.66667H13.8748V4.25H23.1248V5.66667H30.8332V8.5H29.2915V26.9167C29.2915 27.6958 28.9896 28.3628 28.3858 28.9177C27.782 29.4726 27.0561 29.75 26.2082 29.75H10.7915ZM26.2082 8.5H10.7915V26.9167H26.2082V8.5ZM13.8748 24.0833H16.9582V11.3333H13.8748V24.0833ZM20.0415 24.0833H23.1248V11.3333H20.0415V24.0833Z'
                      fill='#1D1B20'
                    />
                  </svg>
                </Button>
              </div>

              {/* Sticker row */}
              <div className='border border-[#BA4576]/35 rounded-xl px-4 py-3 text-sm flex justify-between items-center bg-white/60 lg:p-3'>
                <span>Sticker</span>
                <Button
                 onClick={handleClearSticker}
                 disabled={!hasSticker}
                  aria-label='Remove Sticker'
                  variant='ghost'
                  size='icon'
                  shape='pill'
                  className='hover:opacity-80'
                >
                  <svg width='20' height='20' viewBox='0 0 37 34'>
                    <path
                      d='M10.7915 29.75C9.94359 29.75 9.21772 29.4726 8.6139 28.9177C8.01008 28.3628 7.70817 27.6958 7.70817 26.9167V8.5H6.1665V5.66667H13.8748V4.25H23.1248V5.66667H30.8332V8.5H29.2915V26.9167C29.2915 27.6958 28.9896 28.3628 28.3858 28.9177C27.782 29.4726 27.0561 29.75 26.2082 29.75H10.7915ZM26.2082 8.5H10.7915V26.9167H26.2082V8.5ZM13.8748 24.0833H16.9582V11.3333H13.8748V24.0833ZM20.0415 24.0833H23.1248V11.3333H20.0415V24.0833Z'
                      fill='#1D1B20'
                    />
                  </svg>
                </Button>
              </div>
            </section>
          </div>

          {/* Bottom buttons */}

          <div className='mt-10 flex flex-col md:flex-row gap-7 justify-center md:justify-end lg:justify-center'>
            <Button
              onClick={undo}
              disabled={!prevDesign}
              variant='outline'
              size='md'
              shape='pill'
              className='lg:rounded-xl lg:px-8 lg:py-3 lg:text-base'
            >
              Undo
            </Button>

            <Button
              onClick={resetAll}
              variant='outline'
              size='md'
              shape='pill'
              className='lg:rounded-xl lg:px-8 lg:py-3 lg:text-base'
            >
              Start over
            </Button>

            <Button
              onClick={handleSave}
              variant='primary'
              size='md'
              shape='pill'
              className='lg:rounded-xl lg:px-8 lg:py-3 lg:text-base'
            >
              Save
            </Button>
          </div>
        </div>
      </main>
      <ConfirmModal
        open={modal.open}
        message={modal.message}
        showGalleryAction={modal.showGalleryAction}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </>
  );
}
