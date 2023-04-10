import { createContext, useContext } from "react";
import SearchContext from "./SearchContext";

const PinCityContext = createContext();

export const PinCityContextprovider = ({ children }) => {
    const { } = useContext(SearchContext)

    const data = {

    }
    return (
        <PinCityContext.Provider value={data}>
            {children}
        </PinCityContext.Provider>
    )
}

export default PinCityContext;
