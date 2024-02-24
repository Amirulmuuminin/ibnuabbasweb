import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";

export async function generateStaticParams() {
  const posts = ["njkl", "gvhjfk", "fkyhfk"];

  return posts.map((post) => ({
    id: post,
  }));
}

interface Props {
  params: { id: string };
}

const Post: NextPage<Props> = ({ params }) => {
  return (
    <>
      <SinglePost />
      <Footer />
    </>
  );
};

export default Post;
