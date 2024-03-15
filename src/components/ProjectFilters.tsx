import React from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import { Button } from "./ui/button";
import { IoFilter } from "react-icons/io5";

const tags = [
  "Documentation",
  "UX Research",
  "Frontend",
  "UX Writer",
  "Translation",
];

const ProjectFilters = () => {
  return (
    <section className="flex items-center justify-between lg:flex-row flex-col pb-8">
      <div className="">
        <p className="text-white text-lg mb-2 font-medium">Popular Tags:</p>
        <div className="tags lg:flex lg:items-center grid grid-cols-3 gap-x-3 gap-y-3 mb-6 lg:space-x-2">
          {tags.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg text-white text-sm px-2 py-1">
              {item}
            </p>
          ))}
        </div>
      </div>
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
    </section>
  );
};

export default ProjectFilters;
