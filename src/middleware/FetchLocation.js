import { createContext, useCallback, useContext, useEffect } from "react";
import SearchContext from "../contexts/SearchContext";

const FetchLocation = createContext();

export const FetchLocationprovider = ({ children }) => {
    const { setCityName } = useContext(SearchContext)
    const getLocationAndSetCityName = useCallback(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const data = await response.json();

            setCityName(data.city);
        });
    }, [setCityName]);

    useEffect(() => {
        getLocationAndSetCityName();
    }, [getLocationAndSetCityName]);



    const data = {
        getLocationAndSetCityName
    }
    return (
        <FetchLocation.Provider value={data}>
            {children}
        </FetchLocation.Provider>
    )
}

export default FetchLocation;
