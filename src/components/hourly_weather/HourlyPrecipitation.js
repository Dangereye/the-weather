import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyPrecipitation = () => {
  const { state } = useContext(WeatherContext);
  return (
    <section>
      <div className="container">
        <h4>Precipitation</h4>
        <p>Volume: {state.settings.precipitation}</p>
        <HourlyWeatherSlider type="precipitation" />
      </div>
    </section>
  );
};

export default HourlyPrecipitation;
