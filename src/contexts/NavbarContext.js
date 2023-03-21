import { createContext, useState,useEffect } from "react";

const NavbarContext = createContext();

export const NavbarContextprovider = ({children}) => {
    const [localTime, setLocalTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            };
            const localTime = date.toLocaleTimeString([], options);
            setLocalTime(localTime);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const data = {
        localTime
    }
    return(
        <NavbarContext.Provider value={data}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarContext;