import { FC } from "react";

interface buttonProps {
  color:
    | "bg-primary text-TWhite"
    | "bg-secondary text-TWhite"
    | "bg-accent text-TWhite"
    | "bg-TBlack text-TWhite"
    | "bg-TWhite text-TBlack";
  text: string;
}

export const Button: FC<buttonProps> = ({ color, text }) => {
  return (
    <button
      className={`${color}  px-7 py-[11px] md:py-[9px] rounded-xl text-[15px]`}
    >
      <p className="-mt-[2.2px] font-semibold">{text}</p>
    </button>
  );
};
