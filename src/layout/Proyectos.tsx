import { Card } from '@mui/material';
import CardProyect from '../components/CardProyect';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Proyectos() {
 const tecSpotruck=["PHP","HTML","CSS","Materialize","JavaScript"]
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
      id="Proyectos"
      data-aos="fade-right"
      className="mt-[20%] mb-[20%] flex flex-col"
    >
      <div className="w-full flex flex-row  text-4xl ">
        <h1>03.</h1>
        <h1>Mis Proyectos</h1>
      </div>
      <CardProyect
        id={10}
        title="Spotruck"
        image="Spotruck.jpg"
        descript="Spotruck fue mi proyecto de tesis para egresarme, es una aplicación de publicación y licitación de logística que
          busca ser el intermediario entre camioneros y entidades que necesitan
          logistica, partes para facilitar la comunicación, mejorar la
          competitividad y tiempo de búsquedas."
        href={new URL("/", "http://www.spotruck.com.ar")}
        tecnologias={["PHP", "HTML", "CSS", "Materialize", "JavaScript"]}
      ></CardProyect>
    </div>
  );
}
export default Proyectos