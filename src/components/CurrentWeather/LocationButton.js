import React, { useContext } from "react";
import pin from "../../assets/icons/pin/pin.svg";
import PinCityContext from "../../contexts/PinCityContext";
import FetchApiContext from "../../middleware/FetchApi";
import FullCityToast from "../../pages/Toast/FullCityToast";
export default function LocationButton() {
  const { city, country } = useContext(FetchApiContext);
  const { createCityPinned } = useContext(PinCityContext);
  return (
    <div>
      <FullCityToast/>
      <button
      className="text-2xl font-semibold flex mt-10 items-center"
      onClick={createCityPinned}
    >
      <img src={pin} alt="pin" className="icons" />
      {city}, {country}
    </button>
    </div>
  );
}
