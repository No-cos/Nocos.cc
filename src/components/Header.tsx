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
import { Ghost } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" w-full z-10 fixed top-0 py-8 flex items-center justify-center">
      <nav className="lg:w-5/12 w-10/12 py-6 px-8 h-[60px] rounded-2xl bg-[#181A1DB2] flex items-center justify-between">
       <a href="">  <Image
          src={nocoslogo}
          alt="Nocos logo"
          width="68"
          height="29"
          layout="fixed"
        /> </a>

        <div className="nav-links hidden lg:space-x-8 space-x-4 lg:flex items-center justify-end">
          {navs?.map((nav) => (
            <Link
              key={nav?.id}
              href={nav?.link}
              className={`${
                pathname === nav?.link
                  ? "text-nocosLemon-200 text-base "
                  : "text-white text-base"
              }`}>
              {nav?.title}
            </Link>
          ))}
        
            <Button variant={"ghost"} size={"sm"}>
              Sign in <IoArrowForward className="h-6 w-6 ml-2" />
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
                      className={`${
                        pathname === nav?.link
                          ? "text-nocosLemon-200 text-xl font-semibold"
                          : "text-white text-xl font-semibold"
                      }`}>
                      {nav?.title}
                    </Link>
                  ))}
                  <div className="">
                    <Button variant={"ghost"} size={"sm"}>
                      Sign in <IoArrowForward className=" w-6 ml-2" />
                    </Button>
                  </div>
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
