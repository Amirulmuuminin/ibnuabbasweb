import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTiles from "./postsTile";
import { CarouselContainer } from "./carouselContainer";

type Props = {};
const PostSection: FC<Props> = ({}) => {
  return (
    <>
      <SectionHeader
        text="Postingan Terbaru"
        textLink="Selengkapnya"
        link="1"
      />
      <CarouselContainer />
      <PostTiles />
      <p className="text-center font-semibold text-primary mt-10">
        Selengkapnya
      </p>
    </>
  );
};
export default PostSection;
