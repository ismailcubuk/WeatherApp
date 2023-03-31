import React, { useContext } from 'react'
import location from '../../assets/icons/pin/location.svg'
import FetchApiContext from '../../middleware/FetchApi'
export default function Location() {
    const { getLocationAndSetCityName } = useContext(FetchApiContext)
    return (
        <button className='glassmorphism opacity-40 hover:opacity-100' onClick={getLocationAndSetCityName}>
            <img src={location} alt='location' className='w-6 h-6 m-1 ' />
        </button>
    )
}
