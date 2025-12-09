

const mockDesigns = [
  {
    id: "1",
    name: "Oval • Cream Pink • Glitter",
    shape: "Oval",
    length: "Medium",
    colorHex: "#D96565",
    glitter: true,
    savedAt: "Nov 28, 2025",
  },
  {
    id: "2",
    name: "Square • Nude • No glitter",
    shape: "Square",
    length: "Short",
    colorHex: "#F4C3AA",
    glitter: false,
    savedAt: "Nov 30, 2025",
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">Your saved designs</h1>

      {mockDesigns.length === 0 ? (
        <p className="text-sm text-slate-600">
          You haven&apos;t saved any designs yet. Go to the Create page and tap
          <span className="font-semibold"> Save</span>.
        </p>
      ) : (
        <ul className="space-y-4">
          {mockDesigns.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-pink-100 bg-white px-4 py-3 text-sm shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Small preview */}
                <div className="flex h-20 w-16 items-end justify-center rounded-2xl bg-[#E9CED1]">
                  <div
                    className="mb-3 h-10 w-6 rounded-[999px]"
                    style={{ backgroundColor: d.colorHex }}
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{d.name}</p>
                  <p className="text-xs text-slate-500">
                    Shape: {d.shape} • Length: {d.length}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Saved {d.savedAt} • {d.glitter ? "Glitter on" : "No glitter"}
                  </p>
                </div>
              </div>

              <button className="rounded-full border border-pink-200 px-3 py-1 text-xs text-pink-700 hover:bg-pink-50">
                Open in Create
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}