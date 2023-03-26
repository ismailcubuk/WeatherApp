import React, { useContext } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import Hour from '../../../services/Utils/dateFormat/Hour'

function CurrentWeather() {
    const { weatherDescription, city, country, temp } = useContext(FetchApiContext);
    return (
        <div className='w-3/6 flex flex-col justify-center items-center'>
            <div className='text-lg font-semibold'> {city} , {country} </div>
            <div className='text-sm mb-2 flex text-gray-500'>as of <Hour /></div>
            <p className='text-6xl mb-5'> {temp}&deg;</p>
            <div className='text-3xl font-semibold'> {weatherDescription} </div>
        </div>
    )
}

export default CurrentWeather