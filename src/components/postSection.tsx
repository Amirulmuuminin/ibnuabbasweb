import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTiles from "./postsTile";
import { CarouselContainer } from "./carouselContainer";
import { Button } from "./button";
import { getLatestPosts } from "@/services/postService";

type Props = {};
const PostSection: FC<Props> = async ({}) => {
  const latestPosts = await getLatestPosts();
  console.log(latestPosts[0]);
  return (
    <>
      <SectionHeader
        text="Postingan Terbaru"
        textLink="Selengkapnya"
        link="1"
      />
      <CarouselContainer latestPosts={latestPosts} />
      <PostTiles />

      <div className="w-13 mx-auto mt-10">
        <Button text="Semua Post" color="bg-primary text-TWhite" />
      </div>
    </>
  );
};
export default PostSection;
