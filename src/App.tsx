import React, { useEffect, useState } from "react";
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

// ask how to in fetchWeatherData put useState to non 0, so that
// i dont have to use the IF statement
export default App;
