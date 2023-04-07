import Search from './Search'
import Time from '../../services/Utils/dateFormat/Time';
import Pinned from './Pinned';
import Location from './Location';
import DropDown from './DropDown';
import CountDown from './CountDown';

function Navbar() {

    return (
        <div className='glassmorphism'>
            <div className='flex pl-4 pr-4 justify-between items-center h-20 w-full' >
                <div className='hidden md:flex font-bold text-xl items-center'>
                    <Pinned />
                </div>
                <div className='flex h-full md:hidden font-bold text-xl items-center '>
                    <DropDown />
                </div>
                <div className='h-full flex items-center justify-around ' >
                    <Search />
                    <Location />
                </div>
            </div>
        </div>
    )
}

export default Navbar