import Icons from "./assets/Icons";
import Navbar from "./components/navbar/Navbar";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";
import Images from "./pages/main/RightSide/Images";

function App() {
  return (
    <div className="h-screen border-2 border-green-700">
      <Navbar />
      <div className="flex border-black border-2 ">
        <div className=" border-red-600 border-2 w-7/12">
          <CurrentWeather />
          <WeatherDetail />
        </div>
        <div className="w-5/12 border-2 h-full border-red-500">
          <Icons/>
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
