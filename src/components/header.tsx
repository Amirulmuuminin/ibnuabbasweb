"use client";
import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import logoSibia from "@/../public/logo SIBIA.jpg";
import HeaderSm from "./headerSm";
import ScrollIntoView from "react-scroll-into-view";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logoSibia} alt="logoSibia" />
      </Link>

      <ul className="not-mobile cursor-pointer">
        <li>
          <Link href={"/post/Profil%20Yayasan%20Ibnu%20Abbas%20BSD"}>
            profil
          </Link>
        </li>
        <li>
          <Link href={"/category/psb"}>pendaftaran</Link>
        </li>
        <li>
          <Link href={"/category/berita"}>berita</Link>
        </li>
        <li>
          <Link href={"/category/artikel"}>artikel</Link>
        </li>
        <li>
          <Link href={"/category/tarbiyah"}>tarbiyah</Link>
        </li>
        <li>
          <Link href={"/category/tazkiyatun-nafs"}>tazkiyatun nafs</Link>
        </li>
        <ScrollIntoView selector="footer">
          <li>kontak</li>
        </ScrollIntoView>
      </ul>

      <HeaderSm />
    </header>
  );
};
