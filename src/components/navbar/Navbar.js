import React from 'react'
import Degree from './Degree'
import Search from './Search'

function Navbar() {
    return (
        <div className='border-b-4 flex justify-between border-stone-300 h-20 w-11/12' >
            <div className='flex items-center justify-between text-black font-bold text-xl w-4/12 min-w-[550px]'>
                <button className='h-3/6 px-3' >Today</button>
                <button className='h-3/6 px-3'>Hourly</button>
                <button className='h-3/6 px-3'>10-Day</button>
                <button className='h-3/6 px-3'>Weekend</button>
                <button className='h-3/6 px-3'>Monthly</button>
            </div>
            <div className='w-2/12 min-w-[300px] flex justify-around items-center ' >
                <Search/>
                <Degree/>
            </div>
        </div>
    )
}

export default Navbar