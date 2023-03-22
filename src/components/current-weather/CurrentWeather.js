import React from 'react'

function CurrentWeather() {
    return (
        <div className='border-green-700 border-4 p-10 '>
                <p className='text-lg font-semibold'>Amsterdam, Netherlands</p>
                <p className='text-sm text-gray-500'>as of 8:49 am cest</p>
                <p className='text-6xl mb-5'>7</p>
                <p className='text-3xl font-semibold'>Partly Cloud</p>
                <p className='text-sm text-gray-500'>1% change of rain though 9 am</p>
        </div>
    )
}

export default CurrentWeather