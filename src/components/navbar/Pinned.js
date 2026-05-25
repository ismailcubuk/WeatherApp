import React, { useContext } from "react";
import pin from "../../assets/icons/pin/pin.svg";
import x from "../../assets/icons/pin/x.svg";
import PinCityContext from "../../contexts/PinCityContext";

export default function Pinned() {
  const { deleteCityPinned, pinnedCity, PinnedCityLocation, setShowToast } =
    useContext(PinCityContext);
  return (
    <div className="flex min-w-0 items-center gap-2 border-none">
      {pinnedCity.map((city) => (
        <div
          className="flex h-11 max-w-[190px] items-center rounded-lg border border-white/45 bg-white/65 px-2 shadow-lg shadow-slate-950/10 backdrop-blur-xl transition hover:bg-white/85"
          key={city.id}
        >
          <button
            className="flex min-w-0 items-center text-sm font-semibold text-slate-900"
            onClick={() => PinnedCityLocation(city.name)}
          >
            <img src={pin} alt="pin" className="mr-1 h-5 w-5 flex-shrink-0" />
            <div className="truncate">{city.name}</div>
          </button>
          <button
            className="ml-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full opacity-55 transition hover:bg-slate-900/10 hover:opacity-90"
            onClick={() => {
              deleteCityPinned(city.id);
              setShowToast(false);
            }}
            aria-label={`Remove ${city.name}`}
          >
            <img src={x} alt="pin" className="h-5 w-5 p-0.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
