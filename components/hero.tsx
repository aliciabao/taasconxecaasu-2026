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
    <div className="flex flex-col flex-wrap justify-evenly items-center pb-10 text-background bg-foreground">
      <div className="text-center self-center mr-10 py-10">
        <h1 className="text-5xl font-bold font-tenor">TAASCONxECAASU</h1>
        <h2 className="text-2xl font-eb">March 27-29th @ Duke University</h2>
      </div>

      <div className="w-1/3 hidden md:block">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <img src="./carousel-hz.png" />
            </CarouselItem>
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
          <CarouselPrevious
            variant="ghost"
            className="bg-transparent color-background border-none shadow-none hover:bg-transparent"
          />
          <CarouselNext
            variant="ghost"
            className="bg-transparent color-background border-none shadow-none hover:bg-transparent"
          />
        </Carousel>
        <div className="text-muted-background py-2 text-center text-sm">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
}
