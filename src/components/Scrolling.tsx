import React from "react";
import { RiCompassesLine } from "react-icons/ri";
import Marquee from "react-fast-marquee";

export const ScrollingLeft = ({ texts }: any) => {
  return (
    <Marquee>
      {texts.map((text: any, index: any) => (
        <span
          key={index}
          className="scroll-text mr-8 border text-gray-400 border-gray-600 text-sm px-8 py-1 rounded-full flex items-center ">
          <div className="pr-2">
            <RiCompassesLine />
          </div>
          {text}
        </span>
      ))}
    </Marquee>
  );
};

export const ScrollingRight = ({ texts }: any) => {
  return (
    <Marquee direction="right">
      {texts.map((text: any, index: any) => (
        <span
          key={index}
          className="scroll-text mr-8 border text-gray-400 border-gray-600 text-sm px-8 py-1 rounded-full flex items-center ">
          <div className="pr-2">
            <RiCompassesLine />
          </div>
          {text}
        </span>
      ))}
    </Marquee>
  );
};
