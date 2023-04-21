import React, { useContext } from 'react'
import pressures from '../../assets/icons/forecastDetail/pressures.svg'
import FetchApiContext from '../../middleware/FetchApi';

export default function Pressure() {
    const { pressure } = useContext(FetchApiContext);
    return (
        <div className='weather-line'>
        <div className='flex'>
            <div>
                <img src={pressures} alt='pressureIcon' className='icons' />
            </div>
            <p>
                Pressure
            </p>
        </div>
        <p>
            {pressure}mb
        </p>
    </div>
    )
}
