import { FC } from "react";
import ibnuAbbasText from "@/../public/ibnuAbbas.svg";
import Image from "next/image";
import { Button } from "./button";
interface heroProps {}

export const Hero: FC<heroProps> = ({}) => {
  return (
    <section className="hero">
      <div className="glass-box">
        <Image
          src={ibnuAbbasText}
          height={120}
          alt="sekolah islam billingual ibnu abbas"
        />
        <div className="buttons">
          <Button text="Info Pendaftaran" color="bg-primary text-TWhite" />
          <Button text="Tentang Kami" color="bg-TWhite text-TBlack" />
        </div>
      </div>
    </section>
  );
};
