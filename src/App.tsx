import React from "react";
import "./App.css";
import Fetch from "./Components/fetchWeatherData";

function App() {
  return (
    <div className="App">
      <p className="text-color-test">Text test</p>
      <Fetch />
    </div>
  );
}

//Prague
//https://api.openweathermap.org/data/2.5/onecall?lat=49.779572&lon=18.1269703&exclude=hourly,daily,minutely&appid=4d20d8eee158a891dbf179a0c800b680
export default App;
