import Temperature from "../../../components/Forecast/Temperature";
import WeatherIcons from "../../../components/Forecast/WeatherIcons";
import Days from "../../../components/Forecast/Days";

export default function Forecast() {
  return (
    <div className="glassmorphism surface-ring flex min-h-[260px] flex-col justify-around p-5">
      <Days />
      <Temperature />
      <WeatherIcons />
    </div>
  );
}
