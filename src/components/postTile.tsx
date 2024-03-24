import { Post } from "@prisma/client";
import { FC } from "react";
import logo from "@/../public/logo SIBIA.jpg";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { getCategoryById } from "@/services/categoryService";

type Props = {
  postData: Post;
};
const Post: FC<Props> = async ({ postData }) => {
  let category;
  if (postData?.categoryId) {
    category = await getCategoryById(postData.categoryId);
  } else {
    category = { name: "Uncategorized" };
  }
  return (
    <Card>
      <div className="mx-auto max-w-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              alt="logo"
              className="h-48 w-full object-contain md:h-full md:w-48"
              src={logo}
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              {category?.name}
            </div>
            <Link
              href={"/post/" + postData.slug}
              className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >
              {postData.title}
            </Link>
            <div
              className="mt-2 line-clamp-3 text-slate-500"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            ></div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Post;
