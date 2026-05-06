"use client";
import { useState } from "react";

const icons = [
  { id: "search", label: "Search", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "home", label: "Home", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "tv", label: "TV Shows", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "movie", label: "Movies", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "new", label: "New & Popular", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "list", label: "My List", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
  { id: "shuffle", label: "Shuffle", svg: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  ) },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("shuffle");
  const mainIcons = icons.filter((it) => it.id !== "shuffle");
  const bottomIcon = icons.find((it) => it.id === "shuffle");

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-full w-16 flex-col bg-black/95 py-7">
      <nav className="mt-1 flex flex-1 flex-col items-center text-[#8f96a0]">
        <div className="flex w-full flex-col items-center gap-6">
          {mainIcons.map((it) => (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              title={it.label}
              className={`relative flex h-10 w-full items-center justify-center bg-transparent transition-colors hover:text-white ${
                active === it.id ? "text-[#e50914]" : ""
              }`}
            >
              {active === it.id && <span className="absolute right-0 h-7 w-[2px] rounded-full bg-[#e50914]" />}
              {it.svg}
            </button>
          ))}
        </div>

        {bottomIcon && (
          <button
            onClick={() => setActive(bottomIcon.id)}
            title={bottomIcon.label}
            className={`relative flex h-10 w-full items-center justify-center bg-transparent transition-colors hover:text-white ${
              active === bottomIcon.id ? "text-[#e50914]" : ""
            }`}
          >
            {active === bottomIcon.id && <span className="absolute right-0 h-7 w-[2px] rounded-full bg-[#e50914]" />}
            {bottomIcon.svg}
          </button>
        )}
      </nav>
    </aside>
  );
}
