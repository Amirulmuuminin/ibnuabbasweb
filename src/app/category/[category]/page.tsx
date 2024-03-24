import { getAllPost, getPostByCategory } from "@/services/postService";
import { FC } from "react";
import prisma from "../../../../db";
import { Header } from "@/components/header";
import PostTilesWrapper from "@/components/postsTilesWrapper";
import { getCategoryId } from "@/services/categoryService";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  const allCategory = [
    "berita",
    "psb",
    "artikel",
    "tarbiyah",
    "tazkiyatun-nafs",
    "semua",
  ];
  return allCategory.map((item) => {
    return {
      category: item,
    };
  });
}

function repairCategorySpelling(category: string) {
  if (category === "psb") return category.toUpperCase();
  if (category === "tazkiyatun-nafs") return "Tazkiyatun Nafs";
  return category[0].toUpperCase() + category.slice(1);
}

type Props = {
  params: { category: string };
};
const Page: FC<Props> = async ({ params: { category } }) => {
  category = repairCategorySpelling(category);
  const postDatas =
    category != "semua"
      ? await getPostByCategory(category)
      : await getAllPost();
  return (
    <div>
      <Header />
      <div className="py-14">
        <PostTilesWrapper postDatas={postDatas} />
      </div>

      <Footer />
    </div>
  );
};
export default Page;
