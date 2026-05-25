import React, { useContext } from "react";
import pin from "../../assets/icons/pin/pin.svg";
import PinCityContext from "../../contexts/PinCityContext";
import FetchApiContext from "../../middleware/FetchApi";
import FullCityToast from "../../pages/Toast/FullCityToast";
export default function LocationButton() {
  const { city, country } = useContext(FetchApiContext);
  const { createCityPinned } = useContext(PinCityContext);
  const location = [city, country].filter(Boolean).join(", ");

  return (
    <div>
      <FullCityToast/>
      <button
      className="text-2xl glassmorphism p-2 glassmorphism-btn font-semibold flex mt-10 justify-center items-center "
      onClick={createCityPinned}
      disabled={!city}
    >
      <img src={pin} alt="pin" className="icons" />
      <div className="flex-shrink-0">{location || "Select a city"}</div>
    </button>
    </div>
  );
}
