import Degree from './Degree'
import Search from './Search'
import Time from '../../services/Utils/dateFormat/Time';

function Navbar() {
    return (
        <div>
            <div className='border-b-4 flex justify-between border-stone-300 h-20 w-full' >
                <div className='flex items-center justify-between font-bold text-xl w-4/12 min-w-[550px]'>
                </div>
                <div className='w-2/12 min-w-[300px] flex justify-around items-center ' >
                    <Search />
                    <Degree />

                </div>
            </div>
            <div className='w-full flex justify-end'>
                <Time />
            </div>
        </div>
    )
}

export default Navbar