import React from "react";

import Image from "next/image";

import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

interface Props {
  id: number;
  image: String;
  title: String;
  descript: String;
  href: URL;
  tecnologias: [String?, String?, String?, String?, String?];
}
function CardProyect({
  id,
  image,
  title,
  descript,
  href,
  tecnologias,
}: Props) {
  return (
    <>
      <div
        key={id}
        className=" flex flex-col lg:flex-row pl-[5%]   z-10 pr-[5%] mt-[5%] pt-[3%] rounded-xl  dark:bg-stone-800 bg-gray-200 font-mono  "
      >
        <div className="  dark:text-white text-black absolute lg:static md:max-lg:mr-[10%]">
          <div className="grid grid-cols-4">
            <h1 className=" text-3xl col-span-3 ">{title}.</h1>
            <Link href={href} >
              <CiShare1 className="h-[100%] w-[33%]  md:h-[80%]  col-span-1 "></CiShare1>
            </Link>
          </div>
          <div className="mt-[3%]  pl-[3%] pr-[10%]  rounded-3xl">
            <h1>{descript}</h1>
            <br />
          </div>

          <div className="flex flex-row gap-[3%] ml-[3%] font-mono  lg:max-xl:pb-5 dark:text-stone-500  text-stone-400   ">
            {tecnologias.map((e,index) => {
              return <p key={index}>{e}</p>;
            })}
          </div>
        </div>
        <div className=" flex items-center  justify-center top-0 relative  opacity-20 lg:static lg:opacity-100 ">
          <img className=" max-w-xs  max-h-xs   " src={`/${image}`} alt="" />
        </div>
      </div>
    </>
  );
}

export default CardProyect;
