import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ data }: any) => {
  return (
    <div className="border border-[#3E3E3E] bg-[#16181B] rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-2xl">{data?.title}</h2>
        <Link
          href="/"
          className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center">
          <MdArrowOutward />
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        {data?.tags?.map((tag: any, i: any) => (
          <p
            key={i}
            className="cursor-pointer border border-[#6B18BF] first:border-[#8E005E] last:border-[#008E17] px-3 py-1 text-xs rounded-lg">
            {tag}
          </p>
        ))}
      </div>
      <div className="text p-8 mt-8 border border-[#313131] bg-[#1C1F22] rounded-xl ">
        {data?.des}
      </div>
    </div>
  );
};

export default ProjectCard;
