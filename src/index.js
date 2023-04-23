import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { FetchApiContextprovider } from "./middleware/FetchApi";
import { SearchContextprovider } from "./contexts/SearchContext";
import { PinCityContextprovider } from "./contexts/PinCityContext";
import { FetchLocationprovider } from "./middleware/FetchLocation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextprovider>
    <PinCityContextprovider>
      <FetchLocationprovider>
        <FetchApiContextprovider>
            <App />
        </FetchApiContextprovider>
      </FetchLocationprovider>
    </PinCityContextprovider>
  </SearchContextprovider>
);
