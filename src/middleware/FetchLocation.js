import { createContext, useCallback, useContext, useEffect } from "react";
import SearchContext from "../contexts/SearchContext";
import { LocationApiCall } from "../Api";

const FetchLocation = createContext();

export const FetchLocationprovider = ({ children }) => {
  const { setCityName } = useContext(SearchContext);
  
  // Define the function that gets the location and sets the city name
  const getLocationAndSetCityName = useCallback(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const response = await fetch(
       LocationApiCall + `latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();

      if (data && data.city) {
        setCityName(data.city);
      } else {
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
