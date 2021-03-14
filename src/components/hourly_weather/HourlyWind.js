import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyWind = () => {
  const { state } = useContext(WeatherContext);
  const [des, setDes] = useState("");
  const day = state.weather.forecast.forecastday[state.day].day;
  const windSpeed =
    state.settings.speed === "mph"
      ? `${day.maxwind_mph}mph`
      : `${day.maxwind_kph}kph`;

  const string = `with speeds up to ${windSpeed}.`;
  const x = Math.round(day.maxwind_mph);

  useEffect(() => {
    // Beaufort scale
    if (x < 1) {
      setDes(`Calm.`);
    } else if (x > 0 && x < 4) {
      setDes(`Light air, ${string}`);
    } else if (x > 3 && x < 8) {
      setDes(`A light breeze, ${string}`);
    } else if (x > 7 && x < 13) {
      setDes(`A gentle breeze, ${string}`);
    } else if (x > 12 && x < 18) {
      setDes(`A moderate breeze, ${string}`);
    } else if (x > 17 && x < 25) {
      setDes(`A fresh breeze, ${string}`);
    } else if (x > 24 && x < 31) {
      setDes(`A strong breeze, ${string}`);
    } else if (x > 30 && x < 39) {
      setDes(`High winds, ${string}`);
    } else if (x > 38 && x < 47) {
      setDes(`Gales, ${string}`);
    } else if (x > 46 && x < 55) {
      setDes(`Strong gales, ${string}`);
    } else if (x > 54 && x < 64) {
      setDes(`Storm conditions, ${string}`);
    } else if (x > 63 && x < 74) {
      setDes(`Violent storm conditions, ${string}`);
    } else if (x > 74) {
      setDes(`Hurricane conditions, ${string}`);
    } else {
      setDes("");
    }
  }, [x, windSpeed, string]);

  return (
    <section>
      <div className="container">
        <h4>Wind</h4>
        <p>{des}</p>
        <HourlyWeatherSlider type="wind" />
      </div>
    </section>
  );
};

export default HourlyWind;
