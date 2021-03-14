import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyWind = () => {
  const { state } = useContext(WeatherContext);
  return (
    <section>
      <div className="container">
        <h4>Wind</h4>
        <p>Unit: {state.settings.speed}</p>
        <HourlyWeatherSlider type="wind" />
      </div>
    </section>
  );
};

export default HourlyWind;
