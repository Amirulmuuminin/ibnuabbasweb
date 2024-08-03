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
          priority
          alt="sekolah islam billingual ibnu abbas"
        />
        <div className="buttons">
          <Button
            text="Info Pendaftaran"
            color="bg-primary text-TWhite"
            link="/post/Profil%20Yayasan%20Ibnu%20Abbas%20BSD"
          />
          <Button
            text="Tentang Kami"
            color="bg-TWhite text-TBlack"
            link="/post/Profil%20Yayasan%20Ibnu%20Abbas%20BSD"
          />
        </div>
      </div>
    </section>
  );
};
