import React, { useContext, useEffect, useRef, useState } from "react";
import pin from "../../assets/icons/pin/pin.svg";
import x from "../../assets/icons/pin/x.svg";
import arrowDown from "../../assets/icons/pin/arrowDown.svg";
import FetchApiContext from "../../middleware/FetchApi";
import PinCityContext from "../../contexts/PinCityContext";

export default function DropDown() {
  const { city } = useContext(FetchApiContext);
  const { deleteCityPinned, pinnedCity, PinnedCityLocation, setShowToast } =
    useContext(PinCityContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("screen and (min-width: 768px)").matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-11 w-52 rounded-lg">
      <span className="count-animation absolute -right-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-sky-50/40 bg-gradient-to-br from-slate-100/80 to-sky-200/70 text-sm font-black text-slate-900 shadow-md shadow-slate-950/15">
        <span
          className="flex justify-center"
          style={{ "--value": pinnedCity.length }}
        ></span>
      </span>
      <button
        type="button"
        className="flex h-full w-full items-center justify-between rounded-lg border border-sky-50/30 bg-slate-100/55 px-3 shadow-lg shadow-slate-950/10 backdrop-blur-xl transition hover:bg-slate-50/75"
        onClick={toggleMenu}
        ref={buttonRef}
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
      >
        <div className="w-10/12 truncate text-sm font-bold text-slate-950">
          {city || "Pinned"}
        </div>
        <img
          src={arrowDown}
          alt="search-icon"
          className={`h-5 w-5 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isMenuOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-lg border border-sky-50/35 bg-slate-100/82 p-2 shadow-2xl shadow-slate-950/25 backdrop-blur-2xl"
          ref={menuRef}
          role="menu"
        >
          <div className="flex items-center justify-between px-2 pb-2 text-xs font-black uppercase tracking-[0.08em] text-slate-500">
            <span>Pinned cities</span>
            <span>{pinnedCity.length}/3</span>
          </div>
          {pinnedCity.length === 0 && (
            <div className="rounded-lg bg-slate-900/5 px-3 py-4 text-sm font-semibold text-slate-600">
              No pinned city
            </div>
          )}
          {pinnedCity.map((city) => (
            <div className="group flex items-center rounded-lg transition hover:bg-slate-50/55" key={city.id}>
              <button
                type="button"
                className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5 text-sm font-bold text-slate-950"
                onClick={() => {
                  PinnedCityLocation(city.name);
                  setIsMenuOpen(false);
                }}
                role="menuitem"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-950 shadow-sm shadow-slate-950/20">
                  <img src={pin} alt="pin" className="h-4 w-4 invert" />
                </span>
                <div className="truncate">{city.name}</div>
              </button>
              <button
                type="button"
                className="mr-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg opacity-55 transition hover:bg-rose-100/45 hover:opacity-100"
                onClick={() => {
                  deleteCityPinned(city.id);
                  setShowToast(false);
                  setIsMenuOpen(false);
                }}
                aria-label={`Remove ${city.name}`}
              >
                <img src={x} alt="pin" className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
