import Icons from "./assets/Icons";
import Navbar from "./components/navbar/Navbar";
import Toast from "./components/navbar/Toast";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";

function App() {
  return (
    <div className=" bg-bg-image flex flex-col justify-between md:h-screen">
      <div >
        <Navbar />
      </div>
      <div className=" bg-bg-image flex flex-col justify-around md:h-screen">
        <div className="flex flex-col-reverse items-center // md:flex-row xl:justify-around">
          <CurrentWeather />
          <Icons />
        </div>
        <div className="md:flex md:gap-1 xl:justify-around">
          <WeatherDetail />
          <Forecast />
        </div>
      <Toast/>
      </div>
    </div>
  );
}

export default App;
