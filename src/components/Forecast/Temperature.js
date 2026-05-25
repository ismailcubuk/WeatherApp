import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";
export default function Temperature() {
  const { forecastTemp } = useContext(FetchApiContext);
  return (
    <div className="grid grid-flow-col grid-cols-4 gap-2 text-center">
      {forecastTemp.map((x, index) => {
        return (
          <div className="rounded-lg bg-slate-100/32 py-3 shadow-inner shadow-slate-50/10" key={index}>
            <div className="text-3xl font-black text-slate-950">{x}&deg;</div>
          </div>
        );
      })}
    </div>
  );
}
