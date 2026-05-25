import { createContext, useCallback, useContext, useEffect } from "react";
import SearchContext from "../contexts/SearchContext";
import { buildReverseGeocodeUrl } from "../Api";

const FetchLocation = createContext();

export const FetchLocationprovider = ({ children }) => {
  const { setCityName } = useContext(SearchContext);
  
  const getLocationAndSetCityName = useCallback(() => {
    if (!navigator.geolocation) {
      setCityName("Ankara");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const response = await fetch(buildReverseGeocodeUrl(latitude, longitude));
        const data = await response.json();

        if (response.ok && data?.city) {
          setCityName(data.city);
        } else {
          setCityName("Ankara");
        }
      } catch (error) {
        console.error(error);
        setCityName("Ankara");
      }
    }, () => {
      setCityName("Ankara");
    });
  }, [setCityName]);

  useEffect(() => {
    getLocationAndSetCityName();
  }, [getLocationAndSetCityName]);

  const data = {
    getLocationAndSetCityName,
  };
  
  return (
    <FetchLocation.Provider value={data}>{children}</FetchLocation.Provider>
  );
};

export default FetchLocation;
