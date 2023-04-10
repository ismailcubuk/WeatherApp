import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextprovider = ({ children }) => {
    const [name, setName] = useState('')
    const [cityName, setCityName] = useState('')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setCityName(name);
        }
    };
    const handleCity = (e) => {
        e.preventDefault()
        const searchName = e.target.value
        const upperCityName = searchName.charAt(0).toUpperCase() + searchName.slice(1).toLowerCase()
        setName(upperCityName)
    };
    const searchClick = (e) => {
        e.preventDefault()
        setCityName(name);
    }
    const data = {
        handleKeyDown,
        searchClick,
        handleCity,
        setCityName,
        cityName
    }
    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
