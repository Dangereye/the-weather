import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import DateAndTime from "../shared/DateAndTime";
import ConditionGroup from "./ConditionGroup";

const CurrentConditions = () => {
  const { state } = useContext(WeatherContext);
  const current = {
    conditions: {
      title: "Conditions",
      list: [
        { cloud_cover: `${state.weather.current.cloud}%` },
        { condition: state.weather.current.condition.text },
        {
          precipitation:
            state.settings.precipitation === "mm"
              ? `${state.weather.current.precip_mm}mm`
              : `${state.weather.current.precip_in}in`,
        },

        {
          visibility:
            state.settings.distance === "miles"
              ? `${state.weather.current.vis_miles} miles`
              : `${state.weather.current.vis_km}km`,
        },
      ],
    },

    temperature: {
      title: "Temperature",
      list: [
        {
          temp:
            state.settings.temp === "celsius"
              ? `${state.weather.current.temp_c}°c`
              : `${state.weather.current.temp_f}°f`,
        },
        {
          feels_like:
            state.settings.temp === "celsius"
              ? `${state.weather.current.feelslike_c}°c`
              : `${state.weather.current.feelslike_f}°f`,
        },
        {
          humidity: state.weather.current.humidity,
        },
        {
          pressure:
            state.settings.pressure === "mb"
              ? `${state.weather.current.pressure_mb}mb`
              : `${state.weather.current.pressure_in}in`,
        },
        {
          UV: state.weather.current.uv,
        },
      ],
    },
    wind: {
      title: "Wind",
      list: [
        {
          direction: state.weather.current.wind_dir,
        },
        {
          degree: `${state.weather.current.wind_degree}°`,
        },
        {
          speed:
            state.settings.speed === "mph"
              ? `${state.weather.current.wind_mph}mph`
              : `${state.weather.current.wind_kph}kph`,
        },
        {
          gusts:
            state.settings.speed === "mph"
              ? `${state.weather.current.gust_mph}mph`
              : `${state.weather.current.gust_kph}kph`,
        },
      ],
    },
  };
  return (
    <section className="current-conditions">
      <div className="container">
        <h3>Current Weather</h3>
        <DateAndTime data={state.weather.current.last_updated} />
        <div className="groups">
          <ConditionGroup data={current.conditions} />
          <ConditionGroup data={current.temperature} />
          <ConditionGroup data={current.wind} />
        </div>
      </div>
    </section>
  );
};

export default CurrentConditions;
