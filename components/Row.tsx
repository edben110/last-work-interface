"use client";
import Card from "./Card";

type Props = {
  title: string;
  items?: { id: number; title: string; src?: string }[];
};

export default function Row({ title, items = [] }: Props) {
  return (
    <div className="relative mt-8">
      <h3 className="text-xl font-bold mb-3 px-6 text-white">{title}</h3>
      <div className="-mx-6 overflow-x-auto px-6 no-scrollbar scroll-smooth">
        <div className="flex gap-4 pb-4">
          {items.map((it) => (
            <Card key={it.id} title={it.title} src={it.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
