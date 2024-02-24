import Footer from "@/components/footer";
import SinglePost from "@/components/singlePost";
import type { NextPage } from "next";
import fsPromises from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData = JSON.parse(jsonData);

  console.log(objectData);
  const posts = ["jfalks", "fasdf"];

  return posts.map((post) => ({
    id: post,
  }));
}

interface Props {
  params: { id: string };
}

const Post: NextPage<Props> = async ({ params }) => {
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData = JSON.parse(jsonData);

  console.log(objectData);
  return (
    <>
      <SinglePost />
      <Footer />
    </>
  );
};

export default Post;
