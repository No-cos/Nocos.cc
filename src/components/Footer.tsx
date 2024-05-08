import React from "react";
import { Button } from "./ui/button";

import  nocoslogo from "@/public/logo.png";


import MaxWidthWrapper from "./MaxWidthWrapper";


const Footer = () => {
  return <footer className=" py-4  dark-bg">
     <MaxWidthWrapper className='w-11/12'>
 
        <section className='h-screen'>
       <div className="max-h-[400px] h-4/5 w-full  relative px-5 bg-nocosPurple-700  rounded-2xl flex  flex-col items-center justify-center  " >
    
be the first to get updates from us
        <form action="" className="h-fit md:w-[60%] relative z-30 px-2 py-2 outline-1 outline outline-gray-600 bg-[#0E0F12] text-white flex rounded-2xl overflow-hidden  "> 
        
        <input type="email" className="bg-[#101114] text-lg px-5 flex-grow caret-nocosLemon-300 focus:outline-none active:border-none "  placeholder="Email"/>
        <Button variant={"formBtn"}> Subscribe</Button>
        </form>
<div className=" absolute "> <div
    color="#6E25E4CC"
/>
 </div>
         </div>
         
        </section>
      </MaxWidthWrapper>
  </footer>;
};

export default Footer;
