import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

export default function Hero() {
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
    <div className="flex flex-row justify-evenly pb-10">
      <div className="self-center">
        <h1 className="text-5xl font-bold">TAASCONxECAASU</h1>
        <h2 className="text-2xl">March 27-29th</h2>
        <h2 className="text-2xl">@ Duke University</h2>
      </div>

      <div className="w-1/2">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <img src="./carousel-1.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="./carousel-2.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="./carousel-3.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="./carousel-4.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="./carousel-5.jpg" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-muted-foreground py-2 text-center text-sm">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
}
