export async function fetchDesigns() {
  const res = await fetch("http://localhost:4000/designs");
  if (!res.ok) throw new Error("Failed to load designs");
  return res.json();
}

export async function saveDesign(payload: {
  name: string;
  shape: string;
  length: string;
  colorHex: string;
  glitter: boolean;
  stickers: string[];
}) {
  const res = await fetch("http://localhost:4000/designs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to save design");
  return res.json();
}