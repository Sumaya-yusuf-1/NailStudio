"use client";

import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
  showGalleryAction?: boolean;
};

export function ConfirmModal({
  open,
  message,
  onClose,
  showGalleryAction = false,
}: Props) {
  const router = useRouter();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg">
        <p className="mb-6 text-sm text-gray-800">{message}</p>

        <div className="flex justify-center gap-3">
          {showGalleryAction && (
            <button
              type="button"
              onClick={() => router.push("/gallery")}
              className="rounded-lg bg-[#BA4576] px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Go to Gallery
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}