import React from 'react'
import Image from "next/image";
import profileJpg from "../../public/perfil.jpg";


import { useEffect } from "react";

function AboutMe() {


  return (
    <div
      id="SobreMi"
      
      className=" flex flex-col  shadow-2xl shadow-inherit "
    >
      <div className="w-full flex flex-row  text-4xl ">
        <h1>01.</h1>
        <h1>Sobre Mi </h1>
      </div>
      <div className="flex  flex-col lg:flex-row ">
        <div className="flex box-content pt-10  ">
          Hola mi nombre es Guillermo,tengo 18 años soy un recien egresado de la
          escuela tecnica N°3 recibiendo el titulo de Tecnico informatico
          personal y profesional y estoy empezando la carreara de ingenieria en
          sistemas de la UTN. Busco aprender,desarrollarme y crecer tanto
          personal como profesional como un Full-Stack Developer Actualmente
          tengo amplio y variado conocimientos de programacion gracias al
          aprendizaje que tuve en el colegio y de forma autodicta actualmente mi
          tecnologias mas usadas son Node & React con preferias usando
          TypeScript. Tengo muchas facilidad y ganas de seguir ampliando mis
          conocimientos
        </div>
        <div className="mx-auto w-80 h-70 pt-10 md:pt-0  md:max-lg:w-[30rem] lg:w-[200rem] md:pr-[5%]  md:pl-[5%]">
          <Image className="  rounded-xl " src={profileJpg} alt="perfil" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe