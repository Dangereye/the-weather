import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const ToggleButton = () => {
  const { state, dispatch } = useContext(WeatherContext);
  return (
    <div
      className="details-button"
      onClick={() =>
        dispatch({ type: "TOGGLE_DETAILS", payload: !state.details })
      }
    >
      <div className="content">
        <i className="fas fa-chevron-left"></i>
      </div>
    </div>
  );
};

export default ToggleButton;
