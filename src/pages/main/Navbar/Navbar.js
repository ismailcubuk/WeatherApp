import Search from '../../../components/navbar/Search'
import Pinned from '../../../components/navbar/Pinned';
import Location from '../../../components/navbar/Location';
import DropDown from '../../../components/navbar/DropDown';
import Toast from '../../Toast/Toast';

function Navbar() {

    return (
        <div className='glassmorphism-nav absolute w-full top-0'>
            <div className='flex pl-4 pr-4 justify-between items-center h-20 w-full' >
                <div className='hidden md:flex font-bold text-xl items-center'>
                    <Pinned />
                </div>
                <div className=' h-full md:hidden font-bold text-xl items-center flex '>
                    <DropDown />
                </div>
                <div className='h-full flex items-center justify-around ' >
                    <Search />
                    <Location />
                </div>
            </div>
            <Toast/>
        </div>
    )
}

export default Navbar