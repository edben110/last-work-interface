"use client";
import { useRef } from "react";
import Card from "./Card";

type Props = {
  title: string;
  items?: { id: number; title: string; src?: string }[];
};

export default function Row({ title, items = [] }: Props) {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  return (
    <div className="mt-8 relative">
      <h3 className="text-xl font-bold mb-3 px-6 text-white">{title}</h3>
      <div className="relative">
        <div ref={scroller} className="-mx-6 overflow-x-auto px-6 no-scrollbar scroll-smooth">
          <div className="flex gap-4 pb-4">
            {items.map((it) => (
              <Card key={it.id} title={it.title} src={it.src} />
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-6">
          <div className="flex items-center gap-2">
            <button
              aria-label="left"
              onClick={scrollLeft}
              className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20"
            >
              ◀
            </button>
            <button
              aria-label="right"
              onClick={scrollRight}
              className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
