"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import PostCarouselItem from "./postCarouselItem";

export function CarouselContainer() {
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
    <div className="px-sm md:px-lg mt-10">
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <PostCarouselItem />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-1 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className={`size-[5px] rounded-full ${
              index + 1 == current ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
