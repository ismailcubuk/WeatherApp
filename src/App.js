import Icons from "./assets/Icons";
import Navbar from "./components/navbar/Navbar";
import Location from "./middleware/Location";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";
import Images from "./pages/main/RightSide/Images";

function App() {
  return (
    <div className="h-screen ">

      <div className="h-full">
        <div className="h-1/6">
          <Navbar />
        </div>
        <div className=" flex gap-4 h-3/6">
          <CurrentWeather />
          <Location/>
          <Icons />
        </div>
        <div className=" flex gap-4 h-2/6">
          <WeatherDetail />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
