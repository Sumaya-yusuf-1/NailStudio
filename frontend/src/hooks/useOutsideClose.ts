"use client";

import { useEffect } from "react";

export function useOutsideClose(
  open: boolean,
  ref: React.RefObject<HTMLElement>,
  onClose: () => void
) {
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onClose();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, ref, onClose]);
}