"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialInfo } from "@/lib/constants";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="p-5 md:p-16 text-center">
      <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-12">
        Testimonials
      </h2>

      <div className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="max-w-[80%] sm:max-w-xs md:max-w-md lg:max-w-screen-md xl:max-w-screen-lg border shadow"
        >
          <CarouselContent>
            {testimonialInfo.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <div className="p-6 flex flex-col justify-between h-full">
                  <p className="font-medium text-base md:text-xl mb-8">
                    {item.text}
                  </p>

                  <div className="flex flex-col items-center gap-2">
                    <Avatar>
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                    <p className="font-normal">{item.user}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
