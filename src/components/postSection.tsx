import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import PostTilesWrapper from "./postsTilesWrapper";
import { CarouselContainer } from "./carouselContainer";
import { getLatestPosts, getNext5Post } from "@/services/postService";
import Pagination from "./pagination";

type Props = {};
const PostSection: FC<Props> = async ({}) => {
  const latestPosts = await getLatestPosts();
  const next5Post = await getNext5Post();

  return (
    <>
      <SectionHeader
        text="Postingan Terbaru"
        textLink="Selengkapnya"
        link="/category/semua"
      />
      <CarouselContainer latestPosts={latestPosts} />
      <PostTilesWrapper postDatas={next5Post} />
      <Pagination />
    </>
  );
};
export default PostSection;
