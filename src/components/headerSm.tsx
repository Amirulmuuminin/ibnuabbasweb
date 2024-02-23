"use client";

import { useOutsideClick } from "@/hook/useOutsideClick";
import Link from "next/link";
import { FC, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

type Props = {};
const HeaderSm: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  function togleMenu() {
    setIsOpen(!isOpen);
  }

  const ref = useOutsideClick(() => {
    setIsOpen(!isOpen);
  });
  return (
    <div ref={ref} className="sm:hidden block">
      {/* for mobile screen */}
      <CgMenuRight className="icon" onClick={togleMenu} />
      <ul
        className={`${
          isOpen ? "grid" : "hidden"
        } absolute right-0 top-0 py-sm px-7 glass  gap-4 sm:hidden`}
      >
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
