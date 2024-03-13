import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import logoSibia from "@/../public/logo SIBIA.jpg";
import HeaderSm from "./headerSm";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logoSibia} alt="logoSibia" />
      </Link>

      <ul className="not-mobile">
        <li>
          <Link href={""}>profil</Link>
        </li>
        <li>
          <Link href={""}>pendaftaran</Link>
        </li>
        <li>
          <Link href={""}>berita</Link>
        </li>
        <li>
          <Link href={""}>artikel</Link>
        </li>
        <li>
          <Link href={""}>kontak</Link>
        </li>
      </ul>

      <HeaderSm />
    </header>
  );
};
