"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import pic1 from "@/public/pic-1.png";
import Image from "next/image";

const ExpectionSection = () => {
  return (
    <section className="hero-bg bg-gray-800 py-20">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-white">Beyond Expectations</h1>
        <p className="mt-1 font-normal text-gray-300">
          Impacting Open Source Ecosystem
        </p>
      </div>
      <div className="slider">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}>
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="card p-10 rounded-xl border border-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In sit at morbi
                  tristique scelerisque diam sapien lacinia. Diam in dui tempus
                  ipsum sed.{" "}
                </p>
                <div className="author">
                  <Image
                    src={pic1}
                    alt="pic"
                    layout="fixed"
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="card p-10 rounded-xl border border-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In sit at morbi
                  tristique scelerisque diam sapien lacinia. Diam in dui tempus
                  ipsum sed.{" "}
                </p>
                <div className="author">
                  <Image
                    src={pic1}
                    alt="pic"
                    layout="fixed"
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="card p-10 rounded-xl border border-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In sit at morbi
                  tristique scelerisque diam sapien lacinia. Diam in dui tempus
                  ipsum sed.{" "}
                </p>
                <div className="author">
                  <Image
                    src={pic1}
                    alt="pic"
                    layout="fixed"
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="card p-10 rounded-xl border border-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In sit at morbi
                  tristique scelerisque diam sapien lacinia. Diam in dui tempus
                  ipsum sed.{" "}
                </p>
                <div className="author">
                  <Image
                    src={pic1}
                    alt="pic"
                    layout="fixed"
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="card p-10 rounded-xl border border-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In sit at morbi
                  tristique scelerisque diam sapien lacinia. Diam in dui tempus
                  ipsum sed.{" "}
                </p>
                <div className="author">
                  <Image
                    src={pic1}
                    alt="pic"
                    layout="fixed"
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ExpectionSection;
