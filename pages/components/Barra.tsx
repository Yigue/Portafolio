import React from "react";
interface props {
  name: String;
  porce: number;
}
function Barra({ name, porce }: props) {
  return (
    <div className="bg-stone-600 flex  flex-row w-full h-10 rounded-xl ">
      <div className="w-[15%] rounded-l-xl bg-stone-700 flex items-center justify-center">
        {name}
      </div>
      <div className="  w-[85%]   rounded-r-xl ">
        <div
          className={` flex items-center rounded-r-xl  justify-end bg-stone-800 h-full w-[${porce}%]`}
        >
          <div className="absolute right-[23.5%] ">{porce}%</div>
        </div>
      </div>
    </div>
  );
}

export default Barra;
