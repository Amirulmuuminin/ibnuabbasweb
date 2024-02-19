import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTiles from "./postsTile";
import { CarouselContainer } from "./carouselContainer";
import { Button } from "./button";

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

      <div className="w-13 mx-auto mt-10">
        <Button text="Semua Post" color="bg-primary text-TWhite" />
      </div>
    </>
  );
};
export default PostSection;
