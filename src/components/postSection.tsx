import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTilesWrapper from "./postsTilesWrapper";
import { CarouselContainer } from "./carouselContainer";
import { Button } from "./button";
import { getLatestPosts, getNext5Post } from "@/services/postService";
import { updateSlug } from "@/utils/updateData";

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

      <div className="w-13 mx-auto mt-10">
        <Button text="Semua Post" color="bg-primary text-TWhite" />
      </div>
    </>
  );
};
export default PostSection;
