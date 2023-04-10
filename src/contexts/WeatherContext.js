import { createContext } from "react";

const WeatherContext = createContext();

export const WeatherContextprovider = ({ children }) => {


    const data = {

    }
    return (
        <WeatherContext.Provider value={data}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
