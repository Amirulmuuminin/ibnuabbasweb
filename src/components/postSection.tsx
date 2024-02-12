import { FC } from "react";
import { SectionHeader } from "./sectionHeader";

interface postSectionProps {}

export const PostSection: FC<postSectionProps> = ({}) => {
  return (
    <>
      <SectionHeader
        text="Postingan Terbaru"
        textLink="Lihat Semua"
        link="percobaan"
      />
    </>
  );
};
