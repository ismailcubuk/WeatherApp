import React, { useContext } from 'react'
import FetchApiContext from '../../middleware/FetchApi';

export default function LocationInfo() {
    const { city, country } = useContext(FetchApiContext);
    return (
        <p className=' text-sm font-semibold ml-2 pl-2'>Weather today in {city} , {country}</p>
    )
}
