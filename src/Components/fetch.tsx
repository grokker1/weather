import React, { useEffect, useState } from "react";
const Fetch = () => {
  const [longtitude, setLongtitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongtitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,daily&appid=4d20d8eee158a891dbf179a0c800b680
      `
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
    console.log(latitude + longtitude);
  }, [longtitude, latitude]);

  return (
    <div>
      Longtitude = {longtitude} <br />
      Latitude = {latitude}
      <br />
      Weather data = {JSON.stringify(weatherData)}
    </div>
  );
};

export default Fetch;
