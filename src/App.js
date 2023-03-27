import Icons from "./assets/Icons";
import Navbar from "./components/navbar/Navbar";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";

function App() {
  return (
    <div className="h-screen bg-bg-image bg-cover bg-no-repeat">

      <div className="h-full backdrop-blur-md">
        <div className="h-1/6">
          <Navbar />
        </div>
        <div className=" flex gap-4 h-3/6">
          <CurrentWeather />
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
