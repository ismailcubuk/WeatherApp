import { useContext } from "react";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import Navbar from "./pages/main/Navbar/Navbar";
import Images from "./pages/main/RightSide/Images";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";
import FetchApiContext from "./middleware/FetchApi";

function App() {
  const { error, isLoading, weatherMain } = useContext(FetchApiContext);

  return (
    <div
      className={`weather-shell weather-${weatherMain} min-h-screen bg-bg-image bg-cover bg-center text-gray-950 md:h-screen md:overflow-hidden`}
    >
      <div className="weather-overlay min-h-screen backdrop-blur-[3px] md:h-screen md:overflow-hidden">
        <Navbar />
        {error && !isLoading && (
          <div className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl glassmorphism p-3 text-center font-semibold text-red-950">
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
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-5 pt-5 md:grid md:h-[calc(100vh-5rem)] md:grid-rows-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-4 md:px-6 md:py-4 xl:px-8">
          <section className="grid min-h-0 items-stretch gap-5 md:grid-cols-2 md:gap-4">
            <CurrentWeather />
            <Images />
          </section>
          <section className="grid min-h-0 items-stretch gap-5 md:grid-cols-2 md:gap-4">
            <WeatherDetail />
            <Forecast />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
