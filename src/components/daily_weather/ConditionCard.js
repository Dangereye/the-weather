import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import TimeComponent from "../shared/TimeComponent";

const ConditionCard = ({ item }) => {
  const { state } = useContext(WeatherContext);
  return (
    <div key={item.time} className="item-card">
      <div className="temp">
        {state.settings.temp === "celsius"
          ? `${item.temp_c}°c`
          : `${item.temp_f}°f`}
      </div>
      <img
        src={item.condition.icon}
        alt={item.condition.text}
        draggable={false}
      />
      <div className="time">
        <TimeComponent data={item.time} />
      </div>
    </div>
  );
};

export default ConditionCard;
