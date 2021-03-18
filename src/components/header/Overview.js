import React, { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const Overview = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState(state.weather.location.name);
  const input = useRef();
  const day = state.weather.forecast.forecastday[0].day;

  useEffect(() => {
    setLocation(state.weather.location.name);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location !== "") {
      localStorage.setItem("lsLocation", JSON.stringify(location));
      dispatch({ type: "LOADING", payload: true });
      dispatch({ type: "LOCATION", payload: location });
      input.current.blur();
    }
  };

  const temp =
    state.settings.temp === "celsius"
      ? `${state.weather.current.temp_c}°c`
      : `${state.weather.current.temp_f}°f`;

  const minTemp =
    state.settings.temp === "celsius"
      ? `${day.mintemp_c}°c`
      : `${day.mintemp_f}°f`;

  const maxTemp =
    state.settings.temp === "celsius"
      ? `${day.maxtemp_c}°c`
      : `${day.maxtemp_f}°f`;

  return (
    <div className="overview">
      <form onSubmit={handleSubmit}>
        <input
          className="overview-location"
          ref={input}
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          placeholder="New Location?"
        />
      </form>
      <div className="overview-region">
        {`${state.weather.location.region}, ${state.weather.location.country}`}
      </div>
      {/* <DateAndTime /> */}
      <div className="overview-temp">{temp}</div>
      <div className="overview-condition">
        {state.weather.current.condition.text}
      </div>
      <div className="overview-min-max-temp">{`${minTemp} / ${maxTemp}`}</div>
    </div>
  );
};

export default Overview;
