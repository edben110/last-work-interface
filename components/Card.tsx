import Image from "next/image";
import screen from "../screen.png";

type Props = {
  title?: string;
  src?: string;
};

export default function Card({ title = "Item", src }: Props) {
  const imageSrc = src ?? screen;
  return (
    <div className="relative flex-none w-[180px] aspect-[2/3]">
      <div className="card-wrap overflow-hidden rounded-md card-hover w-full h-full relative">
        <Image src={imageSrc} alt={title} width={360} height={540} className="object-cover w-full h-full brightness-[0.9] contrast-[1.08] saturate-[1.12]" />

        <div className="card-center-play">
          <div className="play-icon">▶</div>
        </div>

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
