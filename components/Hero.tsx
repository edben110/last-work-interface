import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-16 w-full">
      <div className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/screen.png"
          alt="Hero"
          fill
          className="object-cover object-top brightness-[0.45]"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute left-12 top-32 z-20 max-w-3xl text-white">
          <div className="flex items-center gap-3">
            <span className="text-red-600 font-black text-xl">N</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Series</span>
          </div>
          <h1 className="mt-4 text-6xl font-black mb-2 uppercase tracking-tighter">Money Heist</h1>
          <p className="text-xs font-bold tracking-widest mb-4 opacity-70">PART 4</p>

          <div className="mt-4 flex items-center gap-4">
            <button className="flex items-center gap-3 rounded-full bg-netflix px-10 py-2.5 text-sm font-bold text-white shadow-sm">▶ Play</button>
            <button className="flex items-center gap-3 rounded-full bg-white/10 px-8 py-2.5 text-sm font-bold text-white">Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  );
}
