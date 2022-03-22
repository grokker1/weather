import React from "react";
import "../App.css";

const WeatherCard = (props: any) => {
  const { weatherData } = props;
  if (!weatherData) {
    return null;
  }
  console.log(weatherData);
  console.log();

  return (
    <div>
      <br /> {/*delete late*/}
      <ul>
        <h3>
          <li>{weatherData.timezone}</li>
        </h3>
        <li>Weather: {weatherData.current.weather[0].main}</li>
        <li>Temperature: {(weatherData.current.temp - 273, 15)} °C</li>
        <li>Feels like: {(weatherData.current.feels_like - 273, 15)} °C</li>
        <li>Humidity: {weatherData.current.humidity} %</li>
        <li>Wind speed: {weatherData.current.wind_speed} m/s</li>
      </ul>
    </div>
  );
};
export default WeatherCard;
