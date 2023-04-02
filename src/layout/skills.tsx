import { Tab } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiTypescript,
  SiTailwindcss,
  
  SiMaterialdesign,
  SiNextdotjs,
  SiPhp,
  SiVite,
  SiTestinglibrary,
  SiJson,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNestjs,
} from "react-icons/si";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

export default function Skills() {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       easing: "ease",
       once: true,
       mirror: false,
     });
   }, []);
  return (
    <div
      id="MisHabilidades"
      data-aos="fade-left"
      className=" flex  flex-col mt-24  font-mono "
    >
      <div className=" flex flex-row  text-4xl ">
        <h1>02.</h1>
        <h1>Mis Habilidades </h1>
      </div>
      <h1 className="pt-10 ">
        Soy desarrolador FullStack, especializandome en TypeScript, JavaScript
        (ES6+) para desarrollar de FrontEnd con ReactJs y NextJS, Y
        desarrollando BackEnd en NodeJs con framework como Express y NestJS
      </h1>
      <Tab.Group>
        <Tab.List className="flex  w-full  mt-10  grid-rows gap-2 pr-5 pl-5 lg:p-0 lg:gap-10">
          <Tab
            className={({ selected }) =>
              selected
                ? " dark:bg-zinc-700 bg-gray-300 w-full h-full  rounded-xl font-mono text-xl"
                : "dark:bg-stone-800 bg-gray-200 w-full h-full  rounded-xl font-mono text-xl"
            }
            // className="w-full h-full bg-stone-800 rounded-xl font-mono text-xl  focus:bg-red-900"
            key="FrontEnd"
          >
            FrontEnd
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? " dark:bg-zinc-700 bg-gray-300 w-full h-full  rounded-xl font-mono text-xl"
                : "dark:bg-stone-800 bg-gray-200 w-full h-full  rounded-xl font-mono text-xl"
            }
            key="Tools"
          >
            Tools
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? " dark:bg-zinc-700 bg-gray-300 w-full h-full  rounded-xl font-mono text-xl"
                : "dark:bg-stone-800 bg-gray-200 w-full h-full  rounded-xl font-mono text-xl"
            }
            key="BackEnd"
          >
            BackEnd
          </Tab>
        </Tab.List>

        <Tab.Panels className="flex  lg:hidden flex-col w-full   p-[3.3%]  ">
          <Tab.Panel
            key="FrontEnd"
            className="grid grid-cols-2 gap-y-16 gap p-10 w-full md:w-[60%]  items-center self-center justify-center ml-32 mr-32 bg-gray-200 dark:bg-stone-800 rounded-3xl"
          >
            <div className=" flex flex-col items-center justify-center hover:scale-125  hover:text-orange-500 ">
              <AiFillHtml5 className="h-[70%] w-[35%] "></AiFillHtml5>
              <div className="">HTMl</div>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600 ">
              <DiCss3 className="h-[70%] w-[35%] "></DiCss3>
              CSS
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-500 ">
              <SiTypescript className="h-[70%] w-[30%] "></SiTypescript>
              TypeScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400 ">
              <IoLogoJavascript className="h-[70%] w-[30%] "></IoLogoJavascript>
              JavaScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-400">
              <DiReact className="h-[70%] w-[35%] "></DiReact>
              React
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white">
              <SiNextdotjs className="h-[70%] w-[30%] "></SiNextdotjs>
              Next.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-400">
              <SiMaterialdesign className="h-[70%] w-[30%] "></SiMaterialdesign>
              Material UI
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-500">
              <SiTailwindcss className="h-[70%] w-[30%] "></SiTailwindcss>
              Tailwind CSS
            </div>
          </Tab.Panel>
          <Tab.Panel
            key="Tools"
            className="grid grid-cols-2 gap-y-16 gap p-10 w-full  md:w-[60%]  items-center self-center justify-center ml-32 mr-32 bg-gray-200 dark:bg-stone-800 rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600 ">
              <DiGit className="h-[70%] w-[30%] "></DiGit>
              Git
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-500">
              <AiFillGithub className="h-[70%] w-[35%] "></AiFillGithub>
              GitHub
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400">
              <SiVite className="h-[70%] w-[30%] "></SiVite>
              ViteJs
            </div>
            <div className="flex flex-col items-center justify-center  text-center hover:scale-125  hover:text-red-600">
              <SiTestinglibrary className="h-[70%] w-[30%] "></SiTestinglibrary>
              Testing librarys
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-400">
              <SiJson className="h-[70%] w-[30%] "></SiJson>
              Json
            </div>
          </Tab.Panel>
          <Tab.Panel
            key="BackEnd"
            className="grid grid-cols-2 gap-y-16 gap p-10 w-full md:w-[60%]   items-center self-center justify-center ml-32 mr-32 bg-gray-200 dark:bg-stone-800 rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-lime-500  ">
              <DiNodejsSmall className="h-[70%] w-[35%] "></DiNodejsSmall>
              Node.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white  ">
              <SiExpress className="h-[70%] w-[35%] "></SiExpress>
              Express
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600   ">
              <SiPhp className="h-[70%] w-[35%] "></SiPhp>
              PHP
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600  ">
              <SiMysql className="h-[70%] w-[35%] "></SiMysql>
              Mysql
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-green-600  ">
              <SiMongodb className="h-[70%] w-[35%] "></SiMongodb>
              MongoDB
            </div>
          </Tab.Panel>
        </Tab.Panels>

        <div className="hidden  lg:flex  flex-row  mt-10 mr-5ml-5   gap-6 justify-center">
          <section className=" grid grid-cols-2 gap-y-16 p-3 w-full  items-center self-center justify-center  bg-gray-200 dark:bg-stone-800 rounded-3xl">
            <div className=" flex flex-col items-center    justify-center hover:scale-125  hover:text-orange-500 ">
              <AiFillHtml5 className="h-[70%] w-[35%] "></AiFillHtml5>
              <div className="">HTMl</div>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600 ">
              <DiCss3 className="h-[70%] w-[35%] "></DiCss3>
              CSS
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-500 ">
              <SiTypescript className="h-[70%] w-[30%] "></SiTypescript>
              TypeScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400 ">
              <IoLogoJavascript className="h-[70%] w-[30%] "></IoLogoJavascript>
              JavaScript
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-400">
              <DiReact className="h-[70%] w-[35%] "></DiReact>
              React
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white">
              <SiNextdotjs className="h-[70%] w-[30%] "></SiNextdotjs>
              Next.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-400">
              <SiMaterialdesign className="h-[70%] w-[30%] "></SiMaterialdesign>
              Material UI
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-cyan-500">
              <SiTailwindcss className="h-[70%] w-[30%] "></SiTailwindcss>
              Tailwind CSS
            </div>
          </section>
          <section className=" grid grid-cols-2 gap-y-16 p-3   w-full   bg-gray-200 dark:bg-stone-800 rounded-3xl">
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600 ">
              <DiGit className="h-[70%] w-[30%] "></DiGit>
              Git
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-500">
              <AiFillGithub className="h-[70%] w-[35%] "></AiFillGithub>
              GitHub
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-yellow-400">
              <SiVite className="h-[70%] w-[30%] "></SiVite>
              ViteJs
            </div>
            <div className="flex flex-col text-center items-center justify-center hover:scale-125  hover:text-red-600">
              <SiTestinglibrary className="h-[70%] w-[30%] "></SiTestinglibrary>
              Testing librarys
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-gray-400">
              <SiJson className="h-[70%] w-[30%] "></SiJson>
              Json
            </div>
          </section>
          <section className=" grid grid-cols-2 gap-y-16 p-3  w-full   bg-gray-200 dark:bg-stone-800 rounded-3xl">
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-lime-500  ">
              <DiNodejsSmall className="h-[70%] w-[35%] "></DiNodejsSmall>
              Node.js
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-white  ">
              <SiExpress className="h-[70%] w-[35%] "></SiExpress>
              Express
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-blue-600   ">
              <SiPhp className="h-[70%] w-[35%] "></SiPhp>
              PHP
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-orange-600  ">
              <SiMysql className="h-[70%] w-[35%] "></SiMysql>
              Mysql
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-125  hover:text-green-600  ">
              <SiMongodb className="h-[70%] w-[35%] "></SiMongodb>
              MongoDB
            </div>
          </section>
        </div>
      </Tab.Group>
    </div>
  );
}
