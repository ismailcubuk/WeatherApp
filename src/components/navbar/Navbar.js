import Degree from './Degree'
import Search from './Search'
import Time from '../../services/Utils/dateFormat/Time';
import { useContext } from 'react';
import FetchApiContext from '../../middleware/FetchApi';
import pin from '../../assets/icons/pin/pin.svg'

function Navbar() {
    const {deleteCityPinned,pinnedCity} = useContext(FetchApiContext)
    return (
        <div>
            <div className='border-b-4 bg-stone-300 flex justify-between border-stone-300 h-20 w-full' >
                <div className='flex items-center justify-between font-bold text-xl w-4/12 min-w-[550px]'>
                    <div className='flex '>
                        {pinnedCity.map((city) => (
                            <button className='flex items-center mr-3' key={city.id} name={city.name} onClick={() => deleteCityPinned(city.id)}>
                                <img src={pin} alt='pin' className='icons' />
                                {city.name}
                            </button>
                        ))}
                    </div>
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