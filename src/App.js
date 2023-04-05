import Icons from "./assets/Icons";
import Navbar from "./components/navbar/Navbar";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";

function App() {
  return (
    <div className="sm:h-screen bg-bg-image bg-cover bg-no-repeat">

      <div className="sm:h-full ">
        <div className=" ">
          {/* <Navbar /> */}
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:h-3/6 ">
          <CurrentWeather />
          <Icons />
        </div>
        <div className=" flex flex-col sm:flex-row sm:h-3/6 border-2 border-red-700">
          <WeatherDetail />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
