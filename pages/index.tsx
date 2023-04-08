import Skills from "../src/layout/skills";
import AboutMe from "../src/layout/AboutMe";
import Banner from "../src/layout/Banner";
import Proyectos from "../src/layout/Proyectos";
import Conctact from "../src/layout/Conctact";
import NavBar from "../src/layout/NavBar";


import { useEffect } from "react";

function Home() {

  return (
    <section className=" max-sm:flex  max-sm:h-full max-sm:w-full  ">
      <NavBar></NavBar>

      <main className="  bg-white dark:bg-neutral-900  text-black   dark:text-stone-300  font-mono px-[5%]  md:px-[13%]  2xl:px-[20%] ">
  
          <Banner></Banner>
    
  
          <AboutMe></AboutMe>
  
      
          <Skills></Skills>
    
          <Proyectos></Proyectos>
 
          <Conctact></Conctact>
       
      </main>
    </section>
  );
}

export default Home;
