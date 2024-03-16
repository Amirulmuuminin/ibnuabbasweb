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
          <Link href={"/category/profil"}>profil</Link>
        </li>
        <li>
          <Link href={"/category/pendaftaran"}>pendaftaran</Link>
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
