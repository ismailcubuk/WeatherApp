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
      className="glassmorphism-btn mb-5 flex max-w-full items-center justify-center rounded-lg border border-white/45 bg-white/55 px-4 py-2 text-base font-bold text-slate-950 shadow-lg shadow-slate-950/10 transition disabled:cursor-not-allowed disabled:opacity-55 mbl:text-lg"
      onClick={createCityPinned}
      disabled={!city}
    >
      <img src={pin} alt="pin" className="icons flex-shrink-0" />
      <div className="truncate">{location || "Select a city"}</div>
    </button>
    </div>
  );
}
