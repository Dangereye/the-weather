import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import ConditionGroup from "../current_conditions/ConditionGroup";

const DailyAstronomy = () => {
  const { state } = useContext(WeatherContext);
  const astro = state.weather.forecast.forecastday[state.day].astro;
  const astronomy = {
    sun: {
      title: "Sun",
      list: [{ sunrise: astro.sunrise }, { sunset: astro.sunset }],
    },
    moon: {
      title: "Moon",
      list: [
        { moonrise: astro.moonrise },
        { moonset: astro.moonset },
        { moon_phase: astro.moon_phase },
        { illumination: `${astro.moon_illumination}%` },
      ],
    },
  };
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2>Astronomy</h2>
        <div className="groups">
          <ConditionGroup data={astronomy.sun} />
          <ConditionGroup data={astronomy.moon} />
        </div>
      </div>
    </section>
  );
};

export default DailyAstronomy;
