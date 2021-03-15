import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const DayComponent = ({ data }) => {
  const { state, dispatch } = useContext(WeatherContext);
  const dateOptions = {
    weekday: "long",
  };
  const dayString = new Date(data).toLocaleDateString("en-GB", dateOptions);
  return (
    <span
      className={state.day === 2 ? "day active" : "day"}
      onClick={() => dispatch({ type: "DAY", payload: 2 })}
    >
      {dayString}
    </span>
  );
};

export default DayComponent;
