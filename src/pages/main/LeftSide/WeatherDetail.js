import React, { useContext } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import temperature from '../../../assets/icons/temperature.svg';
import humidityIcon from '../../../assets/icons/humidity.svg'
import visibilityIcon from '../../../assets/icons/visibility.svg'
import windIcon from '../../../assets/icons/wind.svg'
import devPointIcon from '../../../assets/icons/dew-point.svg'


function WeatherDetail() {
    const { city, country, feelsLike, tempMin, tempMax, humidity, pressure, visibility, windSpeed, dewPoint } = useContext(FetchApiContext);
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
                                <img src={temperature} className='icons' />
                            </div>
                            <p>
                                High/Low
                            </p>
                        </div>
                        <p>
                            {tempMin}&deg;/{tempMax}&deg;
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={humidityIcon} className='icons' />
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
                                <img src={visibilityIcon} className='icons' />
                            </div>
                            <p>
                                Visibility
                            </p>
                        </div>
                        <p>
                            {visibility} km
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={windIcon} className='icons' />
                            </div>
                            <p>
                                Wind
                            </p>
                        </div>
                        <p>
                            {windSpeed} km/h
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div className='flex'>
                                <img src={devPointIcon} className='icons' />
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