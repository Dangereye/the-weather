import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyConditions = () => {
  const { state } = useContext(WeatherContext);
  const day = state.weather.forecast.forecastday[state.day].day;
  return (
    <section className="hourly-conditions">
      <div className="container">
        <h4>Conditions</h4>
        <p>
          {`${day.condition.text}. Average temperatures of around
          ${
            state.settings.temp === "celsius"
              ? `${day.avgtemp_c}°c`
              : `${day.avgtemp_f}°f`
          }
          with highs of 
          ${
            state.settings.temp === "celsius"
              ? `${day.maxtemp_c}°c`
              : `${day.maxtemp_f}°f`
          }
          and lows of 
          ${
            state.settings.temp === "celsius"
              ? `${day.mintemp_c}°c`
              : `${day.mintemp_f}°f`
          }`}
        </p>
        <HourlyWeatherSlider type="conditions" />
      </div>
    </section>
  );
};

export default HourlyConditions;
