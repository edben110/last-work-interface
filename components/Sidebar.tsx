"use client";
import { useState } from "react";

const icons = [
  { id: "search", label: "Buscar", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "home", label: "Inicio", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12l2-2 7-7 7 7 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10v10a1 1 0 001 1h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "tv", label: "Series", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 21l2-3h4l2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "movie", label: "Películas", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "new", label: "Novedades", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "list", label: "Mi lista", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { id: "shuffle", label: "Aleatorio", svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 3h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h5l11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("home");

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-full w-[60px] flex-col items-center bg-black py-6">
      <div className="mb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded text-white font-black">N</div>
      </div>

      <nav className="flex flex-col items-center gap-8 text-white/70">
        {icons.map((it) => (
          <button
            key={it.id}
            onClick={() => setActive(it.id)}
            title={it.label}
            className={`relative flex h-10 w-10 items-center justify-center bg-transparent transition-colors hover:text-red-600 ${
              active === it.id
                ? "pr-4 -mr-4 text-red-600 border-r-2 border-red-600"
                : "text-white/70 hover:text-red-600"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center text-current">{it.svg}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto text-xs text-white/30">v1</div>
    </aside>
  );
}
