import React, { useContext, useEffect, useState } from 'react'
import FetchApiContext from '../../middleware/FetchApi';

export default function Toast() {
    const { pinnedCity, city, shows } = useContext(FetchApiContext);
    const [progress, setProgress] = useState();
    const [showToast, setShowToast] = useState(false);


    useEffect(() => {
        if (pinnedCity && pinnedCity.length > 0 && shows) {
            setShowToast(true);
            setProgress(2000)
            const timeout = setTimeout(() => setShowToast(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [pinnedCity, shows]);



    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevProgress => prevProgress - 100);

            if (progress <= 0) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [pinnedCity, progress]);

    return (
        <div className={`glassmorphism w-40 h-15 flex flex-col justify-center items-center absolute bottom-5 right-5 ${showToast ? 'block' : 'hidden'}`}>
            <div className='text-center font-bold'> {city} Pinned</div>
            <div className="relative h-1 w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: `${progress / 20}%`, transition: 'width 0.1s linear' }}></div>
            </div>
        </div>
    )
}
