import { useState } from "react";
import { Modal } from "@/components/site/Modal";

type Album = { id: string; name: string; thumb: string; images: string[] };

const albums: Album[] = [
  { id: "devfest", name: "DevFest 2024", thumb: "from-blue-100 to-blue-200", images: Array.from({ length: 9 }).map((_, i) => `from-blue-${100 + (i % 5) * 100} to-blue-${200 + (i % 5) * 100}`) },
  { id: "compose", name: "Compose Camp", thumb: "from-green-100 to-green-200", images: Array.from({ length: 8 }).map((_, i) => `from-green-${100 + (i % 5) * 100} to-green-${200 + (i % 5) * 100}`) },
  { id: "cloud", name: "Cloud Run", thumb: "from-yellow-100 to-yellow-200", images: Array.from({ length: 7 }).map((_, i) => `from-yellow-${100 + (i % 5) * 100} to-yellow-${200 + (i % 5) * 100}`) },
  { id: "webperf", name: "Web Performance", thumb: "from-slate-100 to-slate-200", images: Array.from({ length: 10 }).map((_, i) => `from-slate-${100 + (i % 5) * 100} to-slate-${200 + (i % 5) * 100}`) },
  { id: "tfjs", name: "TensorFlowJS", thumb: "from-red-100 to-red-200", images: Array.from({ length: 6 }).map((_, i) => `from-red-${100 + (i % 5) * 100} to-red-${200 + (i % 5) * 100}`) },
  { id: "android", name: "Android Study Jam", thumb: "from-emerald-100 to-emerald-200", images: Array.from({ length: 12 }).map((_, i) => `from-emerald-${100 + (i % 5) * 100} to-emerald-${200 + (i % 5) * 100}`) },
];

export default function Gallery() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
        <p className="text-muted-foreground">Albums grouped by event/workshop. Click an album to view all photos.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((a) => (
          <div key={a.id}>
            <button onClick={() => setOpenId(a.id)} className="group w-full text-left rounded-2xl border bg-white p-4 shadow-sm">
              <div className={`aspect-[4/3] w-full rounded-xl bg-gradient-to-br ${a.thumb}`} />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{a.images.length} photos</div>
                </div>
                <span className="text-xs text-[hsl(var(--gdg-blue))] group-hover:underline">Open</span>
              </div>
            </button>
            <Modal open={openId === a.id} onClose={() => setOpenId(null)} title={a.name}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {a.images.map((g, i) => (
                  <div key={i} className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${g}`} />
                ))}
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
}
