import { getPostByCategory } from "@/services/postService";
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
  ];
  return allCategory.map((item) => {
    return {
      category: item,
    };
  });
}

function repairCategorySpelling(category: string) {
  category =
    category === "PSB"
      ? category.toUpperCase()
      : category === "tazkiyatun-nafs"
        ? "Tazkiyatun Nafs"
        : category[0].toUpperCase() + category.slice(1);
  return category;
}

type Props = {
  params: { category: string };
};
const Page: FC<Props> = async ({ params: { category } }) => {
  category = repairCategorySpelling(category);
  const postDatas = await getPostByCategory(category);
  console.log(await getCategoryId({ categoryName: category }));
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
