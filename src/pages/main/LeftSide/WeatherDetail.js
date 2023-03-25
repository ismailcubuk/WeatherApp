import React, { useContext } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'

function WeatherDetail() {
    const { city, country, feelsLike, tempMin, tempMax, humidity, pressure, visibility,windSpeed,dewPoint } = useContext(FetchApiContext);
    return (
        <div className='pl-10 pr-10'>
            <p className='text-sm font-semibold'>Weather today in {city} , {country}</p>

            <div className='flex justify-between'>
                <div>
                    <div className='text-4xl font-semibold'> {feelsLike}&deg; </div>
                    <p className='text-sm text-gray-500'>feels like</p>
                </div>
                <div>
                    sun timer
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='border-2 border-blue-600 w-6/12'>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                High/Low
                            </p>
                        </div>
                        <p>
                            {tempMin}/{tempMax}
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                Humidity
                            </p>
                        </div>
                        <p>
                            {humidity}%
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                Pressure
                            </p>
                        </div>
                        <p>
                            {pressure}mb
                        </p>
                    </div>
                    
                </div>
                <div className='border-2 border-black w-6/12'>
                <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                visibility
                            </p>
                        </div>
                        <p>
                            {visibility}
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                Wind
                            </p>
                        </div>
                        <p>
                            {windSpeed}km/h
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                Dew Point
                            </p>
                        </div>
                        <p>
                            {dewPoint}&deg;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail