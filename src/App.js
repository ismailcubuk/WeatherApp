import { useContext } from "react";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import Navbar from "./pages/main/Navbar/Navbar";
import Images from "./pages/main/RightSide/Images";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";
import FetchApiContext from "./middleware/FetchApi";

function App() {
  const { error, isLoading } = useContext(FetchApiContext);

  return (
    <div className="bg-bg-image bg-cover text-black flex flex-col justify-between min-h-screen" >
      <div className="backdrop-blur-[5px] bg-gray-900/20 flex flex-col justify-between min-h-screen ">
        <Navbar />
        {error && !isLoading && (
          <div className="mx-4 mt-4 glassmorphism p-3 text-center font-semibold">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm">
            <div className="glassmorphism flex items-center gap-3 px-6 py-4 font-semibold shadow-2xl">
              <span className="h-6 w-6 animate-spin rounded-full border-4 border-gray-700/30 border-t-gray-900" />
              <span>Loading weather data...</span>
            </div>
          </div>
        )}
        <div className="flex flex-col-reverse items-center relative md:flex-row xl:justify-around h-full">
          <CurrentWeather />
          <Images />
        </div>
        <div className="md:flex md:gap-1 xl:justify-around">
          <WeatherDetail />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
