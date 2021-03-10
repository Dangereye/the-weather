import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import DateComponent from "../shared/DateComponent";
import DayComponent from "./DayComponent";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyWeather = () => {
  const { state, dispatch } = useContext(WeatherContext);
  return (
    <section className="hourly-weather">
      <div className="container">
        <h3>Hourly Forecast</h3>
        <DateComponent
          data={state.weather.forecast.forecastday[state.day].date}
        />
        <HourlyWeatherSlider />
      </div>
    </section>
  );
};

export default HourlyWeather;
