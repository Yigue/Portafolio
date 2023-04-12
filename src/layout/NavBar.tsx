
import React from "react";

import Image from "next/image";
import { useState, useCallback, useEffect, useContext } from "react";
import { ModeContext } from "../context/ModeContext";

import { HiOutlineSun, HiMoon, HiSun } from "react-icons/hi";
import Link from "next/link";
const Navbar = () => {
  const { changeMode, mode } = useContext(ModeContext);

  const [isOpen, setIsOpen] = useState(false);

  const escFunction = useCallback(
    (event: any) => {
      if (event.keyCode === 27) {
        if (isOpen === true) {
          setIsOpen(!isOpen);
        } else {
          setIsOpen(isOpen);
        }
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <header className=" animate__animated animate__bounce animate__fadeInDown    fixed top-0 flex z-20 flex-row w-[100%] bg-white  shadow-gray-200 dark:shadow-stone-900 shadow-md dark:selection:text-stone-800 dark:text-white text-black dark:bg-stone-900 ">
      <div className="flex img cursor-pointer px-1 py-1">
        <Image
          src={`/${mode ? "Rw.png" : "r.png"}`}
          alt="r"
          width={50}
          height={50}
        />
      </div>

      <div className="border absolute overflow-hidden mt-3 py-[14.5px] border-stone-600  left-12 ml-3"></div>

      <div className="navButtons hidden md:flex ml-5">
        <ul className="flex  flex-row text-[16px] font-mono space-x-4 content-center items-center ">
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-white font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#SobreMi"> Sobre Mi →</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#MisHabilidades">Mis Habilidades→</Link>
          </li>

          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#Proyectos"> Proyectos → </Link>
          </li>
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#Contactame">Contactame → </Link>
          </li>
        </ul>
      </div>

      <div className="navIcons absolute    space-x-7 right-0 mt-2 mr-3">
        {/* <div className="mborder  border transform py-[13px] absolute z-[-1] mt-[6px] border-black dark:hidden"></div> */}
        <div
          className={`ICONOMENU hammoblie flex 
        ${isOpen ? "mt-3.5" : "mt-[10px]"}
         md:hidden`}
        >
          <div
            className="z-50 flex  w-7 h-5 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span
              className={`h-1 w-full dark:bg-white bg-black  rounded-lg   duration-200 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />

            <span
              className={`h-1 w-full dark:bg-white  bg-black rounded-lg   duration-200  ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </div>
        </div>

        <div
          className={` MENUU md:hidden
            absolute z-20  l-0 top-[50px] overflow-x-hidden left-0 h-[100rem] dark:bg-stone-900 bg-white  ${
              !isOpen
                ? "ease-in-out"
                : "-translate-x-[260px] duration-[200ms]  ease-in w-screen drop-shadow-sm/2 dark:bg-stone-900 bg-white "
            }
            ${
              isOpen
                ? "-translate-x-[260px] duration-200 ease-in-out"
                : "-translate-x-0 w-0 ease-in-out transition-all   duration-500 left-0 dark:bg-stone-900 bg-white "
            }
            `}
        >
          <div className="container flex  flex-col">
            <div className="mt-6 flex flex-col  cursor-pointer absolute left-[120px]">
              <Image
                src={`/${mode ? "Rw.png" : "r.png"}`}
                alt="r"
                width={70}
                height={100}
              />
            </div>

            <div className="textIcons mt-2 space-y-4 left-[90px] font-medium text-[18px] top-[90px] absolute">
              <div className=" dark:hover:bg-white dark:hover:text-black flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text dark:text-white dark:bg-stone-900  hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#SobreMi">Sobre Mi</Link>
              </div>
              <span className="dark:hover:bg-white dark:hover:text-black flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text dark:text-white dark:bg-stone-900 hover:text-white hover:bg-stone-900  rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#MisHabilidades">Mis Habilidades</Link>
              </span>
              <span className=" dark:hover:bg-white dark:hover:text-black flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text dark:text-white dark:bg-stone-900 hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#Proyectos">Proyectos </Link>
              </span>

              <span className=" dark:hover:bg-white dark:hover:text-black flex duration-300 ease-in-out transition  justify-center text-center flex-col px-1 py-1 hover:text-cyan-text dark:text-white dark:bg-stone-900 hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#Contactame">Contactame </Link>
              </span>
              <button
                className="flex pl-14 "
                onClick={() => {
                  changeMode();
                }}
              >
                <HiMoon className=" hidden  dark:inline	 dark:hover:bg-white dark:hover:text-black text-3xl rounded-full" />
                <HiSun className="incline  dark:hidden   hover:bg-stone-800 hover:text-white text-3xl rounded-full " />
              </button>
            </div>

            <div className="sBorder absolute border left-[52px] flex justify-center border-stone-300/90 top-[375px] px-[100px]"></div>
          </div>
        </div>

        <button
          className="hidden md:flex pr-[5vh] pt-1"
          onClick={() => {
            changeMode();
          }}
        >
          <HiMoon className=" hidden  dark:inline	 dark:hover:bg-white dark:hover:text-black text-3xl rounded-full" />
          <HiSun className="incline  dark:hidden   hover:bg-stone-800 hover:text-white text-3xl rounded-full " />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
