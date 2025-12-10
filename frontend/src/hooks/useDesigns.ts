"use client";

import type { LengthId, ShapeId } from "@/app/create/page";
import { loadCurrentDesign, saveCurrentDesign } from "@/lib/designStorage";
import { useEffect, useState } from "react";

export type DesignState = {
  shape: ShapeId;
  length: LengthId;
  color: string; // "transparent" = inget lack
  glitterOn: boolean;
  sticker: string | null;
};

const INITIAL_DESIGN: DesignState = {
  shape: "round",
  length: "short",
  color: "transparent", // bara finger först
  glitterOn: false,
  sticker: null,
};

export function useDesigns() {
  // 1) samma initial-state på server & klient
  const [design, setDesign] = useState<DesignState>(INITIAL_DESIGN);
  const [prevDesign, setPrevDesign] = useState<DesignState | null>(null);

  // 2) läs localStorage EFTER första render (bara i browsern)
useEffect(() => {
  if (typeof window === "undefined") return;

  const saved = loadCurrentDesign();
  if (saved) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDesign(saved as DesignState); // ok
  }
}, []);

  function updateDesign(patch: Partial<DesignState>) {
    setDesign((current) => {
      const newState = { ...current, ...patch };
      setPrevDesign(current);
      saveCurrentDesign(newState); // sync till localStorage
      return newState;
    });
  }

  function clearColor() {
    updateDesign({ color: "transparent" });
  }

  function clearSticker() {
    updateDesign({ sticker: null });
  }

  function undo() {
    if (!prevDesign) return;
    setDesign(prevDesign);
    saveCurrentDesign(prevDesign);
    setPrevDesign(null);
  }

  function resetAll() {
    setDesign(INITIAL_DESIGN);
    saveCurrentDesign(INITIAL_DESIGN);
    setPrevDesign(null);
  }

  return {
    design,
    prevDesign,
    updateDesign,
    clearColor,
    clearSticker,
    undo,
    resetAll,
  };
}
