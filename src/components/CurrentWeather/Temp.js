import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function Temp() {
  const { temp } = useContext(FetchApiContext);
  return (
    <div className="text-[6rem] font-black leading-none text-slate-950 drop-shadow-sm mbl:text-[7rem] md:text-[8rem]">
      {temp}&deg;
    </div>
  );
}
