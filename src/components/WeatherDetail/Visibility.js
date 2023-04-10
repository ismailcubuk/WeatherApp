import React, { useContext, useEffect } from 'react'
import visibilityIcon from '../../assets/icons/forecastDetail/visibility.svg'
import FetchApiContext from '../../middleware/FetchApi'
import TypingAnimation from './TypingAnimation';

export default function Visibility() {
    const { visibility, setWeatherCondition } = useContext(FetchApiContext);

    useEffect(() => {
        if (visibility >= 8) {
            setWeatherCondition('Good');
        } else if (visibility > 5 && visibility < 8) {
            setWeatherCondition('Moderate');
        } else if (visibility > 1.6 && visibility < 5) {
            setWeatherCondition('Poor');
        } else if (visibility > 0.5 && visibility < 1.6) {
            setWeatherCondition('Very Poor');
        } else if (visibility < 0.5) {
            setWeatherCondition('Near Zero');
        }
    }, [visibility, setWeatherCondition]);

    return (
        <div className='weather-line'>
            <div className='flex'>
                <div>
                    <img src={visibilityIcon} alt='visibilityIcon' className='icons' />
                </div>
                <p>
                    Visibility
                </p>
            </div>
            <div className='flex gap-2'>
                <TypingAnimation />
            </div>
        </div>
    )
}
