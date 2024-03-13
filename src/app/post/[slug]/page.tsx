import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";
import { getAllSlug, getPostBySlug } from "@/services/postService";

import { Header } from "@/components/header";
import { migrateOldDataPost } from "@/utils/migrateOldData";

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
  const post = await getPostBySlug(slug);
  return (
    <>
      <Header />
      <SinglePost post={post} />
      <Footer />
    </>
  );
};

export default Post;
