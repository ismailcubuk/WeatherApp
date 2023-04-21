import Temperature from "../../../components/Forecast/Temperature";
import WeatherIcons from "../../../components/Forecast/WeatherIcons";
import Days from "../../../components/Forecast/Days";

export default function Forecast() {
  return (
    <div className="md:w-1/2 xl:w-5/12 glassmorphism p-5 flex flex-col justify-around shadow-2xl">
      <Days />
      <Temperature />
      <WeatherIcons />
    </div>
  );
}
