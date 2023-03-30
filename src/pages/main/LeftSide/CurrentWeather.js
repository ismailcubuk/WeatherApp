import React, { useContext, useState } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import Hour from '../../../services/Utils/dateFormat/Hour'
import pin from '../../../assets/icons/pin/pin.svg'
function CurrentWeather() {
    const { weatherDescription, city, country, temp, createCityPinned } = useContext(FetchApiContext);
    return (
        <div className='w-3/6 flex flex-col justify-center items-center'>
            <button className='text-2xl font-semibold flex items-center' onClick={createCityPinned}>
                <img src={pin} alt='pin' className='icons' />
                {city}, {country}
            </button>
            <Hour />
            <div className='text-9xl pt-5 pb-7'> {temp}&deg;</div>
            <div className='text-4xl font-semibold'> {weatherDescription} </div>
        </div>
    )
}

export default CurrentWeather