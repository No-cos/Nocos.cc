import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import pic1 from "@/public/pic-1.png";
import pic2 from "@/public/pic-2.png";
import pic3 from "@/public/pic-3.png";
import pic4 from "@/public/pic-4.png";
import pic5 from "@/public/pic-5.png";
import pic6 from "@/public/pic-6.png";
import pic7 from "@/public/pic-7.png";
import pic8 from "@/public/pic-8.png";
import pic9 from "@/public/pic-9.png";
import Image from "next/image";

const Contributors = () => {
  return (
    <section className="hero-bg bg-gray-800 py-20">
      <MaxWidthWrapper className="lg:w-11/12 w-12/12">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-white">Top Contributors</h1>
          <p className="mt-1 font-normal text-gray-300">
            We Celebrate top OS Contributors
          </p>
        </div>

        <div className="contributors lg:w-8/12 w-10/12 mx-auto grid grid-cols-5 gap-2 mt-20">
          <div className="row space-y-3">
            <Image
              src={pic1}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic2}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic3}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
          </div>

          <div className="row space-y-3 mt-8">
            <Image
              src={pic4}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic5}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic6}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
          </div>

          <div className="row space-y-3 mt-12">
            <Image
              src={pic6}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic7}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic8}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
          </div>

          <div className="row space-y-3 mt-8">
            <Image
              src={pic5}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic9}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic2}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
          </div>

          <div className="row space-y-3">
            <Image
              src={pic2}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic8}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
            <Image
              src={pic4}
              alt="pic"
              layout="fixed"
              width="180"
              height="180"
            />
          </div>
        </div>

        <div className="stats lg:w-8/12 w-10/12 mx-auto flex items-center justify-center px-10 lg:py-20 py-10 lg:mt-40 mt-20 border border-[#3E3E3E] rounded-lg bg-[#16181B]">
          <div className="lg:flex items-center justify-around grid grid-cols-2 gap-8 w-full">
            <div className="card text-white">
              <h1 className="font-bold text-4xl">2M+</h1>
              <p className="font-semibold text-xs">Active Users</p>
            </div>
            <div className="card text-white">
              <h1 className="font-bold text-4xl">700+</h1>
              <p className="font-semibold text-xs">Projects Issues</p>
            </div>
            <div className="card text-white">
              <h1 className="font-bold text-4xl">250+</h1>
              <p className="font-semibold text-xs">Compaines</p>
            </div>
            <div className="card text-white">
              <h1 className="font-bold text-4xl">250+</h1>
              <p className="font-semibold text-xs">Compaines</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contributors;
