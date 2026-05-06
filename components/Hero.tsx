import Image from "next/image";
import screen from "../screen.png";

export default function Hero() {
  return (
    <section className="relative w-full pt-10">
      <div className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src={screen}
          alt="Hero"
          fill
          className="object-cover object-top brightness-[0.32] contrast-[1.08] saturate-[1.15]"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-vignette" />

        <div className="absolute left-10 top-10 z-20 max-w-3xl text-white sm:left-12">
          <div className="flex items-center gap-3">
            <Image src="/netflix.svg" alt="N" width={24} height={24} className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Series</span>
          </div>

          <h1 className="hero-title mt-4 text-white">MONEY HEIST</h1>
          <p className="mb-3 text-xs font-bold tracking-[0.55em] opacity-70">PART 4</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">IMDb</span>
              <span className="text-sm font-semibold">8.8/10</span>
            </div>
            <span className="text-sm font-semibold text-[#c63f43]">2B+ Streams</span>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button className="flex h-[50px] min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#e50914] px-7 text-lg font-extrabold text-white shadow-[0_10px_20px_rgba(229,9,20,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c90b14] hover:shadow-[0_16px_28px_rgba(229,9,20,0.36)]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.63rem] leading-none text-[#e50914]">▶</span>
              <span className="text-[1.95rem] leading-none">Play</span>
            </button>
            <button className="flex h-[50px] min-w-[184px] items-center justify-center rounded-full bg-white/20 px-8 text-[1.6rem] font-extrabold leading-none text-white shadow-[0_8px_16px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/30 hover:shadow-[0_14px_24px_rgba(0,0,0,0.45)]">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
