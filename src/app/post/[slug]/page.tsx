import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";
import { getAllSlug, getPostBySlug } from "@/services/postService";
import {
  migrateOldDataPost,
  migrateOldDataProfile,
} from "@/utils/migrateOldData";

export async function generateStaticParams() {
  const allSlug = await getAllSlug();
  return allSlug.map((item) => {
    return { slug: item };
  });
}

interface Props {
  params: { slug: string };
}

const Post: NextPage<Props> = async ({ params: { slug } }) => {
  await migrateOldDataPost();
  await migrateOldDataProfile();
  const post = await getPostBySlug(slug);
  return (
    <>
      <SinglePost content={post?.content!} />
      <Footer />
    </>
  );
};

export default Post;
