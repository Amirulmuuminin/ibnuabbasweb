import Link from "next/link";
import { FC } from "react";

interface buttonProps {
  color:
    | "bg-primary text-TWhite"
    | "bg-secondary text-TWhite"
    | "bg-accent text-TWhite"
    | "bg-TBlack text-TWhite"
    | "bg-TWhite text-TBlack";
  text: string;
  link: string;
}

export const Button: FC<buttonProps> = ({ color, text, link }) => {
  return (
    <Link
      href={link}
      className={`${color}  px-7 py-[11px] text-[15px]  md:py-[9px]`}
    >
      <p className="-mt-[2.2px] font-semibold">{text}</p>
    </Link>
  );
};
