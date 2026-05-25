import { createContext, useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";

const PinCityContext = createContext();

export const PinCityContextprovider = ({ children }) => {
  const { cityName, setCityName } = useContext(SearchContext);
  const [pinnedCity, setPinnedCity] = useState([]);
  const [shows, setShows] = useState(false);
  const [shows2, setShows2] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  const KEY_PINNED_CITY = "pinnedCity";
  useEffect(() => {
    const savedPinnedCity = localStorage.getItem(KEY_PINNED_CITY);
    if (!savedPinnedCity) {
      return;
    }

    try {
      const parsedPinnedCity = JSON.parse(savedPinnedCity);
      setPinnedCity(Array.isArray(parsedPinnedCity) ? parsedPinnedCity : []);
    } catch (error) {
      console.error(error);
      localStorage.removeItem(KEY_PINNED_CITY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_PINNED_CITY, JSON.stringify(pinnedCity));
  }, [pinnedCity]);

  const createCityPinned = () => {
    const newCityName = cityName.trim();

    if (!newCityName) {
      return;
    }

    setPinnedCity((currentPinnedCity) => {
      if (currentPinnedCity.some((city) => city.name === newCityName)) {
        return currentPinnedCity;
      }

      if (currentPinnedCity.length >= 3) {
        setShows2(true);
        return currentPinnedCity;
      }

      setShows(true);
      return [
        ...currentPinnedCity,
        {
          id: Date.now(),
          name: newCityName,
        },
      ];
    });
  };

  const deleteCityPinned = (id) => {
    const updatePinnedCity = pinnedCity.filter((city) => city.id !== id);
    setPinnedCity(updatePinnedCity);
  };

  const PinnedCityLocation = (id) => {
    setCityName(id);
  };

  const data = {
    cityName,
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
