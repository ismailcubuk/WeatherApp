import Time from "../../../components/CurrentWeather/Time.js";
import LocationButton from "../../../components/CurrentWeather/LocationButton";
import Temp from "../../../components/CurrentWeather/Temp";
import WeatherDescription from "../../../components/CurrentWeather/WeatherDescription";
function CurrentWeather() {
  return (
    <div className="flex relative w-full flex-col items-center mb-5 md:mb-0 md:w-1/2 md:justify-around h-full xl:w-5/12">
      <div className="w-full mbl:w-3/6 h-full md:w-3/5 flex flex-col justify-center items-center relative mt-5 ">
        <LocationButton />
        <Time />
        <Temp />
        <WeatherDescription />
      </div>
    </div>
  );
}

export default CurrentWeather;
