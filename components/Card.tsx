import Image from "next/image";

type Props = {
  title?: string;
  src?: string;
};

export default function Card({ title = "Item", src = "/screen.png" }: Props) {
  return (
    <div className="relative flex-none w-[180px] aspect-[2/3]">
      <div className="card-wrap overflow-hidden rounded-md card-hover w-full h-full relative">
        <Image src={src} alt={title} width={360} height={540} className="object-cover w-full h-full" />

        <div className="card-overlay">
          <div className="card-actions">
            <button className="card-play">Play</button>
            <button className="card-info">Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
