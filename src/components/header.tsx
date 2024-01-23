import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import logoSibia from "@/../public/logo SIBIA.jpg";
import { CgMenuRight } from "react-icons/cg";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header>
      <Image src={logoSibia} alt="logoSibia" />
      <CgMenuRight className="icon" />
      <ul>
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
    </header>
  );
};
