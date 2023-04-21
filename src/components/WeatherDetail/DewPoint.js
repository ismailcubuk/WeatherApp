import React, { useContext } from 'react'
import devPointIcon from '../../assets/icons/forecastDetail/dew-point.svg'
import FetchApiContext from '../../middleware/FetchApi';
export default function DewPoint() {
    const { dewPoint } = useContext(FetchApiContext);
    return (
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
    )
}
