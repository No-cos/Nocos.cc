"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import icon_in from "@/public/icon_in.svg";
import icon_insta from "@/public/icon_insta.svg";
import icon_x from "@/public/icon_x.svg";
import nocoslogo from "@/public/logo.png";
import icon_yt from "@/public/icon_yt.svg";
import { features } from "@/constants";
import SiteMap from "./SiteMap";


import MaxWidthWrapper from "./MaxWidthWrapper";





const Footer = () => {
  return (
    <footer className=" py-4  dark-bg">

      <MaxWidthWrapper className='w-11/12'>


        <section className="flex flex-col " >
          <div className="min-h-[400px] h-4/5 w-full footer-bg relative px-5 bg-[#6E25E4CC]  rounded-[2rem] flex  flex-col items-center justify-center  " >
            <span>
              <Image
                src={nocoslogo}
                alt="Nocos logo"
                width="68"
                height="29"
                layout="fixed"
              />
            </span>
            <p className="text-white  py-4">Be the first to get updates from us</p>
            <form action="" className="h-fit md:w-[60%] w-full  relative z-30 px-2 py-2 outline-1 outline outline-gray-600 bg-[#0E0F12] text-white flex rounded-xl md:rounded-2xl overflow-hidden  ">

              <input type="email" className="bg-[#101114] text-lg px-2 md:px-5 md:flex-grow w-full caret-nocosLemon-300 focus:outline-none active:border-none placeholder:text-modalGrey-200  " placeholder="Email" />
              <Button variant={"formBtn"} className="h-[37px] md:h-[45px] "> Subscribe</Button>
            </form>

          </div>
          <div className="flex flex-col gap-[3rem] items-center text-white pb-[2rem]">
            <span className="flex justify-evenly w-11/12  items-center mt-20 bg-lemon-300 py-10 m-auto ">
              <div> <SiteMap heading="Features" /></div>
              <div> <SiteMap heading="Community" /></div>
              <div> <SiteMap heading="Support" /></div>

            </span>

            <span className="flex gap-5 m-auto py-10 border-b border-b-[#3E3E3E] w-full  justify-center ">
              <a href=" ">  <Image
                src={icon_in}
                alt="Nocos logo"
                width="56"
                layout="fixed"
              />
              </a>
              <a href="">
                <Image
                  src={icon_x}
                  alt="Nocos logo"
                  width="56"

                  layout="fixed"
                /></a>
              <a href="">
                <Image
                  src={icon_insta}
                  alt="Nocos logo"
                  width="56"

                  layout="fixed"
                />
              </a>
              <a href="">
                <Image
                  src={icon_yt}
                  alt="Nocos logo"
                  width="56"

                  layout="fixed"
                />
              </a>
            </span>
            <p> ©️ 2024 Nocos All Rights Reserved</p>
          </div>
        </section>

      </MaxWidthWrapper>
    </footer >

  )
};



export default Footer;
