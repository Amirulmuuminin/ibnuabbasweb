import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import logoSibia from "@/../public/logo SIBIA.jpg";
import { CgMenuRight } from "react-icons/cg";
import HeaderSm from "./headerSm";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header>
      <Image src={logoSibia} alt="logoSibia" />
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
