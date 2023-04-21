import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function Temp() {
  const { temp } = useContext(FetchApiContext);
  return <div className="text-8xl">{temp}&deg;</div>;
}
