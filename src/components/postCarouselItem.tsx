import { FC } from "react";
import Image from "next/image";
import logo from "@/../public/logo SIBIA.jpg";

type Props = {
  post: {
    id: string;
    title: string;
    slug: string;
    content: string;
    categoryId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };
};
const PostCarouselItem: FC<Props> = ({ post }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        alt="placeholder"
        src={logo}
        className="mx-auto h-56 w-auto object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          10th Oct 2022{" "}
        </time>

        <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>

        <div
          className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};
export default PostCarouselItem;
