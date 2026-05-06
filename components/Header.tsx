"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 netflix-header" style={{ left: 72, right: 0 }}>
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3">
        <div className="flex items-center gap-6">
          <Image src="/netflix.svg" alt="Logo" width={110} height={36} />
          <nav className="hidden gap-5 text-sm font-semibold text-white/95 sm:flex">
            <a className="opacity-95 hover:opacity-100">Inicio</a>
            <a className="opacity-80 hover:opacity-100">Series</a>
            <a className="opacity-80 hover:opacity-100">Películas</a>
            <a className="opacity-80 hover:opacity-100">Novedades</a>
            <a className="opacity-80 hover:opacity-100">Mi lista</a>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden h-9 w-56 items-center rounded bg-black/40 px-3 text-sm text-white/80 sm:flex">
            <svg width="16" height="16" fill="none" stroke="currentColor" className="mr-2 opacity-70" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
            <input className="bg-transparent outline-none placeholder:text-white/60 text-sm" placeholder="Buscar" />
          </div>
          <button className="h-9 w-9 rounded-full bg-transparent text-white/90 flex items-center justify-center" aria-label="notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m8 0a3 3 0 11-6 0h6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="h-9 w-9 rounded overflow-hidden bg-zinc-800" aria-label="profile">
            <Image src="/vercel.svg" alt="Profile" width={32} height={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
