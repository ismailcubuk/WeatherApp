import React, { useContext, useState } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import Hour from '../../../services/Utils/dateFormat/Hour'
import pin from '../../../assets/icons/pin/pin.svg'
function CurrentWeather() {
    const { weatherDescription, city, country, temp, createCityPinned } = useContext(FetchApiContext);
    return (
        <div className='flex items-center justify-center border-2 w-full sm:w-3/6'>
            <div className='glassmorphism flex flex-col m-5 justify-center items-center w-3/4 h-3/4'>
                <button className='text-2xl font-semibold flex items-center' onClick={createCityPinned}>
                    <img src={pin} alt='pin' className='icons' />
                    {city}, {country}
                </button>
                <Hour />
                <div className='text-6xl'> {temp}&deg;</div>
                <div className='text-3xl font-semibold'> {weatherDescription} </div>
            </div>
        </div>
    )
}

export default CurrentWeather