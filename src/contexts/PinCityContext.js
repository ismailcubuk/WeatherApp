import { createContext, useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";

const PinCityContext = createContext();

export const PinCityContextprovider = ({ children }) => {
  const { cityName, setCityName } = useContext(SearchContext);
  const [pinnedCity, setPinnedCity] = useState([]);
  const [shows, setShows] = useState(false);
  const [shows2, setShows2] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  const KEY_PINNED_CITY = "pinnedCity";
  useEffect(() => {
    const savedPinnedCity = localStorage.getItem(KEY_PINNED_CITY);
    if (savedPinnedCity) {
      setPinnedCity(JSON.parse(savedPinnedCity));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_PINNED_CITY, JSON.stringify(pinnedCity));
  }, [pinnedCity]);

  const createCityPinned = () => {
    const newCityName = cityName;
    if (pinnedCity.length < 3) {
      if (!pinnedCity.some((city) => city.name === newCityName || newCityName === "")) {
        const newCity = {
          id: Date.now(),
          name: newCityName,
        };
        setShows(true);
        setPinnedCity([...pinnedCity, newCity]);
      }
    }else if(pinnedCity.length === 3){
      if (pinnedCity.some((city) => city.name !== newCityName)){
        setShows2(true);
      }
    }
  };

  const deleteCityPinned = (id) => {
    const updatePinnedCity = pinnedCity.filter((city) => city.id !== id);
    setPinnedCity(updatePinnedCity);
  };

  const PinnedCityLocation = (id) => {
    setCityName(id);
  };

  const data = {
    showToast2,
    setShows2,
    setShowToast2,
    shows2,
    PinnedCityLocation,
    deleteCityPinned,
    pinnedCity,
    createCityPinned,
    shows,
    setShowToast,
    showToast,
  };
  return (
    <PinCityContext.Provider value={data}>{children}</PinCityContext.Provider>
  );
};

export default PinCityContext;
