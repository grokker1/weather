import React, { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Components/fetch";

function App() {
  return (
    <div className="App">
      <p className="text-color-test">Text test</p>
      <Fetch />
    </div>
  );
}

export default App;
