import React, { useContext } from 'react'
import FetchApiContext from '../../middleware/FetchApi';

export default function WeatherDescription() {
    const { weatherDescription } = useContext(FetchApiContext);
    return (
        <div className='text-3xl font-semibold text-center'>
            {weatherDescription}
        </div>
    )
}
