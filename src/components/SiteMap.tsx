
import React from "react";
import Link from "next/link";
import { features } from "@/constants";


const SiteMap = (props: any ) => {
return (
    <>
    <div className="grid grid-flow-col grid-cols-3 ">
    <div className="text-white w-1/3 flex flex-col items-center bg-nocosLemon-200" >

      <h4 className="mb-10 font-medium ">{props.heading}</h4>
      
      <li className=" flex flex-col gap-10 items-center  ">
        {features?.map((features) => (
          <Link
            key={features?.id}
            href={features?.link}
            className={"text-white"}>
            {features?.title}

          </Link>
        ))
        }
      </li>
    </div>
    
  </div>
  </>
)
}

export default SiteMap;