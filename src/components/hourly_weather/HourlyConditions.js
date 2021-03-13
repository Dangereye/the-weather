import React, { useContext } from "react";
import HourlyWeatherSlider from "./HourlyWeatherSlider";

const HourlyConditions = () => {
  return (
    <section className="hourly-conditions">
      <div className="container">
        <h4>Conditions</h4>
        <HourlyWeatherSlider type="conditions" />
      </div>
    </section>
  );
};

export default HourlyConditions;
