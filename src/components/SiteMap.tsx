
import React from "react";
import Link from "next/link";
import { features } from "@/constants";


const SiteMap = (props: any) => {
  return (
    <>

      <div className="text-white  flex flex-col items-center justify-center" >

        <h4 className="mb-10 font-medium ">{props.heading}</h4>

        <li className=" flex flex-col gap-10 items-center   ">
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

   
  </>
)
}

export default SiteMap;