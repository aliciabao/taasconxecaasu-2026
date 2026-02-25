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
  <div className="text-center mx-auto pt-10 md:py-10 w-full px-4">
    <h1 className="text-3xl md:text-5xl font-bold font-tenor inline">TAASCONx</h1>
    <h1 className="text-3xl md:text-5xl font-bold font-tenor sm:inline">ECAASU</h1>
    <h2 className="text-lg md:text-2xl font-eb break-words">March 27-29th @ Duke University</h2>
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
