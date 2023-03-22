import React from 'react'

function WeatherDetail() {
    return (
        <div className='pl-10 pr-10'>
            <p className='text-sm font-semibold'>Weather today in Amsterdam,Netherlands</p>

            <div className='flex justify-between'>
                <div>
                    <p className='text-4xl'>3</p>
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
                            --/
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
                            81%
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
                            81%
                        </p>
                    </div>
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
                            81%
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
                                Wind
                            </p>
                        </div>
                        <p>
                            81%
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                drw poine
                            </p>
                        </div>
                        <p>
                            81%
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                UV index
                            </p>
                        </div>
                        <p>
                            81%
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                img
                            </div>
                            <p>
                                Moon Phasis
                            </p>
                        </div>
                        <p>
                            81%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail