import React, { useEffect, useState } from "react";
import WeatherCard from "./weatherCards";
const Fetch = () => {
  const [longtitude, setLongtitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLongtitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });

      if (latitude !== 0 && longtitude !== 0) {
        await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,daily,minutely&appid=4d20d8eee158a891dbf179a0c800b680
      `
        )
          .then((data) => data.json())
          .then((data) => {
            setWeatherData(data);
            //console.log(data);
          });
      }
    };
    dataFetch();
    //console.log(latitude + longtitude);
  }, [longtitude, latitude]);

  return (
    <div>
      Longtitude = {longtitude} <br />
      Latitude = {latitude}
      <br />
      Weather data = {JSON.stringify(weatherData)}
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default Fetch;
