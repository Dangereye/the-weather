import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import DateAndTime from "./DateAndTime";

const Overview = () => {
  const { state } = useContext(WeatherContext);

  const temp =
    state.settings.temp === "celsius"
      ? `${state.weather.current.temp_c}°c`
      : `${state.weather.current.temp_f}°f`;

  const minTemp =
    state.settings.temp === "celsius"
      ? `${state.weather.forecast.forecastday[0].day.mintemp_c}°c`
      : `${state.weather.forecast.forecastday[0].day.mintemp_f}°f`;

  const maxTemp =
    state.settings.temp === "celsius"
      ? `${state.weather.forecast.forecastday[0].day.maxtemp_c}°c`
      : `${state.weather.forecast.forecastday[0].day.maxtemp_f}°f`;

  return (
    <div className="overview">
      <h2 className="location">{state.weather.location.name} </h2>
      <DateAndTime />
      <h1 className="temperature">{temp}</h1>
      <h3>{state.weather.current.condition.text}</h3>
      <div className="min-max-temp">{`${minTemp} / ${maxTemp}`}</div>
    </div>
  );
};

export default Overview;
