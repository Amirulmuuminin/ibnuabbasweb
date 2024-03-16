import { getPostByCategory } from "@/services/postService";
import { FC } from "react";
import prisma from "../../../../db";

export async function generateStaticParams() {
  const allCategory = [
    "berita",
    "psb",
    "artikel",
    "tarbiyah",
    "tazkiyatun-nafs",
  ];
  return allCategory.map((item) => {
    return {
      category: item,
    };
  });
}

type Props = {
  params: { category: string };
};
const Page: FC<Props> = async ({ params: { category } }) => {
  console.log(await getPostByCategory(category));
  console.log(await prisma.category.findMany());
  return <div></div>;
};
export default Page;
