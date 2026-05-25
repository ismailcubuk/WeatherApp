import Time from "../../../components/CurrentWeather/Time.js";
import LocationButton from "../../../components/CurrentWeather/LocationButton";
import Temp from "../../../components/CurrentWeather/Temp";
import WeatherDescription from "../../../components/CurrentWeather/WeatherDescription";
function CurrentWeather() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="glassmorphism surface-ring relative flex min-h-[360px] w-full flex-col items-center justify-center px-5 py-8 text-center md:min-h-[430px] md:px-8">
        <LocationButton />
        <Time />
        <Temp />
        <WeatherDescription />
      </div>
    </div>
  );
}

export default CurrentWeather;
