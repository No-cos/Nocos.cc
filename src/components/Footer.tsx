"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import nocoslogo from "@/public/logo.png";
import { features } from "@/constants";
import SiteMap from "./siteMap";


import MaxWidthWrapper from "./MaxWidthWrapper";





const Footer = () => {
  return <footer className=" py-4  dark-bg">
    <MaxWidthWrapper className='w-11/12'>

      <section className='h-screen'>
        <div className="max-h-[400px] h-4/5 w-full footer-bg relative px-5 bg-[#6E25E4CC]  rounded-[2rem] flex  flex-col items-center justify-center  " >
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
          <form action="" className="h-fit md:w-[60%] relative z-30 px-2 py-2 outline-1 outline outline-gray-600 bg-[#0E0F12] text-white flex rounded-2xl overflow-hidden  ">

            <input type="email" className="bg-[#101114] text-lg px-5 flex-grow caret-nocosLemon-300 focus:outline-none active:border-none " placeholder="Email" />
            <Button variant={"formBtn"} className="h-[37px] md:h-[45px]"> Subscribe</Button>
          </form>
          <div className=" absolute "> <div
            color="#6E25E4CC"
          />
          </div>
        </div>
        <span className="flex justify-between w-full  items-center mt-20 ">
          <div> <SiteMap heading="Features" /></div>
          <div> <SiteMap heading="Community" /></div>
          <div> <SiteMap heading="Support" /></div>
          
        </span>
      </section>
    </MaxWidthWrapper>
  </footer>;
};



export default Footer;
