import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { ScrollingLeft, ScrollingRight } from "./Scrolling";
import { topics } from "@/constants";

const Hero = () => {
  return (
    <section className="hero-bg h-screen bg-gray-800 w-full relative flex items-center">
      <div className="w-full">
        <MaxWidthWrapper className="text-center lg:w-7/12 w-10/12 lg:my-10 z-10">
          <h1 className="font-bold lg:text-5xl text-3xl text-white">
            Discover and Contribute to Your Favourite Open Source Project.
          </h1>
          <div className="lg:w-8/12 mx-auto mt-8 text-center">
            <p className="text-white lg:text-xl text-base">
              Non code contributors can now discover and contribute to OS
              without technical hassle.
            </p>
          </div>
          <div className="btn mt-8 flex items-center justify-center mx-auto lg:w-8/12 w-11/12">
            <div className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-4 w-full lg:w-auto">
              <Button className="bg-[#7622FE] hover:bg-[#7622FE] rounded-xl px-6 h-[56px] w-full lg:w-[194px] text-white">
                Get Started <IoArrowForward className="text-xl ml-2" />
              </Button>
              <Button className="bg-[#EFEFEF] hover:bg-[#EFEFEF] rounded-xl px-6 h-[56px] w-full lg:w-[194px] text-black">
                Explore <MdOutlineExplore className="text-xl ml-2" />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="flex items-center justify-center space-x-6 absolute bottom-0 w-full ">
          <div className="relative w-full h-40 flex items-center justify-center">
            <div className="bg-left absolute left-0 h-full w-[100%] z-10"></div>
            <div className="w-full space-y-4">
              <ScrollingLeft texts={topics} />
              <ScrollingRight texts={topics} />
            </div>
            <div className="bg-right absolute right-0 h-full w-[100%] z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
