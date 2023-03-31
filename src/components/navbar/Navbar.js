import Degree from './Degree'
import Search from './Search'
import Time from '../../services/Utils/dateFormat/Time';
import Pinned from './Pinned';
import Location from './Location';

function Navbar() {

    return (
        <div>
            <div className='border-b-4 flex pl-4 pr-4 justify-between border-stone-300 h-20 w-full' >
                <div className='font-bold text-xl flex items-center '>
                    <Pinned />
                </div>
                <div className='border-2 flex items-center justify-around' >
                    <Location/>
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