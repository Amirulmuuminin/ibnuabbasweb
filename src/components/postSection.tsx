import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTilesWrapper from "./postsTilesWrapper";
import { CarouselContainer } from "./carouselContainer";
import { getLatestPosts, getNext5Post } from "@/services/postService";
import { Button } from "./ui/button";

type Props = {};
const PostSection: FC<Props> = async ({}) => {
  const latestPosts = await getLatestPosts();
  const next5Post = await getNext5Post();

  return (
    <>
      <SectionHeader
        text="Postingan Terbaru"
        textLink="Selengkapnya"
        link="1"
      />
      <CarouselContainer latestPosts={latestPosts} />
      <PostTilesWrapper nextPost={next5Post} />
      <Button className="mx-auto mt-5 w-fit rounded-none bg-primary">
        Semua Postingan
      </Button>
    </>
  );
};
export default PostSection;
