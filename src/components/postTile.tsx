import { Post } from "@prisma/client";
import { FC } from "react";
import logo from "@/../public/logo SIBIA.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  postData: Post;
};
const Post: FC<Props> = async ({ postData }) => {
  return (
    <article className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>2022</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 10</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <Image
          alt=""
          src={logo}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <Link href={`/post/${postData.slug}`}>
            <h3 className="font-bold uppercase text-gray-900">
              {postData.title}
            </h3>
          </Link>

          <div
            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href={`/post/${postData.slug}`}
            className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-TWhite transition hover:bg-green-300"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Post;
