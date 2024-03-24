import Link from "next/link";
import { FC } from "react";
import { Button as Btn } from "./ui/button";

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
    <Btn asChild className={`${color} rounded-none`}>
      <Link href={link}>{text}</Link>
    </Btn>
  );
};
