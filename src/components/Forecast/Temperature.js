import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";
export default function Temperature() {
  const { forecastTemp } = useContext(FetchApiContext);
  return (
    <div className="grid grid-flow-col text-center grid-cols-4">
      {forecastTemp.map((x, index) => {
        return (
          <div key={index}>
            <div className="text-3xl">{x}&deg;</div>
          </div>
        );
      })}
    </div>
  );
}
