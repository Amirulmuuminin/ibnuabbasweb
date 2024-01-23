import { FC } from "react";
import { Header } from "./header";
import ibnuAbbasText from "@/../public/ibnuAbbas.svg";
import Image from "next/image";
import Link from "next/link";
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
      </div>
    </section>
  );
};
