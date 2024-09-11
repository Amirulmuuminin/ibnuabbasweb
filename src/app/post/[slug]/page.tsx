import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";
import {
  editPostBySlug,
  getAllSlug,
  getPostBySlug,
} from "@/services/postService";
import { Header } from "@/components/header";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allSlug = await getAllSlug();

  return allSlug.map((item) => {
    return { slug: item ?? "404" };
  });
}

interface Props {
  params: { slug: string };
}

const Post: NextPage<Props> = async ({ params: { slug } }) => {
  if (slug == "404") return notFound();
  const post = await getPostBySlug(slug);

  return (
    <>
      <Header />
      <SinglePost post={post} />
      <Footer />
      {/* <Testing /> */}
    </>
  );
};

export default Post;

// const Testing = async () => {
//   const post = await editPostBySlug("rindu-tak-bertepi");
//   console.log(post);
//   return <div></div>;
// };
