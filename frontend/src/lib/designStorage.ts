import type { ShapeId, LengthId } from "@/app/create/page";

export type SavedDesign = {
  id: string;
  shape: ShapeId;
  length: LengthId;
  colorHex: string;
  glitterOn: boolean;
  sticker: string | null;
  savedAt: string; // ISO string
};

export type CurrentDesign = {
  shape: ShapeId;
  length: LengthId;
  color: string;
  glitterOn: boolean;
  sticker: string | null;
};

export const STORAGE_KEY = "nailstudio:saved-designs";
export const CURRENT_KEY = "nailstudio:current-design";

function safeParse<T>(raw: string | null, fallback: T): T {
  try {
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function loadSavedDesigns(): SavedDesign[] {
  if (typeof window === "undefined") return [];
  return safeParse<SavedDesign[]>(localStorage.getItem(STORAGE_KEY), []);
}

export function saveDesignToStorage(design: SavedDesign) {
  const existing = loadSavedDesigns();
  const updated = [...existing, design];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

// ✅ REAL IMPLEMENTATION
export function loadCurrentDesign(): CurrentDesign | null {
  if (typeof window === "undefined") return null;
  return safeParse<CurrentDesign | null>(localStorage.getItem(CURRENT_KEY), null);
}

export function saveCurrentDesign(design: CurrentDesign) {
  localStorage.setItem(CURRENT_KEY, JSON.stringify(design));
}

export function deleteSavedDesign(id: string): SavedDesign[] {
  if (typeof window === "undefined") return [];
  const existing = loadSavedDesigns();
  const updated = existing.filter((d) => d.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}