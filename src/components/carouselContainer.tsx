"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import PostCarouselItem from "./postCarouselItem";
import Link from "next/link";
import { FC } from "react";

interface Props {
  latestPosts: {
    id: string;
    title: string;
    slug: string;
    content: string;
    categoryId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  }[];
}

export const CarouselContainer: FC<Props> = ({ latestPosts }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-10 px-sm md:px-lg">
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {latestPosts.map((item, i) => {
            return (
              <CarouselItem key={i}>
                <Link href={`/post/${item.slug}`}>
                  <PostCarouselItem post={item} />
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`size-[5px] rounded-full ${
              index + 1 == current ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
