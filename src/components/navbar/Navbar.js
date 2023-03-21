import React, { useState, useEffect } from 'react'
import Degree from './Degree'
import Search from './Search'

function Navbar() {
    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            };
            const localTime = date.toLocaleTimeString([], options);
            setLocalTime(localTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='items-center flex flex-col pl-20 pr-20'>
            <div className='border-b-4 flex justify-between border-stone-300 h-20 w-full' >
                <div className='flex items-center justify-between font-bold text-xl w-4/12 min-w-[550px]'>
                    <button className='h-3/6 px-3' >Today</button>
                    <button className='h-3/6 px-3'>Hourly</button>
                    <button className='h-3/6 px-3'>10-Day</button>
                    <button className='h-3/6 px-3'>Weekend</button>
                    <button className='h-3/6 px-3'>Monthly</button>
                </div>
                <div className='w-2/12 min-w-[300px] flex justify-around items-center ' >
                    <Search />
                    <Degree />
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <div className='text-l w-4/12 border-2 gap-14 grid grid-cols-5 min-w-[550px]'>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                </div>
                <div className='text-l'>
                    {localTime}
                </div>
            </div>

        </div>
    )
}

export default Navbar