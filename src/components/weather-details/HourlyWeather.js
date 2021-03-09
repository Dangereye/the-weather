import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import DateComponent from "../DateComponent";
import DayComponent from "../DayComponent";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyWeather = () => {
  const { state, dispatch } = useContext(WeatherContext);
  return (
    <section className="hourly-weather">
      <div className="days">
        <span
          className={state.day === 0 ? "day active " : "day"}
          onClick={() => dispatch({ type: "DAY", payload: 0 })}
        >
          Today
        </span>
        <span
          className={state.day === 1 ? "day active" : "day"}
          onClick={() => dispatch({ type: "DAY", payload: 1 })}
        >
          Tomorrow
        </span>
        <DayComponent data={state.weather.forecast.forecastday[2].date} />
      </div>
      <DateComponent
        data={state.weather.forecast.forecastday[state.day].date}
      />
      <HourlyWeatherSlider />
    </section>
  );
};

export default HourlyWeather;
