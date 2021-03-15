import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import DateComponent from "./shared/DateComponent";
import DayComponent from "./daily_weather/DayComponent";

const Days = () => {
  const { state, dispatch } = useContext(WeatherContext);
  return (
    <section className="days">
      <div className="container">
        <div className="links">
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
      </div>
    </section>
  );
};

export default Days;
