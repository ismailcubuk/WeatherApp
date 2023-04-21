import Visibility from "../../../components/WeatherDetail/Visibility";
import DayTimer from "../../../components/WeatherDetail/DayTimer";
import WindSpeed from "../../../components/WeatherDetail/WindSpeed";
import DewPoint from "../../../components/WeatherDetail/DewPoint";
import Pressure from "../../../components/WeatherDetail/Pressure";
import Humidity from "../../../components/WeatherDetail/Humidity";
import HighLow from "../../../components/WeatherDetail/HighLow";
import FeelsLike from "../../../components/WeatherDetail/FeelsLike";
import LocationInfo from "../../../components/WeatherDetail/LocationInfo";

function WeatherDetail() {
  return (
    <div className="glassmorphism font-semibold shadow-2xl flex flex-col mb-5 md:mb-0 md:w-1/2 md:justify-around md:h-auto xl:w-5/12 ">
      <LocationInfo />
      <div className="flex justify-between ml-2 pl-2 mr-2 pr-2">
        <FeelsLike />
        <DayTimer />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <HighLow />
        <Humidity />
        <Pressure />
        <Visibility />
        <WindSpeed />
        <DewPoint />
      </div>
    </div>
  );
}

export default WeatherDetail;
