import { FC } from "react";
import Image from "next/image";
import sibiaFooter from "../../public/sibia footer.svg";
import ig from "../../public/ig.svg";
import spotify from "../../public/spotify.svg";
import wa from "../../public/wa.svg";
import fb from "../../public/fb.svg";
import yt from "../../public/yt.svg";

type Props = {};
const Footer: FC<Props> = ({}) => {
  return (
    <footer className="bg-TBlack text-TWhite p-7">
      <div className="flex flex-col">
        <h3 className="font-extrabold">Temukan Kami</h3>
        <div className="mt-5 flex gap-3">
          <Image alt="sibia bsd" src={ig} className="size-5" />
          <Image alt="sibia bsd" src={yt} className="size-5" />
          <Image alt="sibia bsd" src={fb} className="size-5" />
          <Image alt="sibia bsd" src={wa} className="size-5" />
          <Image alt="sibia bsd" src={spotify} className="size-5" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <p>
          Jl. Tandon Ciater, Ciater, Kec. Serpong, Kota Tangerang Selatan,
          Banten 15310
        </p>
        <p>081288465771</p>
        <a
          href="https://www.google.com/maps/place/Ibnu+Abbas+Islamic+School/@-6.3261937,106.6885847,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e58c7fe34201:0xec55d94689740277!8m2!3d-6.326199!4d106.6911596!16s%2Fg%2F11j8pdgsr2?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          Buka di Google Maps
        </a>
      </div>

      <Image alt="sibia bsd" src={sibiaFooter} className="mx-auto mt-5" />
    </footer>
  );
};
export default Footer;
