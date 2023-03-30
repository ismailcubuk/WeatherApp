import React, { useContext } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import temperature from '../../../assets/icons/forecastDetail/temperature.svg';
import humidityIcon from '../../../assets/icons/forecastDetail/humidity.svg'
import visibilityIcon from '../../../assets/icons/forecastDetail/visibility.svg'
import windIcon from '../../../assets/icons/forecastDetail/wind.svg'
import devPointIcon from '../../../assets/icons/forecastDetail/dew-point.svg'


function WeatherDetail() {
    const { city, country, feelsLike, tempMin, tempMax, humidity, pressure, visibility, windSpeed, dewPoint } = useContext(FetchApiContext);
    return (
        <div className='w-2/6 glassmorphism' >
            <p className='text-sm font-semibold ml-2 pl-2'>Weather today in {city} , {country}</p>

            <div className='flex justify-between ml-2 pl-2 mr-2 pr-2'>
                <div>
                    <div className='text-4xl font-semibold'> {feelsLike}&deg; </div>
                    <p className='text-sm text-gray-500'>feels like</p>
                </div>
                <div>
                    sun timer
                </div>
            </div>

            <div className='flex flex-row'>
                <div className=' w-6/12'>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={temperature} alt='temperature' className='icons' />
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
                                <img src={humidityIcon} alt='humidityIcon' className='icons' />
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
                <div className='w-6/12'>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={visibilityIcon} alt='visibilityIcon' className='icons' />
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
                                <img src={windIcon} alt='windIcon' className='icons' />
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
                                <img src={devPointIcon} alt='devPointIcon' className='icons' />
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