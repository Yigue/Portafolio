

import Skills from "./layout/skills";
import AboutMe from "./layout/AboutMe";
import Banner from "./layout/Banner";
import Proyectos from "./layout/Proyectos";
import Conctact from "./layout/Conctact";
import NavBar from "./layout/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  
 
  

  return (
    <div>
      <NavBar></NavBar>

      <main className=" bg-white dark:bg-neutral-900  text-black   dark:text-stone-300  font-mono  px-[5%]  md:pr-[13%] md:pl-[13%] 2xl:pr-[20%] 2xl:pl-[20%]">
        <Banner
         
        ></Banner>
        <AboutMe data-aos="fade-right"></AboutMe>
        <Skills data-aos="fade-right"></Skills>
        <Proyectos data-aos="fade-right"></Proyectos>
        <Conctact data-aos="fade-right"></Conctact>
      </main>
    </div>
  );
}

export default Home;
