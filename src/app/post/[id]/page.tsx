import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";
import {
  inspectObject,
  migrateOldDataProfile,
} from "../../../../lib/migrateOldData";

export async function generateStaticParams() {
  const posts = ["jfalks", "fasdf"];

  return posts.map((post) => ({
    id: post,
  }));
}

interface Props {
  params: { id: string };
}

const Post: NextPage<Props> = async ({ params }) => {
  // inspectObject();
  migrateOldDataProfile();
  return (
    <>
      <SinglePost />
      <Footer />
    </>
  );
};

export default Post;
