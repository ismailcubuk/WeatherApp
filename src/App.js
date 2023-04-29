import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import Navbar from "./pages/main/Navbar/Navbar";
import Images from "./pages/main/RightSide/Images";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";

function App() {
  return (
    <div className=" bg-bg-image bg-cover text-black flex flex-col justify-between md:h-full">
      <div className="backdrop-blur-[5px] bg-gray-900/20 flex flex-col justify-around ">
        <Navbar />
        <div className="flex flex-col-reverse items-center mt-20 relative md:flex-row xl:justify-around">
          <CurrentWeather />
          <Images />
        </div>
        <div className="md:flex md:gap-1 xl:justify-around mb-1.5">
          <WeatherDetail />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
