import React, { useContext } from 'react'
import FetchApiContext from '../../middleware/FetchApi';

export default function FeelsLike() {
    const { feelsLike } = useContext(FetchApiContext);
    return (
        <div>
            <div className='text-4xl font-semibold'> {feelsLike}&deg; </div>
            <p className='text-sm text-gray-500'>feels like</p>
        </div>
    )
}
