import Link from "next/link";
import { FC } from "react";

interface sectionHeaderProps {
  text: string;
  textLink?: string;
  link?: string;
}

export const SectionHeader: FC<sectionHeaderProps> = ({
  link,
  text,
  textLink,
}) => {
  return (
    <div className="section-header">
      <p>{text}</p>
      {textLink && link ? <Link href={link}>{textLink}</Link> : ""}
    </div>
  );
};
