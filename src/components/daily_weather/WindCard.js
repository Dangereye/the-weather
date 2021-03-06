import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import TimeComponent from "../shared/TimeComponent";
import WindIcon from "../../icons/WindIcon";

const WindCard = ({ item }) => {
  const { state } = useContext(WeatherContext);
  return (
    <div key={item.time} className="item-card">
      <div className="temp">
        {state.settings.temp === "celsius"
          ? `${item.feelslike_c}°c`
          : `${item.feelslike_f}°f`}
      </div>
      <div className="icon wind">
        <WindIcon angle={item.wind_degree} />
      </div>

      <div className="speed">
        {state.settings.speed === "mph"
          ? `${item.wind_mph}`
          : `${item.wind_kph}`}
      </div>
      <div className="time">
        <TimeComponent data={item.time} />
      </div>
    </div>
  );
};

export default WindCard;
