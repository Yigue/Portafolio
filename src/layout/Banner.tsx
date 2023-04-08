import React from 'react'
import Icon from "@mui/material/Icon";
import Image from "next/image";
import Iconhtml from "../../public/html.svg";
import Typewriter from "typewriter-effect";


import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from 'next/link';


function Banner() {
  return (
    <section className="min-h-screen pt-[25vh] lg:pt-[30vh]">
      <div className="flex flex-col justify-center p-auto m-auto">
        <h1 className="text-lg animate__animated animate__fadeIn animate__delay-1s ">
          Hola,Mi nombre es
        </h1>
        <h1 className="animate__animated animate__fadeIn animate__delay-1s  text-[5rem] leading-none">
          Guillermo Riedel.
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Guillermo Riedel.").start();
            }}
          /> */}
        </h1>
        <h1 className=" text-4xl animate__animated animate__fadeIn animate__delay-1s ">
          Full-Stack Developer.
        </h1>
        <h2 className="pt-5 whitespace-normal xl:pr-[5  %]  animate__animated animate__fadeIn animate__delay-1s ">
          Soy egresado de la E.E.S.T N°3,como Tecnico informatico personal y
          profesiona,en busca de formarme y desarrollarme profesional y
          personalmente,con muchas ganas de apreder
        </h2>

        <div className="flex  items-center   gap-6  mt-10 animate__animated animate__fadeIn animate__delay-1s  ">
          <Link href="https://github.com/Yigue">
            <GitHubIcon className="dark:text-stone-400  text-black text-5xl" />
          </Link>
          <Link href="https://www.instagram.com/guilleriedel/">
            <InstagramIcon className="dark:text-stone-400 text-black text-5xl" />
          </Link>
          <TwitterIcon className="dark:text-stone-400 text-black text-5xl" />
          <Link href="https://www.linkedin.com/in/guillermo-riedel-1648661ba/">
            <LinkedInIcon className="dark:text-stone-400 text-black text-5xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner
