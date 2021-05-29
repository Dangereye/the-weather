import React, { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Loader from "../layout/Loader";
import { CgPushDown, CgPushUp } from "react-icons/cg";

const Overview = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const input = useRef();

  useEffect(() => {
    if (state.weather) {
      setLocation(state.weather.location.name);
      setDay(state.weather.forecast.forecastday[0].day);
      setTemp(
        state.settings.temp === "celsius"
          ? `${state.weather.current.temp_c}°c`
          : `${state.weather.current.temp_f}°f`
      );
      setMinTemp(
        state.settings.temp === "celsius"
          ? `${day.mintemp_c}°c`
          : `${day.mintemp_f}°f`
      );
      setMaxTemp(
        state.settings.temp === "celsius"
          ? `${day.maxtemp_c}°c`
          : `${day.maxtemp_f}°f`
      );
    }
  }, [state.weather, state.settings, temp, minTemp, maxTemp, day]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location !== "") {
      dispatch({ type: "LOADING", payload: true });
      dispatch({
        type: "SETTINGS",
        payload: { ...state.settings, geoLocation: "off" },
      });
      dispatch({ type: "LOCATION", payload: location });
      input.current.blur();
    }
  };

  return (
    <div className="overview">
      {state.isLoading ? (
        <Loader />
      ) : state.error ? null : (
        <>
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
          <div className="overview-temp">{temp}</div>
          <div className="overview-condition">
            {state.weather.current.condition.text}
          </div>
          <div className="overview-min-max-temp">
            <div>
              <CgPushDown />
              <span>{minTemp}</span>
            </div>
            <div>
              <CgPushUp />
              <span>{maxTemp}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
