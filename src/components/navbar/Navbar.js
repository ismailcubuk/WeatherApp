import Degree from './Degree'
import Search from './Search'
import Time from '../../services/Utils/dateFormat/Time';

function Navbar() {

    return (
        <div>
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
                <div className='w-4/12 border-2 gap-14 grid grid-cols-5 min-w-[550px]'>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                    <button>Ankara</button>
                </div>
                <div>
                    <Time/>
                    {/* {localTime} */}
                </div>
            </div>
        </div>
    )
}

export default Navbar