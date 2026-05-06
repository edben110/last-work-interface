"use client";
import { useState } from "react";

const icons = [
  { id: "search", label: "Buscar", glyph: "🔍" },
  { id: "home", label: "Inicio", glyph: "🏠" },
  { id: "tv", label: "Series", glyph: "📺" },
  { id: "movie", label: "Películas", glyph: "🎬" },
  { id: "new", label: "Novedades", glyph: "✨" },
  { id: "list", label: "Mi lista", glyph: "➕" },
  { id: "shuffle", label: "Aleatorio", glyph: "🔀" },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("home");

  return (
    <aside className="fixed left-0 top-0 h-full w-[72px] bg-black z-50 flex flex-col items-center py-6 border-r border-white/5">
      <div className="mb-6">
        <div className="w-8 h-8 rounded text-netflix flex items-center justify-center font-black">N</div>
      </div>

      <nav className="flex flex-col items-center gap-6 mt-2">
        {icons.map((it) => (
          <button
            key={it.id}
            onClick={() => setActive(it.id)}
            title={it.label}
            className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors text-white/70 hover:text-white ${
              active === it.id ? "text-red-600 border-r-2 border-red-600 pr-4 -mr-4" : ""
            }`}
          >
            <span className="text-xl">{it.glyph}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto text-xs text-white/30">v1</div>
    </aside>
  );
}
