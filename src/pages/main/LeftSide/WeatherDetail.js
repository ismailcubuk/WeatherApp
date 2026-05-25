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
    <div className="glassmorphism surface-ring flex flex-col p-3 font-semibold md:min-h-[260px]">
      <LocationInfo />
      <div className="flex items-start justify-between gap-4 px-2 py-3">
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
