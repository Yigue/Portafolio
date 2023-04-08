

import { useEffect } from "react";

function Conctact() {

  return (
    <div
      
      className="py-10 px-4 md:px-0 text-center  md:mt-10 "
      id="Contactame"
    >
      <h4 className="text-2xl md:text-3xl lg:text-[2.9rem] mb-8">
        Te interesa Colaborar?
      </h4>
      <p className=" text-sm lg:text-md md:w-1/2 lg:w-2/4 m-auto mb-10">
        Si tiene una aplicación que te interesa desarrollar, o un proyecto que
        necesita codificación, me encantaría ayudarte con él...
      </p>
      <div className=" w-full mt-10 md:w-full mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center pb-8 border-b ">
        <p className={`text-m mr-3 mb-4`}>
          <a
            className="dark:text-blue-500 text-blue-800 hover:text-xl"
            href="mailto:Riedelceo@gmail.com"
          >
            Riedelceo@gmail.com
          </a>
        </p>
        <div className="mt-3 sm:mt-0 flex justify-center md:block"></div>
      </div>
      <p className="text-xs mt-6">© 2023 Guillermo Riedel</p>
    </div>
  );
}

export default Conctact