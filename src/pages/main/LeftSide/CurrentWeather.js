import React, { useContext, useState } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import Hour from '../../../services/Utils/dateFormat/Hour'
import pin from '../../../assets/icons/pin/pin.svg'
function CurrentWeather() {
    const { weatherDescription, city, country, temp, createCityPinned } = useContext(FetchApiContext);
    return (
        <div className='flex w-full flex-col items-center mb-5 md:mb-0 md:w-1/2 md:justify-around h-full xl:w-5/12'>
            <div className='shadow-2xl w-3/6 h-full md:w-3/5 flex flex-col justify-center items-center glassmorphism'>
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