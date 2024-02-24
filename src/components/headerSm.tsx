"use client";

import { useOutsideClick } from "@/hook/useOutsideClick";
import Link from "next/link";
import { FC, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";
import icon from "../../public/logo SIBIA.jpg";

type Props = {};
const HeaderSm: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  function togleMenu() {
    setIsOpen(!isOpen);
  }

  const ref = useOutsideClick(() => {
    if (isOpen) setIsOpen(false);
  });
  return (
    <div ref={ref} className="block sm:hidden">
      {/* for mobile screen */}
      <CgMenuRight className="icon" onClick={togleMenu} />
      <ul
        className={`${
          isOpen ? "grid" : "hidden"
        } absolute right-0 top-0 gap-6 border bg-TWhite  px-7 py-10 sm:hidden`}
      >
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <Image
            src={icon}
            alt=""
            className="h-24 w-24 flex-shrink-0 self-center rounded-full border dark:border-gray-700 dark:bg-gray-500 md:justify-self-start"
          />
          <p className="font-semibold uppercase">IbnuAbbas-BSD.com</p>
        </div>
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
    </div>
  );
};
export default HeaderSm;
