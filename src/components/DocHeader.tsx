"use client";
import { useState } from "react";
import Image from "next/image";
import nocoslogo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navs } from "@/constants";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "./ui/button";
import { IoIosMenu } from "react-icons/io";
import { Dialog, Popover } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="  outline z-10 fixed m-auto top-5 py-8 flex items-center justify-between h-fit w-screen ">
      <nav className=" py-6 px-8 h-[60px] rounded-2xl bg-[#181A1DB2] flex items-center justify-between">
        <a href="./ ">  <Image
          src={nocoslogo}
          alt="Nocos logo"
          width="68"
          height="29"
          layout="fixed"
        /> </a>

        <div className="search flex items-center space-x-4">
          <div className="input-wrapper relative flex items-center border border-[#3E3E3E] py-0 px-1 rounded-lg bg-[#16181B]">
            <input
              type="search"
              placeholder="Search for Projects"
              className=" bg-transparent p-3 outline-none text-white placeholder:text-[#4E4E4E]"
            />
            <button className="bg-white px-4 py-2 outline-none rounded-lg ">
              <MdOutlineManageSearch className="h-6 w-6" />
            </button>
          </div>
          <Button className="bg-[#7622FE] text-white lg:px-4 py-2 outline-none rounded-lg flex lg:space-x-2 ">
            <p className="lg:flex hidden">Filter</p> <IoFilter className="h-6 w-6" />
          </Button>
        </div>

        <IoIosMenu
          className="text-white h-8 w-8 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-hidden="true"
        />

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between w-11/12 py-6 px-8 h-[60px] rounded-2xl bg-[#181A1DB2] mx-auto">
              <Image
                src={nocoslogo}
                alt="Nocos logo"
                width="68"
                height="29"
                layout="fixed"
              />
              <button
                type="button"
                className="-m-2.5 rounded-md border p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <IoMdClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-8 flex flex-col pt-20 w-full pl-8">
                  {navs?.map((nav) => (
                    <Link
                      key={nav?.id}
                      href={nav?.link}
                      className={`${pathname === nav?.link
                          ? "text-red-600 text-xl font-semibold"
                          : "text-white text-xl font-semibold"
                        }`}>
                      {nav?.title}
                    </Link>
                  ))}
                  {/* <div className="">
                    <Button className="bg-white text-gray-600 py-6 px-3 text-lg w-6/12 rounded-xl">
                      Sign in <IoArrowForward className="h-6 w-6 ml-2" />
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;
